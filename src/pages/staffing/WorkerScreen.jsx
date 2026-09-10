import React from 'react';

export default function WorkerScreen(values) {
  const { d, dispatch, hasSaved, matchedJobs, myCreds, myPay, myShifts, savedJobs, workerName } = values;
  return <>
<div style={{"background": "#22262E", "padding": "34px 0"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "display": "flex", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<div>
<p style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "9px"}}>{"Worker dashboard"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "32px", "color": "#fff", "lineHeight": "1.1"}}>{"Welcome back, "}{workerName}</h1>
<p style={{"color": "rgba(255,255,255,0.65)", "fontSize": "14.5px", "marginTop": "8px"}}>{"Columbus branch · Skilled Trades · recruiter Deon Pratt"}</p>
</div>
<div style={{"display": "flex", "alignItems": "center", "gap": "10px", "background": "#EAF1ED", "padding": "11px 16px", "borderRadius": "100px"}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D6B57" strokeWidth="2.6"><path d="M20 6L9 17l-5-5"></path></svg>
<span style={{"fontSize": "13.5px", "fontWeight": "700", "color": "#3D6B57", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Cleared to work"}</span>
</div>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "28px 32px 8px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "14px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "8px"}}>{"Hours this week"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20", "fontVariantNumeric": "tabular-nums"}}>{"24.0"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"3 of 5 shifts worked"}</p>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#F6EFE7"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "8px"}}>{"Friday deposit"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20", "fontVariantNumeric": "tabular-nums"}}>{"$487.20"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Estimate · direct deposit"}</p>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "8px"}}>{"Assignment"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20", "lineHeight": "1.35"}}>{"Warehouse Associate"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Week 6 of 12 · temp-to-hire"}</p>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "8px"}}>{"Credentials"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#8C3A44", "lineHeight": "1.35"}}>{"1 action needed"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"OSHA-10 not started"}</p>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "20px 32px", "display": "flex", "gap": "24px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 440px", "minWidth": "300px", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<section>
<div style={{"position": "relative", "borderRadius": "18px", "overflow": "hidden", "aspectRatio": "21/7", "marginBottom": "24px", "background": "#EBE8E2"}}>
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80" alt="Warehouse floor at the assignment site" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "16px", "bottom": "14px", "fontSize": "12px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "backdropFilter": "blur(6px)", "padding": "6px 12px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Your site · Regional Distribution Center, Columbus OH"}</span>
</div>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "14px"}}>{"Your schedule"}</h2>
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
{(myShifts ?? []).map((sh, index44) => <React.Fragment key={index44}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "background": "#fff", "padding": "16px 18px", "display": "flex", "gap": "16px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"flex": "0 0 62px", "textAlign": "center", "background": "#F5F4F2", "borderRadius": "10px", "padding": "9px 6px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "color": "#5B6270", "letterSpacing": "0.06em"}}>{sh.day}</p>
<p style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#171A20", "marginTop": "2px"}}>{sh.date}</p>
</div>
<div style={{"flex": "1 1 200px", "minWidth": "180px"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{sh.role}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "marginTop": "2px"}}>{sh.site}{" · "}{sh.time}</p>
</div>
<span style={sh.pill}>{sh.status}</span>
{(sh.isOpen) ? <> 
<button className="site-hover-45" type="button" onClick={sh.claim} style={{"background": "#22262E", "color": "#fff", "padding": "9px 16px", "borderRadius": "8px", "fontSize": "13px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease"}}>{"Claim shift"}</button>
 </> : null}
</div>
</React.Fragment>)}
</div>
</section>
<section>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "6px"}}>{"Matched to you"}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "14px"}}>{"Openings your recruiter flagged based on your certifications and shift availability."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(250px,1fr))", "gap": "12px"}}>
{(matchedJobs ?? []).map((m, index46) => <React.Fragment key={index46}>
<button className="site-hover-47" type="button" onClick={m.open} style={{"textAlign": "left", "border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff", "transition": "border-color .18s ease,box-shadow .18s ease,transform .18s ease"}}>
<span style={m.pillStyle}>{m.vertical}</span>
<p style={{"fontSize": "15.5px", "fontWeight": "600", "color": "#171A20", "margin": "10px 0 3px"}}>{m.title}</p>
<p style={{"fontSize": "13px", "color": "#5D6472"}}>{m.location}{" · "}{m.shift}</p>
<p style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#22262E", "marginTop": "12px"}}>{m.pay}</p>
</button>
</React.Fragment>)}
</div>
</section>
<section>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "14px"}}>{"Pay history"}</h2>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "overflow": "hidden", "background": "#fff"}}>
{(myPay ?? []).map((p, index48) => <React.Fragment key={index48}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "16px", "padding": "15px 18px", "borderBottom": "1px solid #E5E2DC", "flexWrap": "wrap"}}>
<span style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20", "flex": "1 1 140px"}}>{p.week}</span>
<span style={{"fontSize": "13.5px", "color": "#5D6472"}}>{p.hours}</span>
<span style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20"}}>{p.gross}</span>
<span style={{"fontSize": "12.5px", "color": "#3D6B57", "fontWeight": "600"}}>{p.status}</span>
</div>
</React.Fragment>)}
</div>
</section>
</div>
<aside style={{"flex": "0 1 280px", "minWidth": "260px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "padding": "22px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "14px"}}>{"Credentials & compliance"}</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
{(myCreds ?? []).map((c, index49) => <React.Fragment key={index49}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "10px", "alignItems": "flex-start"}}>
<div style={{"flex": "1"}}>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20"}}>{c.name}</p>
<p style={{"fontSize": "12.5px", "color": "#5B6270", "marginTop": "2px"}}>{c.detail}</p>
</div>
<span style={c.pill}>{c.status}</span>
</div>
</React.Fragment>)}
</div>
<button className="site-hover-50" type="button" style={{"width": "100%", "border": "1.5px solid #22262E", "color": "#22262E", "padding": "11px", "borderRadius": "9px", "fontSize": "13.5px", "fontWeight": "600", "whiteSpace": "nowrap", "marginTop": "18px"}}>{"Start OSHA-10 (paid)"}</button>
</div>
{(hasSaved) ? <> 
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "padding": "22px", "background": "#F5F4F2"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "14px"}}>{"Saved openings"}</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
{(savedJobs ?? []).map((sv, index51) => <React.Fragment key={index51}>
<button type="button" onClick={sv.open} style={{"textAlign": "left", "width": "100%"}}>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20"}}>{sv.title}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "2px"}}>{sv.location}{" · "}{sv.pay}</p>
</button>
</React.Fragment>)}
</div>
</div>
 </> : null}
<div style={{"borderRadius": "18px", "padding": "22px", "background": "#22262E"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "12px"}}>{"Your branch"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#fff"}}>{"Columbus, OH"}</p>
<p style={{"fontSize": "13px", "color": "rgba(255,255,255,0.6)", "marginTop": "4px", "lineHeight": "1.55"}}>{"Walk-ins Mon–Fri, 8am–5pm. Call the 24/7 line for same-day shift changes."}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#fff", "marginTop": "14px"}}>{dispatch}</p>
</div>
</aside>
</div>
</>;
}
