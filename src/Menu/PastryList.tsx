import * as React from 'react';
import PastryItem from './PastryItem';
import Pastry from '../Data-Access/Pastry';
import {DataContext } from '../Data-Access/types';
import AccordionList from '../Common/AccordionList';

class PastryList extends React.Component<PastryListProp, PastryListState> {
    constructor(props: PastryListProp){
        super(props);
        this.state = {
            pastries: [],
            error: null,
        };
    }

    public componentDidMount(){
        this.props.dataContext.pastryContext.getPastries()
            .then((pastries: Pastry[]) => this.setState({pastries, error: null}))
            .catch((error: Error) => this.setState({error}));
    }

    public render() {
        if(this.state.error){
            return <span>Failed to fetch pastries</span>
        }
        const PastryItems = this.state.pastries.map(p=><PastryItem key={p.id} pastry={p} />)
        return (
            <AccordionList title="Pastries">
                <table className="list">
                    <tr>
                        <th className="list-name">&nbsp;</th>
                        <th className="list-price">Price</th>
                    </tr>
                    {PastryItems}
                </table>
            </AccordionList>
        );
    }
}

interface PastryListProp{
    dataContext: DataContext
}

interface PastryListState{
    pastries: Pastry[];
    error: Error | null;
}

export default PastryList;