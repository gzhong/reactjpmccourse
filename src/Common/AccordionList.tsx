import * as React from 'react';

export default class AccordionList extends React.Component<AccordionProps, AccordionState>{
    public constructor(props: AccordionProps){
        super(props);
        this.state = {
            opened: !!props.opened
        }
        this.handleTitleClick = this.handleTitleClick.bind(this);
    }

    public render(){
        const titleClassName = `list-title${this.state.opened ? " list-title-closed" : ''}`;
        return (
            <div className="list">
                <div 
                    className={titleClassName}
                    onClick={this.handleTitleClick}
                >{this.props.title}</div>
                {this.state.opened ? this.props.children : null}
            </div>
        );
    }

    private handleTitleClick(evt: React.MouseEvent<any>){
        this.setState({opened: !this.state.opened});
    }
}

interface AccordionProps {
    title: string;
    opened?: boolean;
}

interface AccordionState {
    opened: boolean;
}