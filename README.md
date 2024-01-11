# React Ethereum Payment System

A web application for an international payment system utilizing Ethereum coins.

## Features

Utilizes the four-party model commonly used in credit card systems.
Users can exchange coins issued by banks for cash and use them as international points.
Creating an internationally stabilized system requires dealing with many complexities, but Ethereum's security system provides a relatively simple and stable solution.


# Smart Contract Deployment using Truffle

This repository demonstrates how to deploy a smart contract using Truffle, and specifically, how to deploy it on a private local network using Ganache. After deployment, the contract's ABI (Application Binary Interface) is extracted from the build folder and included in the `src` directory.

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/installation) installed
- [Ganache](https://www.trufflesuite.com/ganache) installed (for local testing)
- If you need a smart contract to depoly, please see here
- https://github.com/Junhyeok9904/solidity_practice/blob/main/5_fourPartyModel.sol

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Junhyeok9904/react-ether-payment.git
   cd react-ether-payment
   ```
2.1 Switch branch: 

   ```bash
   git switch ver2
   ```

2.2 Install dependencies:

   ```bash
   npm install
   yarn
   ```

## Deployment

1. Run Ganache to start a local blockchain:

   ```bash
   ganache-cli
   ```

2. Compile and migrate the smart contract:

   ```bash
   truffle migrate
   ```

   This will deploy the smart contract to the local Ganache blockchain.

## ABI Extraction

1. After deployment, the smart contract ABI is available in the `build/contracts` directory.

2. Copy the ABI JSON file to the `src` directory:

   ```bash
   cp build/contracts/YourContract.json src/
   ```

## Usage

Now, you can use the smart contract ABI in your application. Import it in your JavaScript/TypeScript file:

```javascript
// src/app.js
const YourContract = require('./YourContract.json');

// Use YourContract ABI as needed
// ...
```

```javascript
// put in your SmartContractAddress
// src/index.js
const contractAddress = "0x0b52DE022e5c9234b017ABbc0f12bD08Be0a84cD"

// Use YourContract ABI as needed
// ...
```

## Contributing

Feel free to contribute to this repository by opening issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
