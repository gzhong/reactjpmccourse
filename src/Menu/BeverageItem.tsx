import * as React from 'react';
import Beverage from '../Data-Access/Beverage';

const BeverageItem = (props: BeverageProp)=>(
    <tr>
        <td className="list-name">{props.beverage.name}</td>
        <td className="list-price">{props.beverage.price}</td>
    </tr>
);

interface BeverageProp{
    beverage: Beverage
}

export default BeverageItem;