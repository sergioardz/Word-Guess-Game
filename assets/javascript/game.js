// Pseudocode
// Create array of words to use in the game
var words = ["ana", "banana", "cuban", "tropicana", "carabina", "pina"];

// Press any key to start game function

window.onload = function playgame() {
    randomword = words[Math.floor(Math.random() * words.length)];
    console.log(randomword);
    console.log(randomword.length);
    console.log(randomword.replace(/[a-zA-Z]/g, '-'));
    var currentwdash = randomword.replace(/[a-zA-Z]/g, '- ');
    document.getElementById("word").innerHTML = currentwdash;
}

// for (var counting = 1; counting < toGuessLength; counting++) {
//     if (userPress == toGuess.charAt(counting)) {
//         console.log(“encontre match en la posicion: ” + counting);



