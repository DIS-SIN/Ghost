const Promise = require('bluebird');
const req = require('request-promise');
let _private = {};

_private.sendData = (object) => {

    const options = {
        method: 'POST',
        uri: process.env.FEEDBACK_MS_URL,
        body: {
            query: `mutation{createFeedback(appID:"${process.env.FEEDBACK_APP_ID}",email:"${object.feedback[0].email}", comment:"${object.feedback[0].comment}"){id}}`
        },
        json: true // Automatically stringifies the body to JSON
    }

    return req(options)
        .then(function () {
            return true;
        })
        .catch(function (err) {
            return Promise.reject(err);
        });
};

module.exports = {
    docName: 'feedback',

    submit: {
        permissions: true,
        query(frame) {
            return _private.sendData(frame.data);
        }
    },

};
