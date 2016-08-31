import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import ExploreContainer from './explore/explore_container';
import FooterContainer from './footer/footer_container';

const App = ({children}) => (
  <div>
    <header>
      <HeaderContainer />
    </header>
    {children}
    <FooterContainer />
  </div>
);
// <Link to="/" className="header-link"><h1>Cockatune</h1></Link>

export default App;
