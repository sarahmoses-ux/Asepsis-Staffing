import React from 'react';

export default function HomeScreen(values) {
  const { d, dispatch, driverSeats, goApply, goDrivers, goEmployer, goRemote, goRequest, goSponsored, handledItems, locations, onSearch, onZip, practiceCards, r, remoteCount, runSearch, search, sponsoredOpenings, st, tiers, zip } = values;
  return <>
<div style={{"background": "#3A1D22", "overflow": "hidden"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "display": "flex", "gap": "48px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 480px", "minWidth": "300px", "padding": "72px 0"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "20px"}}>{"US staffing · four practices · 48 branches"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "46px", "lineHeight": "1.06", "letterSpacing": "-0.02em", "color": "#F5F4F2", "maxWidth": "620px"}}>{"Every kind of work. One trusted staffing partner."}</h1>
<p style={{"fontSize": "17.5px", "lineHeight": "1.6", "color": "rgba(244,244,246,0.74)", "maxWidth": "520px", "marginTop": "20px"}}>{"From hospital floors to warehouse docks to job sites to corner offices — we place people in real shifts, fast, and pay weekly."}</p>
<div style={{"display": "flex", "gap": "8px", "background": "#fff", "borderRadius": "12px", "padding": "8px", "marginTop": "28px", "maxWidth": "560px", "flexWrap": "wrap"}}>
<label style={{"flex": "1 1 200px", "display": "flex", "alignItems": "center", "gap": "9px", "padding": "10px 12px", "borderRadius": "8px", "background": "#F5F4F2"}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B6270" strokeWidth="2"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.35-4.35"></path></svg>
<input value={search} onChange={onSearch} placeholder="Job title, trade, or licence" style={{"border": "none", "outline": "none", "background": "transparent", "fontSize": "14.5px", "color": "#262A33", "width": "100%"}} />
</label>
<label style={{"flex": "1 1 130px", "display": "flex", "alignItems": "center", "gap": "9px", "padding": "10px 12px", "borderRadius": "8px", "background": "#F5F4F2"}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5B6270" strokeWidth="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input value={zip} onChange={onZip} placeholder="ZIP or city" style={{"border": "none", "outline": "none", "background": "transparent", "fontSize": "14.5px", "color": "#262A33", "width": "100%"}} />
</label>
<button className="site-hover-3" type="button" onClick={runSearch} style={{"background": "#22262E", "color": "#fff", "padding": "12px 22px", "borderRadius": "8px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease"}}>{"Search jobs"}</button>
</div>
<div style={{"display": "flex", "gap": "22px", "flexWrap": "wrap", "marginTop": "18px", "alignItems": "center"}}>
<button type="button" onClick={goRequest} style={{"fontSize": "14px", "fontWeight": "600", "color": "#C9A98A", "whiteSpace": "nowrap"}}>{"Hiring? Request workers →"}</button>
<button type="button" onClick={goApply} style={{"fontSize": "14px", "fontWeight": "600", "color": "rgba(244,244,246,0.72)", "whiteSpace": "nowrap"}}>{"Apply without a specific job →"}</button>
</div>
<div style={{"display": "flex", "gap": "34px", "flexWrap": "wrap", "marginTop": "40px", "paddingTop": "26px", "borderTop": "1px solid rgba(244,244,246,0.16)"}}>
<div><p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#F5F4F2"}}>{"48"}</p><p style={{"fontSize": "13px", "color": "rgba(244,244,246,0.6)", "marginTop": "3px"}}>{"branches nationwide"}</p></div>
<div><p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#F5F4F2"}}>{"125,000+"}</p><p style={{"fontSize": "13px", "color": "rgba(244,244,246,0.6)", "marginTop": "3px"}}>{"workers placed"}</p></div>
<div><p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#F5F4F2"}}>{"Friday"}</p><p style={{"fontSize": "13px", "color": "rgba(244,244,246,0.6)", "marginTop": "3px"}}>{"pay, every week"}</p></div>
</div>
</div>
<div style={{"flex": "1 1 380px", "minWidth": "300px", "display": "grid", "gridTemplateColumns": "1fr 1fr", "gap": "4px", "alignSelf": "stretch", "minHeight": "520px"}}>
<div style={{"position": "relative", "overflow": "hidden", "background": "#2A1418"}}>
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80" alt="Nurse in a hospital hallway" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "12px", "bottom": "11px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "padding": "4px 10px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Healthcare"}</span>
</div>
<div style={{"position": "relative", "overflow": "hidden", "background": "#2A1418"}}>
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=700&q=80" alt="Warehouse worker operating a forklift" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "12px", "bottom": "11px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "padding": "4px 10px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Skilled Trades"}</span>
</div>
<div style={{"position": "relative", "overflow": "hidden", "background": "#2A1418"}}>
<img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80" alt="Technician servicing equipment" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "12px", "bottom": "11px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "padding": "4px 10px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Technical Trades"}</span>
</div>
<div style={{"position": "relative", "overflow": "hidden", "background": "#2A1418"}}>
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80" alt="Office professionals in a meeting" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "12px", "bottom": "11px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "padding": "4px 10px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Professional"}</span>
</div>
</div>
</div>
</div>
<div style={{"background": "#F5F4F2", "borderBottom": "1px solid #E5E2DC", "padding": "26px 0"}}>
<p style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "textAlign": "center", "fontSize": "13.5px", "color": "#5D6472"}}>{"Trusted by hospitals, distribution centres, contractors, and employers across the country"}</p>
</div>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "72px 32px 8px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "28px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<span style={{"display": "block", "width": "38px", "height": "3px", "background": "#C9A98A", "transform": "skewX(-22deg)", "marginBottom": "20px"}}></span><h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "30px", "lineHeight": "1.15", "color": "#171A20", "maxWidth": "520px", "letterSpacing": "-0.015em"}}>{"We staff every kind of work — with a dedicated team for each"}</h2>
<p style={{"fontSize": "15.5px", "color": "#5D6472", "lineHeight": "1.6", "maxWidth": "400px"}}>{"Four recruiting practices, one branch network, one application. Not a generic job board with four filters."}</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "16px", "marginTop": "36px"}}>
{(practiceCards ?? []).map((p, index4) => <React.Fragment key={index4}>
<button className="site-hover-5" type="button" onClick={p.go} style={{"textAlign": "left", "border": "1px solid #E5E2DC", "borderRadius": "22px", "overflow": "hidden", "background": "#fff", "display": "flex", "flexDirection": "column", "transition": "border-color .18s ease,box-shadow .18s ease,transform .18s ease"}}>
<span style={{"display": "block", "position": "relative", "aspectRatio": "16/10", "background": "#EBE8E2", "overflow": "hidden"}}>
{(p.isHealthcare) ? <> 
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&q=80" alt="Nurse in a hospital hallway" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
 </> : null}
{(p.isSkilled) ? <> 
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=700&q=80" alt="Warehouse worker operating a forklift" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
 </> : null}
{(p.isTechnical) ? <> 
<img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=700&q=80" alt="Technician servicing equipment" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
 </> : null}
{(p.isProfessional) ? <> 
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=80" alt="Office professionals in a meeting" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
 </> : null}
</span>
<span style={{"display": "flex", "flexDirection": "column", "gap": "10px", "padding": "22px", "flex": "1"}}>
<span style={{"display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap"}}>
<span style={p.pillStyle}>{p.name}</span>
<span style={{"fontSize": "12px", "color": "#5B6270", "fontWeight": "600"}}>{p.count}</span>
</span>
<span style={{"display": "block", "fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{p.desc}</span>
<span style={{"display": "block", "fontSize": "12px", "color": "#5B6270", "marginTop": "auto", "paddingTop": "10px"}}>{p.tags}</span>
<span style={{"display": "block", "fontSize": "13px", "fontWeight": "700", "color": "#3A1D22"}}>{"View openings →"}</span>
</span>
</button>
</React.Fragment>)}
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(260px,1fr))", "gap": "28px"}}>
<div>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.14", "color": "#171A20", "letterSpacing": "-0.015em"}}>{"Apply once. Start as soon as you're cleared."}</h2>
<p style={{"fontSize": "15px", "color": "#5D6472", "lineHeight": "1.65", "marginTop": "12px"}}>{"One application online or at a local branch. No resume required for most roles."}</p>
<button className="site-hover-6" type="button" onClick={goApply} style={{"background": "#22262E", "color": "#fff", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "marginTop": "22px"}}>{"Apply now"}</button>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "1px", "background": "#E5E2DC", "border": "1px solid #E5E2DC", "borderRadius": "18px", "overflow": "hidden"}}>
<div style={{"background": "#fff", "padding": "22px 24px", "display": "flex", "gap": "16px"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600", "color": "#8A6740", "flexShrink": "0"}}>{"01"}</span>
<span><b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{"Apply in minutes"}</b><span style={{"fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{"Online or in person. Tell us your licences, your shifts, and how you want to be paid."}</span></span>
</div>
<div style={{"background": "#fff", "padding": "22px 24px", "display": "flex", "gap": "16px"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600", "color": "#8A6740", "flexShrink": "0"}}>{"02"}</span>
<span><b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{"Get verified and matched"}</b><span style={{"fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{"We confirm your licence, certifications, and background check, then match you to open shifts."}</span></span>
</div>
<div style={{"background": "#fff", "padding": "22px 24px", "display": "flex", "gap": "16px"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600", "color": "#8A6740", "flexShrink": "0"}}>{"03"}</span>
<span><b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#171A20", "marginBottom": "4px"}}>{"Work, and get paid weekly"}</b><span style={{"fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{"Clock in, and get paid every Friday by direct deposit or pay card."}</span></span>
</div>
</div>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<span style={{"display": "block", "width": "38px", "height": "3px", "background": "#C9A98A", "transform": "skewX(-22deg)", "marginBottom": "20px"}}></span><h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.14", "color": "#171A20", "maxWidth": "560px", "letterSpacing": "-0.015em"}}>{"Staffing solutions for every stage of hiring"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "10px", "marginTop": "32px"}}>
{(tiers ?? []).map((t, index7) => <React.Fragment key={index7}>
<div style={{"background": "#fff", "padding": "26px 24px", "border": "1px solid #E5E2DC", "borderRadius": "14px"}}>
<b style={{"display": "block", "fontSize": "16px", "fontWeight": "600", "color": "#171A20", "marginBottom": "8px"}}>{t.name}</b>
<span style={{"fontSize": "13.5px", "color": "#5D6472", "lineHeight": "1.6"}}>{t.note}</span>
</div>
</React.Fragment>)}
</div>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap", "marginTop": "22px"}}>
<button className="site-hover-8" type="button" onClick={goRequest} style={{"background": "#C9A98A", "color": "#3A1D22", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Request workers"}</button>
<button className="site-hover-9" type="button" onClick={goEmployer} style={{"border": "1.5px solid #E5E2DC", "color": "#22262E", "padding": "12px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"See the employer portal"}</button>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<div style={{"background": "#22262E", "borderRadius": "22px", "padding": "44px 40px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "36px", "alignItems": "center"}}>
<div>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "14px"}}>{"Compliance"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "30px", "lineHeight": "1.15", "color": "#F5F4F2", "maxWidth": "420px"}}>{"Every worker screened. Every hire protected."}</h2>
<p style={{"fontSize": "15px", "color": "rgba(244,244,246,0.66)", "lineHeight": "1.65", "maxWidth": "420px", "marginTop": "14px"}}>{"Staffing isn't just matching. It's the paperwork, the coverage, and the compliance that keep your business protected."}</p>
</div>
<div style={{"display": "grid", "gap": "10px"}}>
{(handledItems ?? []).map((h, index10) => <React.Fragment key={index10}>
<div style={{"display": "flex", "gap": "12px", "padding": "15px 17px", "background": "rgba(244,244,246,0.06)", "borderRadius": "12px"}}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#C9A98A" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>
<div>
<b style={{"display": "block", "fontSize": "14.5px", "fontWeight": "600", "color": "#F5F4F2", "marginBottom": "2px"}}>{h.title}</b>
<span style={{"fontSize": "13px", "color": "rgba(244,244,246,0.62)"}}>{h.note}</span>
</div>
</div>
</React.Fragment>)}
</div>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "44px", "alignItems": "center"}}>
<div style={{"position": "relative", "borderRadius": "22px", "overflow": "hidden", "aspectRatio": "4/5", "background": "#EBE8E2", "maxWidth": "420px"}}>
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="ICU nurse on shift" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
</div>
<div>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "54px", "color": "#C9A98A", "lineHeight": "0.6"}}>{"“"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "400", "fontSize": "26px", "lineHeight": "1.42", "color": "#171A20", "marginTop": "14px"}}>{"I picked up a 13-week ICU contract within four days of applying. Credentialing was done before I even finished orientation paperwork."}</p>
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
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<span style={{"display": "block", "width": "38px", "height": "3px", "background": "#C9A98A", "transform": "skewX(-22deg)", "marginBottom": "20px"}}></span>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "28px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "30px", "lineHeight": "1.15", "color": "#171A20", "letterSpacing": "-0.015em", "maxWidth": "520px"}}>{"Drivers, fleet owners, and courier companies"}</h2>
<p style={{"fontSize": "15px", "color": "#5D6472", "lineHeight": "1.65", "maxWidth": "400px"}}>{"Two sides of the same shortage. Owners have trucks sitting idle; drivers want steady seats and weekly pay. We sit in the middle and keep the DOT file clean."}</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "16px", "marginTop": "32px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "22px", "padding": "32px 30px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "14px"}}>{"Truck owners & courier companies"}</p>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "23px", "lineHeight": "1.2", "color": "#171A20", "marginBottom": "10px"}}>{"You own the trucks. We fill the seats."}</h3>
<p style={{"fontSize": "14.5px", "color": "#5D6472", "lineHeight": "1.65", "marginBottom": "20px"}}>{"Whether you run seven tractors or a last-mile depot of forty vans, we staff drivers onto your routes and keep them on our payroll until you want to convert them."}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"MVR pulls, DOT physicals, and clearinghouse queries run before dispatch"}</li>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"Driver qualification files kept audit-ready for your authority"}</li>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"Workers' comp and occupational accident coverage while on assignment"}</li>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"Same-day backfill through dispatch when a driver calls off"}</li>
</ul>
<button className="site-hover-11" type="button" onClick={goRequest} style={{"background": "#22262E", "color": "#fff", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "marginTop": "24px", "transition": "background .16s ease"}}>{"Post driver seats"}</button>
</div>
<div style={{"borderRadius": "22px", "padding": "32px 30px", "background": "#3A1D22"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "14px"}}>{"Drivers"}</p>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "23px", "lineHeight": "1.2", "color": "#F5F4F2", "marginBottom": "10px"}}>{"CDL or not, there's a seat and a paycheck."}</h3>
<p style={{"fontSize": "14.5px", "color": "rgba(244,244,246,0.7)", "lineHeight": "1.65", "marginBottom": "20px"}}>{"Regional CDL-A runs with owner-operated fleets, 26-foot box truck courier routes with no CDL needed, and sprinter van runs you claim shift by shift."}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14px", "color": "rgba(244,244,246,0.88)", "lineHeight": "1.5"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A98A" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"Weekly pay every Friday, mileage and tolls covered"}</li>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14px", "color": "rgba(244,244,246,0.88)", "lineHeight": "1.5"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A98A" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"Equipment provided — you never bring your own truck or van"}</li>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14px", "color": "rgba(244,244,246,0.88)", "lineHeight": "1.5"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A98A" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"DOT physical and drug screen scheduled and paid by us"}</li>
<li style={{"display": "flex", "gap": "11px", "fontSize": "14px", "color": "rgba(244,244,246,0.88)", "lineHeight": "1.5"}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A98A" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"Temp-to-hire seats convert onto the fleet owner's payroll"}</li>
</ul>
<button className="site-hover-12" type="button" onClick={goDrivers} style={{"background": "#C9A98A", "color": "#3A1D22", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "marginTop": "24px", "transition": "background .16s ease"}}>{"See "}{driverSeats}{" open driver seats"}</button>
</div>
</div>
</section>
<section style={{"background": "#22262E", "marginTop": "64px", "padding": "64px 0"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "32px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<div>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "14px"}}>{"International talent"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "30px", "lineHeight": "1.15", "color": "#F5F4F2", "letterSpacing": "-0.015em", "maxWidth": "520px"}}>{"We recruit beyond the US labour market — legally, and end to end"}</h2>
<p style={{"fontSize": "15px", "color": "rgba(244,244,246,0.68)", "lineHeight": "1.65", "maxWidth": "520px", "marginTop": "14px"}}>{"Some roles cannot be filled locally at any wage. For those, we run sponsored pathways with employer counsel: EB-3 immigrant petitions for internationally educated nurses, H-2B seasonal programmes for production and agriculture, and TN and H-1B support for technical and professional hires."}</p>
</div>
<div style={{"border": "1px solid rgba(244,244,246,0.2)", "borderRadius": "16px", "padding": "22px", "minWidth": "220px"}}>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "32px", "fontWeight": "600", "color": "#C9A98A", "lineHeight": "1"}}>{sponsoredOpenings}</p>
<p style={{"fontSize": "13.5px", "color": "rgba(244,244,246,0.7)", "marginTop": "8px", "lineHeight": "1.5"}}>{"openings currently open to sponsored candidates"}</p>
</div>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(230px,1fr))", "gap": "10px", "marginTop": "34px"}}>
<div style={{"background": "#22262E", "padding": "24px 22px", "border": "1px solid rgba(244,244,246,0.18)", "borderRadius": "14px"}}>
<b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#F5F4F2", "marginBottom": "7px"}}>{"Credential evaluation"}</b>
<span style={{"fontSize": "13.5px", "color": "rgba(244,244,246,0.64)", "lineHeight": "1.6"}}>{"CGFNS and licence endorsement filed and paid for, plus NCLEX preparation for nurses."}</span>
</div>
<div style={{"background": "#22262E", "padding": "24px 22px", "border": "1px solid rgba(244,244,246,0.18)", "borderRadius": "14px"}}>
<b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#F5F4F2", "marginBottom": "7px"}}>{"Petitions & counsel"}</b>
<span style={{"fontSize": "13.5px", "color": "rgba(244,244,246,0.64)", "lineHeight": "1.6"}}>{"EB-3, H-2B, TN and H-1B filings run by employer-paid immigration counsel, not by you."}</span>
</div>
<div style={{"background": "#22262E", "padding": "24px 22px", "border": "1px solid rgba(244,244,246,0.18)", "borderRadius": "14px"}}>
<b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#F5F4F2", "marginBottom": "7px"}}>{"Arrival & housing"}</b>
<span style={{"fontSize": "13.5px", "color": "rgba(244,244,246,0.64)", "lineHeight": "1.6"}}>{"Travel reimbursed, first-month housing arranged, and site transport for seasonal programmes."}</span>
</div>
<div style={{"background": "#22262E", "padding": "24px 22px", "border": "1px solid rgba(244,244,246,0.18)", "borderRadius": "14px"}}>
<b style={{"display": "block", "fontSize": "15.5px", "fontWeight": "600", "color": "#F5F4F2", "marginBottom": "7px"}}>{"Wage & audit compliance"}</b>
<span style={{"fontSize": "13.5px", "color": "rgba(244,244,246,0.64)", "lineHeight": "1.6"}}>{"Prevailing wage determinations honoured, public access files kept audit-ready."}</span>
</div>
</div>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap", "marginTop": "28px"}}>
<button className="site-hover-13" type="button" onClick={goSponsored} style={{"background": "#C9A98A", "color": "#3A1D22", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease"}}>{"See sponsored openings"}</button>
<button type="button" onClick={goRequest} style={{"border": "1.5px solid rgba(244,244,246,0.32)", "background": "rgba(244,244,246,0.08)", "color": "#F5F4F2", "padding": "12px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap"}}>{"Hire international talent"}</button>
</div>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "22px", "overflow": "hidden", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))"}}>
<div style={{"padding": "40px 36px"}}>
<span style={{"display": "block", "width": "38px", "height": "3px", "background": "#C9A98A", "transform": "skewX(-22deg)", "marginBottom": "20px"}}></span><h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "30px", "lineHeight": "1.15", "color": "#171A20", "letterSpacing": "-0.015em", "maxWidth": "420px"}}>{"Remote and hybrid roles"}</h2>
<p style={{"fontSize": "15px", "color": "#5D6472", "lineHeight": "1.65", "maxWidth": "460px", "marginTop": "12px"}}>{"Not every assignment happens on a floor or a site. Our Professional practice places billing, coordination, and back-office roles that run fully remote or two days onsite — on the same weekly pay and the same verified onboarding."}</p>
<ul style={{"display": "flex", "flexDirection": "column", "gap": "1px", "background": "#E5E2DC", "border": "1px solid #E5E2DC", "borderRadius": "14px", "overflow": "hidden", "marginTop": "24px", "maxWidth": "460px"}}>
<li style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "gap": "11px", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5"}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"\n            Laptop, monitors, and an internet stipend provided before day one\n          "}</li>
<li style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "gap": "11px", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5"}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"\n            I-9 and E-Verify completed with a remote agent or at any branch\n          "}</li>
<li style={{"background": "#fff", "padding": "15px 17px", "display": "flex", "gap": "11px", "fontSize": "14px", "color": "#262A33", "lineHeight": "1.5"}}>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2.4" style={{"flexShrink": "0", "marginTop": "2px"}}><path d="M20 6L9 17l-5-5"></path></svg>{"\n            Hybrid schedules agreed in writing before you accept\n          "}</li>
</ul>
<button className="site-hover-14" type="button" onClick={goRemote} style={{"background": "#22262E", "color": "#fff", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "marginTop": "24px", "transition": "background .16s ease"}}>{"Browse "}{remoteCount}{" remote & hybrid roles"}</button>
</div>
<div style={{"position": "relative", "minHeight": "280px", "background": "#EBE8E2"}}>
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80" alt="Coordinator working at a desk" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "16px", "bottom": "14px", "fontSize": "12px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.6)", "padding": "6px 12px", "borderRadius": "100px", "whiteSpace": "nowrap"}}>{"Professional practice"}</span>
</div>
</div>
</section>
<section style={{"background": "#F5F4F2", "marginTop": "64px", "padding": "64px 0"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px"}}>
<div style={{"display": "flex", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap", "alignItems": "flex-end", "marginBottom": "26px"}}>
<div>
<span style={{"display": "block", "width": "38px", "height": "3px", "background": "#C9A98A", "transform": "skewX(-22deg)", "marginBottom": "20px"}}></span><h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.14", "color": "#171A20", "letterSpacing": "-0.015em"}}>{"48 branches, coast to coast"}</h2>
</div>
<p style={{"fontSize": "15px", "color": "#5D6472", "maxWidth": "320px"}}>{"Local recruiters who know your local market. Walk in Mon–Fri, 8am–5pm."}</p>
</div>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(180px,1fr))", "gap": "10px"}}>
{(locations ?? []).map((l, index15) => <React.Fragment key={index15}>
<div style={{"background": "#fff", "border": "1px solid #E5E2DC", "borderRadius": "12px", "padding": "15px 17px", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "gap": "10px"}}>
<span style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#171A20", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{l.city}</span>
<span style={{"fontSize": "12px", "fontWeight": "700", "color": "#5B6270"}}>{l.st}</span>
</div>
</React.Fragment>)}
</div>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 24px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "16px"}}>
<div style={{"background": "#C9A98A", "borderRadius": "22px", "padding": "40px 36px"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "26px", "color": "#3A1D22", "marginBottom": "10px"}}>{"Ready for your next shift?"}</h3>
<p style={{"fontSize": "14.5px", "color": "rgba(58,29,34,0.78)", "lineHeight": "1.6", "marginBottom": "22px"}}>{"Apply online in minutes, or walk into a branch near you."}</p>
<button className="site-hover-16" type="button" onClick={goApply} style={{"background": "#3A1D22", "color": "#F5F4F2", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Apply now"}</button>
</div>
<div style={{"background": "#3A1D22", "borderRadius": "22px", "padding": "40px 36px"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "26px", "color": "#F5F4F2", "marginBottom": "10px"}}>{"Need workers this week?"}</h3>
<p style={{"fontSize": "14.5px", "color": "rgba(244,244,246,0.68)", "lineHeight": "1.6", "marginBottom": "22px"}}>{"Call the dispatch line — we staff same-day for urgent needs."}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "24px", "fontWeight": "600", "color": "#C9A98A"}}>{dispatch}</p>
</div>
</div>
</section>
</>;
}
