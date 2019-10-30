const _ = require('lodash');
const logger = require('./logger')
const NestedError = require('nested-error-stacks');
const Promise = require('bluebird');
let mueseumData = require("../data/museums.json")

function getMueseumCategories() {
    let categories = _.keys(mueseumData.category)
    return categories
}

function searchMueseumByInterest(categoryName) {
    let name = categoryName
    let mueseumList = mueseumData.category[`${name}`]
    return mueseumList
}

module.exports = {
    getMueseumCategories,
    searchMueseumByInterest
}



