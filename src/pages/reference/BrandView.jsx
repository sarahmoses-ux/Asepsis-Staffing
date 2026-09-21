
import React from 'react';
import './brand.css';

export default function BrandView(values) {
  const { palette } = values;
  return <>
<a className="skip-link" href="#main-content">Skip to content</a>


<main id="main-content" tabIndex="-1" style={{"background": "#F5F4F2"}}>
<section style={{"background": "#3A1D22", "padding": "76px 0 68px"}}>
<div style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "0 40px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "16px", "marginBottom": "52px"}}>
<svg width="46" height="46" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#F5F4F2"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "600", "fontSize": "31px", "color": "#F5F4F2", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
<span style={{"width": "22px", "height": "2px", "background": "#C9A98A", "transform": "skewX(-22deg)"}}></span>
<span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "#C9A98A"}}>{"Staffing"}</span>
</div>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "44px", "lineHeight": "1.06", "letterSpacing": "-0.022em", "color": "#F5F4F2", "maxWidth": "680px"}}>{"Brand identity"}</h1>
<p style={{"fontSize": "16.5px", "lineHeight": "1.6", "color": "rgba(245,244,242,0.72)", "maxWidth": "560px", "marginTop": "16px"}}>{"The mark, the wordmark, the palette, and the type — and how they behave across the site, the branches, and the paperwork."}</p>
</div>
</section>
<section style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "68px 40px 0"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "14px"}}>{"01 · Stacked lockup — primary"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "29px", "lineHeight": "1.15", "color": "#171A20", "letterSpacing": "-0.02em", "maxWidth": "600px"}}>{"The name over its trade, with the mark holding the left edge"}</h2>
<p style={{"fontSize": "15px", "color": "#5B6270", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"Stacked is the primary lockup. The descriptor sits directly under the wordmark on a 0.3em track, and its letterspacing is tuned so the word \"Staffing\" optically matches the width of \"Asepsis\" above it — the two lines read as one block rather than a name with a caption. The mark's height equals both lines plus their gap, so the lockup squares off on the left."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(300px,1fr))", "gap": "16px", "marginTop": "32px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "36px 34px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "26px"}}>{"Primary — on paper"}</p>
<div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
<svg width="46" height="46" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#3A1D22"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "lineHeight": "1"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "600", "fontSize": "30px", "color": "#171A20", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
<span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "#8A6740", "marginTop": "7px"}}>{"Staffing"}</span>
</span>
</div>
</div>
<div style={{"borderRadius": "18px", "background": "#3A1D22", "padding": "36px 34px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "rgba(245,244,242,0.6)", "marginBottom": "26px"}}>{"Reversed — on oxblood"}</p>
<div style={{"display": "flex", "alignItems": "center", "gap": "14px"}}>
<svg width="46" height="46" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#F5F4F2"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "lineHeight": "1"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "600", "fontSize": "30px", "color": "#F5F4F2", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
<span style={{"fontSize": "11.5px", "fontWeight": "600", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "#C9A98A", "marginTop": "7px"}}>{"Staffing"}</span>
</span>
</div>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "36px 34px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "26px"}}>{"Centred — signage & covers"}</p>
<div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "14px", "textAlign": "center"}}>
<svg width="44" height="44" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#3A1D22"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "lineHeight": "1"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "600", "fontSize": "28px", "color": "#171A20", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
<span style={{"fontSize": "11px", "fontWeight": "600", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "#8A6740", "marginTop": "8px", "textIndent": "0.3em"}}>{"Staffing"}</span>
</span>
</div>
<p style={{"fontSize": "13px", "color": "#5B6270", "lineHeight": "1.6", "marginTop": "20px"}}>{"Centred stacking indents the descriptor by one track unit so it optically centres under the wordmark."}</p>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "36px 34px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "26px"}}>{"Compact — nav bars, 24px and under"}</p>
<div style={{"display": "flex", "alignItems": "center", "gap": "11px"}}>
<svg width="28" height="28" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#3A1D22"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"display": "flex", "flexDirection": "column", "alignItems": "flex-start", "lineHeight": "1"}}>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "600", "fontSize": "19px", "color": "#171A20", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
<span style={{"fontSize": "8.5px", "fontWeight": "600", "letterSpacing": "0.28em", "textTransform": "uppercase", "color": "#8A6740", "marginTop": "4px"}}>{"Staffing"}</span>
</span>
</div>
<p style={{"fontSize": "13px", "color": "#5B6270", "lineHeight": "1.6", "marginTop": "20px"}}>{"Below a 19px wordmark the descriptor track tightens to 0.28em; below 16px it drops entirely."}</p>
</div>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "34px", "marginTop": "16px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "24px"}}>{"Secondary — horizontal, where height is limited"}</p>
<div style={{"display": "flex", "alignItems": "center", "gap": "14px", "flexWrap": "wrap"}}>
<svg width="34" height="34" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#3A1D22"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "600", "fontSize": "26px", "color": "#171A20", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
<span style={{"width": "18px", "height": "2px", "background": "#C9A98A", "transform": "skewX(-22deg)"}}></span>
<span style={{"fontSize": "10px", "fontWeight": "600", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "#8A6740"}}>{"Staffing"}</span>
</div>
<p style={{"fontSize": "13.5px", "color": "#5B6270", "lineHeight": "1.6", "marginTop": "20px", "maxWidth": "620px"}}>{"Email signatures, invoice headers, badge strips, vehicle doors. A skewed sand tick — lifted from the mark's own diagonal cut — separates the descriptor instead of a grey pipe."}</p>
</div>
</section>
<section style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "64px 40px 0"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "14px"}}>{"02 · The wordmark"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "29px", "lineHeight": "1.15", "color": "#171A20", "letterSpacing": "-0.02em", "maxWidth": "600px"}}>{"Fraunces at full optical size, drawn tight and dry"}</h2>
<p style={{"fontSize": "15px", "color": "#5B6270", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"Fraunces is set on its display optical size with the soft and wonk axes at zero: sharper terminals, flatter curves, no whimsy. Tracking closes to −0.025em so the seven letters read as one shape."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "16px", "marginTop": "30px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "34px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "22px"}}>{"After — opsz 144, soft 0, wonk 0"}</p>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "600", "fontSize": "42px", "color": "#171A20", "letterSpacing": "-0.025em"}}>{"Asepsis"}</span>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "34px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "22px"}}>{"Before — default axes"}</p>
<span style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 40", "fontWeight": "600", "fontSize": "42px", "color": "#171A20", "letterSpacing": "-0.01em", "opacity": "0.5"}}>{"Asepsis"}</span>
</div>
</div>
</section>
<section style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "64px 40px 0"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "14px"}}>{"03 · The mark"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "29px", "lineHeight": "1.15", "color": "#171A20", "letterSpacing": "-0.02em", "maxWidth": "560px"}}>{"Two halves of a rounded square, cut on the diagonal and offset"}</h2>
<p style={{"fontSize": "15px", "color": "#5B6270", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"The offset reads as two parties meeting — a worker and an employer — held in one shape. The halves never touch and never fully align."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(200px,1fr))", "gap": "16px", "marginTop": "30px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "32px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "18px"}}>
<svg width="78" height="78" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#3A1D22"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"fontSize": "13px", "fontWeight": "600", "color": "#171A20"}}>{"Primary"}</span>
</div>
<div style={{"borderRadius": "18px", "background": "#3A1D22", "padding": "32px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "18px"}}>
<svg width="78" height="78" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#F5F4F2"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
<span style={{"fontSize": "13px", "fontWeight": "600", "color": "#F5F4F2"}}>{"Reversed"}</span>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "32px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "18px"}}>
<svg width="78" height="78" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#22262E"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#22262E" opacity="0.42"></path></svg>
<span style={{"fontSize": "13px", "fontWeight": "600", "color": "#171A20"}}>{"Single colour"}</span>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#EBE8E2", "padding": "32px", "display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "18px"}}>
<div style={{"padding": "19px", "border": "1px dashed #A8825F", "borderRadius": "6px"}}>
<svg width="40" height="40" viewBox="0 0 100 100" fill="none"><path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="#3A1D22"></path><path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A"></path></svg>
</div>
<span style={{"fontSize": "13px", "fontWeight": "600", "color": "#171A20"}}>{"Clear space"}</span>
</div>
</div>
</section>
<section style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "64px 40px 0"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "14px"}}>{"04 · Colour"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "29px", "lineHeight": "1.15", "color": "#171A20", "letterSpacing": "-0.02em", "maxWidth": "520px"}}>{"Oxblood carries the brand, slate carries the product"}</h2>
<p style={{"fontSize": "15px", "color": "#5B6270", "lineHeight": "1.65", "maxWidth": "620px", "marginTop": "12px"}}>{"Marketing surfaces are oxblood. Signed-in product surfaces are slate. Sand is the only accent: one action, one rule, or one figure at a time — never a background for body copy."}</p>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(196px,1fr))", "gap": "14px", "marginTop": "30px"}}>
{(palette ?? []).map((c, index1) => <React.Fragment key={index1}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "16px", "overflow": "hidden", "background": "#fff"}}>
<div style={c.swatch}></div>
<div style={{"padding": "18px 20px"}}>
<p style={{"fontSize": "14.5px", "fontWeight": "600", "color": "#171A20"}}>{c.name}</p>
<p style={{"fontSize": "13px", "color": "#5B6270", "fontVariantNumeric": "tabular-nums", "marginTop": "3px"}}>{c.hex}</p>
<p style={{"fontSize": "12.5px", "color": "#5B6270", "lineHeight": "1.55", "marginTop": "9px"}}>{c.role}</p>
</div>
</div>
</React.Fragment>)}
</div>
<p style={{"fontSize": "13px", "color": "#5B6270", "lineHeight": "1.6", "marginTop": "18px", "maxWidth": "660px"}}>{"Practice colours are tonal cousins, not a rainbow: Healthcare #8C3A44, Skilled Trades #3A4A63, Technical Trades #8A6740, Professional #3D6B57, International #3A1D22 — each with a light tint for pill backgrounds. Type under 16px always uses the text-safe value, never the lighter decorative sand."}</p>
</section>
<section style={{"maxWidth": "1080px", "margin": "0 auto", "padding": "64px 40px 88px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#8A6740", "marginBottom": "14px"}}>{"05 · Typography"}</p>
<h2 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "29px", "lineHeight": "1.15", "color": "#171A20", "letterSpacing": "-0.02em"}}>{"Fraunces speaks, Instrument Sans works"}</h2>
<div style={{"display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(280px,1fr))", "gap": "16px", "marginTop": "30px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "32px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "20px"}}>{"Fraunces · display · 500 & 600"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "40px", "lineHeight": "1.05", "letterSpacing": "-0.022em", "color": "#171A20"}}>{"Every kind of work"}</p>
<p style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "600", "fontSize": "25px", "color": "#3A1D22", "marginTop": "18px", "fontVariantNumeric": "tabular-nums"}}>{"Every kind of work."}</p>
<p style={{"fontSize": "13.5px", "color": "#5B6270", "lineHeight": "1.6", "marginTop": "18px"}}>{"Headlines, section heads, stat figures, wordmark. Never under 18px, never for body copy or labels."}</p>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "18px", "background": "#fff", "padding": "32px"}}>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "20px"}}>{"Instrument Sans · 400–700"}</p>
<p style={{"fontSize": "19px", "fontWeight": "600", "color": "#171A20"}}>{"Weekly pay, every Friday"}</p>
<p style={{"fontSize": "15px", "color": "#262A33", "lineHeight": "1.65", "marginTop": "12px"}}>{"Body copy sits at 15px on 1.65. Secondary copy is 13.5px. Labels are 11.5px at 700 with 0.12em tracking, uppercase. Figures in tables use tabular numerals."}</p>
<p style={{"fontSize": "11.5px", "fontWeight": "700", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "#8A6740", "marginTop": "16px"}}>{"Label · uppercase · tracked"}</p>
</div>
</div>
</section>
</main>

</>;
}
