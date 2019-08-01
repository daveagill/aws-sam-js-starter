# Serverless Backend Starter Project (AWS SAM + Javascript)

A simple starter project that can be used to get going building a serverless backend for your SaaS application with Javascript using AWS SAM.

This project is an alternative to bootstrapping a project using the `sam init` command. Benefits of using _this_ starter include:

* One package.json for the whole backend (not one per lambda).
* Shared node_modules across all lambda functions.
* Generates smaller, single-file code bundles per lambda.
* Automatically rebuilds after code changes.
* Jest for unit-testing instead of Mocha + Chai.
* Webpack, enables easy inclusion of additional loaders & plugins.
* Code linting.
* Everything is in the `backend/` folder so you can easily add a `frontend/` folder and build a SaaS application with your favourite frontend framework (e.g. create-react-app).


### Features:

* AWS SAM (Lambda & API Gateway)
* Javascript (Node10.x compatible)
* Webpack (in `--watch` mode) to auto-rebundle code & dependencies. __This replaces the need for `sam build`__
* Unit testing with Jest
* Linting with ESLint

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


### Packaging and Deployment

For now just use `sam` commands to do this [as documented](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-deploying.html#serverless-sam-cli-using-package-and-deploy) but I plan to add scripts to make this easier.

Just be aware when using `sam package` that this starter project does not emit the built lambdas into the `.aws-sam/` directory like the `sam build` command would have done (we use a `build/` directory instead) and nor does it copy the template.yaml file so you should point to the original yaml file using the `--template-file` argument.