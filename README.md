# GAE NodeJS / Express with Datastore ORM


## Setup

Before you can run or deploy the sample, you need to do the following:

1.  Refer to the [appengine/README.md][readme] file for instructions on
    running and deploying.
1.  Install dependencies:

        npm install
        
Step 2: *Add Service Key*

Follow instructions and download service key from here[https://cloud.google.com/docs/authentication/getting-started]
Move service key to `/config/` and rename service key to *service-key.json* for git ignore and secrity purposes


Step 3: *Intialize Datastore with your credentials*
```ts
const datastore = new Datastore({
    projectId: 'adventure-time-123', 
    keyFilename: './service-key.json', 
});
```

## Running locally

    npm start or yarn start

## Deploying to App Engine

    gcloud app deploy
    
## TODO
- Authentication Middleware
- Typescript
- Update, List, Delete
- Setup for Staging and Production
- CI 
- Apollo Server

## Running the tests
[appengine]: https://cloud.google.com/appengine/docs/standard/nodejs
[tutorial]: https://cloud.google.com/appengine/docs/standard/nodejs/quickstart
[readme]: ../../README.md
[contributing]: https://github.com/GoogleCloudPlatform/nodejs-docs-samples/blob/master/CONTRIBUTING.md
