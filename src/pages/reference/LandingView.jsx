
import React from 'react';
import './landing.css';

export default function LandingView(values) {
  const { closeHead, closeNote, ctaLabel, ctaNote, goCta, headline, phone, proof, steps, subhead } = values;
  return <>
<a className="skip-link" href="#main-content">Skip to content</a>


<div style={{"minHeight": "100vh", "display": "flex", "flexDirection": "column", "background": "#F5F4F2"}}>
<header style={{"borderBottom": "1px solid #E5E2DC", "background": "#F5F4F2"}}>
<div style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "20px 32px", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "20px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "11px"}}>
<svg width="30" height="30" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#3A1D22"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "lineHeight": "1"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontSize": "21px", "fontWeight": "600", "color": "#171A20", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
<span style={{"fontSize": "9.5px", "fontWeight": "600", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "#8A6740", "marginTop": "4px"}}>{"Staffing"}</span>
</span>
</div>
<span style={{"fontSize": "13.5px", "fontWeight": "600", "color": "#5B6270", "whiteSpace": "nowrap"}}>{phone}</span>
</div>
</header>
<main id="main-content" tabIndex="-1" style={{"flex": "1"}}>
<section style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "88px 32px 0"}}>
<span style={{"display": "block", "width": "38px", "height": "3px", "background": "#C9A98A", "transform": "skewX(-22deg)", "marginBottom": "26px"}}></span>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "54px", "lineHeight": "1.04", "letterSpacing": "-0.02em", "color": "#171A20", "maxWidth": "760px"}}>{headline}</h1>
<p style={{"fontSize": "19px", "lineHeight": "1.55", "color": "#5B6270", "maxWidth": "560px", "marginTop": "22px"}}>{subhead}</p>
<div style={{"display": "flex", "gap": "12px", "flexWrap": "wrap", "marginTop": "36px", "alignItems": "center"}}>
<button className="landing-hover-1" type="button" onClick={goCta} style={{"background": "#3A1D22", "color": "#F5F4F2", "padding": "17px 34px", "borderRadius": "11px", "fontSize": "16.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease"}}>{ctaLabel}</button>
<span style={{"fontSize": "14px", "color": "#5B6270"}}>{ctaNote}</span>
</div>
<div style={{"display": "flex", "gap": "0", "flexWrap": "wrap", "marginTop": "64px", "borderTop": "1px solid #E5E2DC"}}>
{(proof ?? []).map((p, index2) => <React.Fragment key={index2}>
<div style={{"flex": "1 1 200px", "minWidth": "180px", "padding": "26px 28px 26px 0"}}>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "30px", "fontWeight": "600", "color": "#3A1D22", "lineHeight": "1", "fontVariantNumeric": "tabular-nums"}}>{p.k}</p>
<p style={{"fontSize": "14px", "color": "#5B6270", "marginTop": "9px"}}>{p.v}</p>
</div>
</React.Fragment>)}
</div>
</section>
<section style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "72px 32px 0"}}>
<div style={{"position": "relative", "borderRadius": "22px", "overflow": "hidden", "aspectRatio": "24/9", "background": "#EBE8E2"}}>
<img src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80" alt="Worker on assignment at a distribution centre" style={{"width": "100%", "height": "100%", "objectFit": "cover", "display": "block"}} />
<span style={{"position": "absolute", "inset": "0", "background": "linear-gradient(180deg,rgba(58,29,34,0.08) 0%,rgba(58,29,34,0.44) 100%)", "pointerEvents": "none"}}></span>
</div>
</section>
<section style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "64px 32px 0"}}>
<ul style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(240px,1fr))", "gap": "28px"}}>
{(steps ?? []).map((s, index3) => <React.Fragment key={index3}>
<li>
<p style={{"fontFamily": "'Fraunces',serif", "fontSize": "14px", "fontWeight": "600", "color": "#8A6740", "marginBottom": "12px"}}>{s.n}</p>
<p style={{"fontSize": "17px", "fontWeight": "600", "color": "#171A20", "marginBottom": "7px"}}>{s.t}</p>
<p style={{"fontSize": "14.5px", "color": "#5B6270", "lineHeight": "1.6"}}>{s.d}</p>
</li>
</React.Fragment>)}
</ul>
</section>
<section style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "72px 32px 88px"}}>
<div style={{"background": "#3A1D22", "borderRadius": "24px", "padding": "56px 48px", "display": "flex", "justifyContent": "space-between", "gap": "32px", "flexWrap": "wrap", "alignItems": "center"}}>
<div>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "32px", "lineHeight": "1.14", "color": "#F5F4F2", "maxWidth": "460px", "letterSpacing": "-0.015em"}}>{closeHead}</h2>
<p style={{"fontSize": "15.5px", "color": "rgba(245,244,242,0.7)", "lineHeight": "1.6", "maxWidth": "440px", "marginTop": "12px"}}>{closeNote}</p>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px", "alignItems": "flex-start"}}>
<button className="landing-hover-4" type="button" onClick={goCta} style={{"background": "#C9A98A", "color": "#3A1D22", "padding": "17px 32px", "borderRadius": "11px", "fontSize": "16.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease"}}>{ctaLabel}</button>
<span style={{"fontSize": "13.5px", "color": "rgba(245,244,242,0.62)"}}>{"or call "}{phone}{" — answered 24/7"}</span>
</div>
</div>
</section>
</main>
<footer style={{"borderTop": "1px solid #E5E2DC", "background": "#F5F4F2"}}>
<div style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "26px 32px", "display": "flex", "justifyContent": "space-between", "gap": "20px", "flexWrap": "wrap"}}>
<span style={{"fontSize": "12.5px", "color": "#5B6270"}}>{"© 2026 Asepsis Staffing, Inc. · E-Verify participant · Equal opportunity employer"}</span>
<span style={{"fontSize": "12.5px", "color": "#5B6270"}}>{"48 branches nationwide"}</span>
</div>
</footer>
</div>

</>;
}
