import React from 'react';

export default function EmployerScreen(values) {
  const { approvedNote, candidateQueueLabel, candidates, d, dispatch, goRequest, handledItems, hasApproved, newRequestRow, onAssign, p, queueCleared, reqSummaryLine, requests } = values;
  return <>
<div style={{"background": "#22262E", "padding": "34px 0"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "display": "flex", "justifyContent": "space-between", "gap": "24px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<div>
<p style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "9px"}}>{"Employer portal"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "32px", "color": "#fff", "lineHeight": "1.1"}}>{"Cardinal Logistics"}</h1>
<p style={{"color": "rgba(255,255,255,0.65)", "fontSize": "14.5px", "marginTop": "8px"}}>{"4 sites · Columbus, Dallas, Phoenix, Charlotte · account manager Deon Pratt"}</p>
</div>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap"}}>
<button type="button" onClick={goRequest} style={{"background": "#C9A98A", "color": "#171A20", "padding": "13px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Request workers"}</button>
<button type="button" style={{"border": "1.5px solid rgba(255,255,255,0.3)", "background": "rgba(255,255,255,0.08)", "color": "#fff", "padding": "13px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Call dispatch "}{dispatch}</button>
</div>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "28px 32px 8px", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "14px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "8px"}}>{"Open requests"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20", "fontVariantNumeric": "tabular-nums"}}>{"3"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Across three practices"}</p>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#F6EFE7"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "8px"}}>{"Awaiting your review"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20", "fontVariantNumeric": "tabular-nums"}}>{"3"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Candidates submitted, fully screened"}</p>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "8px"}}>{"On assignment"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20", "fontVariantNumeric": "tabular-nums"}}>{"34"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"160.5 hours logged this week"}</p>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "8px"}}>{"Week to date"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "26px", "fontWeight": "600", "color": "#171A20", "fontVariantNumeric": "tabular-nums"}}>{"$41,280"}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "4px"}}>{"Invoices Friday · net 30"}</p>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "20px 32px", "display": "flex", "gap": "24px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 440px", "minWidth": "300px", "display": "flex", "flexDirection": "column", "gap": "24px"}}>
<section>
<div style={{"display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "16px", "flexWrap": "wrap", "marginBottom": "14px"}}>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20"}}>{"Staffing requests"}</h2>
<button type="button" onClick={goRequest} style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#22262E", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"New request →"}</button>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "overflow": "hidden", "background": "#fff"}}>
{(newRequestRow) ? <> 
<div style={{"padding": "16px 18px", "borderBottom": "1px solid #E5E2DC", "background": "#F6EFE7", "display": "flex", "gap": "16px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 220px", "minWidth": "200px"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{reqSummaryLine}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "3px"}}>{"Submitted just now · sourcing started"}</p>
</div>
<span style={{"fontSize": "11.5px", "fontWeight": "700", "color": "#8A6740", "background": "#fff", "padding": "5px 10px", "borderRadius": "100px"}}>{"New"}</span>
</div>
 </> : null}
{(requests ?? []).map((rq, index61) => <React.Fragment key={index61}>
<div style={{"padding": "16px 18px", "borderBottom": "1px solid #E5E2DC", "display": "flex", "gap": "16px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 240px", "minWidth": "200px"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{rq.role}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "3px"}}>{rq.id}{" · "}{rq.practice}{" · "}{rq.tier}{" · "}{rq.site}{" · opened "}{rq.opened}</p>
</div>
<div style={{"flex": "0 1 150px", "minWidth": "120px"}}>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginBottom": "6px"}}>{rq.fill}{" filled"}</p>
<div style={{"height": "5px", "background": "#EBE8E2", "borderRadius": "100px", "overflow": "hidden"}}><div style={rq.barStyle}></div></div>
</div>
<span style={rq.pill}>{rq.status}</span>
</div>
</React.Fragment>)}
</div>
</section>
<section>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "6px"}}>{"Candidates awaiting your review · "}{candidateQueueLabel}</h2>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "14px"}}>{"Screened, verified, and insured. Approve and we confirm a start date the same day."}</p>
{(hasApproved) ? <> 
<p style={{"fontSize": "13px", "fontWeight": "600", "color": "#3D6B57", "background": "#EAF1ED", "padding": "11px 14px", "borderRadius": "10px", "marginBottom": "12px"}}>{approvedNote}</p>
 </> : null}
{(queueCleared) ? <> 
<div style={{"border": "1px dashed #E5E2DC", "borderRadius": "14px", "padding": "32px", "textAlign": "center", "background": "#F5F4F2"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20", "marginBottom": "5px"}}>{"Queue clear"}</p>
<p style={{"fontSize": "13.5px", "color": "#5D6472"}}>{"New candidates appear here as recruiters submit them. Urgent needs go through dispatch."}</p>
</div>
 </> : null}
<div style={{"display": "flex", "flexDirection": "column", "gap": "10px"}}>
{(candidates ?? []).map((c, index62) => <React.Fragment key={index62}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "background": "#fff", "padding": "16px 18px", "display": "flex", "gap": "14px", "alignItems": "center", "flexWrap": "wrap"}}>
<div style={{"width": "44px", "height": "44px", "borderRadius": "50%", "background": "#F5F4F2", "color": "#22262E", "display": "flex", "alignItems": "center", "justifyContent": "center", "fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600", "flexShrink": "0"}}>{c.initials}</div>
<div style={{"flex": "1 1 220px", "minWidth": "190px"}}>
<p style={{"fontSize": "15px", "fontWeight": "600", "color": "#171A20"}}>{c.name}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "3px"}}>{c.role}{" · "}{c.creds}</p>
</div>
<div style={{"textAlign": "right", "minWidth": "80px"}}>
<p style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#171A20"}}>{c.rate}</p>
<p style={{"fontSize": "12px", "color": "#5B6270", "marginTop": "2px"}}>{c.req}</p>
</div>
<div style={{"display": "flex", "gap": "8px"}}>
<button className="site-hover-63" type="button" onClick={c.pass} style={{"border": "1.5px solid #E5E2DC", "color": "#5D6472", "padding": "9px 14px", "borderRadius": "8px", "fontSize": "13px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "border-color .16s ease"}}>{"Pass"}</button>
<button className="site-hover-64" type="button" onClick={c.approve} style={{"background": "#22262E", "color": "#fff", "padding": "9px 15px", "borderRadius": "8px", "fontSize": "13px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease"}}>{"Approve"}</button>
</div>
</div>
</React.Fragment>)}
</div>
</section>
<section>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(140px,1fr))", "gap": "8px", "marginBottom": "20px"}}>
<div style={{"position": "relative", "borderRadius": "12px", "overflow": "hidden", "aspectRatio": "4/3", "background": "#EBE8E2"}}>
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80" alt="Columbus distribution centre" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "9px", "bottom": "8px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.62)", "padding": "4px 9px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Columbus"}</span>
</div>
<div style={{"position": "relative", "borderRadius": "12px", "overflow": "hidden", "aspectRatio": "4/3", "background": "#EBE8E2"}}>
<img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80" alt="Dallas hospital assignment" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "9px", "bottom": "8px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.62)", "padding": "4px 9px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Dallas"}</span>
</div>
<div style={{"position": "relative", "borderRadius": "12px", "overflow": "hidden", "aspectRatio": "4/3", "background": "#EBE8E2"}}>
<img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" alt="Phoenix fleet shop" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "9px", "bottom": "8px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.62)", "padding": "4px 9px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Phoenix"}</span>
</div>
<div style={{"position": "relative", "borderRadius": "12px", "overflow": "hidden", "aspectRatio": "4/3", "background": "#EBE8E2"}}>
<img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=600&q=80" alt="Charlotte office site" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} /><span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
<span style={{"position": "absolute", "left": "9px", "bottom": "8px", "fontSize": "11px", "fontWeight": "600", "color": "#fff", "background": "rgba(23,26,32,0.62)", "padding": "4px 9px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Charlotte"}</span>
</div>
</div>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "22px", "color": "#171A20", "marginBottom": "14px"}}>{"Workers on assignment"}</h2>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "overflow": "hidden", "background": "#fff"}}>
{(onAssign ?? []).map((w, index65) => <React.Fragment key={index65}>
<div style={{"padding": "15px 18px", "borderBottom": "1px solid #E5E2DC", "display": "flex", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap"}}>
<div style={{"flex": "1 1 220px"}}>
<p style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#171A20"}}>{w.name}</p>
<p style={{"fontSize": "12.5px", "color": "#5D6472", "marginTop": "2px"}}>{w.role}{" · "}{w.site}</p>
</div>
<div style={{"textAlign": "right"}}>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20"}}>{w.hours}{" hrs"}</p>
<p style={{"fontSize": "12px", "color": "#5B6270", "marginTop": "2px"}}>{w.week}</p>
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
{(handledItems ?? []).map((h, index66) => <React.Fragment key={index66}>
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
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "padding": "22px", "background": "#fff"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.07em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "14px"}}>{"This week's invoice"}</p>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13.5px", "color": "#5D6472", "padding": "8px 0"}}><span>{"Skilled Trades · 21 workers"}</span><span style={{"color": "#171A20", "fontWeight": "600"}}>{"$24,150"}</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13.5px", "color": "#5D6472", "padding": "8px 0", "borderTop": "1px solid #E5E2DC"}}><span>{"Healthcare · 4 travel RNs"}</span><span style={{"color": "#171A20", "fontWeight": "600"}}>{"$11,600"}</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13.5px", "color": "#5D6472", "padding": "8px 0", "borderTop": "1px solid #E5E2DC"}}><span>{"Technical Trades · 5 techs"}</span><span style={{"color": "#171A20", "fontWeight": "600"}}>{"$4,340"}</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "13.5px", "color": "#5D6472", "padding": "8px 0", "borderTop": "1px solid #E5E2DC"}}><span>{"Professional · 4 placements"}</span><span style={{"color": "#171A20", "fontWeight": "600"}}>{"$1,190"}</span></div>
<div style={{"display": "flex", "justifyContent": "space-between", "fontSize": "15px", "padding": "12px 0 0", "borderTop": "1.5px solid #22262E", "marginTop": "6px"}}><b style={{"color": "#171A20", "fontWeight": "600"}}>{"Week to date"}</b><b style={{"color": "#171A20", "fontWeight": "600"}}>{"$41,280"}</b></div>
<button className="site-hover-67" type="button" style={{"width": "100%", "border": "1.5px solid #22262E", "color": "#22262E", "padding": "11px", "borderRadius": "9px", "fontSize": "13.5px", "fontWeight": "600", "whiteSpace": "nowrap", "marginTop": "16px"}}>{"Download timesheets"}</button>
</div>
<div style={{"borderRadius": "18px", "padding": "22px", "background": "#F6EFE7"}}>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20", "marginBottom": "6px"}}>{"Need coverage tonight?"}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.55", "marginBottom": "12px"}}>{"Dispatch is staffed around the clock and can fill same-day shifts from the local branch bench."}</p>
<p style={{"fontSize": "17px", "fontWeight": "600", "color": "#171A20"}}>{dispatch}</p>
</div>
</aside>
</div>
</>;
}
