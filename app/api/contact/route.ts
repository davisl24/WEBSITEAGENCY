import { NextResponse } from "next/server";
export const runtime = "nodejs";

type ContactFields = {name?:unknown;email?:unknown;business?:unknown;service?:unknown;message?:unknown;website?:unknown};
const clean=(v:unknown)=>typeof v==="string"?v.trim():"";

export async function POST(request:Request){
  let body:ContactFields;
  try{body=await request.json() as ContactFields;}catch{return NextResponse.json({error:"Nederīgi formas dati"},{status:400});}
  if(clean(body.website))return NextResponse.json({ok:true});
  const name=clean(body.name),email=clean(body.email),business=clean(body.business),service=clean(body.service),message=clean(body.message);
  if(name.length<2||name.length>120||!/^\S+@\S+\.\S+$/.test(email)||email.length>200||message.length<10||message.length>5000||business.length>180||service.length>120){
    return NextResponse.json({error:"Pārbaudi vārdu, e-pasta adresi un projekta aprakstu"},{status:400});
  }
  const token=process.env.RESEND_API_KEY;
  const to=process.env.CONTACT_EMAIL_TO;
  const from=process.env.RESEND_FROM_EMAIL;
  if(!token||!to||!from){
    return NextResponse.json({error:"Pieteikumu nosūtīšana vēl nav pieslēgta. Lūdzu, sazinies ar mums, izmantojot citu kanālu."},{status:503});
  }
  try{
    const result=await fetch("https://api.resend.com/emails",{
      method:"POST",
      headers:{"Authorization":`Bearer ${token}`,"Content-Type":"application/json"},
      body:JSON.stringify({
        from,to:[to],reply_to:email,subject:"Jauns Kestrel mājaslapas pieteikums",
        text:`Vārds: ${name}\nE-pasts: ${email}\nUzņēmums: ${business||"Nav norādīts"}\nPakalpojums: ${service||"Nav izvēlēts"}\n\nApraksts:\n${message}`
      }),
      cache:"no-store"
    });
    if(!result.ok)return NextResponse.json({error:"Neizdevās nosūtīt pieteikumu. Lūdzu, mēģini vēlreiz vēlāk."},{status:502});
    return NextResponse.json({ok:true});
  }catch{
    return NextResponse.json({error:"Savienojuma kļūda. Pieteikums netika nosūtīts."},{status:502});
  }
}
