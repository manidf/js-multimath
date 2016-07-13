var scoredboard = function() {

    // private members
    var results = [] //array to store results of every game

    function addResult(newResult) {
        results.push(newResult);
    }

    function updateScoreboard() {
        var output = '<h2>Scoredboard</h2>';

        // loop over all results and create the HTML for the scoreboard
        for (var index = 0; index < results.length; index++) {
            var result = results[index];
            output += '<h4>';
            output += 'result.name' + ': ' + result.score + '/' + result.problems + ' for factor ' + results.factor ;
            output += '</h4>';
        }

        // add te updated scoreboard to the page
        var scoreElement = document.getElementById('scores');
        scoresElement.innerHTML = output;
    }

    // return public members
    return {
        addResult: addResult,
        updateScoreboard: updateScoreboard
    }
}();