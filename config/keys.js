module.exports = {
  mongoURI: DATABASEURL,
  googleClientID: GOOGLECLIENTID,
  googleClientSecret: GOOGLECLIENTSECRET
};

//the remote database URL, clientID, and clientSecret are up in Heroku's config vars since this is deployed on Heroku. For local, can use the dotenv package with .env file.
