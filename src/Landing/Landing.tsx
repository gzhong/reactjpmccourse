import * as React from 'react';

import '../Assets/styles/application.css';
import Menu from '../Menu/Menu';

const Landing = () => {
    const dt = new Date();
    const headMsg = "Welcome to the Caribbean Coffee Company.";
    const welcomeMsg = (dt.getHours()>=17) ? "Sorry, we're closed" : (dt.getHours()<12) ? "Good Morning!" : "Good Afternoon";
    return (
        <span className="welcome-message">
            {headMsg} {welcomeMsg}
            <Menu/>
        </span>
    );
}

export default Landing;