import * as React from 'react';

import '../Assets/styles/application.css';
import logo from '../Assets/images/tccc-logo.png';

class Header extends React.Component {
    public render() {
        return <header className="app-header"><img className="app-log" src={logo}/></header>;
    }
}

export default Header;