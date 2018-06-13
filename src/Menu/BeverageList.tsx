import * as React from 'react';
import BeverageItem from './BeverageItem';
import Beverage from '../Data-Access/Beverage';
import { DataContext } from '../Data-Access/types';
import AccordionList from '../Common/AccordionList';

class BeverageList extends React.Component<BeverageListProps,BeverageListState> {
    constructor(props: BeverageListProps){
        super(props);
        this.state = {
            beverages: [],
            error: null,
        };
    }

    public componentDidMount(){
        this.props.dataContext.beverageContext.getBeverages()
            .then((beverages: Beverage[]) => this.setState({beverages, error: null}))
            .catch((error: Error) => this.setState({error}));
    }

    public render() {
        if(this.state.error){
            return <span>Failed to fetch beverages</span>
        }
        const beverageItems = this.state.beverages.map(b=><BeverageItem key={b.id} beverage={b}/>);
        return (
            <AccordionList title="Beverages" opened={true}>
                <table className="list">
                    <tr>
                        <th className="list-name">&nbsp;</th>
                        <th className="list-price">Price</th>
                    </tr>
                    {beverageItems}
                </table>
            </AccordionList>
        );
    }
}

interface BeverageListProps {
    dataContext: DataContext
}

interface BeverageListState {
    beverages: Beverage[],
    error: Error | null,
}

export default BeverageList;