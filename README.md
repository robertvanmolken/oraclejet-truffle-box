# Oracle JET Truffle Box

This box comes with everything you need to start using smart contracts from a Oracle JET app.  It provides a basic ballot application build using `JET`, `TypeScript`, `Webpack`, and `Web Components` to give you a complete overview of building Dapps with JET.

## Installation

1. Install Truffle, Oracle JET CLI and Ganache CLI globally. If you prefer, the graphical version of Ganache works as well!
    ```javascript
    npm install -g truffle
	npm install -g @oracle/ojet-cli
    npm install -g ganache-cli
    ```
	
3. Install and verify TypeScript for Oracle JET.
    ```javascript
    npm install @type/oracle__oraclejet
	npm list @type/oracle__oraclejet
    ```

4. Download the box. This also takes care of installing the necessary dependencies.
    ```javascript
    truffle unbox robertvanmolken/oraclejet-truffle-box
    ```

5. Run the development blockchain, to make it easier to track things like loading indicators, set a custom blocktime, because Ganache will mine instantly.
    ```javascript
    // 3 second blocktime.
    ganache-cli -b 3
    ```

6. Run the development console.
	```javascript
	truffle develop
	```
	
7. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

8. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run start
    ```
	
9. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```

10. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

# FAQ

* __Where do I find more information about Oracle JET?__

    Check out the [documentation](https://docs.oracle.com/en/middleware/jet/6/develop/index.html) or their repository ([`oraclejet`](https://github.com/oracle/oraclejet)).

* __How do I use this with Ganache?__ 

    The config you need is already in place in truffle.js! Just run your truffle commands as usual, but add --network ganache to your options. For more info, check out our documentation on adding network configurations. Depending on the port you're using and whether or not you're using MetaMask, you may also need to update lines 106 and 112 of app/scripts/index.js.

* __Why is there both a truffle.js file and a truffle-config.js file?__

    `truffle-config.js` is a copy of `truffle.js` for compatibility with Windows development environments. Feel free to delete it if it's irrelevant to your platform.

* __Where is my production build?__

   The production build will be in the `build_webpack` folder. This is because Truffle outputs contract compilations to the `build` folder.