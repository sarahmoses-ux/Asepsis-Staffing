import HomeScreen from './screens/HomeScreen.jsx';
import JobsScreen from './screens/JobsScreen.jsx';
import DetailScreen from './screens/DetailScreen.jsx';
import ApplyScreen from './screens/ApplyScreen.jsx';
import WorkerScreen from './screens/WorkerScreen.jsx';
import RequestScreen from './screens/RequestScreen.jsx';
import EmployerScreen from './screens/EmployerScreen.jsx';
import TractionScreen from './screens/TractionScreen.jsx';
import React from 'react';
import './site.css';

export default function SiteView(values) {
  const { a, d, dispatch, formError, goApply, goEmployer, goHome, goRequest, goWorker, isApply, isDetail, isEmployer, isHome, isJobs, isRequest, isTraction, isWorker, navItems, p, savedCount } = values;
  return <>
<a className="skip-link" href="#main-content">Skip to content</a>


<div style={{"minHeight": "100vh", "display": "flex", "flexDirection": "column", "background": "#FFFFFF"}}>
<header style={{"position": "sticky", "top": "0", "zIndex": "50", "background": "rgba(255,255,255,0.96)", "backdropFilter": "blur(10px)", "borderBottom": "1px solid #E5E2DC"}}>
<div style={{"background": "#22262E"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px", "height": "36px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "20px"}}>
<span style={{"fontSize": "12px", "color": "rgba(244,244,246,0.7)", "whiteSpace": "nowrap"}}>{"48 branches · walk in Mon–Fri 8–5"}</span>
<span style={{"fontSize": "12px", "color": "rgba(244,244,246,0.7)", "whiteSpace": "nowrap"}}>{"24/7 dispatch "}{dispatch}</span>
</div>
<div style={{"display": "flex", "alignItems": "center", "gap": "18px"}}>
<button type="button" onClick={goWorker} style={{"fontSize": "12px", "fontWeight": "600", "color": "#C9A98A", "whiteSpace": "nowrap"}}>{"Worker sign in"}</button>
<button type="button" onClick={goEmployer} style={{"fontSize": "12px", "fontWeight": "600", "color": "#C9A98A", "whiteSpace": "nowrap"}}>{"Employer login"}</button>
</div>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "12px 32px", "minHeight": "70px", "display": "flex", "alignItems": "center", "gap": "24px"}}>
<button type="button" onClick={goHome} style={{"display": "flex", "alignItems": "center", "gap": "11px", "flexShrink": "0"}}>
<svg width="30" height="30" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#3A1D22"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "lineHeight": "1"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontSize": "21px", "fontWeight": "600", "color": "#171A20", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
<span style={{"fontSize": "9.5px", "fontWeight": "600", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "#8A6740", "marginTop": "4px"}}>{"Staffing"}</span>
</span>
</button>
<nav style={{"display": "flex", "alignItems": "center", "gap": "4px", "flex": "1", "flexWrap": "wrap"}}>
{(navItems ?? []).map((n, index1) => <React.Fragment key={index1}>
<button type="button" onClick={n.go} style={n.style}>{n.label}</button>
</React.Fragment>)}
</nav>
<div style={{"display": "flex", "alignItems": "center", "gap": "12px"}}>
<button type="button" onClick={goWorker} style={{"display": "flex", "alignItems": "center", "gap": "7px", "fontSize": "13px", "fontWeight": "600", "color": "#5D6472", "whiteSpace": "nowrap"}}>
<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A8825F" strokeWidth="2"><path d="M19 21l-7-4-7 4V5a2 2 0 012-2h10a2 2 0 012 2z"></path></svg>{"\n        Saved · "}{savedCount}{"\n      "}</button>
<button className="site-hover-2" type="button" onClick={goApply} style={{"background": "#22262E", "color": "#fff", "padding": "10px 18px", "borderRadius": "8px", "fontSize": "13.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Apply now"}</button>
</div>
</div>
</header>
<main id="main-content" tabIndex="-1" style={{"flex": "1"}}>
{(formError) ? <> <p role="alert" style={{"maxWidth": "1176px", "margin": "20px auto", "padding": "16px", "background": "#F6EBEC", "color": "#8C3A44", "borderRadius": "8px"}}>{formError}</p> </> : null}
{isHome ? <HomeScreen {...values} /> : null}
{isJobs ? <JobsScreen {...values} /> : null}
{isDetail ? <DetailScreen {...values} /> : null}
{isApply ? <ApplyScreen {...values} /> : null}
{isWorker ? <WorkerScreen {...values} /> : null}
{isRequest ? <RequestScreen {...values} /> : null}
{isEmployer ? <EmployerScreen {...values} /> : null}
{isTraction ? <TractionScreen {...values} /> : null}
</main>
<footer style={{"background": "#171A20", "color": "rgba(255,255,255,0.55)", "padding": "40px 0 30px", "marginTop": "40px"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px 40px", "display": "flex", "justifyContent": "space-between", "gap": "32px", "flexWrap": "wrap", "alignItems": "flex-end"}}>
<div style={{"maxWidth": "440px"}}>
<span style={{"display": "block", "width": "38px", "height": "3px", "background": "#C9A98A", "transform": "skewX(-22deg)", "marginBottom": "22px"}}></span>
<p style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "26px", "lineHeight": "1.25", "color": "#F5F4F2", "letterSpacing": "-0.01em"}}>{"Every kind of work. One trusted staffing partner."}</p>
<p style={{"fontSize": "13.5px", "color": "rgba(244,244,246,0.58)", "lineHeight": "1.6", "marginTop": "14px"}}>{"Healthcare, skilled trades, technical trades, and professional staffing across 48 branches — with compliance, payroll, and weekly pay handled."}</p>
</div>
<div style={{"display": "flex", "gap": "10px", "flexWrap": "wrap"}}>
<button className="site-hover-72" type="button" onClick={goApply} style={{"background": "#C9A98A", "color": "#3A1D22", "padding": "13px 22px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease"}}>{"Apply now"}</button>
<button type="button" onClick={goRequest} style={{"border": "1.5px solid rgba(244,244,246,0.32)", "background": "rgba(244,244,246,0.08)", "color": "#F5F4F2", "padding": "12px 20px", "borderRadius": "10px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap"}}>{"Request workers"}</button>
</div>
</div>
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
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontSize": "19px", "fontWeight": "600", "color": "#fff", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
<span style={{"fontSize": "9px", "fontWeight": "600", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "#C9A98A", "marginTop": "4px"}}>{"Staffing"}</span>
</span>
</div>
<p style={{"fontSize": "12.5px", "maxWidth": "520px"}}>{"© 2026 Asepsis Staffing, Inc. · 48 branches nationwide · E-Verify participant · Equal opportunity employer."}</p>
<p style={{"fontSize": "12.5px", "color": "rgba(255,255,255,0.75)"}}>{"24/7 dispatch "}{dispatch}</p>
</div>
</footer>
</div>

</>;
}
