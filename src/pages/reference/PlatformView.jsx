
import React from 'react';
import './platform.css';

export default function PlatformView(values) {
  const { applyJobMeta, applyJobTitle, applySteps, availOptions, back, candidates, clearFilters, credOptions, currentSaveLabel, dispatch, eligibleOptions, empReqOptions, f, filterSummary, goApply, goEmployer, goHome, goJobs, goRequest, goWorker, handledItems, hasSaved, isApply, isDetail, isEmployer, isHome, isJobs, isRequest, isTraction, isWorker, job, locations, marketStats, matchedJobs, modelRows, myCreds, myPay, myShifts, navItems, newRequestRow, next, noExpOnly, noResults, notLastStep, notSubmitted, onAssign, onForm, onReqField, onSearch, onSort, onZip, payOptions, practiceCards, practiceOptions, reqDurationOptions, reqNotSubmitted, reqPracticeOptions, reqShiftOptions, reqSubmitted, reqSummaryLine, requests, resultCount, retentionStats, reviewAvail, reviewContact, reviewCreds, reviewName, reviewPay, reviewPractices, saveCurrent, savedJobs, search, shiftOptions, showBack, showRail, similarJobs, sort, step1, step2, step3, step4, stepLabel, submitApply, submitRequest, submitted, tierOptions, tiers, toggleNoExp, typeOptions, verticalOptions, visibleJobs, workerName, zip } = values;
  return <>
<a className="skip-link" href="#main-content">Skip to content</a>


<div style={{"minHeight": "100vh", "display": "flex", "flexDirection": "column", "background": "#FFFFFF"}}>
<header style={{"position": "sticky", "top": "0", "zIndex": "50", "background": "rgba(255,255,255,0.94)", "backdropFilter": "blur(10px)", "borderBottom": "1px solid #E4E4E9"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "12px 32px", "minHeight": "74px", "display": "flex", "alignItems": "center", "gap": "24px"}}>
<button type="button" onClick={goHome} style={{"display": "flex", "alignItems": "center", "gap": "11px", "flexShrink": "0"}}>
<svg width="30" height="30" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#3A1D22"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "lineHeight": "1"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "21px", "fontWeight": "600", "color": "#171A20", "letterSpacing": "-0.01em"}}>{"Asepsis"}</span>
<span style={{"fontSize": "9.5px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "#A8825F", "marginTop": "3px"}}>{"Staffing"}</span>
</span>
</button>
<nav style={{"display": "flex", "alignItems": "center", "gap": "4px", "flex": "1", "flexWrap": "wrap"}}>
{(navItems ?? []).map((n, index1) => <React.Fragment key={index1}>
<button type="button" onClick={n.go} style={n.style}>{n.label}</button>
</React.Fragment>)}
</nav>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
<span style={{"display": "flex", "alignItems": "center", "gap": "7px", "fontSize": "13px", "fontWeight": "600", "color": "#5D6472", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"></path></svg>{"\n        "}{dispatch}{"\n      "}</span>
<button className="platform-hover-2" type="button" onClick={goApply} style={{"background": "#22262E", "color": "#fff", "padding": "10px 18px", "borderRadius": "8px", "fontSize": "13.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Apply now"}</button>
</div>
</div>
</header>
<main id="main-content" tabIndex="-1" style={{"flex": "1"}}>
{(isHome) ? <> 
<div style={{"background": "#3A1D22", "overflow": "hidden"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "display": "flex", "gap": "48px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 480px", "minWidth": "300px", "padding": "72px 0"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "20px"}}>{"US staffing · four practices · 48 branches"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "52px", "lineHeight": "1.04", "letterSpacing": "-0.02em", "color": "#F4F4F6", "maxWidth": "620px"}}>{"Every kind of work. One trusted staffing partner."}</h1>
<p style={{"fontSize": "17.5px", "lineHeight": "1.6", "color": "rgba(244,244,246,0.74)", "maxWidth": "520px", "marginTop": "20px"}}>{"From hospital floors to warehouse docks to job sites to corner offices — we place people in real shifts, fast, and pay weekly."}</p>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap", "marginTop": "30px"}}>
<button className="platform-hover-3" type="button" onClick={goJobs} style={{"background": "#C9A98A", "color": "#3A1D22", "padding": "15px 26px", "borderRadius": "10px", "fontSize": "15.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Find work"}</button>
<button type="button" onClick={goRequest} style={{"border": "1.5px solid rgba(244,244,246,0.35)", "background": "rgba(244,244,246,0.08)", "color": "#F4F4F6", "padding": "14px 24px", "borderRadius": "10px", "fontSize": "15.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Request workers"}</button>
</div>
<div style={{"display": "flex", "gap": "34px", "flexWrap": "wrap", "marginTop": "40px", "paddingTop": "26px", "borderTop": "1px solid rgba(244,244,246,0.16)"}}>
<div><p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#F4F4F6"}}>{"48"}</p><p style={{"fontSize": "13px", "color": "rgba(244,244,246,0.6)", "marginTop": "3px"}}>{"branches nationwide"}</p></div>
<div><p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#F4F4F6"}}>{"125,000+"}</p><p style={{"fontSize": "13px", "color": "rgba(244,244,246,0.6)", "marginTop": "3px"}}>{"workers placed"}</p></div>
<div><p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#F4F4F6"}}>{"Friday"}</p><p style={{"fontSize": "13px", "color": "rgba(244,244,246,0.6)", "marginTop": "3px"}}>{"pay, every week"}</p></div>
</div>
</div>
<div style={{"flex": "1 1 380px", "minWidth": "300px", "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "4px", "alignSelf": "stretch", "minHeight": "520px"}}>
<div style={{"position": "relative", "overflow": "hidden", "background": "#2A1418"}}>
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80" alt="Nurse in a hospital hallway" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "left": "12px", "bottom": "11px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "padding": "4px 10px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Healthcare"}</span>
</div>
<div style={{"position": "relative", "overflow": "hidden", "background": "#2A1418"}}>
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=700&q=80" alt="Warehouse worker operating a forklift" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "left": "12px", "bottom": "11px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "padding": "4px 10px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Skilled Trades"}</span>
</div>
<div style={{"position": "relative", "overflow": "hidden", "background": "#2A1418"}}>
<img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80" alt="Technician servicing equipment" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "left": "12px", "bottom": "11px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "padding": "4px 10px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Technical Trades"}</span>
</div>
<div style={{"position": "relative", "overflow": "hidden", "background": "#2A1418"}}>
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80" alt="Office professionals in a meeting" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "left": "12px", "bottom": "11px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "padding": "4px 10px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Professional"}</span>
</div>
</div>
</div>
</div>
<div style={{"background": "#F4F4F6", "borderBottom": "1px solid #E4E4E9", "padding": "26px 0"}}>
<p style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "textAlign": "center", "fontSize": "13.5px", "color": "#5D6472"}}>{"Trusted by hospitals, distribution centres, contractors, and employers across the country"}</p>
</div>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "72px 32px 8px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#A8825F", "marginBottom": "14px"}}>{"Four practices"}</p>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "28px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "36px", "lineHeight": "1.12", "color": "#171A20", "maxWidth": "520px", "letterSpacing": "-0.015em"}}>{"We staff every kind of work — with a dedicated team for each"}</h2>
<p style={{"fontSize": "15.5px", "color": "#5D6472", "lineHeight": "1.6", "maxWidth": "400px"}}>{"Four recruiting practices, one branch network, one application. Not a generic job board with four filters."}</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "16px", "marginTop": "36px"}}>
{(practiceCards ?? []).map((p, index4) => <React.Fragment key={index4}>
<button className="platform-hover-5" type="button" onClick={p.go} style={{"textAlign": "left", "border": "1px solid #E4E4E9", "borderRadius": "22px", "overflow": "hidden", "background": "#fff", "display": "flex", "flexDirection": "column", "transition": "border-color .18s ease,box-shadow .18s ease,transform .18s ease"}}>
<span style={{"display": "block", "position": "relative", "aspectRatio": "16/10", "background": "#E9E9EE", "overflow": "hidden"}}>
{(p.isHealthcare) ? <> 
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80" alt="Nurse in a hospital hallway" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
 </> : null}
{(p.isSkilled) ? <> 
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=700&q=80" alt="Warehouse worker operating a forklift" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
 </> : null}
{(p.isTechnical) ? <> 
<img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80" alt="Technician servicing equipment" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
 </> : null}
{(p.isProfessional) ? <> 
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80" alt="Office professionals in a meeting" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
 </> : null}
</span>
<span style={{"display": "flex", "flexDirection": "column", "gap": "10px", "padding": "22px", "flex": "1"}}>
<span style={{"display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap"}}>
<span style={p.pillStyle}>{p.name}</span>
<span style={{"fontSize": "12px", "color": "#8B92A0", "fontWeight": "600"}}>{p.count}</span>
</span>
<span style={{"display": "block", "fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{p.desc}</span>
<span style={{"display": "block", "fontSize": "12px", "color": "#8B92A0", "marginTop": "auto", "paddingTop": "10px"}}>{p.tags}</span>
<span style={{"display": "block", "fontSize": "13px", "fontWeight": "700", "color": "#3A1D22"}}>{"View openings →"}</span>
</span>
</button>
</React.Fragment>)}
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "28px"}}>
<div>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#A8825F", "marginBottom": "14px"}}>{"For workers"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.14", "color": "#171A20", "letterSpacing": "-0.015em"}}>{"Apply once. Start as soon as you're cleared."}</h2>
<p style={{"fontSize": "15px", "color": "#5D6472", "lineHeight": "1.65", "marginTop": "12px"}}>{"One application online or at a local branch. No resume required for most roles."}</p>
<button className="platform-hover-6" type="button" onClick={goApply} style={{"background": "#22262E", "color": "#fff", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "marginTop": "22px"}}>{"Apply now"}</button>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "1px", "background": "#E4E4E9", "border": "1px solid #E4E4E9", "borderRadius": "18px", "overflow": "hidden"}}>
<div style={{"background": "#fff", "padding": "22px 24px", "display": "flex", "gap": "16px"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600", "color": "#A8825F", "flexShrink": "0"}}>{"01"}</span>
<span><b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{"Apply in minutes"}</b><span style={{"fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{"Online or in person. Tell us your licences, your shifts, and how you want to be paid."}</span></span>
</div>
<div style={{"background": "#fff", "padding": "22px 24px", "display": "flex", "gap": "16px"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600", "color": "#A8825F", "flexShrink": "0"}}>{"02"}</span>
<span><b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{"Get verified and matched"}</b><span style={{"fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{"We confirm your licence, certifications, and background check, then match you to open shifts."}</span></span>
</div>
<div style={{"background": "#fff", "padding": "22px 24px", "display": "flex", "gap": "16px"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600", "color": "#A8825F", "flexShrink": "0"}}>{"03"}</span>
<span><b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{"Work, and get paid weekly"}</b><span style={{"fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{"Clock in, and get paid every Friday by direct deposit or pay card."}</span></span>
</div>
</div>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#A8825F", "marginBottom": "14px"}}>{"For employers"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.14", "color": "#171A20", "maxWidth": "560px", "letterSpacing": "-0.015em"}}>{"Staffing solutions for every stage of hiring"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "1px", "background": "#E4E4E9", "border": "1px solid #E4E4E9", "borderRadius": "18px", "overflow": "hidden", "marginTop": "32px"}}>
{(tiers ?? []).map((t, index7) => <React.Fragment key={index7}>
<div style={{"background": "#fff", "padding": "26px 24px"}}>
<b style={{"display": "block", "fontSize": "16px", "fontWeight": "600", "color": "#171A20", "marginBottom": "8px"}}>{t.name}</b>
<span style={{"fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{t.note}</span>
</div>
</React.Fragment>)}
</div>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap", "marginTop": "22px"}}>
<button className="platform-hover-8" type="button" onClick={goRequest} style={{"background": "#C9A98A", "color": "#3A1D22", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Request workers"}</button>
<button className="platform-hover-9" type="button" onClick={goEmployer} style={{"border": "1.5px solid #E4E4E9", "color": "#22262E", "padding": "12px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"See the employer portal"}</button>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<div style={{"background": "#22262E", "borderRadius": "22px", "padding": "44px 40px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "36px", "alignItems": "center"}}>
<div>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "14px"}}>{"Compliance"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "30px", "lineHeight": "1.15", "color": "#F4F4F6", "maxWidth": "420px"}}>{"Every worker screened. Every hire protected."}</h2>
<p style={{"fontSize": "15px", "color": "rgba(244,244,246,0.66)", "lineHeight": "1.65", "maxWidth": "420px", "marginTop": "14px"}}>{"Staffing isn't just matching. It's the paperwork, the coverage, and the compliance that keep your business protected."}</p>
</div>
<div style={{"display": "grid", "gap": "10px"}}>
{(handledItems ?? []).map((h, index10) => <React.Fragment key={index10}>
<div style={{"display": "flex", "gap": "12px", "padding": "15px 17px", "background": "rgba(244,244,246,0.06)", "borderRadius": "12px"}}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9A98A" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>
<div>
<b style={{"display": "block", "fontSize": "14.5px", "fontWeight": "600", "color": "#F4F4F6", "marginBottom": "2px"}}>{h.title}</b>
<span style={{"fontSize": "13px", "color": "rgba(244,244,246,0.62)"}}>{h.note}</span>
</div>
</div>
</React.Fragment>)}
</div>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "44px", "alignItems": "center"}}>
<div style={{"borderRadius": "22px", "overflow": "hidden", "aspectRatio": "4/5", "background": "#E9E9EE", "maxWidth": "420px"}}>
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="ICU nurse on shift" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
</div>
<div>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "54px", "color": "#C9A98A", "lineHeight": "0.6"}}>{"“"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontWeight": "400", "fontSize": "26px", "lineHeight": "1.42", "color": "#171A20", "marginTop": "14px"}}>{"I picked up a 13-week ICU contract within four days of applying. Credentialing was done before I even finished orientation paperwork."}</p>
<div style={{"display": "flex", "alignItems": "center", "gap": "13px", "marginTop": "24px"}}>
<div style={{"width": "44px", "height": "44px", "borderRadius": "50%", "background": "#3A1D22", "color": "#C9A98A", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600"}}>{"MS"}</div>
<div>
<b style={{"display": "block", "fontSize": "14.5px", "color": "#171A20"}}>{"Maria Santos"}</b>
<span style={{"fontSize": "13px", "color": "#5D6472"}}>{"RN, ICU — placed at Baptist Health Dallas"}</span>
</div>
</div>
</div>
</div>
</section>
<section style={{"background": "#F4F4F6", "marginTop": "64px", "padding": "64px 0"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap", "alignItems": "flex-end", "marginBottom": "26px"}}>
<div>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#A8825F", "marginBottom": "14px"}}>{"Locations"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.14", "color": "#171A20", "letterSpacing": "-0.015em"}}>{"48 branches, coast to coast"}</h2>
</div>
<p style={{"fontSize": "15px", "color": "#5D6472", "maxWidth": "320px"}}>{"Local recruiters who know your local market. Walk in Mon–Fri, 8am–5pm."}</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(180px,1fr))", "gap": "10px"}}>
{(locations ?? []).map((l, index11) => <React.Fragment key={index11}>
<div style={{"background": "#fff", "border": "1px solid #E4E4E9", "borderRadius": "12px", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px"}}>
<span style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#171A20", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{l.city}</span>
<span style={{"fontSize": "12px", "fontWeight": "700", "color": "#8B92A0"}}>{l.st}</span>
</div>
</React.Fragment>)}
</div>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 24px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "16px"}}>
<div style={{"background": "#C9A98A", "borderRadius": "22px", "padding": "40px 36px"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "26px", "color": "#3A1D22", "marginBottom": "10px"}}>{"Ready for your next shift?"}</h3>
<p style={{"fontSize": "14.5px", "color": "rgba(58,29,34,0.78)", "lineHeight": "1.6", "marginBottom": "22px"}}>{"Apply online in minutes, or walk into a branch near you."}</p>
<button className="platform-hover-12" type="button" onClick={goApply} style={{"background": "#3A1D22", "color": "#F4F4F6", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Apply now"}</button>
</div>
<div style={{"background": "#3A1D22", "borderRadius": "22px", "padding": "40px 36px"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "26px", "color": "#F4F4F6", "marginBottom": "10px"}}>{"Need workers this week?"}</h3>
<p style={{"fontSize": "14.5px", "color": "rgba(244,244,246,0.68)", "lineHeight": "1.6", "marginBottom": "22px"}}>{"Call the dispatch line — we staff same-day for urgent needs."}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "24px", "fontWeight": "600", "color": "#C9A98A"}}>{dispatch}</p>
</div>
</div>
</section>
 </> : null}
{(isJobs) ? <> 
<div style={{"background": "#22262E", "padding": "38px 0 32px"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px"}}>
<p style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "10px"}}>{"Open shifts & roles"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "38px", "lineHeight": "1.1", "color": "#fff", "letterSpacing": "-0.01em", "maxWidth": "620px"}}>{"Find work in every one of our four practices"}</h1>
<p style={{"color": "rgba(255,255,255,0.68)", "fontSize": "15.5px", "marginTop": "12px", "maxWidth": "560px"}}>{"One application covers all of them. Weekly pay, every Friday. Apply online or walk into any of our 48 branches."}</p>
<div style={{"display": "flex", "gap": "8px", "background": "#fff", "borderRadius": "14px", "padding": "9px", "marginTop": "24px", "boxShadow": "0 20px 60px -20px rgba(23,26,32,0.30)", "flexWrap": "wrap", "maxWidth": "820px"}}>
<label style={{"flex": "1 1 240px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 13px", "borderRadius": "9px", "background": "#F4F4F6"}}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8B92A0" strokeWidth="2"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.35-4.35"></path></svg>
<input value={search} onChange={onSearch} placeholder="Job title, trade, or license" style={{"border": "none", "outline": "none", "background": "transparent", "fontSize": "14.5px", "color": "#262A33", "width": "100%"}} />
</label>
<label style={{"flex": "1 1 160px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 13px", "borderRadius": "9px", "background": "#F4F4F6"}}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#8B92A0" strokeWidth="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input value={zip} onChange={onZip} placeholder="ZIP code or city" style={{"border": "none", "outline": "none", "background": "transparent", "fontSize": "14.5px", "color": "#262A33", "width": "100%"}} />
</label>
<button className="platform-hover-13" type="button" style={{"background": "#22262E", "color": "#fff", "padding": "12px 22px", "borderRadius": "9px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Search jobs"}</button>
</div>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "32px", "display": "flex", "gap": "28px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<aside style={{"flex": "0 1 240px", "minWidth": "220px", "display": "flex", "flexDirection": "column", "gap": "16px", "position": "sticky", "top": "98px"}}>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<h3 style={{"fontFamily": "'Inter',sans-serif", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "12px"}}>{"Practice"}</h3>
<div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
{(verticalOptions ?? []).map((v, index14) => <React.Fragment key={index14}>
<button type="button" onClick={v.go} style={v.style}>
<span style={{"display": "flex", "alignItems": "center", "gap": "9px"}}><span style={v.dot}></span>{v.name}</span>
<span style={{"fontSize": "12.5px", "color": "#8B92A0", "fontWeight": "600"}}>{v.count}</span>
</button>
</React.Fragment>)}
</div>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<h3 style={{"fontFamily": "'Inter',sans-serif", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "12px"}}>{"Solution type"}</h3>
<div style={{"display": "flex", "flexDirection": "column", "gap": "9px"}}>
{(typeOptions ?? []).map((t, index15) => <React.Fragment key={index15}>
<label style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "13.5px", "color": "#262A33", "cursor": "pointer"}}>
<input type="checkbox" checked={t.on} onChange={t.go} style={{"width": "15px", "height": "15px", "accentColor": "#22262E"}} />{"\n              "}{t.name}{"\n            "}</label>
</React.Fragment>)}
</div>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<h3 style={{"fontFamily": "'Inter',sans-serif", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "12px"}}>{"Shift"}</h3>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "7px"}}>
{(shiftOptions ?? []).map((s, index16) => <React.Fragment key={index16}>
<button type="button" onClick={s.go} style={s.style}>{s.name}</button>
</React.Fragment>)}
</div>
<label style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "13.5px", "color": "#262A33", "marginTop": "16px", "paddingTop": "14px", "borderTop": "1px solid #E4E4E9", "cursor": "pointer"}}>
<input type="checkbox" checked={noExpOnly} onChange={toggleNoExp} style={{"width": "15px", "height": "15px", "accentColor": "#22262E"}} />{"\n          No experience required\n        "}</label>
</div>
<div style={{"borderRadius": "14px", "padding": "18px", "background": "#F6EFE7"}}>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20", "marginBottom": "5px"}}>{"Prefer to walk in?"}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.55", "marginBottom": "12px"}}>{"Bring your ID and any licenses to a branch. Most walk-ins are interviewed same day."}</p>
<button type="button" onClick={goJobs} style={{"fontSize": "13px", "fontWeight": "700", "color": "#22262E", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Find your branch →"}</button>
</div>
</aside>
<section style={{"flex": "1 1 440px", "minWidth": "300px"}}>
<div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap", "marginBottom": "16px"}}>
<p style={{"fontSize": "14px", "color": "#5D6472"}}><b style={{"color": "#171A20", "fontWeight": "600"}}>{resultCount}{" openings"}</b>{" "}{filterSummary}</p>
<div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
<span style={{"fontSize": "13px", "color": "#8B92A0"}}>{"Sort"}</span>
<select value={sort} onChange={onSort} style={{"border": "1px solid #E4E4E9", "borderRadius": "8px", "padding": "8px 10px", "fontSize": "13.5px", "color": "#262A33", "background": "#fff"}}>
<option>{"Newest"}</option>
<option>{"Highest pay"}</option>
<option>{"Nearest branch"}</option>
</select>
</div>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
{(visibleJobs ?? []).map((j, index17) => <React.Fragment key={index17}>
<article className="platform-hover-18" style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "background": "#fff", "padding": "20px 22px", "display": "flex", "gap": "18px", "alignItems": "flex-start", "position": "relative", "overflow": "hidden", "transition": "border-color .18s ease,box-shadow .18s ease,transform .18s ease"}}>
<span style={j.bar}></span>
<div style={j.logo}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600"}}>{j.initials}</span>
</div>
<div style={{"flex": "1 1 240px", "minWidth": "200px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap", "marginBottom": "4px"}}>
<span style={j.pillStyle}>{j.vertical}</span>
{(j.urgent) ? <> 
<span style={{"fontSize": "11px", "fontWeight": "700", "color": "#8C3A44", "background": "#F6EBEC", "padding": "4px 8px", "borderRadius": "100px"}}>{"Fills fast"}</span>
 </> : null}
</div>
<button type="button" onClick={j.open} style={{"textAlign": "left", "fontSize": "16.5px", "fontWeight": "600", "color": "#171A20", "display": "block", "marginBottom": "3px"}}>{j.title}</button>
<p style={{"fontSize": "13.5px", "color": "#5D6472"}}>{j.company}{" · "}{j.location}</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "6px", "marginTop": "12px"}}>
<span style={{"fontSize": "11.5px", "fontWeight": "600", "padding": "5px 10px", "borderRadius": "100px", "background": "#F6EFE7", "color": "#A8825F"}}>{j.type}</span>
<span style={{"fontSize": "11.5px", "fontWeight": "600", "padding": "5px 10px", "borderRadius": "100px", "background": "#F4F4F6", "color": "#5D6472"}}>{j.shift}</span>
<span style={{"fontSize": "11.5px", "fontWeight": "600", "padding": "5px 10px", "borderRadius": "100px", "background": "#F4F4F6", "color": "#5D6472"}}>{j.credLine}</span>
</div>
</div>
<div style={{"flex": "0 0 auto", "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "gap": "10px", "minWidth": "150px"}}>
<div style={{"textAlign": "right"}}>
<p style={{"fontSize": "15.5px", "fontWeight": "600", "color": "#171A20"}}>{j.pay}</p>
<p style={{"fontSize": "12px", "color": "#8B92A0", "marginTop": "2px"}}>{"Weekly pay · "}{j.posted}</p>
</div>
<div style={{"display": "flex", "gap": "8px"}}>
<button type="button" onClick={j.save} style={j.saveStyle}>{j.saveLabel}</button>
<button className="platform-hover-19" type="button" onClick={j.open} style={{"background": "#22262E", "color": "#fff", "padding": "9px 15px", "borderRadius": "8px", "fontSize": "13px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"View shift"}</button>
</div>
</div>
</article>
</React.Fragment>)}
</div>
{(noResults) ? <> 
<div style={{"border": "1px dashed #E4E4E9", "borderRadius": "14px", "padding": "44px", "textAlign": "center", "background": "#F4F4F6"}}>
<p style={{"fontSize": "16px", "fontWeight": "600", "color": "#171A20", "marginBottom": "6px"}}>{"No openings match those filters"}</p>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "16px"}}>{"Clear a filter, or apply once and let a recruiter match you as shifts open."}</p>
<button type="button" onClick={clearFilters} style={{"border": "1.5px solid #E4E4E9", "padding": "10px 18px", "borderRadius": "9px", "fontSize": "14px", "fontWeight": "600", "whiteSpace": "nowrap", "color": "#22262E"}}>{"Clear filters"}</button>
</div>
 </> : null}
</section>
</div>
 </> : null}
{(isDetail) ? <> 
<div style={{"background": "#F4F4F6", "borderBottom": "1px solid #E4E4E9"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "18px 32px"}}>
<button type="button" onClick={goJobs} style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#5D6472", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"← All openings"}</button>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "32px", "display": "flex", "gap": "32px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<article style={{"flex": "1 1 440px", "minWidth": "300px"}}>
<div style={{"position": "relative", "borderRadius": "18px", "overflow": "hidden", "aspectRatio": "21/8", "marginBottom": "22px", "background": "#E9E9EE"}}>
{(job.isHealthcare) ? <> 
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80" alt="Nurse walking a hospital corridor" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
 </> : null}
{(job.isSkilled) ? <> 
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80" alt="Warehouse worker operating a forklift" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
 </> : null}
{(job.isTechnical) ? <> 
<img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80" alt="Technician servicing equipment" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
 </> : null}
{(job.isProfessional) ? <> 
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80" alt="Office professionals in a meeting" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
 </> : null}
<span style={{"position": "absolute", "left": "16px", "bottom": "14px", "fontSize": "12px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "backdropFilter": "blur(6px)", "padding": "6px 12px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{job.branch}{" branch · "}{job.vertical}</span>
</div>
<span style={job.pillStyle}>{job.vertical}</span>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "34px", "lineHeight": "1.12", "color": "#171A20", "letterSpacing": "-0.01em", "margin": "12px 0 8px"}}>{job.title}</h1>
<p style={{"fontSize": "15.5px", "color": "#5D6472"}}>{job.company}{" · "}{job.location}{" · Staffed by our "}{job.branch}{" branch"}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(150px,1fr))", "gap": "1px", "background": "#E4E4E9", "border": "1px solid #E4E4E9", "borderRadius": "14px", "overflow": "hidden", "margin": "26px 0"}}>
<div style={{"background": "#fff", "padding": "16px 18px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "5px"}}>{"Pay"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{job.pay}</p>
</div>
<div style={{"background": "#fff", "padding": "16px 18px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "5px"}}>{"Solution"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{job.type}</p>
</div>
<div style={{"background": "#fff", "padding": "16px 18px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "5px"}}>{"Schedule"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{job.shift}</p>
</div>
<div style={{"background": "#fff", "padding": "16px 18px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "5px"}}>{"Start date"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{job.start}</p>
</div>
</div>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "10px"}}>{"About the assignment"}</h2>
<p style={{"fontSize": "15px", "color": "#5D6472", "lineHeight": "1.65", "maxWidth": "640px"}}>{job.desc}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "margin": "28px 0 12px"}}>{"What you'll do"}</h2>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "10px", "maxWidth": "640px"}}>
{(job.duties ?? []).map((d, index20) => <React.Fragment key={index20}>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "3px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"\n            "}{d}{"\n          "}</li>
</React.Fragment>)}
</ul>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "margin": "28px 0 12px"}}>{"Requirements"}</h2>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "10px", "maxWidth": "640px"}}>
{(job.reqs ?? []).map((r, index21) => <React.Fragment key={index21}>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>
<span style={{"width": "5px", "height": "5px", "borderRadius": "50%", "background": "#8B92A0", "flexShrink": "0", "marginTop": "9px"}}></span>{"\n            "}{r}{"\n          "}</li>
</React.Fragment>)}
</ul>
<div style={{"background": "#22262E", "borderRadius": "22px", "padding": "30px", "marginTop": "32px"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "21px", "color": "#fff", "marginBottom": "6px"}}>{"What Asepsis handles for you"}</h3>
<p style={{"fontSize": "14px", "color": "rgba(255,255,255,0.62)", "marginBottom": "20px", "maxWidth": "460px"}}>{"You're on our payroll from day one. The paperwork is ours."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(210px,1fr))", "gap": "10px"}}>
{(handledItems ?? []).map((h, index22) => <React.Fragment key={index22}>
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
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "margin": "36px 0 14px"}}>{"Similar openings"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "12px"}}>
{(similarJobs ?? []).map((s, index23) => <React.Fragment key={index23}>
<button className="platform-hover-24" type="button" onClick={s.open} style={{"textAlign": "left", "border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff", "transition": "border-color .18s ease,box-shadow .18s ease,transform .18s ease"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{s.title}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "marginBottom": "10px"}}>{s.location}</p>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#22262E"}}>{s.pay}</p>
</button>
</React.Fragment>)}
</div>
</article>
<aside style={{"flex": "0 1 280px", "minWidth": "260px", "position": "sticky", "top": "98px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "padding": "22px", "background": "#fff", "boxShadow": "0 1px 2px rgba(23,26,32,0.05),0 8px 24px -12px rgba(23,26,32,0.14)"}}>
<p style={{"fontSize": "22px", "fontFamily": "'Fraunces',serif", "fontWeight": "600", "color": "#171A20"}}>{job.pay}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "marginTop": "4px", "marginBottom": "18px"}}>{job.openings}{" openings · paid every Friday"}</p>
<button className="platform-hover-25" type="button" onClick={goApply} style={{"width": "100%", "background": "#C9A98A", "color": "#171A20", "padding": "14px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "marginBottom": "9px"}}>{"Apply for this shift"}</button>
<button type="button" onClick={saveCurrent} style={{"width": "100%", "border": "1.5px solid #E4E4E9", "color": "#22262E", "padding": "13px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{currentSaveLabel}</button>
<p style={{"fontSize": "12.5px", "color": "#8B92A0", "marginTop": "14px", "lineHeight": "1.5"}}>{"Already applied with Asepsis? Sign in and a recruiter submits you in one click."}</p>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "padding": "22px", "background": "#F4F4F6"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "14px"}}>{"Your recruiter"}</p>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px", "marginBottom": "16px"}}>
<div style={{"width": "46px", "height": "46px", "borderRadius": "50%", "background": "#22262E", "color": "#C9A98A", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'Fraunces',serif", "fontSize": "16px", "fontWeight": "600"}}>{job.recruiterInitials}</div>
<div>
<b style={{"display": "block", "fontSize": "14.5px", "color": "#171A20"}}>{job.recruiter}</b>
<span style={{"fontSize": "12.5px", "color": "#5D6472"}}>{job.vertical}{" · "}{job.branch}{" branch"}</span>
</div>
</div>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.55", "marginBottom": "14px"}}>{job.branch}{" branch · walk-ins Mon–Fri, 8am–5pm"}</p>
<button className="platform-hover-26" type="button" style={{"width": "100%", "border": "1.5px solid #22262E", "color": "#22262E", "padding": "11px", "borderRadius": "9px", "fontSize": "13.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Call the branch"}</button>
</div>
{(showRail) ? <> 
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "padding": "22px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "12px"}}>{"Before you start"}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "11px"}}>
{(job.onboarding ?? []).map((o, index27) => <React.Fragment key={index27}>
<li style={{"display": "flex", "gap": "10px", "fontSize": "13.5px", "color": "#262A33", "lineHeight": "1.5"}}>
<span style={{"width": "18px", "height": "18px", "borderRadius": "50%", "border": "1.5px solid #E4E4E9", "flexShrink": "0"}}></span>{"\n                "}{o}{"\n              "}</li>
</React.Fragment>)}
</ul>
</div>
 </> : null}
</aside>
</div>
 </> : null}
{(isApply) ? <> 
{(notSubmitted) ? <> 
<div style={{"background": "#F4F4F6", "borderBottom": "1px solid #E4E4E9"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "26px 32px"}}>
<button type="button" onClick={goJobs} style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#5D6472", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"← Back to openings"}</button>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "30px", "color": "#171A20", "marginTop": "12px"}}>{"Apply once. We match you to every practice."}</h1>
<p style={{"fontSize": "14.5px", "color": "#5D6472", "marginTop": "6px"}}>{"Applying for "}<b style={{"color": "#171A20", "fontWeight": "600"}}>{applyJobTitle}</b>{" — "}{applyJobMeta}</p>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "32px", "display": "flex", "gap": "32px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<aside style={{"flex": "0 1 280px", "minWidth": "250px", "background": "#F4F4F6", "borderRadius": "18px", "padding": "12px", "position": "sticky", "top": "98px"}}>
{(applySteps ?? []).map((st, index28) => <React.Fragment key={index28}>
<button type="button" onClick={st.go} style={st.style}>
<span style={st.numStyle}>{st.n}</span>
<span>
<b style={st.titleStyle}>{st.title}</b>
<span style={{"display": "block", "fontSize": "12.5px", "color": "#8B92A0", "marginTop": "2px"}}>{st.note}</span>
</span>
</button>
</React.Fragment>)}
<div style={{"padding": "14px", "marginTop": "6px", "borderTop": "1px solid #E4E4E9"}}>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "lineHeight": "1.55"}}>{"No resume needed for most roles. Prefer in person? Bring your ID to any of our 48 branches and we finish this with you."}</p>
</div>
</aside>
<section style={{"flex": "1 1 440px", "minWidth": "300px", "border": "1px solid #E4E4E9", "borderRadius": "18px", "background": "#fff", "padding": "28px", "boxShadow": "0 1px 2px rgba(23,26,32,0.05),0 8px 24px -12px rgba(23,26,32,0.14)"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#A8825F", "marginBottom": "16px"}}>{stepLabel}</p>
{(step1) ? <> 
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "20px"}}>{"About you"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"First name"}</span>
<input data-field="first" value={f.first} onChange={onForm} placeholder="DeShawn" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Last name"}</span>
<input data-field="last" value={f.last} onChange={onForm} placeholder="Carter" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Mobile phone"}</span>
<input data-field="phone" value={f.phone} onChange={onForm} placeholder="(614) 555-0118" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Email"}</span>
<input data-field="email" value={f.email} onChange={onForm} placeholder="you@email.com" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"ZIP code"}</span>
<input data-field="zip" value={f.zip} onChange={onForm} placeholder="43215" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"How did you hear about us?"}</span>
<select data-field="heard" value={f.heard} onChange={onForm} style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33", "background": "#fff"}}>
<option>{"Referred by a friend"}</option><option>{"Walked into a branch"}</option><option>{"Job board or search"}</option><option>{"Worked with Asepsis before"}</option>
</select></label>
</div>
<p style={{"fontSize": "12.5px", "color": "#8B92A0", "marginTop": "18px", "lineHeight": "1.55"}}>{"We text you about shifts and pay. Standard message rates apply; reply STOP any time."}</p>
 </> : null}
{(step2) ? <> 
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "6px"}}>{"Work eligibility"}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "22px", "maxWidth": "520px"}}>{"Every Asepsis hire runs through E-Verify and I-9. You can finish this online or at a branch with your original documents."}</p>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Are you authorized to work in the United States?"}</p>
<div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "marginBottom": "22px"}}>
{(eligibleOptions ?? []).map((e, index29) => <React.Fragment key={index29}>
<button type="button" onClick={e.go} style={e.style}>{e.name}</button>
</React.Fragment>)}
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "borderTop": "1px solid #E4E4E9", "paddingTop": "20px"}}>
<label style={{"display": "flex", "gap": "11px", "alignItems": "flex-start", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5", "cursor": "pointer"}}>
<input type="checkbox" data-field="over18" checked={f.over18} onChange={onForm} style={{"width": "16px", "height": "16px", "marginTop": "2px", "accentColor": "#22262E"}} />{"\n            I am 18 years of age or older.\n          "}</label>
<label style={{"display": "flex", "gap": "11px", "alignItems": "flex-start", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5", "cursor": "pointer"}}>
<input type="checkbox" data-field="consent" checked={f.consent} onChange={onForm} style={{"width": "16px", "height": "16px", "marginTop": "2px", "accentColor": "#22262E"}} />{"\n            I consent to a background check and, where a client requires it, a drug screen. Asepsis pays for both.\n          "}</label>
</div>
<div style={{"background": "#F4F4F6", "borderRadius": "12px", "padding": "18px", "marginTop": "22px"}}>
<p style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "8px"}}>{"Bring to your first branch visit"}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.6"}}>{"Photo ID and a Social Security card or birth certificate — or a passport on its own. If you are missing a document, your recruiter will tell you what else works."}</p>
</div>
 </> : null}
{(step3) ? <> 
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "6px"}}>{"Credentials & availability"}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "22px", "maxWidth": "520px"}}>{"Tell us what you hold and when you can work. We verify licenses on your behalf — no chasing state boards."}</p>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Licenses & certifications you hold"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "22px"}}>
{(credOptions ?? []).map((c, index30) => <React.Fragment key={index30}>
<button type="button" onClick={c.go} style={c.style}>{c.name}</button>
</React.Fragment>)}
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Practices you want work in"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "22px"}}>
{(practiceOptions ?? []).map((p, index31) => <React.Fragment key={index31}>
<button type="button" onClick={p.go} style={p.style}>{p.name}</button>
</React.Fragment>)}
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Shifts you can take"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "22px"}}>
{(availOptions ?? []).map((a, index32) => <React.Fragment key={index32}>
<button type="button" onClick={a.go} style={a.style}>{a.name}</button>
</React.Fragment>)}
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px", "borderTop": "1px solid #E4E4E9", "paddingTop": "20px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"How soon can you start?"}</span>
<select data-field="start" value={f.start} onChange={onForm} style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33", "background": "#fff"}}>
<option>{"Immediately"}</option><option>{"Within a week"}</option><option>{"Two to four weeks"}</option><option>{"Just looking for now"}</option>
</select></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Transportation"}</span>
<select data-field="transport" value={f.transport} onChange={onForm} style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33", "background": "#fff"}}>
<option>{"Own vehicle"}</option><option>{"Public transit"}</option><option>{"Rideshare or carpool"}</option>
</select></label>
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "margin": "22px 0 8px"}}>{"How do you want to be paid every Friday?"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap"}}>
{(payOptions ?? []).map((p, index33) => <React.Fragment key={index33}>
<button type="button" onClick={p.go} style={p.style}>{p.name}</button>
</React.Fragment>)}
</div>
<div style={{"border": "1.5px dashed #E4E4E9", "borderRadius": "12px", "padding": "20px", "textAlign": "center", "marginTop": "22px", "background": "#F4F4F6"}}>
<p style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{"Resume or license copies (optional)"}</p>
<p style={{"fontSize": "12.5px", "color": "#8B92A0", "fontFamily": "ui-monospace,monospace"}}>{"drop a PDF or photo here · not required for most roles"}</p>
</div>
 </> : null}
{(step4) ? <> 
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "20px"}}>{"Review & submit"}</h2>
<div style={{"display": "flex", "flexDirection": "column", "gap": "1px", "background": "#E4E4E9", "border": "1px solid #E4E4E9", "borderRadius": "14px", "overflow": "hidden"}}>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#8B92A0"}}>{"Name"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewName}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#8B92A0"}}>{"Contact"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewContact}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#8B92A0"}}>{"Applying for"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{applyJobTitle}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#8B92A0"}}>{"Practices"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewPractices}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#8B92A0"}}>{"Availability"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewAvail}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#8B92A0"}}>{"Credentials"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewCreds}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#8B92A0"}}>{"Pay"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewPay}</span></div>
</div>
<p style={{"fontSize": "12.5px", "color": "#8B92A0", "marginTop": "18px", "lineHeight": "1.6"}}>{"By submitting you confirm the information is accurate and authorize Asepsis Staffing to verify your credentials and eligibility to work. Asepsis is an equal opportunity employer and an E-Verify participant."}</p>
 </> : null}
