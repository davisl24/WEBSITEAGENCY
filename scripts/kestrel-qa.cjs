const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: true });
  const failures = [];
  for (const route of ["/", "/pakalpojumi/web-izstrade"]) {
    for (const width of [360, 390, 768, 1024, 1440]) {
      for (const theme of ["light", "dark"]) {
        const context = await browser.newContext({
          viewport: { width, height: 900 },
          colorScheme: theme,
          reducedMotion: "reduce",
        });
        const page = await context.newPage();
        await page.goto("http://127.0.0.1:3000" + route, { waitUntil: "networkidle" });
        const result = await page.evaluate(() => {
          const vw = document.documentElement.clientWidth;
          const scroll = document.documentElement.scrollWidth;
          const offenders = [...document.querySelectorAll("body *")].map(el => {
            const rect = el.getBoundingClientRect();
            return {
              tag: el.tagName,
              className: typeof el.className === "string" ? el.className.slice(0, 90) : "",
              right: Math.round(rect.right),
              left: Math.round(rect.left),
              width: Math.round(rect.width),
            };
          }).filter(el => el.right > vw + 2 || el.left < -2)
            .sort((a,b)=>b.right-a.right).slice(0, 12);
          const h1 = document.querySelector("h1");
          const footer = document.querySelector(".site-footer .footer-wordmark");
          const navBrand = document.querySelector(".site-header .brand");
          return {
            viewport: vw, scrollWidth: scroll, offenders,
            h1: h1 ? { text:h1.textContent.trim(), font:getComputedStyle(h1).fontSize,
              color:getComputedStyle(h1).color } : null,
            footerFont:footer?getComputedStyle(footer).fontSize:null,
            logoColor:navBrand?getComputedStyle(navBrand).color:null,
            bookingButton:(()=>{
              const el=document.querySelector(".site-header .header-cta");
              if(!el)return null;
              const box=el.getBoundingClientRect();
              return {left:Math.round(box.left),right:Math.round(box.right),width:Math.round(box.width)};
            })(),
          };
        });
        const label = `${route} ${width} ${theme}`;
        console.log("PARITY_METRIC " + JSON.stringify({ label, ...result }));
        if (result.scrollWidth > width + 2) failures.push(`${label}: horizontal overflow ${result.scrollWidth}-${width}`);
        if (!result.h1) failures.push(`${label}: missing H1`);
        if (!result.bookingButton || result.bookingButton.width < 50 || result.bookingButton.right > width + 2 || result.bookingButton.left < -2)
          failures.push(`${label}: booking CTA clipped (${JSON.stringify(result.bookingButton)})`);
        await context.close();
      }
    }
  }
  await browser.close();
  if (failures.length) {
    console.error("DESIGN_QA_FAILURES:", failures.join("; "));
    process.exitCode = 1;
  } else {
    console.log("DESIGN_QA_PASS: both routes at 360/390/768/1024/1440 light/dark without horizontal overflow, clipped or hidden booking buttons");
  }
})().catch(error => { console.error(error); process.exitCode=1; });
