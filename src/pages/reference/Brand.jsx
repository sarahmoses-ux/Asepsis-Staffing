import React from 'react';
import BrandView from './BrandView.jsx';

const PALETTE = [
  { name: 'Oxblood', hex: '#3A1D22', role: 'Brand ground: marketing pages, hero bands, the mark\u2019s dark half.' },
  { name: 'Oxblood deep', hex: '#2A1418', role: 'Pressed states and photographic scrims over imagery.' },
  { name: 'Slate', hex: '#22262E', role: 'Product ground: dashboards, board headers, primary buttons in-app.' },
  { name: 'Ink', hex: '#171A20', role: 'Headings and primary text on light surfaces.' },
  { name: 'Sand', hex: '#C9A98A', role: 'Accent: one action or rule at a time. Decorative use only in type.' },
  { name: 'Sand text', hex: '#8A6740', role: 'The text-safe accent \u2014 all labels and figures under 16px.' },
  { name: 'Paper', hex: '#F5F4F2', role: 'Default page ground; #FFFFFF is reserved for cards.' }
];

export default class Brand extends React.Component {
  render() { return <BrandView {...this.renderVals()} />; }
  renderVals() {
    return {
      palette: PALETTE.map((c) => ({
        name: c.name, hex: c.hex, role: c.role,
        swatch: { height: '96px', background: c.hex, borderBottom: '1px solid #E5E2DC' }
      }))
    };
  }
}

