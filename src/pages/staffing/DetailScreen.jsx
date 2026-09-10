import React from 'react';

export default function DetailScreen(values) {
  const { crumbPractice, crumbTitle, currentSaveLabel, goApply, goHome, goJobs, handledItems, job, p, saveCurrent, showRail, similarJobs } = values;
  return <>
<div style={{"background": "#F5F4F2", "borderBottom": "1px solid #E5E2DC"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "18px 32px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap", "fontSize": "13px", "color": "#5B6270"}}>
<button type="button" onClick={goHome} style={{"fontSize": "13px", "fontWeight": "500", "color": "#5D6472", "whiteSpace": "nowrap"}}>{"Home"}</button>
<span>{"/"}</span>
<button type="button" onClick={goJobs} style={{"fontSize": "13px", "fontWeight": "500", "color": "#5D6472", "whiteSpace": "nowrap"}}>{"Find work"}</button>
<span>{"/"}</span>
<span style={{"whiteSpace": "nowrap"}}>{crumbPractice}</span>
<span>{"/"}</span>
<span style={{"color": "#171A20", "fontWeight": "600"}}>{crumbTitle}</span>
</div>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "32px", "display": "flex", "gap": "32px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<article style={{"flex": "1 1 440px", "minWidth": "300px"}}>
<div style={{"position": "relative", "borderRadius": "18px", "overflow": "hidden", "aspectRatio": "21/8", "marginBottom": "22px", "background": "#EBE8E2"}}>
{(job.isHealthcare) ? <> 
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" alt="Nurse walking a hospital corridor" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
 </> : null}
{(job.isSkilled) ? <> 
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80" alt="Warehouse worker operating a forklift" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
 </> : null}
{(job.isTechnical) ? <> 
<img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80" alt="Technician servicing equipment" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
 </> : null}
{(job.isProfessional) ? <> 
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80" alt="Office professionals in a meeting" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
 </> : null}
<span style={{"position": "absolute", "left": "16px", "bottom": "14px", "fontSize": "12px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "backdropFilter": "blur(6px)", "padding": "6px 12px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{job.branch}{" branch · "}{job.vertical}</span>
</div>
<span style={job.pillStyle}>{job.vertical}</span>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "34px", "lineHeight": "1.12", "color": "#171A20", "letterSpacing": "-0.01em", "margin": "12px 0 8px"}}>{job.title}</h1>
<p style={{"fontSize": "15.5px", "color": "#5D6472"}}>{job.company}{" · "}{job.location}{" · Staffed by our "}{job.branch}{" branch"}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(150px,1fr))", "gap": "1px", "background": "#fff", "border": "1px solid #E5E2DC", "borderRadius": "14px", "overflow": "hidden", "margin": "26px 0"}}>
<div style={{"background": "#fff", "padding": "16px 18px", "boxShadow": "0 0 0 1px #E5E2DC"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "5px"}}>{"Pay"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{job.pay}</p>
</div>
<div style={{"background": "#fff", "padding": "16px 18px", "boxShadow": "0 0 0 1px #E5E2DC"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "5px"}}>{"Solution"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{job.type}</p>
</div>
<div style={{"background": "#fff", "padding": "16px 18px", "boxShadow": "0 0 0 1px #E5E2DC"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "5px"}}>{"Schedule"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{job.shift}</p>
</div>
<div style={{"background": "#fff", "padding": "16px 18px", "boxShadow": "0 0 0 1px #E5E2DC"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "5px"}}>{"Start date"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{job.start}</p>
</div>
</div>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "10px"}}>{"About the assignment"}</h2>
<p style={{"fontSize": "15px", "color": "#5D6472", "lineHeight": "1.65", "maxWidth": "640px"}}>{job.desc}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "margin": "28px 0 12px"}}>{"What you'll do"}</h2>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "10px", "maxWidth": "640px"}}>
{(job.duties ?? []).map((d, index26) => <React.Fragment key={index26}>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "3px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"\n            "}{d}{"\n          "}</li>
</React.Fragment>)}
</ul>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "margin": "28px 0 12px"}}>{"Requirements"}</h2>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "10px", "maxWidth": "640px"}}>
{(job.reqs ?? []).map((r, index27) => <React.Fragment key={index27}>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>
<span style={{"width": "5px", "height": "5px", "borderRadius": "50%", "background": "#5B6270", "flexShrink": "0", "marginTop": "9px"}}></span>{"\n            "}{r}{"\n          "}</li>
</React.Fragment>)}
</ul>
<div style={{"background": "#22262E", "borderRadius": "22px", "padding": "30px", "marginTop": "32px"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "21px", "color": "#fff", "marginBottom": "6px"}}>{"What Asepsis handles for you"}</h3>
<p style={{"fontSize": "14px", "color": "rgba(255,255,255,0.62)", "marginBottom": "20px", "maxWidth": "460px"}}>{"You're on our payroll from day one. The paperwork is ours."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(210px,1fr))", "gap": "10px"}}>
{(handledItems ?? []).map((h, index28) => <React.Fragment key={index28}>
<div style={{"display": "flex", "gap": "10px", "padding": "13px 15px", "background": "rgba(255,255,255,0.06)", "borderRadius": "10px"}}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9A98A" strokeWidth="2.3" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>
<div>
<b style={{"display": "block", "fontSize": "14px", "fontWeight": "600", "color": "#fff", "marginBottom": "2px"}}>{h.title}</b>
<span style={{"fontSize": "12.5px", "color": "rgba(255,255,255,0.6)"}}>{h.note}</span>
</div>
</div>
</React.Fragment>)}
</div>
</div>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "margin": "36px 0 14px"}}>{"Similar openings"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "12px"}}>
{(similarJobs ?? []).map((s, index29) => <React.Fragment key={index29}>
<button className="site-hover-30" type="button" onClick={s.open} style={{"textAlign": "left", "border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff", "transition": "border-color .18s ease,box-shadow .18s ease,transform .18s ease"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{s.title}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "marginBottom": "10px"}}>{s.location}</p>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#22262E"}}>{s.pay}</p>
</button>
</React.Fragment>)}
</div>
</article>
<aside style={{"flex": "0 1 280px", "minWidth": "260px", "position": "sticky", "top": "98px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "padding": "22px", "background": "#fff", "boxShadow": "0 1px 2px rgba(23,26,32,0.05),0 8px 24px -12px rgba(23,26,32,0.14)"}}>
<p style={{"fontSize": "22px", "fontFamily": "'Fraunces',serif", "fontWeight": "600", "color": "#171A20"}}>{job.pay}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "marginTop": "4px", "marginBottom": "18px"}}>{job.openings}{" openings · paid every Friday"}</p>
<button className="site-hover-31" type="button" onClick={goApply} style={{"width": "100%", "background": "#C9A98A", "color": "#171A20", "padding": "14px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "marginBottom": "9px"}}>{"Apply for this shift"}</button>
<button type="button" onClick={saveCurrent} style={{"width": "100%", "border": "1.5px solid #E5E2DC", "color": "#22262E", "padding": "13px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{currentSaveLabel}</button>
<p style={{"fontSize": "12.5px", "color": "#5B6270", "marginTop": "14px", "lineHeight": "1.5"}}>{"Already applied with Asepsis? Sign in and a recruiter submits you in one click."}</p>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "padding": "22px", "background": "#F5F4F2"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "14px"}}>{"Your recruiter"}</p>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px", "marginBottom": "16px"}}>
<div style={{"width": "46px", "height": "46px", "borderRadius": "50%", "background": "#22262E", "color": "#C9A98A", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'Fraunces',serif", "fontSize": "16px", "fontWeight": "600"}}>{job.recruiterInitials}</div>
<div>
<b style={{"display": "block", "fontSize": "14.5px", "color": "#171A20"}}>{job.recruiter}</b>
<span style={{"fontSize": "12.5px", "color": "#5D6472"}}>{job.vertical}{" · "}{job.branch}{" branch"}</span>
</div>
</div>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.55", "marginBottom": "14px"}}>{job.branch}{" branch · walk-ins Mon–Fri, 8am–5pm"}</p>
<button className="site-hover-32" type="button" style={{"width": "100%", "border": "1.5px solid #22262E", "color": "#22262E", "padding": "11px", "borderRadius": "9px", "fontSize": "13.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Call the branch"}</button>
</div>
{(showRail) ? <> 
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "padding": "22px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "12px"}}>{"Before you start"}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "11px"}}>
{(job.onboarding ?? []).map((o, index33) => <React.Fragment key={index33}>
<li style={{"display": "flex", "gap": "10px", "fontSize": "13.5px", "color": "#262A33", "lineHeight": "1.5"}}>
<span style={{"width": "18px", "height": "18px", "borderRadius": "50%", "border": "1.5px solid #E5E2DC", "flexShrink": "0"}}></span>{"\n                "}{o}{"\n              "}</li>
</React.Fragment>)}
</ul>
</div>
 </> : null}
</aside>
</div>
</>;
}
