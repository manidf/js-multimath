var player = function() {
    
    //private members
    var playerName = '';

    function logPlayer() {
        console.log('The current player ' + playerName);
    }

    function setName(newName) {
        playerName = newName;
    }

    function getName() {
        return playerName;
    }

    return {
        logPlayer: logPlayer,
        setName: setName,
        getName: getName
    }

}