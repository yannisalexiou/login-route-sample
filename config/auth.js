// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth': {
        'clientID': '2561001130805328', // your App ID
        'clientSecret': 'cbc21f02039c6bd8465c8eff2b8eb1a4', // your App Secret
        'callbackURL': 'https://login-route.herokuapp.comauth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v4.0/me?fields=first_name,last_name,email',
        'profileFields': ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },

    'twitterAuth': {
        'consumerKey': 'your-consumer-key-here',
        'consumerSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth': {
        'clientID': 'your-secret-clientID-here',
        'clientSecret': 'your-client-secret-here',
        'callbackURL': 'http://localhost:8080/auth/google/callback'
    }

};