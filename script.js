let lALakers = (89 + 120 + 103 + 100) / 4;
let gSWarriors = (97 + 105 + 110 + 99) / 4;

let mediamaior = lALakers > gSWarriors ? "Los Angeles Lakers" : "Golden State Warriors";

alert("O time com maior média é " + mediamaior +
    "\n\nAs médias são:" +
    "\nLos Angeles Lakers - " + lALakers +
    "\nGolden State Warriors - " + gSWarriors);

//Extra
let cCavaliers = (90 + 117 + 108 + 89) / 4;
let resultado;

if (lALakers > gSWarriors && lALakers > cCavaliers) 
    resultado = "Los Angeles Lakers";
 else if (gSWarriors > cCavaliers) 
    resultado = "Golden State Warriors";
 else 
    resultado = "Cleveland Cavaliers";


alert("\nO time com maior média é " + resultado +
    "\n\nAs médias são:" +
    "\nLos Angeles Lakers - " + lALakers +
    "\nGolden State Warriors - " + gSWarriors +
    "\nCleveland Cavaliers - " + cCavaliers);