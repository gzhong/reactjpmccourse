import * as React from 'react';
import Pastry from '../Data-Access/Pastry';

const PastryItem = (props: PastryItemProp) => (
    <tr>
        <td className="list-name">{props.pastry.name}</td>
        <td className="list-price">{props.pastry.price}</td>
    </tr>
);

interface PastryItemProp{
    pastry: Pastry
}

export default PastryItem;