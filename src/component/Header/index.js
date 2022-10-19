import React from 'react';
import Headernav from './header-nav';
import Headerlogo from './header-logo';
import Headerend from './header-end';

export default function Header() {
  return (
    <div className='header'>
      <Headerlogo />
      <Headernav />
      <Headerend />
    </div>
  )
}
