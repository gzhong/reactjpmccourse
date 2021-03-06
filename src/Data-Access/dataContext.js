// NT40801 Solutions/React-Router4/src/data-access/BeverageContext.js
//

import Beverage from './Beverage'
import Pastry from './Pastry'

let beveragesURI = 'http://localhost:3001/data/beverages'
let pastriesURI = 'http://localhost:3001/data/pastries'

class BeverageContext {

    deleteBeverage(id) {
           
        return fetch(`${beveragesURI}/${id}`, { method: 'DELETE' })
                .then( (result) => null )
    }

    getBeverages() {
           
        return fetch(`${beveragesURI}`)
                .then( (result) => result.json() )
                .then( (rows) => {

                    // Build a list of beverage objects from the results.

                    let result = []

                    if (Array.isArray(rows)) {

                        result = rows.map( (row) => this.buildBeverage(row) )
                    }

                    return result
                })
    }

    getBeverage(id) {
           
        return fetch(`${beveragesURI}/${id}`)
                .then( (result) => result.json() )
                .then( (row) => this.buildBeverage(row) )
    }

    insertBeverage(beverage) {
           
        return fetch(`${beveragesURI}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(beverage) })
                .then( (result) => result.json() )
                .then( (row) => this.buildBeverage(row) )
    }

    updateBeverage(id, beverage) {
           
        return fetch(`${beveragesURI}/${id}`, { method: 'PUT', headers: { 'content-type': 'application/json' },  body: JSON.stringify(beverage) })
                .then( (result) => result.json() )
                .then( (row) => this.buildBeverage(row) )
    }

    buildBeverage(row) {

        // Translate the JSON data into an Beverage instance.
                        
        let beverage = new Beverage(row)
        
        return beverage
    }
}

class PastryContext {

    deletePastry(id) {
           
        return fetch(`${pastriesURI}/${id}`, { method: 'DELETE' })
                .then( (result) => null )
    }

    getPastries() {
           
        return fetch(`${pastriesURI}`)
                .then( (result) => result.json() )
                .then( (rows) => {

                    // Build a list of pastry objects from the results.

                    let result = []

                    if (Array.isArray(rows)) {

                        result = rows.map( (row) => this.buildPastry(row) )
                    }

                    return result
                })
    }

    getPastry(id) {
           
        return fetch(`${pastriesURI}/${id}`)
                .then( (result) => result.json() )
                .then( (row) => this.buildPastry(row) )
    }

    insertPastry(pastry) {
           
        return fetch(`${pastriesURI}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(pastry) })
                .then( (result) => result.json() )
                .then( (row) => this.buildPastry(row) )
    }

    updatePastry(id, pastry) {

        return fetch(`${pastriesURI}/${id}`, { method: 'PUT', headers: { 'content-type': 'application/json' },  body: JSON.stringify(pastry) })
                .then( (result) => result.json() )
                .then( (row) => this.buildPastry(row) )
    }

    buildPastry(row) {

        // Translate the JSON data into an Pastry instance.
                        
        let pastry = new Pastry(row)
        
        return pastry
    }
}

class DataContext {

    constructor() {

        this.beverageContext = new BeverageContext()
        this.pastryContext = new PastryContext()
    }

    get beverageContext() {

        return this._beverageContext
    }

    set beverageContext(value) {

        this._beverageContext = value
    }

    get pastryContext() {

        return this._pastryContext
    }

    set pastryContext(value) {

        this._pastryContext = value
    }
}

let dataContext = new DataContext()
export default dataContext 