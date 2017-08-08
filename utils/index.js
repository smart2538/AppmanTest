const _ = require('lodash');

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
    // code here
    let newStore = store;
    scores.map(score => {
        _.set(newStore[score.key], name, score.value)
    })
    console.log(newStore)
    return newStore
};

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
    // code here
};

/**
 * @params {Object} store
 */
exports.transformData = store => {
    // code here
    
};
