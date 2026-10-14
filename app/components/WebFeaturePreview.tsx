"use client";

import {useEffect,useRef,useState} from "react";
import styles from "./WebFeaturePreview.module.css";

type Feature={title:string;detail:string};
export default function WebFeaturePreview({features}:{features:Feature[]}){
  const [active,setActive]=useState(0);
  const [automatic,setAutomatic]=useState(true);
  const [visible,setVisible]=useState(false);
  const root=useRef<HTMLDivElement>(null);

  useEffect(()=>{
    if(typeof IntersectionObserver==="undefined"){
      setVisible(true);
      return;
    }
    const observer=new IntersectionObserver(([entry])=>setVisible(entry.isIntersecting),{
      threshold:0.3
    });
    if(root.current)observer.observe(root.current);
    return ()=>observer.disconnect();
  },[]);

  useEffect(()=>{
    if(!automatic||!visible||features.length<2)return;
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    const interval=window.setInterval(()=>{
      setActive(current=>(current+1)%features.length);
    },3900);
    return ()=>window.clearInterval(interval);
  },[automatic,visible,features.length]);

  const selectFeature=(index:number)=>{
    setActive(index);
    setAutomatic(false);
  };
  const columns=[features.filter((_,i)=>i%2===0),features.filter((_,i)=>i%2===1)];
  const row=(item:Feature)=>{
    const index=features.indexOf(item);
    return <button type="button" key={item.title}
      className={styles.feature+" "+(index===active?styles.selected:"")}
      onClick={()=>selectFeature(index)} aria-pressed={index===active}>
      <span className={styles.featureDot} aria-hidden="true"/>
      <span><strong>{item.title}</strong><small>{item.detail}</small></span>
    </button>;
  };

  return <div ref={root} className={styles.layout}>
    <div className={styles.features}>{columns[0].map(row)}</div>
    <div className={styles.scene}>
      <div className={styles.screen} role="img" aria-label={"Mājaslapas piemērs: "+(features[active]?.title??"Satura struktūra")}>
        <div className={styles.top}>
          <strong>Jūsu uzņēmums</strong>
          <span className={active===0?styles.focus:undefined}>Pakalpojumi</span>
          <span>Par mums</span>
          <span className={active===4?styles.focus:undefined}>Kontakti</span>
        </div>
        <div className={styles.screenBody}>
          <div className={styles.copy}>
            <span className={styles.eyebrow}>Pakalpojums</span>
            <strong className={active===3?styles.focus:undefined}>Skaidrs piedāvājums klientam</strong>
            <p>Galvenais par pakalpojumu vienuviet un saprotamā secībā</p>
            <span className={styles.demoButton+" "+(active===4?styles.focus:"")}>Pieteikties</span>
          </div>
          <div className={styles.art+" "+(active===1?styles.focus:"")}/>
        </div>
        <div className={styles.cards}>
          <span>Pakalpojums A</span><span>Pakalpojums B</span><span>Pakalpojums C</span>
        </div>
      </div>
      <div className={styles.phone+" "+(active===2?styles.phoneFocus:"")} aria-hidden="true">
        <div className={styles.phoneTop}/>
        <strong>Jūsu uzņēmums</strong>
        <span className={styles.phoneArt}/>
        <b>Skaidrs piedāvājums</b><span className={styles.phoneLine}/>
        <span className={styles.phoneCta}>Pieteikties</span>
      </div>
      <div className={styles.sceneFooter}>
        <span className={styles.sceneCaption} aria-live={automatic?"off":"polite"}>
          {active===0?"Sadaļas un navigācija":
           active===1?"Pielāgots vizuālais izskats":
           active===2?"Mobilās versijas izkārtojums":
           active===3?"Virsrakstu struktūra":
           active===4?"Redzama pieteikšanās darbība":"Sagatavots publicēšanai"}
        </span>
        {automatic
          ? <span className={styles.demoStatus}><span className={styles.statusDot} aria-hidden="true"/>Piemērs mainās automātiski</span>
          : <button type="button" className={styles.restart} onClick={()=>setAutomatic(true)}>Atsākt demonstrāciju <span aria-hidden="true">↻</span></button>}
      </div>
    </div>
    <div className={styles.features}>{columns[1].map(row)}</div>
  </div>;
}
