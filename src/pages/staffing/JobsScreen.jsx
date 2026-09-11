import React from 'react';

export default function JobsScreen(values) {
  const { activeFilters, clearFilters, d, driversOnly, filterSummary, goJobs, hasFilters, noExpOnly, noResults, onSearch, onSort, onZip, p, r, resultCount, search, settingOptions, shiftOptions, sort, sponsoredOnly, toggleDrivers, toggleNoExp, toggleSponsored, typeOptions, verticalOptions, visibleJobs, zip } = values;
  return <>
<div style={{"background": "#22262E", "padding": "38px 0 32px"}}>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "0 32px"}}>
<p style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.1em", "textTransform": "uppercase", "color": "#C9A98A", "marginBottom": "10px"}}>{"Open shifts & roles"}</p>
<h1 style={{"fontFamily": "'Fraunces',serif", "fontVariationSettings": "'opsz' 144,'SOFT' 0,'WONK' 0", "fontWeight": "500", "fontSize": "38px", "lineHeight": "1.1", "color": "#fff", "letterSpacing": "-0.01em", "maxWidth": "620px"}}>{"Find work across our specialisms"}</h1>
<p style={{"color": "rgba(255,255,255,0.68)", "fontSize": "15.5px", "marginTop": "12px", "maxWidth": "560px"}}>{"One application covers all of them. Weekly pay, every Friday. Apply online or walk into any of our 48 branches."}</p>
<div style={{"display": "flex", "gap": "8px", "background": "#fff", "borderRadius": "14px", "padding": "9px", "marginTop": "24px", "boxShadow": "0 20px 60px -20px rgba(23,26,32,0.30)", "flexWrap": "wrap", "maxWidth": "820px"}}>
<label style={{"flex": "1 1 240px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 13px", "borderRadius": "9px", "background": "#F5F4F2"}}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#5B6270" strokeWidth="2"><circle cx="11" cy="11" r="7"></circle><path d="M21 21l-4.35-4.35"></path></svg>
<input value={search} onChange={onSearch} placeholder="Job title, trade, or license" style={{"border": "none", "outline": "none", "background": "transparent", "fontSize": "14.5px", "color": "#262A33", "width": "100%"}} />
</label>
<label style={{"flex": "1 1 160px", "display": "flex", "alignItems": "center", "gap": "10px", "padding": "11px 13px", "borderRadius": "9px", "background": "#F5F4F2"}}>
<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#5B6270" strokeWidth="2"><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input value={zip} onChange={onZip} placeholder="ZIP code or city" style={{"border": "none", "outline": "none", "background": "transparent", "fontSize": "14.5px", "color": "#262A33", "width": "100%"}} />
</label>
<button className="site-hover-17" type="button" style={{"background": "#22262E", "color": "#fff", "padding": "12px 22px", "borderRadius": "9px", "fontSize": "14.5px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Search jobs"}</button>
</div>
</div>
</div>
<div style={{"maxWidth": "1240px", "margin": "0 auto", "padding": "32px", "display": "flex", "gap": "28px", "alignItems": "flex-start", "flexWrap": "wrap"}}>
<aside style={{"flex": "0 1 240px", "minWidth": "220px", "display": "flex", "flexDirection": "column", "gap": "16px", "position": "sticky", "top": "98px"}}>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<h3 style={{"fontFamily": "'Instrument Sans',sans-serif", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "12px"}}>{"Practice"}</h3>
<div style={{"display": "flex", "flexDirection": "column", "gap": "2px"}}>
{(verticalOptions ?? []).map((v, index18) => <React.Fragment key={index18}>
<button type="button" onClick={v.go} style={v.style}>
<span style={{"display": "flex", "alignItems": "center", "gap": "9px"}}><span style={v.dot}></span>{v.name}</span>
<span style={{"fontSize": "12.5px", "color": "#5B6270", "fontWeight": "600"}}>{v.count}</span>
</button>
</React.Fragment>)}
</div>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<h3 style={{"fontFamily": "'Instrument Sans',sans-serif", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "12px"}}>{"Solution type"}</h3>
<div style={{"display": "flex", "flexDirection": "column", "gap": "9px"}}>
{(typeOptions ?? []).map((t, index19) => <React.Fragment key={index19}>
<label style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "13.5px", "color": "#262A33", "cursor": "pointer"}}>
<input type="checkbox" checked={t.on} onChange={t.go} style={{"width": "15px", "height": "15px", "accentColor": "#22262E"}} />{"\n              "}{t.name}{"\n            "}</label>
</React.Fragment>)}
</div>
</div>
<div style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "padding": "18px", "background": "#fff"}}>
<h3 style={{"fontFamily": "'Instrument Sans',sans-serif", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "marginBottom": "12px"}}>{"Shift"}</h3>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "7px"}}>
{(shiftOptions ?? []).map((s, index20) => <React.Fragment key={index20}>
<button type="button" onClick={s.go} style={s.style}>{s.name}</button>
</React.Fragment>)}
</div>
<h3 style={{"fontFamily": "'Instrument Sans',sans-serif", "fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.08em", "textTransform": "uppercase", "color": "#5B6270", "margin": "18px 0 12px", "paddingTop": "16px", "borderTop": "1px solid #E5E2DC"}}>{"Work setting"}</h3>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "7px"}}>
{(settingOptions ?? []).map((ws, index21) => <React.Fragment key={index21}>
<button type="button" onClick={ws.go} style={ws.style}>{ws.name}</button>
</React.Fragment>)}
</div>
<label style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "13.5px", "color": "#262A33", "marginTop": "16px", "paddingTop": "14px", "borderTop": "1px solid #E5E2DC", "cursor": "pointer"}}>
<input type="checkbox" checked={noExpOnly} onChange={toggleNoExp} style={{"width": "15px", "height": "15px", "accentColor": "#22262E"}} />{"\n          No experience required\n        "}</label>
<label style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "13.5px", "color": "#262A33", "marginTop": "11px", "cursor": "pointer"}}>
<input type="checkbox" checked={sponsoredOnly} onChange={toggleSponsored} style={{"width": "15px", "height": "15px", "accentColor": "#22262E"}} />{"\n          Visa sponsorship available\n        "}</label>
<label style={{"display": "flex", "alignItems": "center", "gap": "10px", "fontSize": "13.5px", "color": "#262A33", "marginTop": "11px", "cursor": "pointer"}}>
<input type="checkbox" checked={driversOnly} onChange={toggleDrivers} style={{"width": "15px", "height": "15px", "accentColor": "#22262E"}} />{"\n          Driving & delivery roles\n        "}</label>
</div>
<div style={{"borderRadius": "14px", "padding": "18px", "background": "#F6EFE7"}}>
<p style={{"fontSize": "14px", "fontWeight": "600", "color": "#171A20", "marginBottom": "5px"}}>{"Prefer to walk in?"}</p>
<p style={{"fontSize": "13px", "color": "#5D6472", "lineHeight": "1.55", "marginBottom": "12px"}}>{"Bring your ID and any licenses to a branch. Most walk-ins are interviewed same day."}</p>
<button type="button" onClick={goJobs} style={{"fontSize": "13px", "fontWeight": "700", "color": "#22262E", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"Find your branch →"}</button>
</div>
</aside>
<section style={{"flex": "1 1 440px", "minWidth": "300px"}}>
{(hasFilters) ? <> 
<div style={{"display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap", "padding": "12px 14px", "background": "#F5F4F2", "border": "1px solid #E5E2DC", "borderRadius": "12px", "marginBottom": "14px"}}>
<span style={{"fontSize": "12px", "fontWeight": "700", "letterSpacing": "0.06em", "textTransform": "uppercase", "color": "#5B6270", "whiteSpace": "nowrap"}}>{"Filtered by"}</span>
{(activeFilters ?? []).map((af, index22) => <React.Fragment key={index22}>
<span style={{"fontSize": "12.5px", "fontWeight": "600", "color": "#22262E", "background": "#fff", "border": "1px solid #E5E2DC", "padding": "5px 11px", "borderRadius": "100px", "whiteSpace": "nowrap"}}>{af}</span>
</React.Fragment>)}
<button type="button" onClick={clearFilters} style={{"fontSize": "12.5px", "fontWeight": "700", "color": "#8A6740", "marginLeft": "auto", "whiteSpace": "nowrap"}}>{"Clear all"}</button>
</div>
 </> : null}
<div style={{"display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "16px", "flexWrap": "wrap", "marginBottom": "16px"}}>
<p style={{"fontSize": "14px", "color": "#5D6472"}}><b style={{"color": "#171A20", "fontWeight": "600"}}>{resultCount}{" openings"}</b>{" "}{filterSummary}</p>
<div style={{"display": "flex", "alignItems": "center", "gap": "10px"}}>
<span style={{"fontSize": "13px", "color": "#5B6270"}}>{"Sort"}</span>
<select value={sort} onChange={onSort} style={{"border": "1px solid #E5E2DC", "borderRadius": "8px", "padding": "8px 10px", "fontSize": "13.5px", "color": "#262A33", "background": "#fff"}}>
<option>{"Newest"}</option>
<option>{"Highest pay"}</option>
<option>{"Nearest branch"}</option>
</select>
</div>
</div>
<div style={{"display": "flex", "flexDirection": "column", "gap": "12px"}}>
{(visibleJobs ?? []).map((j, index23) => <React.Fragment key={index23}>
<article className="site-hover-24" style={{"border": "1px solid #E5E2DC", "borderRadius": "14px", "background": "#fff", "padding": "20px 22px", "display": "flex", "gap": "18px", "alignItems": "flex-start", "position": "relative", "overflow": "hidden", "transition": "border-color .18s ease,box-shadow .18s ease,transform .18s ease"}}>
<span style={j.bar}></span>
<div style={j.logo}>
<span style={{"fontFamily": "'Fraunces',serif", "fontSize": "15px", "fontWeight": "600"}}>{j.initials}</span>
</div>
<div style={{"flex": "1 1 240px", "minWidth": "200px"}}>
<div style={{"display": "flex", "alignItems": "center", "gap": "8px", "flexWrap": "wrap", "marginBottom": "4px"}}>
<span style={j.pillStyle}>{j.vertical}</span>
{(j.urgent) ? <> 
<span style={{"fontSize": "11px", "fontWeight": "700", "color": "#8C3A44", "background": "#F6EBEC", "padding": "4px 8px", "borderRadius": "100px", "whiteSpace": "nowrap"}}>{"Fills fast"}</span>
 </> : null}
{(j.sponsored) ? <> 
<span style={{"fontSize": "11px", "fontWeight": "700", "color": "#3A1D22", "background": "#F6EFE7", "border": "1px solid #E4D6C6", "padding": "4px 8px", "borderRadius": "100px", "whiteSpace": "nowrap"}}>{"Visa sponsorship"}</span>
 </> : null}
</div>
<button type="button" onClick={j.open} style={{"textAlign": "left", "fontSize": "16.5px", "fontWeight": "600", "color": "#171A20", "display": "block", "marginBottom": "3px"}}>{j.title}</button>
<p style={{"fontSize": "13.5px", "color": "#5D6472"}}>{j.company}{" · "}{j.location}</p>
<div style={{"display": "flex", "flexWrap": "wrap", "gap": "6px", "marginTop": "12px"}}>
<span style={{"fontSize": "11.5px", "fontWeight": "600", "padding": "5px 10px", "borderRadius": "100px", "background": "#F6EFE7", "color": "#8A6740"}}>{j.type}</span>
<span style={{"fontSize": "11.5px", "fontWeight": "600", "padding": "5px 10px", "borderRadius": "100px", "background": "#F5F4F2", "color": "#5D6472"}}>{j.shift}</span>
<span style={{"fontSize": "11.5px", "fontWeight": "600", "padding": "5px 10px", "borderRadius": "100px", "background": "#F5F4F2", "color": "#5D6472"}}>{j.credLine}</span>
</div>
</div>
<div style={{"flex": "0 0 auto", "display": "flex", "flexDirection": "column", "alignItems": "flex-end", "gap": "10px", "minWidth": "150px"}}>
<div style={{"textAlign": "right"}}>
<p style={{"fontSize": "15.5px", "fontWeight": "600", "color": "#171A20"}}>{j.pay}</p>
<p style={{"fontSize": "12px", "color": "#5B6270", "marginTop": "2px"}}>{"Weekly pay · "}{j.posted}</p>
</div>
<div style={{"display": "flex", "gap": "8px"}}>
<button type="button" onClick={j.save} style={j.saveStyle}>{j.saveLabel}</button>
<button className="site-hover-25" type="button" onClick={j.open} style={{"background": "#22262E", "color": "#fff", "padding": "9px 15px", "borderRadius": "8px", "fontSize": "13px", "fontWeight": "600", "whiteSpace": "nowrap", "transition": "background .16s ease,color .16s ease,border-color .16s ease"}}>{"View shift"}</button>
</div>
</div>
</article>
</React.Fragment>)}
</div>
{(noResults) ? <> 
<div style={{"border": "1px dashed #E5E2DC", "borderRadius": "14px", "padding": "44px", "textAlign": "center", "background": "#F5F4F2"}}>
<p style={{"fontSize": "16px", "fontWeight": "600", "color": "#171A20", "marginBottom": "6px"}}>{"No openings match those filters"}</p>
<p style={{"fontSize": "14px", "color": "#5D6472", "marginBottom": "16px"}}>{"Clear a filter, or apply once and let a recruiter match you as shifts open."}</p>
<button type="button" onClick={clearFilters} style={{"border": "1.5px solid #E5E2DC", "padding": "10px 18px", "borderRadius": "9px", "fontSize": "14px", "fontWeight": "600", "whiteSpace": "nowrap", "color": "#22262E"}}>{"Clear filters"}</button>
</div>
 </> : null}
</section>
</div>
</>;
}
