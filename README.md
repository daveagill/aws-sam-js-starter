# Serverless Backend Starter Project (AWS SAM + Javascript)

A simple starter project that can be used to get going building a serverless backend for your SaaS application with Javascript using AWS SAM.

### Features:

* AWS SAM (Lambda & API Gateway)
* Javascript (Node10.x compatible)
* Webpack (in `--watch` mode) to auto-rebundle code & dependencies. __This replaces the need for `sam build`__
* Unit testing with Jest
* Linting with ESLint

### Why Use This Starter?

This project is an alternative to bootstrapping a project using the `sam init` command. Benefits of using _this_ starter include:

* Easier to manage with one package.json and node_modules for the whole backend (not one per lambda).
* Generates smaller, single-file code bundles per lambda.
* Automatically rebuilds after code changes.
* Jest for unit-testing instead of Mocha + Chai.
* Webpack, enables easy inclusion of additional loaders & plugins.
* Code linting.
* Everything is in the `backend/` folder so you can easily add a `frontend/` folder and build a SaaS application with your favourite frontend framework (e.g. create-react-app).


### Pre-Requisites:
* Node.js
* AWS SAM (+ AWS CLI + Docker)

On MacOS these can be installed easily via Homebrew:

```
brew install nodejs
brew cask install docker
brew tap aws/tap
brew install awscli
brew install aws-sam-cli
```

### Getting Started

Ensure that the aws-cli is configured with auth keys and a desired region by running:

```
aws configure
```

Create an S3 bucket used to host the source-code:

```
aws s3 mb s3://mybucket
```

Edit the project's `.npmrc` file and set the name of the S3 bucket you just created as well as a name for a Cloudformation stack that will be automatically created when deployed.

### Running Locally

Open two command terminals.

In one of them start the webpack build daemon:

```
npm run build.watch
```

In the other one start local AWS SAM environment:

```
npm run api.serve
```

There are two example lambda functions included in this starter project (called hello-world and goodbye-world), invoke them by visiting their respective api endpoints in your browser:

* http://localhost:3000/hello
* http://localhost:3000/goodbye


### Package and Deploy to AWS

There are `package.json` scripts provided that execute corresponding aws-sam-cli commands:

Make sure that lambdas have been bundled:
```
npm run build
```

Upload the bundles to the S3 bucket and generate a corresponding yaml template file:
```
npm run package
```

Deploy a Cloudformation stack to standup the resources:
```
npm run deploy
```

Find out the relvant URLs and resource IDs described as ouputs:
```
npm run outputs
```

Test our your live endpoints by connecting to the URLs (given in the previous step), e.g.

* https://141ab15hv2.execute-api.us-east-1.amazonaws.com/Prod/hello
* https://141ab15hv2.execute-api.us-east-1.amazonaws.com/Prod/goodbye

To delete everything you can undeply your Cloudformation stack:
```
npm run undeploy
```