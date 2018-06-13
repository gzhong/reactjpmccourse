// NS40801 Pastry.js
// Copyright (c) 2017-2018 Next Step IT Training. All rights reserved.
//

export default class Pastry {

    constructor(obj) {

        Object.assign(this, obj)
    }

    get id() {

        return this._id
    }

    set id(value) {

        this._id = value
    }

    get name() {

        return this._name
    }

    set name(value) {

        this._name = value
    }
    
    get price() {

        return this._price
    }

    set price(value) {

        this._price = value
    }
}