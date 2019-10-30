const _ = require('lodash');
const logger = require('./logger')
const NestedError = require('nested-error-stacks');
const Promise = require('bluebird');
let data = require("../data/restaurant.json")

function getRestaurantCategories() {
    let categories = _.keys(data.category)
    return categories
}

function getRestaurantNameByCategory(categoryName) {
    let categoryList = _.keys(data.category[`${categoryName}`])
    return categoryList
}

function getRestaurantSpeciality(category, restaurantName) {
    let speciality = data.category[`${category}`][`${restaurantName}`].speciality
    return speciality
    
}

function searchRestaurantBySpeciality(cuisineType, speciality) {
    let restaurants = data.category[`${cuisineType}`]
    let restaurantName = _.findKey(restaurants, function(name) {
        return name.speciality == speciality
    })
    return restaurantName
}


module.exports = {
    getRestaurantCategories,
    getRestaurantNameByCategory,
    getRestaurantSpeciality,
    searchRestaurantBySpeciality
}




