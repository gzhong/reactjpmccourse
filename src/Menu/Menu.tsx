// Menu.js
// Copyright (c) 2017-2018 NextStep IT Training. All rights reserved.
//
// Cafe menu view.
//

import * as React from 'react'

import '../Assets/styles/application.css'
import BeverageList from './BeverageList';
import PastryList from './PastryList';
import dataContext from '../Data-Access/dataContext';

const Menu = () => (
    <div>
        <h1>Menu</h1>
        <BeverageList dataContext={dataContext}/>
        <PastryList dataContext={dataContext}/>
    </div>
);

export default Menu