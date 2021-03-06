## Community Action on Waste Website

Website for Community Action on Waste project.

Features functionality for submitting project ideas for low traffic neighbourhoods.

Others can comment on these ideas with questions/clarifications/support, on a discussion page.

## Install & Run Locally:

Fork the repo to your own account.

Navigate to where you'd like to install the project locally, open bash, and:

```
git clone https://github.com/<your-username>/community-action-on-waste-client
```

In the project directory, you can run:

```
npm i
```

which will install all necessary dependencies mentioned in package.json.
Now `cd server` and `npm i`, `cd ..`, `cd client` and `npm i`.
This will install dependencies for client and server, which are treated separately. After `cd ..`, the package.json in the root directory allows you to run the server and client in the one command:

```
npm run dev
```

Which runs the app in the development mode, and will open your browser.<br />

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Built with
React, TypeScript, Node, Express, MongoDB, Mocha, Chai.

Backend code accessible [here](https://github.com/Luka-Abey/community-action-on-waste-server)

## Contributions

Please get in touch if you'd like to contribute, or go ahead and open a PR :)
