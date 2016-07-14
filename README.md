# JS Module Patterns

Node.js and npm are required to configure and run the MultiMath demo application.

They may be installed from the Node.js website (https://www.nodejs.org).

Install the npm packages and start the app with the following steps:

1. Open a terminal in the "multimath" folder.
2. Type "npm install".
3. Type "npm start".
4. Open a browser and visit http://localhost:8080.

## Revealing Module Pattern

- Function scoping, provides nice encapsulation of functions implementation details
- Adds a new value to the global, one scope per module
- Clear delineation between between private implementation and pubic API
- No dependency management (you have to keep track of what is being included and where, [sad face] )
- Two popular flavours
    - Singleton
    - Constructor function
    
```JavaScript
var scoreboard = function() {
    var message = 'Welcome to the game!';
    function printMessage() {
        console.log(message);
    }
    return {
        showMessage: printMessage  // expose the API with this object literal
    }
}(); // immediately executing the function making its instance available
```

## Module loaders
RequireJs
SystemJs