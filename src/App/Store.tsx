// import * as React from 'react';
import {createStore} from 'react-redux';

export const GET_BEVERAGES = 'GET_BEVERAGES';

class Store{
    private _store: Store;
    constructor(){
        this._store = createStore(reducer, {});
    }
    
    reducer(store, action){
        const result = {...store};
        if(action.type ===  GET_BEVERAGES){
            result.beverages = action.beverages;
        }
        return store;
    }

    get store(){
        return this._store;
    }

}

const store = new Store().store

export { store }
