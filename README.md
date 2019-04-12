# A simple OAuth

## Summary

This is just a simple app to practice Open Authentication 2.0 (OAuth 2.0) on the backend. This is written in JavaScript using Node.js and an Express server, a hosted Mongo database, Passport.js, and OAuth. For now this app is set up for Google, but might expand in the future to include Facebook, Twitter, etc.

## Brief Description of OAuth

Open Authentication (or OAuth) is basically third-party authentication or **delegated authentication**. It answers the question of how do I log into a third-party application without revealing my username and password. Instead of using username and password, a web access token is used. The access token is only good for a limited time. The time is pre-determined, but (depending on the app) can be for an hour.

An example would be when a user logs into a ride app like Lyft, Uber, Flywheel, etc. (in this case the ride-shar app is the **client**) and the client asks if you want to login with Google or Facebook (called the **resource provider**). The user (also called the **resource owner**) logins to Google, access is granted to the ride-sharing app, and the user hails a ride.

What's abstracted away from the **resource owner** (or the user) is the **client** (ride-share app) contacts the **resource provider** (Google) with web access token with a time limit. When the time expires, access is denied, and the user needs to login again to grant another access token. Going further, the **client** needs to contact the **resource provider** ahead of time to setup authorization, sometimes an app name or website link or both with a route, to receive a Client Key and Client Secret. When the **resource owner** wants to use the **client**, the **client** contacts the **resource provider** with the required Key and Secret and is sent an access token.

That is not the complete flow or scope of how OAuth works, but the basic, bare-bones of what happens.
