const _ = require('lodash');
const logger = require('./logger')
const NestedError = require('nested-error-stacks');
const Promise = require('bluebird');
let data = require("../data/attractions.json")


function getCategoryQuestionaire(categoryName) {
    return data.category[`${categoryName}`]
}

function searchCategories(categoryName, ) {
    let category = getCategoryQuestionaire(categoryName)
    let answers = []
    for(let val of category) {
        if(val.question.includes(interest)) {
            answers.push(val.answer)
        }
    }
    return answers
}

module.exports = {
    getCategoryQuestionaire
}