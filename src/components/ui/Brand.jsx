import React from 'react';

export default function Brand({ inverse = false }) {
  return (
    <span className={`brand${inverse ? ' brand--inverse' : ''}`}>
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path d="M6 94V36A8 8 0 0 1 14 28H64Z" fill="currentColor" />
        <path d="M94 6V64A8 8 0 0 1 86 72H36Z" fill="#C9A98A" />
      </svg>
      <span className="brand__type"><span>Asepsis</span><small>Staffing</small></span>
    </span>
  );
}
