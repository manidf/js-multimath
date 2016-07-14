var game = function() {
    
    var factorElement = document.getElementById('factor');
    var problemPerGame = 3;

    function printGame() {

        player.logPlayer();
        
        // determine the number of problems to show
        setProblemCount(document.getElementById('problemCount').value);

        // create the html for the current game
        var gameForm = '';
        for (var i = 1; i <= problemPerGame; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label"';
            gameForm += factorElement.value + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }

        // add the new game to the page
        var gameElement = document.getElementById('game');
        gameElement.innerHTML = gameForm;

        // enable the calculateScore button
        document.getElementById('calculate').removeAttribute('disabled');
    } 

    return {
        printGame: printGame,
        calculateScore: calculateScore,
        setProblemCount: setProblemCount,
        getProblemCount: getProblemCount
    };
}