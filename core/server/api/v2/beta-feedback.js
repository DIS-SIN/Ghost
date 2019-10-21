const Promise = require('bluebird');
const common = require('../../lib/common');
const req = require('request-promise');
const api = require('.');
let mailer;
let _private = {};

_private.sendData = (object) => {

    const options = {
        method: 'POST',
        uri: 'http://api.posttestserver.com/post',
        body: {
            some: 'payload'
        },
        json: true // Automatically stringifies the body to JSON
    }
    req(options)
        .then(function (parsedBody) {
            // POST succeeded...
        })
        .catch(function (err) {
            // POST failed...
        });





    return mailer.send(object.mail[0].message).catch((err) => {
        if (mailer.state.usingDirect) {
            api.notifications.add(
                {
                    notifications: [{
                        type: 'warn',
                        message: [
                            common.i18n.t('warnings.index.unableToSendEmail'),
                            common.i18n.t('common.seeLinkForInstructions', {link: 'https://ghost.org/docs/concepts/config/#mail'})
                        ].join(' ')
                    }]
                },
                {context: {internal: true}}
            );
        }

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
