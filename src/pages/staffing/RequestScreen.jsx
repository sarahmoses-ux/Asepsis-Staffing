import React from 'react';

export default function RequestScreen(values) {
  const { dispatch, empReqOptions, goEmployer, goRequest, handledItems, onReqField, r, reqDurationOptions, reqNotSubmitted, reqPracticeOptions, reqShiftOptions, reqSubmitted, reqSummaryLine, submitRequest, tierOptions } = values;
  return <>
{(reqNotSubmitted) ? <> 
<div style={{"background": "#22262E", "padding": "38px 0"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "display": "flex", "justifyContent": "space-between", "gap": "32px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<div>
<p style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "10px"}}>{"For employers"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "34px", "color": "#fff", "lineHeight": "1.12", "maxWidth": "560px"}}>{"Tell us what you need. We staff it."}</h1>
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
<form aria-label="Staffing request" style={{"flex": "1 1 440px", "minWidth": "300px", "display": "flex", "flexDirection": "column", "gap": "26px"}}>
<section style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "26px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "21px", "color": "#171A20", "marginBottom": "18px"}}>{"1. What you need"}</h2>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Practice"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "20px"}}>
{(reqPracticeOptions ?? []).map((p, index52) => <React.Fragment key={index52}>
<button type="button" onClick={p.go} style={p.style}>{p.name}</button>
</React.Fragment>)}
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Role or job title"}</span>
<input data-field="role" value={r.role} onChange={onReqField} placeholder="Forklift operator, 2nd shift" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"How many workers"}</span>
<input type="number" min="1" step="1" data-field="headcount" value={r.headcount} onChange={onReqField} placeholder="6" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "margin": "22px 0 10px"}}>{"Staffing solution"}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "10px"}}>
{(tierOptions ?? []).map((t, index53) => <React.Fragment key={index53}>
<button type="button" onClick={t.go} style={t.style}>
<b style={t.titleStyle}>{t.name}</b>
<span style={{"fontSize": "12.5px", "color": "#5D6472", "lineHeight": "1.5"}}>{t.note}</span>
</button>
</React.Fragment>)}
</div>
</section>
<section style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "26px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "21px", "color": "#171A20", "marginBottom": "18px"}}>{"2. When and where"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Start date"}</span>
<input data-field="start" value={r.start} onChange={onReqField} placeholder="Mon, Sep 14" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Work site address"}</span>
<input data-field="site" value={r.site} onChange={onReqField} placeholder="4400 Etna Pkwy, Dock 12" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"City & state"}</span>
<input data-field="cityState" value={r.cityState} onChange={onReqField} placeholder="Columbus, OH" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "margin": "22px 0 8px"}}>{"Shift"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "20px"}}>
{(reqShiftOptions ?? []).map((sh, index54) => <React.Fragment key={index54}>
<button type="button" onClick={sh.go} style={sh.style}>{sh.name}</button>
</React.Fragment>)}
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Expected duration"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap"}}>
{(reqDurationOptions ?? []).map((d, index55) => <React.Fragment key={index55}>
<button type="button" onClick={d.go} style={d.style}>{d.name}</button>
</React.Fragment>)}
</div>
</section>
<section style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "26px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "21px", "color": "#171A20", "marginBottom": "6px"}}>{"3. Screening & requirements"}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "18px", "maxWidth": "520px"}}>{"Everything you check is completed and documented by us before a worker reaches your site. E-Verify and I-9 run on every hire regardless."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "12px"}}>
{(empReqOptions ?? []).map((rq, index56) => <React.Fragment key={index56}>
<label style={{"display": "flex", "gap": "10px", "alignItems": "center", "fontSize": "13.5px", "color": "#262A33", "cursor": "pointer"}}>
<input type="checkbox" checked={rq.on} onChange={rq.go} style={{"width": "15px", "height": "15px", "accentColor": "#22262E"}} />{"\n              "}{rq.name}{"\n            "}</label>
</React.Fragment>)}
</div>
<label style={{"display": "block", "marginTop": "22px"}}><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Anything else we should know"}</span>
<textarea data-field="notes" value={r.notes} onChange={onReqField} rows="3" placeholder="Cold storage environment, boots required, badge access through Dock 12." style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33", "resize": "vertical"}}></textarea></label>
</section>
<section style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "26px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "21px", "color": "#171A20", "marginBottom": "18px"}}>{"4. Who we contact"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Your name"}</span>
<input data-field="contact" value={r.contact} onChange={onReqField} placeholder="Jordan Blake" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Company"}</span>
<input data-field="company" value={r.company} onChange={onReqField} style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Work email"}</span>
<input type="email" data-field="email" value={r.email} onChange={onReqField} placeholder="jordan@company.com" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Phone"}</span>
<input type="tel" data-field="phone" value={r.phone} onChange={onReqField} placeholder="(614) 555-0170" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
</div>
<label style={{"display": "flex", "gap": "11px", "alignItems": "flex-start", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5", "marginTop": "20px", "paddingTop": "18px", "borderTop": "1px solid #E5E2DC", "cursor": "pointer"}}>
<input type="checkbox" data-field="urgent" checked={r.urgent} onChange={onReqField} style={{"width": "16px", "height": "16px", "marginTop": "2px", "accentColor": "#22262E"}} />{"\n          This is urgent — route it to the 24/7 dispatch team for same-day coverage.\n        "}</label>
</section>
</form>
<aside style={{"flex": "0 1 280px", "minWidth": "260px", "position": "sticky", "top": "98px", "display": "flex", "flexDirection": "column", "gap": "16px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "padding": "22px", "background": "#fff", "boxShadow": "0 1px 2px rgba(23,26,32,0.05),0 8px 24px -12px rgba(23,26,32,0.14)"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "10px"}}>{"Your request"}</p>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20", "lineHeight": "1.45", "marginBottom": "16px"}}>{reqSummaryLine}</p>
<button className="site-hover-57" type="button" onClick={submitRequest} style={{"width": "100%", "background": "#C9A98A", "color": "#171A20", "padding": "14px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Send request to a recruiter"}</button>
<p style={{"fontSize": "12.5px", "color": "#5B6270", "marginTop": "12px", "lineHeight": "1.5"}}>{"No commitment. You approve every candidate before they show up."}</p>
</div>
<div style={{"borderRadius": "18px", "padding": "22px", "background": "#F5F4F2"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "14px"}}>{"Included on every hire"}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "11px"}}>
{(handledItems ?? []).map((h, index58) => <React.Fragment key={index58}>
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
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "34px", "color": "#171A20", "lineHeight": "1.15"}}>{"Demo staffing request complete."}</h1>
<p style={{"fontSize": "16px", "color": "#5D6472", "marginTop": "12px", "lineHeight": "1.6"}}>{reqSummaryLine}{". This preview has not sent your request to a recruiter."}</p>
<div style={{"display": "flex", "gap": "10px", "justifyContent": "center", "marginTop": "28px", "flexWrap": "wrap"}}>
<button className="site-hover-59" type="button" onClick={goEmployer} style={{"background": "#22262E", "color": "#fff", "padding": "14px 24px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Open employer portal"}</button>
<button className="site-hover-60" type="button" onClick={goRequest} style={{"border": "1.5px solid #E5E2DC", "color": "#22262E", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Submit another request"}</button>
</div>
</div>
 </> : null}
</>;
}
