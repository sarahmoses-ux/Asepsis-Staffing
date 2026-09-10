import React from 'react';

export default function ApplyScreen(values) {
  const { applyJobMeta, applyJobTitle, applySteps, availOptions, back, credOptions, d, eligibleOptions, f, goJobs, goWorker, n, next, notLastStep, notSubmitted, onForm, payOptions, practiceOptions, reviewAvail, reviewContact, reviewCreds, reviewName, reviewPay, reviewPractices, showBack, step1, step2, step3, step4, stepLabel, submitApply, submitted, zip } = values;
  return <>
{(notSubmitted) ? <> 
<div style={{"background": "#F5F4F2", "borderBottom": "1px solid #E5E2DC"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "26px 32px"}}>
<button type="button" onClick={goJobs} style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#5D6472", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"← Back to openings"}</button>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "30px", "color": "#171A20", "marginTop": "12px"}}>{"Apply once. We match you to every practice."}</h1>
<p style={{"fontSize": "14.5px", "color": "#5D6472", "marginTop": "6px"}}>{"Applying for "}<b style={{"color": "#171A20", "fontWeight": "600"}}>{applyJobTitle}</b>{" — "}{applyJobMeta}</p>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "32px", "display": "flex", "gap": "32px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<aside style={{"flex": "0 1 280px", "minWidth": "250px", "background": "#F5F4F2", "borderRadius": "18px", "padding": "12px", "position": "sticky", "top": "98px"}}>
{(applySteps ?? []).map((st, index34) => <React.Fragment key={index34}>
<button type="button" onClick={st.go} style={st.style}>
<span style={st.numStyle}>{st.n}</span>
<span>
<b style={st.titleStyle}>{st.title}</b>
<span style={{"display": "block", "fontSize": "12.5px", "color": "#5B6270", "marginTop": "2px"}}>{st.note}</span>
</span>
</button>
</React.Fragment>)}
<div style={{"padding": "14px", "marginTop": "6px", "borderTop": "1px solid #E5E2DC"}}>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "lineHeight": "1.55"}}>{"No resume needed for most roles. Prefer in person? Bring your ID to any of our 48 branches and we finish this with you."}</p>
</div>
</aside>
<section style={{"flex": "1 1 440px", "minWidth": "300px", "border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "28px", "boxShadow": "0 1px 2px rgba(23,26,32,0.05),0 8px 24px -12px rgba(23,26,32,0.14)"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "16px"}}>{stepLabel}</p>
{(step1) ? <> 
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "20px"}}>{"About you"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"First name"}</span>
<input data-field="first" value={f.first} onChange={onForm} placeholder="DeShawn" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Last name"}</span>
<input data-field="last" value={f.last} onChange={onForm} placeholder="Carter" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Mobile phone"}</span>
<input type="tel" data-field="phone" value={f.phone} onChange={onForm} placeholder="(614) 555-0118" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Email"}</span>
<input type="email" data-field="email" value={f.email} onChange={onForm} placeholder="you@email.com" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"ZIP code"}</span>
<input data-field="zip" value={f.zip} onChange={onForm} placeholder="43215" style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33"}} /></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"How did you hear about us?"}</span>
<select data-field="heard" value={f.heard} onChange={onForm} style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33", "background": "#fff"}}>
<option>{"Referred by a friend"}</option><option>{"Walked into a branch"}</option><option>{"Job board or search"}</option><option>{"Worked with Asepsis before"}</option>
</select></label>
</div>
<p style={{"fontSize": "12.5px", "color": "#5B6270", "marginTop": "18px", "lineHeight": "1.55"}}>{"We text you about shifts and pay. Standard message rates apply; reply STOP any time."}</p>
 </> : null}
{(step2) ? <> 
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "6px"}}>{"Work eligibility"}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "22px", "maxWidth": "520px"}}>{"Every Asepsis hire runs through E-Verify and I-9. You can finish this online or at a branch with your original documents."}</p>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Are you authorized to work in the United States?"}</p>
<div style={{"display": "flex", "gap": "8px", "flexWrap": "wrap", "marginBottom": "22px"}}>
{(eligibleOptions ?? []).map((e, index35) => <React.Fragment key={index35}>
<button type="button" onClick={e.go} style={e.style}>{e.name}</button>
</React.Fragment>)}
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "borderTop": "1px solid #E5E2DC", "paddingTop": "20px"}}>
<label style={{"display": "flex", "gap": "11px", "alignItems": "flex-start", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5", "cursor": "pointer"}}>
<input type="checkbox" data-field="over18" checked={f.over18} onChange={onForm} style={{"width": "16px", "height": "16px", "marginTop": "2px", "accentColor": "#22262E"}} />{"\n            I am 18 years of age or older.\n          "}</label>
<label style={{"display": "flex", "gap": "11px", "alignItems": "flex-start", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5", "cursor": "pointer"}}>
<input type="checkbox" data-field="consent" checked={f.consent} onChange={onForm} style={{"width": "16px", "height": "16px", "marginTop": "2px", "accentColor": "#22262E"}} />{"\n            I consent to a background check and, where a client requires it, a drug screen. Asepsis pays for both.\n          "}</label>
</div>
<div style={{"background": "#F5F4F2", "borderRadius": "12px", "padding": "18px", "marginTop": "22px"}}>
<p style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "8px"}}>{"Bring to your first branch visit"}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.6"}}>{"Photo ID and a Social Security card or birth certificate — or a passport on its own. If you are missing a document, your recruiter will tell you what else works."}</p>
</div>
 </> : null}
{(step3) ? <> 
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "6px"}}>{"Credentials & availability"}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "22px", "maxWidth": "520px"}}>{"Tell us what you hold and when you can work. We verify licenses on your behalf — no chasing state boards."}</p>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Licenses & certifications you hold"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "22px"}}>
{(credOptions ?? []).map((c, index36) => <React.Fragment key={index36}>
<button type="button" onClick={c.go} style={c.style}>{c.name}</button>
</React.Fragment>)}
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Practices you want work in"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "22px"}}>
{(practiceOptions ?? []).map((p, index37) => <React.Fragment key={index37}>
<button type="button" onClick={p.go} style={p.style}>{p.name}</button>
</React.Fragment>)}
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "8px"}}>{"Shifts you can take"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap", "marginBottom": "22px"}}>
{(availOptions ?? []).map((a, index38) => <React.Fragment key={index38}>
<button type="button" onClick={a.go} style={a.style}>{a.name}</button>
</React.Fragment>)}
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px", "borderTop": "1px solid #E5E2DC", "paddingTop": "20px"}}>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"How soon can you start?"}</span>
<select data-field="start" value={f.start} onChange={onForm} style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33", "background": "#fff"}}>
<option>{"Immediately"}</option><option>{"Within a week"}</option><option>{"Two to four weeks"}</option><option>{"Just looking for now"}</option>
</select></label>
<label><span style={{"display": "block", "fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "marginBottom": "6px"}}>{"Transportation"}</span>
<select data-field="transport" value={f.transport} onChange={onForm} style={{"width": "100%", "border": "1.5px solid #E5E2DC", "borderRadius": "10px", "padding": "12px 13px", "fontSize": "14.5px", "color": "#262A33", "background": "#fff"}}>
<option>{"Own vehicle"}</option><option>{"Public transit"}</option><option>{"Rideshare or carpool"}</option>
</select></label>
</div>
<p style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5D6472", "margin": "22px 0 8px"}}>{"How do you want to be paid every Friday?"}</p>
<div style={{"display": "flex", "gap": "7px", "flexWrap": "wrap"}}>
{(payOptions ?? []).map((p, index39) => <React.Fragment key={index39}>
<button type="button" onClick={p.go} style={p.style}>{p.name}</button>
</React.Fragment>)}
</div>
<div style={{"border": "1.5px dashed #E5E2DC", "borderRadius": "12px", "padding": "20px", "textAlign": "center", "marginTop": "22px", "background": "#F5F4F2"}}>
<p style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{"Resume or license copies (optional)"}</p>
<p style={{"fontSize": "12.5px", "color": "#5B6270", "fontFamily": "ui-monospace,monospace"}}>{"drop a PDF or photo here · not required for most roles"}</p>
</div>
 </> : null}
{(step4) ? <> 
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "20px"}}>{"Review & submit"}</h2>
<div style={{"display": "flex", "flexDirection": "column", "gap": "1px", "background": "#E5E2DC", "border": "1px solid #E5E2DC", "borderRadius": "14px", "overflow": "hidden"}}>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5B6270"}}>{"Name"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewName}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5B6270"}}>{"Contact"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewContact}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5B6270"}}>{"Applying for"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{applyJobTitle}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5B6270"}}>{"Practices"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewPractices}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5B6270"}}>{"Availability"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewAvail}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5B6270"}}>{"Credentials"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewCreds}</span></div>
<div style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#5B6270"}}>{"Pay"}</span><span style={{"fontSize": "14px", "color": "#171A20", "fontWeight": "500"}}>{reviewPay}</span></div>
</div>
<p style={{"fontSize": "12.5px", "color": "#5B6270", "marginTop": "18px", "lineHeight": "1.6"}}>{"By submitting you confirm the information is accurate and authorize Asepsis Staffing to verify your credentials and eligibility to work. Asepsis is an equal opportunity employer and an E-Verify participant."}</p>
 </> : null}
