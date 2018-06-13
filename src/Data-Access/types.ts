import Beverage from "./Beverage";
import Pastry from "./Pastry";

export interface DataContext{
    beverageContext: BeverageContext;
    pastryContext: PastryContext;
}

export interface BeverageContext{
    getBeverages(): Promise<Beverage[]>
}

export interface PastryContext{
    getPastries(): Promise<Pastry[]>
}
