import React from 'react';
import OriginalNavbarLayout from '@theme-original/Navbar/Layout';

export default function NavbarLayoutWrapper(props) {
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 'var(--ifm-z-index-fixed)' }}>
      <OriginalNavbarLayout {...props} />
    </header>
  );
}