<div style={{"display": "flex", "gap": "10px", "alignItems": "center", "marginTop": "26px", "paddingTop": "22px", "borderTop": "1px solid #E4E4E9", "flexWrap": "wrap"}}>
{(showBack) ? <> 
<button className="platform-hover-34" type="button" onClick={back} style={{"border": "1.5px solid #E4E4E9", "color": "#22262E", "padding": "13px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Back"}</button>
 </> : null}
{(step4) ? <> 
<button type="button" onClick={submitApply} style={{"background": "#C9A98A", "color": "#171A20", "padding": "14px 26px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Submit application"}</button>
 </> : null}
{(notLastStep) ? <> 
<button className="platform-hover-35" type="button" onClick={next} style={{"background": "#22262E", "color": "#fff", "padding": "14px 26px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Continue"}</button>
 </> : null}
<span style={{"fontSize": "12.5px", "color": "#8B92A0"}}>{"Takes about four minutes"}</span>
</div>
</section>
</div>
 </> : null}
{(submitted) ? <> 
<div style={{"maxWidth": "720px", "margin": "0 auto", "padding": "64px 32px 40px", "textAlign": "center"}}>
<div style={{"width": "62px", "height": "62px", "borderRadius": "50%", "background": "#EAF1ED", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 22px"}}>
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3D6B57" strokeWidth="2.6"><path d="M20 6L9 17l-5-5"></path></svg>
</div>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "34px", "color": "#171A20", "lineHeight": "1.15"}}>{"Application in. A recruiter has it now."}</h1>
<p style={{"fontSize": "16px", "color": "#5D6472", "marginTop": "12px", "lineHeight": "1.6"}}>{applyJobTitle}{" — "}{applyJobMeta}{". Most applicants hear back the same business day."}</p>
<div style={{"textAlign": "left", "border": "1px solid #E4E4E9", "borderRadius": "18px", "background": "#fff", "padding": "24px", "marginTop": "32px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "16px"}}>{"What happens next"}</p>
<ol style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<li style={{"display": "flex", "gap": "13px"}}><span style={{"width": "26px", "height": "26px", "borderRadius": "50%", "background": "#22262E", "color": "#fff", "fontSize": "13px", "fontWeight": "600", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0"}}>{"1"}</span><span style={{"fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>{"A recruiter from your local branch calls to confirm your availability and answer questions about the shift."}</span></li>
<li style={{"display": "flex", "gap": "13px"}}><span style={{"width": "26px", "height": "26px", "borderRadius": "50%", "background": "#22262E", "color": "#fff", "fontSize": "13px", "fontWeight": "600", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0"}}>{"2"}</span><span style={{"fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>{"We complete I-9 and E-Verify, run your background check, and verify any licenses you listed."}</span></li>
<li style={{"display": "flex", "gap": "13px"}}><span style={{"width": "26px", "height": "26px", "borderRadius": "50%", "background": "#22262E", "color": "#fff", "fontSize": "13px", "fontWeight": "600", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0"}}>{"3"}</span><span style={{"fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>{"You are cleared to work, shifts appear on your dashboard, and pay lands every Friday."}</span></li>
</ol>
</div>
<div style={{"display": "flex", "gap": "10px", "justifyContent": "center", "marginTop": "26px", "flexWrap": "wrap"}}>
<button className="platform-hover-36" type="button" onClick={goWorker} style={{"background": "#22262E", "color": "#fff", "padding": "14px 24px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Go to my dashboard"}</button>
<button className="platform-hover-37" type="button" onClick={goJobs} style={{"border": "1.5px solid #E4E4E9", "color": "#22262E", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Browse more openings"}</button>
</div>
</div>
 </> : null}
 </> : null}
{(isWorker) ? <> 
<div style={{"background": "#22262E", "padding": "34px 0"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "display": "flex", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<div>
<p style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "9px"}}>{"Worker dashboard"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "32px", "color": "#fff", "lineHeight": "1.1"}}>{"Welcome back, "}{workerName}</h1>
<p style={{"color": "rgba(255,255,255,0.65)", "fontSize": "14.5px", "marginTop": "8px"}}>{"Columbus branch · Skilled Trades · recruiter Deon Pratt"}</p>
</div>
<div style={{"display": "flex", "alignItems": "center", "gap": "10px", "background": "#EAF1ED", "padding": "11px 16px", "borderRadius": "100px"}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3D6B57" strokeWidth="2.6"><path d="M20 6L9 17l-5-5"></path></svg>
<span style={{"fontSize": "13.5px", "fontWeight": "700", "color": "#3D6B57", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Cleared to work"}</span>
</div>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "28px 32px 8px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "14px"}}>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "8px"}}>{"Hours this week"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20"}}>{"24.0"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"3 of 5 shifts worked"}</p>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#F6EFE7"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#A8825F", "marginBottom": "8px"}}>{"Friday deposit"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20"}}>{"$487.20"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Estimate · direct deposit"}</p>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "8px"}}>{"Assignment"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20", "lineHeight": "1.35"}}>{"Warehouse Associate"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Week 6 of 12 · temp-to-hire"}</p>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "8px"}}>{"Credentials"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#8C3A44", "lineHeight": "1.35"}}>{"1 action needed"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"OSHA-10 not started"}</p>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "20px 32px", "display": "flex", "gap": "24px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 440px", "minWidth": "300px", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<section>
<div style={{"position": "relative", "borderRadius": "18px", "overflow": "hidden", "aspectRatio": "21/7", "marginBottom": "24px", "background": "#E9E9EE"}}>
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=80" alt="Warehouse floor at the assignment site" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "left": "16px", "bottom": "14px", "fontSize": "12px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "backdropFilter": "blur(6px)", "padding": "6px 12px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Your site · Regional Distribution Center, Columbus OH"}</span>
</div>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "14px"}}>{"Your schedule"}</h2>
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
{(myShifts ?? []).map((sh, index38) => <React.Fragment key={index38}>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "background": "#fff", "padding": "16px 18px", "display": "flex", "gap": "16px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"flex": "0 0 62px", "textAlign": "center", "background": "#F4F4F6", "borderRadius": "10px", "padding": "9px 6px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "color": "#8B92A0", "letterSpacing": "0.06em"}}>{sh.day}</p>
<p style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#171A20", "marginTop": "2px"}}>{sh.date}</p>
</div>
<div style={{"flex": "1 1 200px", "minWidth": "180px"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{sh.role}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "marginTop": "2px"}}>{sh.site}{" · "}{sh.time}</p>
</div>
<span style={sh.pill}>{sh.status}</span>
{(sh.isOpen) ? <> 
<button className="platform-hover-39" type="button" style={{"background": "#22262E", "color": "#fff", "padding": "9px 16px", "borderRadius": "8px", "fontSize": "13px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Claim shift"}</button>
 </> : null}
</div>
</React.Fragment>)}
</div>
</section>
<section>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "6px"}}>{"Matched to you"}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "14px"}}>{"Openings your recruiter flagged based on your certifications and shift availability."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(250px,1fr))", "gap": "12px"}}>
{(matchedJobs ?? []).map((m, index40) => <React.Fragment key={index40}>
<button className="platform-hover-41" type="button" onClick={m.open} style={{"textAlign": "left", "border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff", "transition": "border-color .18s ease,box-shadow .18s ease,transform .18s ease"}}>
<span style={m.pillStyle}>{m.vertical}</span>
<p style={{"fontSize": "15.5px", "fontWeight": "600", "color": "#171A20", "margin": "10px 0 3px"}}>{m.title}</p>
<p style={{"fontSize": "13px", "color": "#5D6472"}}>{m.location}{" · "}{m.shift}</p>
<p style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#22262E", "marginTop": "12px"}}>{m.pay}</p>
</button>
</React.Fragment>)}
</div>
</section>
<section>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "14px"}}>{"Pay history"}</h2>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "overflow": "hidden", "background": "#fff"}}>
{(myPay ?? []).map((p, index42) => <React.Fragment key={index42}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "16px", "padding": "15px 18px", "borderBottom": "1px solid #E4E4E9", "flexWrap": "wrap"}}>
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
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "padding": "22px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "14px"}}>{"Credentials & compliance"}</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "14px"}}>
{(myCreds ?? []).map((c, index43) => <React.Fragment key={index43}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "10px", "alignItems": "flex-start"}}>
<div style={{"flex": "1"}}>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20"}}>{c.name}</p>
<p style={{"fontSize": "12.5px", "color": "#8B92A0", "marginTop": "2px"}}>{c.detail}</p>
</div>
<span style={c.pill}>{c.status}</span>
</div>
</React.Fragment>)}
</div>
<button className="platform-hover-44" type="button" style={{"width": "100%", "border": "1.5px solid #22262E", "color": "#22262E", "padding": "11px", "borderRadius": "9px", "fontSize": "13.5px", "fontWeight": "600", "whiteSpace": "nowrap", "marginTop": "18px"}}>{"Start OSHA-10 (paid)"}</button>
</div>
{(hasSaved) ? <> 
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "padding": "22px", "background": "#F4F4F6"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "14px"}}>{"Saved openings"}</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
{(savedJobs ?? []).map((sv, index45) => <React.Fragment key={index45}>
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
 </> : null}
{(isRequest) ? <> 
{(reqNotSubmitted) ? <> 
<div style={{"background": "#22262E", "padding": "38px 0"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "display": "flex", "justifyContent": "space-between", "gap": "32px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<div>
<p style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "10px"}}>{"For employers"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "34px", "color": "#fff", "lineHeight": "1.12", "maxWidth": "560px"}}>{"Tell us what you need. We staff it."}</h1>
<p style={{"color": "rgba(255,255,255,0.68)", "fontSize": "15.5px", "marginTop": "12px", "maxWidth": "520px"}}>{"A recruiter from the nearest branch responds within two hours on business days. Same-day coverage runs through the dispatch line."}</p>
</div>
<div style={{"background": "rgba(255,255,255,0.07)", "border": "1px solid rgba(255,255,255,0.18)", "borderRadius": "14px", "padding": "20px", "minWidth": "240px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "8px"}}>{"Need workers today?"}</p>
<p style={{"fontSize": "20px", "fontWeight": "600", "color": "#fff"}}>{dispatch}</p>
<p style={{"fontSize": "12.5px", "color": "rgba(255,255,255,0.6)", "marginTop": "6px"}}>{"24/7 dispatch · answered by a person"}</p>
</div>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "32px", "display": "flex", "gap": "32px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<form style={{"flex": "1 1 440px", "minWidth": "300px", "display": "flex", "flexDirection": "column", "gap": "26px"}}>
<section style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "background": "#fff", "padding": "26px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "21px", "color": "#171A20", "marginBottom": "18px"}}>{"1. What you need"}</h2>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Practice"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "20px"}}>
{(reqPracticeOptions ?? []).map((p, index46) => <React.Fragment key={index46}>
<button type="button" onClick={p.go} style={p.style}>{p.name}</button>
</React.Fragment>)}
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Role or job title"}</span>
<input data-field="role" value={r.role} onChange={onReqField} placeholder="Forklift operator, 2nd shift" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"How many workers"}</span>
<input data-field="headcount" value={r.headcount} onChange={onReqField} placeholder="6" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "margin": "22px 0 10px"}}>{"Staffing solution"}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "10px"}}>
{(tierOptions ?? []).map((t, index47) => <React.Fragment key={index47}>
<button type="button" onClick={t.go} style={t.style}>
<b style={t.titleStyle}>{t.name}</b>
<span style={{"fontSize": "12.5px", "color": "#5D6472", "lineHeight": "1.5"}}>{t.note}</span>
</button>
</React.Fragment>)}
</div>
</section>
<section style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "background": "#fff", "padding": "26px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "21px", "color": "#171A20", "marginBottom": "18px"}}>{"2. When and where"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Start date"}</span>
<input data-field="start" value={r.start} onChange={onReqField} placeholder="Mon, Sep 14" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Work site address"}</span>
<input data-field="site" value={r.site} onChange={onReqField} placeholder="4400 Etna Pkwy, Dock 12" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"City & state"}</span>
<input data-field="cityState" value={r.cityState} onChange={onReqField} placeholder="Columbus, OH" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "margin": "22px 0 8px"}}>{"Shift"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "20px"}}>
{(reqShiftOptions ?? []).map((sh, index48) => <React.Fragment key={index48}>
<button type="button" onClick={sh.go} style={sh.style}>{sh.name}</button>
</React.Fragment>)}
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Expected duration"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap"}}>
{(reqDurationOptions ?? []).map((d, index49) => <React.Fragment key={index49}>
<button type="button" onClick={d.go} style={d.style}>{d.name}</button>
</React.Fragment>)}
</div>
</section>
<section style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "background": "#fff", "padding": "26px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "21px", "color": "#171A20", "marginBottom": "6px"}}>{"3. Screening & requirements"}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "18px", "maxWidth": "520px"}}>{"Everything you check is completed and documented by us before a worker reaches your site. E-Verify and I-9 run on every hire regardless."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "12px"}}>
{(empReqOptions ?? []).map((rq, index50) => <React.Fragment key={index50}>
<label style={{"display": "flex", "gap": "10px", "alignItems": "center", "fontSize": "13.5px", "color": "#262A33", "cursor": "pointer"}}>
<input type="checkbox" checked={rq.on} onChange={rq.go} style={{"width": "15px", "height": "15px", "accentColor": "#22262E"}} />{"\n              "}{rq.name}{"\n            "}</label>
</React.Fragment>)}
</div>
<label style={{"display": "block", "marginTop": "22px"}}><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Anything else we should know"}</span>
<textarea data-field="notes" value={r.notes} onChange={onReqField} rows="3" placeholder="Cold storage environment, boots required, badge access through Dock 12." style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33", "resize": "vertical"}}></textarea></label>
</section>
<section style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "background": "#fff", "padding": "26px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "21px", "color": "#171A20", "marginBottom": "18px"}}>{"4. Who we contact"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Your name"}</span>
<input data-field="contact" value={r.contact} onChange={onReqField} placeholder="Jordan Blake" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Company"}</span>
<input data-field="company" value={r.company} onChange={onReqField} style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Work email"}</span>
<input data-field="email" value={r.email} onChange={onReqField} placeholder="jordan@company.com" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Phone"}</span>
<input data-field="phone" value={r.phone} onChange={onReqField} placeholder="(614) 555-0170" style={{"width": "100%", "border": "1.5px solid #E4E4E9", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
</div>
<label style={{"display": "flex", "gap": "11px", "alignItems": "flex-start", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5", "marginTop": "20px", "paddingTop": "18px", "borderTop": "1px solid #E4E4E9", "cursor": "pointer"}}>
<input type="checkbox" data-field="urgent" checked={r.urgent} onChange={onReqField} style={{"width": "16px", "height": "16px", "marginTop": "2px", "accentColor": "#22262E"}} />{"\n          This is urgent — route it to the 24/7 dispatch team for same-day coverage.\n        "}</label>
</section>
</form>
<aside style={{"flex": "0 1 280px", "minWidth": "260px", "position": "sticky", "top": "98px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "padding": "22px", "background": "#fff", "boxShadow": "0 1px 2px rgba(23,26,32,0.05),0 8px 24px -12px rgba(23,26,32,0.14)"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "10px"}}>{"Your request"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20", "lineHeight": "1.45", "marginBottom": "16px"}}>{reqSummaryLine}</p>
<button className="platform-hover-51" type="button" onClick={submitRequest} style={{"width": "100%", "background": "#C9A98A", "color": "#171A20", "padding": "14px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Send request to a recruiter"}</button>
<p style={{"fontSize": "12.5px", "color": "#8B92A0", "marginTop": "12px", "lineHeight": "1.5"}}>{"No commitment. You approve every candidate before they show up."}</p>
</div>
<div style={{"borderRadius": "18px", "padding": "22px", "background": "#F4F4F6"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "14px"}}>{"Included on every hire"}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "11px"}}>
{(handledItems ?? []).map((h, index52) => <React.Fragment key={index52}>
<li style={{"display": "flex", "gap": "10px", "fontSize": "13.5px", "color": "#262A33", "lineHeight": "1.5"}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"\n              "}{h.title}{"\n            "}</li>
</React.Fragment>)}
</ul>
</div>
</aside>
</div>
 </> : null}
{(reqSubmitted) ? <> 
<div style={{"maxWidth": "720px", "margin": "0 auto", "padding": "64px 32px 40px", "textAlign": "center"}}>
<div style={{"width": "62px", "height": "62px", "borderRadius": "50%", "background": "#F6EFE7", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 22px"}}>
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.6"><path d="M20 6L9 17l-5-5"></path></svg>
</div>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "34px", "color": "#171A20", "lineHeight": "1.15"}}>{"Request sent. Sourcing has started."}</h1>
<p style={{"fontSize": "16px", "color": "#5D6472", "marginTop": "12px", "lineHeight": "1.6"}}>{reqSummaryLine}{". A recruiter from the nearest branch calls within two hours; first candidates typically reach your portal the same day."}</p>
<div style={{"display": "flex", "gap": "10px", "justifyContent": "center", "marginTop": "28px", "flexWrap": "wrap"}}>
<button className="platform-hover-53" type="button" onClick={goEmployer} style={{"background": "#22262E", "color": "#fff", "padding": "14px 24px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Open employer portal"}</button>
<button className="platform-hover-54" type="button" onClick={goRequest} style={{"border": "1.5px solid #E4E4E9", "color": "#22262E", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Submit another request"}</button>
</div>
</div>
 </> : null}
 </> : null}
{(isEmployer) ? <> 
<div style={{"background": "#22262E", "padding": "34px 0"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "display": "flex", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<div>
<p style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "9px"}}>{"Employer portal"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "32px", "color": "#fff", "lineHeight": "1.1"}}>{"Cardinal Logistics"}</h1>
<p style={{"color": "rgba(255,255,255,0.65)", "fontSize": "14.5px", "marginTop": "8px"}}>{"4 sites · Columbus, Dallas, Phoenix, Charlotte · account manager Deon Pratt"}</p>
</div>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap"}}>
<button type="button" onClick={goRequest} style={{"background": "#C9A98A", "color": "#171A20", "padding": "13px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Request workers"}</button>
<button type="button" style={{"border": "1.5px solid rgba(255,255,255,0.3)", "background": "rgba(255,255,255,0.08)", "color": "#fff", "padding": "13px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Call dispatch "}{dispatch}</button>
</div>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "28px 32px 8px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "14px"}}>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "8px"}}>{"Open requests"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20"}}>{"3"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Across three practices"}</p>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#F6EFE7"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#A8825F", "marginBottom": "8px"}}>{"Awaiting your review"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20"}}>{"3"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Candidates submitted, fully screened"}</p>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "8px"}}>{"On assignment"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20"}}>{"34"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"160.5 hours logged this week"}</p>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "8px"}}>{"Week to date"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20"}}>{"$41,280"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Invoices Friday · net 30"}</p>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "20px 32px", "display": "flex", "gap": "24px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 440px", "minWidth": "300px", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<section>
<div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "marginBottom": "14px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20"}}>{"Staffing requests"}</h2>
<button type="button" onClick={goRequest} style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#22262E", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"New request →"}</button>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "overflow": "hidden", "background": "#fff"}}>
{(newRequestRow) ? <> 
<div style={{"padding": "16px 18px", "borderBottom": "1px solid #E4E4E9", "background": "#F6EFE7", "display": "flex", "gap": "16px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 220px", "minWidth": "200px"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{reqSummaryLine}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "3px"}}>{"Submitted just now · sourcing started"}</p>
</div>
<span style={{"fontSize": "11.5px", "fontWeight": "700", "color": "#A8825F", "background": "#fff", "padding": "5px 10px", "borderRadius": "100px"}}>{"New"}</span>
</div>
 </> : null}
{(requests ?? []).map((rq, index55) => <React.Fragment key={index55}>
<div style={{"padding": "16px 18px", "borderBottom": "1px solid #E4E4E9", "display": "flex", "gap": "16px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 240px", "minWidth": "200px"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{rq.role}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "3px"}}>{rq.id}{" · "}{rq.practice}{" · "}{rq.tier}{" · "}{rq.site}{" · opened "}{rq.opened}</p>
</div>
<div style={{"flex": "0 1 150px", "minWidth": "120px"}}>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginBottom": "6px"}}>{rq.fill}{" filled"}</p>
<div style={{"height": "5px", "background": "#E9E9EE", "borderRadius": "100px", "overflow": "hidden"}}><div style={rq.barStyle}></div></div>
</div>
<span style={rq.pill}>{rq.status}</span>
</div>
</React.Fragment>)}
</div>
</section>
<section>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "6px"}}>{"Candidates awaiting your review"}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "14px"}}>{"Screened, verified, and insured. Approve and we confirm a start date the same day."}</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
{(candidates ?? []).map((c, index56) => <React.Fragment key={index56}>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "background": "#fff", "padding": "16px 18px", "display": "flex", "gap": "14px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"width": "44px", "height": "44px", "borderRadius": "50%", "background": "#F4F4F6", "color": "#22262E", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600", "flexShrink": "0"}}>{c.initials}</div>
<div style={{"flex": "1 1 220px", "minWidth": "190px"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{c.name}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "3px"}}>{c.role}{" · "}{c.creds}</p>
</div>
<div style={{"textAlign": "right", "minWidth": "80px"}}>
<p style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#171A20"}}>{c.rate}</p>
<p style={{"fontSize": "12px", "color": "#8B92A0", "marginTop": "2px"}}>{c.req}</p>
</div>
<div style={{"display": "flex", "gap": "8px"}}>
<button type="button" style={{"border": "1.5px solid #E4E4E9", "color": "#5D6472", "padding": "9px 14px", "borderRadius": "8px", "fontSize": "13px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Pass"}</button>
<button className="platform-hover-57" type="button" style={{"background": "#22262E", "color": "#fff", "padding": "9px 15px", "borderRadius": "8px", "fontSize": "13px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Approve"}</button>
</div>
</div>
</React.Fragment>)}
</div>
</section>
<section>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(140px,1fr))", "gap": "8px", "marginBottom": "20px"}}>
<div style={{"position": "relative", "borderRadius": "12px", "overflow": "hidden", "aspectRatio": "4/3", "background": "#E9E9EE"}}>
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80" alt="Columbus distribution centre" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "left": "9px", "bottom": "8px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.62)", "padding": "4px 9px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Columbus"}</span>
</div>
<div style={{"position": "relative", "borderRadius": "12px", "overflow": "hidden", "aspectRatio": "4/3", "background": "#E9E9EE"}}>
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" alt="Dallas hospital assignment" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "left": "9px", "bottom": "8px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.62)", "padding": "4px 9px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Dallas"}</span>
</div>
<div style={{"position": "relative", "borderRadius": "12px", "overflow": "hidden", "aspectRatio": "4/3", "background": "#E9E9EE"}}>
<img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" alt="Phoenix fleet shop" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "left": "9px", "bottom": "8px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.62)", "padding": "4px 9px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Phoenix"}</span>
</div>
<div style={{"position": "relative", "borderRadius": "12px", "overflow": "hidden", "aspectRatio": "4/3", "background": "#E9E9EE"}}>
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80" alt="Charlotte office site" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "left": "9px", "bottom": "8px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.62)", "padding": "4px 9px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Charlotte"}</span>
</div>
</div>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "14px"}}>{"Workers on assignment"}</h2>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "14px", "overflow": "hidden", "background": "#fff"}}>
{(onAssign ?? []).map((w, index58) => <React.Fragment key={index58}>
<div style={{"padding": "15px 18px", "borderBottom": "1px solid #E4E4E9", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 220px"}}>
<p style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#171A20"}}>{w.name}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "2px"}}>{w.role}{" · "}{w.site}</p>
</div>
<div style={{"textAlign": "right"}}>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20"}}>{w.hours}{" hrs"}</p>
<p style={{"fontSize": "12px", "color": "#8B92A0", "marginTop": "2px"}}>{w.week}</p>
</div>
</div>
</React.Fragment>)}
</div>
</section>
</div>
<aside style={{"flex": "0 1 280px", "minWidth": "260px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"borderRadius": "18px", "padding": "22px", "background": "#22262E"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "14px"}}>{"Compliance status"}</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
{(handledItems ?? []).map((h, index59) => <React.Fragment key={index59}>
<div style={{"display": "flex", "gap": "10px", "alignItems": "flex-start"}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A98A" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "3px"}}><path d="M20 6L9 17l-5-5"></path></svg>
<div>
<b style={{"display": "block", "fontSize": "14px", "fontWeight": "600", "color": "#fff"}}>{h.title}</b>
<span style={{"fontSize": "12.5px", "color": "rgba(255,255,255,0.6)"}}>{h.note}</span>
</div>
</div>
</React.Fragment>)}
</div>
<p style={{"fontSize": "12.5px", "color": "rgba(255,255,255,0.6)", "marginTop": "16px", "paddingTop": "14px", "borderTop": "1px solid rgba(255,255,255,0.14)", "lineHeight": "1.55"}}>{"All 34 workers on assignment have current I-9, E-Verify, and required credentials on file."}</p>
</div>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "padding": "22px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8B92A0", "marginBottom": "14px"}}>{"This week's invoice"}</p>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13.5px", "color": "#5D6472", "padding": "8px 0"}}><span>{"Skilled Trades · 21 workers"}</span><span style={{"color": "#171A20", "fontWeight": "600"}}>{"$24,150"}</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13.5px", "color": "#5D6472", "padding": "8px 0", "borderTop": "1px solid #E4E4E9"}}><span>{"Healthcare · 4 travel RNs"}</span><span style={{"color": "#171A20", "fontWeight": "600"}}>{"$11,600"}</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13.5px", "color": "#5D6472", "padding": "8px 0", "borderTop": "1px solid #E4E4E9"}}><span>{"Technical Trades · 5 techs"}</span><span style={{"color": "#171A20", "fontWeight": "600"}}>{"$4,340"}</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13.5px", "color": "#5D6472", "padding": "8px 0", "borderTop": "1px solid #E4E4E9"}}><span>{"Professional · 4 placements"}</span><span style={{"color": "#171A20", "fontWeight": "600"}}>{"$1,190"}</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "15px", "padding": "12px 0 0", "borderTop": "1.5px solid #22262E", "marginTop": "6px"}}><b style={{"color": "#171A20", "fontWeight": "600"}}>{"Week to date"}</b><b style={{"color": "#171A20", "fontWeight": "600"}}>{"$41,280"}</b></div>
<button className="platform-hover-60" type="button" style={{"width": "100%", "border": "1.5px solid #22262E", "color": "#22262E", "padding": "11px", "borderRadius": "9px", "fontSize": "13.5px", "fontWeight": "600", "whiteSpace": "nowrap", "marginTop": "16px"}}>{"Download timesheets"}</button>
</div>
<div style={{"borderRadius": "18px", "padding": "22px", "background": "#F6EFE7"}}>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20", "marginBottom": "6px"}}>{"Need coverage tonight?"}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.55", "marginBottom": "12px"}}>{"Dispatch is staffed around the clock and can fill same-day shifts from the local branch bench."}</p>
<p style={{"fontSize": "17px", "fontWeight": "600", "color": "#171A20"}}>{dispatch}</p>
</div>
</aside>
</div>
 </> : null}
{(isTraction) ? <> 
<div style={{"background": "#3A1D22", "padding": "56px 0 52px"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px"}}>
<span style={{"display": "inline-block", "fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.09em", "textTransform": "uppercase", "color": "#3A1D22", "background": "#C9A98A", "padding": "5px 11px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Illustrative figures"}</span>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "44px", "lineHeight": "1.08", "color": "#F4F4F6", "letterSpacing": "-0.015em", "maxWidth": "760px", "margin": "20px 0 0"}}>{"One brand, four workforces, one bench that redeploys across all of them."}</h1>
<p style={{"fontSize": "17px", "color": "rgba(244,244,246,0.72)", "lineHeight": "1.6", "maxWidth": "640px", "marginTop": "16px"}}>{"Asepsis operates four dedicated recruiting practices out of a shared branch network. The same 48 branches, the same compliance spine, and the same worker pool serve hospitals, distribution centres, contractors, and back offices."}</p>
<p style={{"fontSize": "13px", "color": "rgba(244,244,246,0.5)", "marginTop": "22px", "maxWidth": "640px", "lineHeight": "1.55"}}>{"Every number on this page is illustrative and shown for layout purposes only. Replace with audited figures before external distribution."}</p>
</div>
</div>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.09em", "textTransform": "uppercase", "color": "#A8825F", "marginBottom": "12px"}}>{"Market"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.15", "color": "#171A20", "maxWidth": "640px"}}>{"A large market with no consolidated multi-vertical operator"}</h2>
<p style={{"fontSize": "15.5px", "color": "#5D6472", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"Staffing demand is enormous and structurally fragmented. Most firms specialise in one vertical in one metro, so an employer with a hospital, a warehouse, and a back office signs three vendors."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "16px", "marginTop": "32px"}}>
{(marketStats ?? []).map((m, index61) => <React.Fragment key={index61}>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "18px", "padding": "26px", "background": "#fff"}}>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "38px", "fontWeight": "600", "color": "#3A1D22", "lineHeight": "1"}}>{m.k}</p>
<p style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#171A20", "marginTop": "12px"}}>{m.v}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.55", "marginTop": "6px"}}>{m.n}</p>
</div>
</React.Fragment>)}
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "56px 32px 8px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.09em", "textTransform": "uppercase", "color": "#A8825F", "marginBottom": "12px"}}>{"The model"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.15", "color": "#171A20", "maxWidth": "640px"}}>{"Four practices that fund each other"}</h2>
<p style={{"fontSize": "15.5px", "color": "#5D6472", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"Skilled Trades volume keeps branches busy and the bench deep. Healthcare and Technical Trades carry the rate. Professional placements convert to fees. The mix is what a single-vertical competitor cannot copy."}</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "1px", "background": "#E4E4E9", "border": "1px solid #E4E4E9", "borderRadius": "18px", "overflow": "hidden", "marginTop": "32px"}}>
{(modelRows ?? []).map((m, index62) => <React.Fragment key={index62}>
<div style={{"background": "#fff", "padding": "22px 24px", "display": "flex", "gap": "20px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 240px", "minWidth": "220px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "9px", "marginBottom": "5px"}}>
<span style={m.dot}></span>
<p style={{"fontSize": "16px", "fontWeight": "600", "color": "#171A20"}}>{m.name}</p>
</div>
<p style={{"fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.55"}}>{m.note}</p>
</div>
<div style={{"flex": "0 1 200px", "minWidth": "160px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "12.5px", "color": "#5D6472", "marginBottom": "7px"}}><span>{"Share of revenue"}</span><b style={{"color": "#171A20", "fontWeight": "600"}}>{m.share}</b></div>
<div style={{"height": "6px", "background": "#E9E9EE", "borderRadius": "100px", "overflow": "hidden"}}><div style={m.barStyle}></div></div>
</div>
<p style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#3A1D22", "whiteSpace": "nowrap", "minWidth": "130px", "textAlign": "right"}}>{m.margin}</p>
</div>
</React.Fragment>)}
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "56px 32px 8px"}}>
<div style={{"background": "#3A1D22", "borderRadius": "22px", "padding": "44px 40px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.09em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "12px"}}>{"Retention"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.15", "color": "#F4F4F6", "maxWidth": "620px"}}>{"The second placement is where the margin is"}</h2>
<p style={{"fontSize": "15.5px", "color": "rgba(244,244,246,0.7)", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"Acquiring a worker costs money once. Redeploying them across four practices costs almost nothing, and a worker who takes a second assignment is worth several times the first."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(220px,1fr))", "gap": "14px", "marginTop": "32px"}}>
{(retentionStats ?? []).map((r, index63) => <React.Fragment key={index63}>
<div style={{"background": "rgba(244,244,246,0.07)", "border": "1px solid rgba(244,244,246,0.14)", "borderRadius": "16px", "padding": "22px"}}>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "32px", "fontWeight": "600", "color": "#C9A98A", "lineHeight": "1"}}>{r.k}</p>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#F4F4F6", "marginTop": "11px"}}>{r.v}</p>
<p style={{"fontSize": "12.5px", "color": "rgba(244,244,246,0.6)", "lineHeight": "1.55", "marginTop": "6px"}}>{r.n}</p>
</div>
</React.Fragment>)}
</div>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "56px 32px 24px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "16px"}}>
<div style={{"border": "1px solid #E4E4E9", "borderRadius": "22px", "padding": "34px", "background": "#F4F4F6"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "8px"}}>{"See the operating product"}</h3>
<p style={{"fontSize": "14.5px", "color": "#5D6472", "lineHeight": "1.6", "marginBottom": "20px"}}>{"The jobs board, apply flow, worker dashboard, and employer portal that run the business day to day."}</p>
<button className="platform-hover-64" type="button" onClick={goJobs} style={{"background": "#22262E", "color": "#fff", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Open the product"}</button>
</div>
<div style={{"borderRadius": "22px", "padding": "34px", "background": "#C9A98A"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontWeight": "500", "fontSize": "24px", "color": "#3A1D22", "marginBottom": "8px"}}>{"Talk to us"}</h3>
<p style={{"fontSize": "14.5px", "color": "rgba(58,29,34,0.78)", "lineHeight": "1.6", "marginBottom": "20px"}}>{"Founders and operators reach the same 24/7 line the branches use."}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "24px", "fontWeight": "600", "color": "#3A1D22"}}>{dispatch}</p>
</div>
</div>
</section>
 </> : null}
</main>
<footer style={{"background": "#171A20", "color": "rgba(255,255,255,0.55)", "padding": "40px 0 30px", "marginTop": "40px"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px 36px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(160px,1fr))", "gap": "28px"}}>
<div>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "14px"}}>{"For workers"}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "10px", "fontSize": "13.5px"}}>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Healthcare jobs"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Skilled trades jobs"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Technical trades jobs"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Professional jobs"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Weekly pay & benefits"}</a></li>
</ul>
</div>
<div>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "14px"}}>{"For employers"}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "10px", "fontSize": "13.5px"}}>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Request workers"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Temporary staffing"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Temp-to-hire"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Direct placement"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Per diem & travel healthcare"}</a></li>
</ul>
</div>
<div>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "14px"}}>{"Company"}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "10px", "fontSize": "13.5px"}}>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"About Asepsis"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Branch locations"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Compliance & safety"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Contact & support"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Careers at Asepsis"}</a></li>
</ul>
</div>
<div>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "14px"}}>{"Legal"}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "10px", "fontSize": "13.5px"}}>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Privacy policy"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Terms of service"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"Accessibility"}</a></li>
<li><a href="#" style={{"color": "rgba(244,244,246,0.62)"}}>{"E-Verify notice"}</a></li>
</ul>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "28px 32px 0", "borderTop": "1px solid rgba(244,244,246,0.14)", "display": "flex", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap", "alignItems": "center"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "11px"}}>
<svg width="26" height="26" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#FFFFFF"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "lineHeight": "1"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "19px", "fontWeight": "600", "color": "#fff"}}>{"Asepsis"}</span>
<span style={{"fontSize": "9px", "fontWeight": "700", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "#C9A98A", "marginTop": "3px"}}>{"Staffing"}</span>
</span>
</div>
<p style={{"fontSize": "12.5px", "maxWidth": "520px"}}>{"© 2026 Asepsis Staffing, Inc. · 48 branches nationwide · E-Verify participant · Equal opportunity employer."}</p>
<p style={{"fontSize": "12.5px", "color": "rgba(255,255,255,0.75)"}}>{"24/7 dispatch "}{dispatch}</p>
</div>
</footer>
</div>

</>;
}