<div style={{"display": "flex", "gap": "10px", "alignItems": "center", "marginTop": "26px", "paddingTop": "22px", "borderTop": "1px solid #E5E2DC", "flexWrap": "wrap"}}>
{(showBack) ? <> 
<button className="site-hover-40" type="button" onClick={back} style={{"border": "1.5px solid #E5E2DC", "color": "#22262E", "padding": "13px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Back"}</button>
 </> : null}
{(step4) ? <> 
<button type="button" onClick={submitApply} style={{"background": "#C9A98A", "color": "#171A20", "padding": "14px 26px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Submit application"}</button>
 </> : null}
{(notLastStep) ? <> 
<button className="site-hover-41" type="button" onClick={next} style={{"background": "#22262E", "color": "#fff", "padding": "14px 26px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Continue"}</button>
 </> : null}
<span style={{"fontSize": "12.5px", "color": "#5B6270"}}>{"Takes about four minutes"}</span>
</div>
</section>
</div>
 </> : null}
{(submitted) ? <> 
<div style={{"maxWidth": "720px", "margin": "0 auto", "padding": "64px 32px 40px", "textAlign": "center"}}>
<div style={{"width": "62px", "height": "62px", "borderRadius": "50%", "background": "#EAF1ED", "display": "flex", "alignItems": "center", "justifyContent": "center", "margin": "0 auto 22px"}}>
<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3D6B57" strokeWidth="2.6"><path d="M20 6L9 17l-5-5"></path></svg>
</div>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "34px", "color": "#171A20", "lineHeight": "1.15"}}>{"Demo application complete."}</h1>
<p style={{"fontSize": "16px", "color": "#5D6472", "marginTop": "12px", "lineHeight": "1.6"}}>{applyJobTitle}{" — "}{applyJobMeta}{". This preview has not sent your application to a recruiter."}</p>
<div style={{"textAlign": "left", "border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "24px", "marginTop": "32px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "16px"}}>{"Recruiting process preview"}</p>
<ol style={{"display": "flex", "flexDirection": "column", "gap": "16px"}}>
<li style={{"display": "flex", "gap": "13px"}}><span style={{"width": "26px", "height": "26px", "borderRadius": "50%", "background": "#22262E", "color": "#fff", "fontSize": "13px", "fontWeight": "600", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0"}}>{"1"}</span><span style={{"fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>{"A recruiter from your local branch calls to confirm your availability and answer questions about the shift."}</span></li>
<li style={{"display": "flex", "gap": "13px"}}><span style={{"width": "26px", "height": "26px", "borderRadius": "50%", "background": "#22262E", "color": "#fff", "fontSize": "13px", "fontWeight": "600", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0"}}>{"2"}</span><span style={{"fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>{"We complete I-9 and E-Verify, run your background check, and verify any licenses you listed."}</span></li>
<li style={{"display": "flex", "gap": "13px"}}><span style={{"width": "26px", "height": "26px", "borderRadius": "50%", "background": "#22262E", "color": "#fff", "fontSize": "13px", "fontWeight": "600", "display": "flex", "alignItems": "center", "justifyContent": "center", "flexShrink": "0"}}>{"3"}</span><span style={{"fontSize": "14.5px", "color": "#262A33", "lineHeight": "1.55"}}>{"You are cleared to work, shifts appear on your dashboard, and pay lands every Friday."}</span></li>
</ol>
</div>
<div style={{"display": "flex", "gap": "10px", "justifyContent": "center", "marginTop": "26px", "flexWrap": "wrap"}}>
<button className="site-hover-42" type="button" onClick={goWorker} style={{"background": "#22262E", "color": "#fff", "padding": "14px 24px", "borderRadius": "10px", "fontSize": "15px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Go to my dashboard"}</button>
<button className="site-hover-43" type="button" onClick={goJobs} style={{"border": "1.5px solid #E5E2DC", "color": "#22262E", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Browse more openings"}</button>
</div>
</div>
 </> : null}
</>;
}
