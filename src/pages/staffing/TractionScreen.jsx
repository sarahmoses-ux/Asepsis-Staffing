import React from 'react';

export default function TractionScreen(values) {
  const { dispatch, goJobs, marketStats, modelRows, n, p, retentionStats, v } = values;
  return <>
<div style={{"background": "#3A1D22", "padding": "56px 0 52px"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px"}}>
<span style={{"display": "inline-block", "fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.09em", "textTransform": "uppercase", "color": "#3A1D22", "background": "#C9A98A", "padding": "5px 11px", "borderRadius": "100px", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Illustrative figures"}</span>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "44px", "lineHeight": "1.08", "color": "#F5F4F2", "letterSpacing": "-0.015em", "maxWidth": "760px", "margin": "20px 0 0"}}>{"One brand, five specialisms, one bench that redeploys across all of them."}</h1>
<p style={{"fontSize": "17px", "color": "rgba(244,244,246,0.72)", "lineHeight": "1.6", "maxWidth": "640px", "marginTop": "16px"}}>{"Asepsis operates five dedicated specialisms out of a shared branch network. The same 48 branches, the same compliance spine, and the same worker pool serve hospitals, distribution centres, contractors, and back offices."}</p>
<p style={{"fontSize": "13px", "color": "rgba(244,244,246,0.5)", "marginTop": "22px", "maxWidth": "640px", "lineHeight": "1.55"}}>{"Every number on this page is illustrative and shown for layout purposes only. Replace with audited figures before external distribution."}</p>
</div>
</div>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "64px 32px 8px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.09em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "12px"}}>{"Market"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.15", "color": "#171A20", "maxWidth": "640px"}}>{"A large market with no consolidated multi-vertical operator"}</h2>
<p style={{"fontSize": "15.5px", "color": "#5D6472", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"Staffing demand is enormous and structurally fragmented. Most firms specialise in one vertical in one metro, so an employer with a hospital, a warehouse, and a back office signs three vendors."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "16px", "marginTop": "32px"}}>
{(marketStats ?? []).map((m, index68) => <React.Fragment key={index68}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "padding": "26px", "background": "#fff"}}>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "38px", "fontWeight": "600", "color": "#3A1D22", "lineHeight": "1"}}>{m.k}</p>
<p style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#171A20", "marginTop": "12px"}}>{m.v}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.55", "marginTop": "6px"}}>{m.n}</p>
</div>
</React.Fragment>)}
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "56px 32px 8px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.09em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "12px"}}>{"The model"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.15", "color": "#171A20", "maxWidth": "640px"}}>{"Five specialisms that fund each other"}</h2>
<p style={{"fontSize": "15.5px", "color": "#5D6472", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"Skilled Trades volume keeps branches busy and the bench deep. Healthcare and Technical Trades carry the rate. Professional placements convert to fees. International connects remote and sponsored opportunities across these fields. The mix is what a single-vertical competitor cannot copy."}</p>
<div style={{"display": "flex", "flexDirection": "column", "gap": "1px", "background": "#E5E2DC", "border": "1px solid #E5E2DC", "borderRadius": "18px", "overflow": "hidden", "marginTop": "32px"}}>
{(modelRows ?? []).map((m, index69) => <React.Fragment key={index69}>
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
<div style={{"height": "6px", "background": "#EBE8E2", "borderRadius": "100px", "overflow": "hidden"}}><div style={m.barStyle}></div></div>
</div>
<p style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#3A1D22", "whiteSpace": "nowrap", "minWidth": "130px", "textAlign": "right"}}>{m.margin}</p>
</div>
</React.Fragment>)}
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "56px 32px 8px"}}>
<div style={{"background": "#3A1D22", "borderRadius": "22px", "padding": "44px 40px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.09em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "12px"}}>{"Retention"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.15", "color": "#F5F4F2", "maxWidth": "620px"}}>{"The second placement is where the margin is"}</h2>
<p style={{"fontSize": "15.5px", "color": "rgba(244,244,246,0.7)", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"Acquiring a worker costs money once. Redeploying them across five specialisms costs almost nothing, and a worker who takes a second assignment is worth several times the first."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(220px,1fr))", "gap": "14px", "marginTop": "32px"}}>
{(retentionStats ?? []).map((r, index70) => <React.Fragment key={index70}>
<div style={{"background": "rgba(244,244,246,0.07)", "border": "1px solid rgba(244,244,246,0.14)", "borderRadius": "16px", "padding": "22px"}}>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "32px", "fontWeight": "600", "color": "#C9A98A", "lineHeight": "1"}}>{r.k}</p>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#F5F4F2", "marginTop": "11px"}}>{r.v}</p>
<p style={{"fontSize": "12.5px", "color": "rgba(244,244,246,0.6)", "lineHeight": "1.55", "marginTop": "6px"}}>{r.n}</p>
</div>
</React.Fragment>)}
</div>
</div>
</section>
<section style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "56px 32px 24px"}}>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "16px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "22px", "padding": "34px", "background": "#F5F4F2"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "24px", "color": "#171A20", "marginBottom": "8px"}}>{"See the operating product"}</h3>
<p style={{"fontSize": "14.5px", "color": "#5D6472", "lineHeight": "1.6", "marginBottom": "20px"}}>{"The jobs board, apply flow, worker dashboard, and employer portal that run the business day to day."}</p>
<button className="site-hover-71" type="button" onClick={goJobs} style={{"background": "#22262E", "color": "#fff", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Open the product"}</button>
</div>
<div style={{"borderRadius": "22px", "padding": "34px", "background": "#C9A98A"}}>
<h3 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "24px", "color": "#3A1D22", "marginBottom": "8px"}}>{"Talk to us"}</h3>
<p style={{"fontSize": "14.5px", "color": "rgba(58,29,34,0.78)", "lineHeight": "1.6", "marginBottom": "20px"}}>{"Founders and operators reach the same 24/7 line the branches use."}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "24px", "fontWeight": "600", "color": "#3A1D22"}}>{dispatch}</p>
</div>
</div>
</section>
</>;
}
