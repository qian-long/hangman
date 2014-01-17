function getWord() {
  // This function randomly chooses a word and converts to uppercase from the given list
  var words = new Array('abate','aberrant','abscond','accolade','acerbic','acumen','adulation','adulterate','aesthetic','aggrandize','alacrity','alchemy','amalgamate',
'ameliorate','amenable','anachronism','anomaly','approbation','archaic','arduous','ascetic','assuage','astringent','audacious','austere','avarice','aver','axiom','bolster','bombast','bombastic','bucolic','burgeon','cacophony','canon','canonical','capricious','castigation','catalyst','caustic','censure','chary','chicanery','cogent','complaisance','connoisseur','contentious','contrite','convention','convoluted','credulous','culpable','cynicism','dearth','decorum','demur','derision','desiccate','diatribe','didactic','dilettante','disabuse','discordant','discretion','disinterested','disparage','disparate','dissemble','divulge','dogmatic','ebullience','eccentric','eclectic','effrontery','elegy','eloquent','emollient','empirical','endemic','enervate','enigmatic','ennui','ephemeral','equivocate','erudite','esoteric','eulogy','evanescent','exacerbate','exculpate','exigent','exonerate','extemporaneous','facetious','fallacy','fawn','fervent','filibuster','flout','fortuitous','fulminate','furtive','garrulous','germane','glib','grandiloquence','gregarious','hackneyed','halcyon','harangue','hedonism','hegemony','heretical','hubris','hyperbole','iconoclast','idolatrous','imminent','immutable','impassive','impecunious','imperturbable','impetuous','implacable','impunity','inchoate','incipient','indifferent','inert','infelicitous','ingenuous','inimical','innocuous','insipid','intractable','intransigent','intrepid','inured','inveigle','irascible','laconic','laud','loquacious','lucid','luminous','magnanimity','malevolent','malleable','martial','maverick','mendacity','mercurial','meticulous','misanthrope','mitigate','mollify','morose','mundane','nebulous','neologism','neophyte','noxious','obdurate','obfuscate','obsequious','obstinate','obtuse','obviate','occlude','odious','onerous','opaque','opprobrium','oscillation','ostentatious','paean','parody','pedagogy','pedantic','penurious','penury','perennial','perfidy','perfunctory','pernicious','perspicacious','peruse','pervade','pervasive','phlegmatic','pine','pious','pirate','pith','pithy','placate','platitude','plethora','plummet','polemical','pragmatic','prattle','precipitate','precursor','predilection','preen','prescience','presumptuous','prevaricate','pristine','probity','proclivity','prodigal','prodigious','profligate','profuse','proliferate','prolific','propensity','prosaic','pungent','putrefy','quaff','qualm','querulous','query','quiescence','quixotic','quotidian','rancorous','rarefy','recalcitrant','recant','recondite','redoubtable','refulgent','refute','relegate','renege','repudiate','rescind','reticent','reverent','rhetoric','salubrious','sanction','satire','sedulous','shard','solicitous','solvent','soporific','sordid','sparse','specious','spendthrift','sporadic','spurious','squalid','squander','static','stoic','stupefy','stymie','subpoena','subtle','succinct','superfluous','supplant','surfeit','synthesis','tacit','tenacity','terse','tirade','torpid','torque','tortuous','tout','transient','trenchant','truculent','ubiquitous','unfeigned','untenable','urbane','vacillate','variegated','veracity','vexation','vigilant','vilify','virulent','viscous','vituperate','volatile','voracious','waver','zealous');
  return words[parseInt(Math.random() * words.length)].toUpperCase();

}

window.onload = function() {

  // Global variables
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var boardwidth = canvas.width;
  var boardheight = canvas.height;

  // Game variables
  var numGuesses = 0; // keeps track of player's current number of guesses
  var maxGuesses = 10;
  var currentWord = []; // word is represented by an array of characters
  var currentGuess = []; // guess is represented by an array of characters
  var currentBoard; // array containing letters that are not yet picked by the player

  // Drawing constants
  var cellwidth = 30
  var boardX = 0;
  var boardY = boardheight - 4*cellwidth;
  var guessX = 0;
  var guessY = boardheight/3;

  function pickLetter(letter) {
    // This function marks a letter as picked, denoted by '' in currentBoard.
    // During painting, letters marked with '' will be ignored

    // TODO 1: Find the letter in currentBoard and set that array cell to ''(empty string);
    // Hint: temporarily run pickLetter inside init() and use console.log to debug

  }
  function checkLetter(letter) {
    /*
      This function checks to see if the letter is in the current word.
      If the letter is, we mark it in our currentGuess. Then we check if the
      entire word has been completed. If it has, we pop up a win message.
      If the number of guesses exceeds the max alloted, we pop up a lose message.
    */

    var found = false;
    // TODO 2: look for letter in currentWord, if it is there, set found to true;
    // Hint: Iterate through currentWord and check each character


    if (found) {
      // TODO 3: check if currentGuess is equal to currentWord, set complete to true if it is, otherwise set it to false
      var complete = true;
      // TODO 4: if guess is completed, pop up an alert saying "you win!"

    }
    else {
      // TODO 5: increment numGuesses and check if numGuesses exceeds maxGuesses. If so, pop up an alert saying "you lose!"

    }
    return found;
  }


  function paintDude(guess_num) {
    /*
      This function paints a step of the hanged man.
      guess_num specifies which part to paint.
    */

    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    switch(guess_num)
    {
      case 1:
        // grass
        ctx.fillStyle = "green";
        ctx.fillRect(boardwidth*5/8, boardheight*4/5, 200, 10);
        break;
      case 2:
        // vertical
        ctx.fillStyle = "brown";
        ctx.fillRect(boardwidth*5/8, 50, 10, boardheight*4/5 - 50)
        break;
      case 3:
        // horizontal
        ctx.fillStyle = "brown";
        ctx.fillRect(boardwidth*5/8, 50, 100, 10);
        break;
      case 4:
        // noose
        ctx.fillStyle = "brown";
        ctx.fillRect(boardwidth*5/8 + 100, 50, 10, 50);
        break;
      case 5:
        // head
        ctx.beginPath();
        ctx.arc(boardwidth*5/8 + 105, 50 + 25 + 50, 25, 0 , 2*Math.PI);
        ctx.stroke();
        break;
      case 6:
        // body
        ctx.beginPath();
        ctx.moveTo(boardwidth*5/8 + 105, 50 + 25 + 50 + 25);
        ctx.lineTo(boardwidth*5/8 + 105, 50 + 25 + 50 + 25 + 100);
        ctx.stroke();
        break;
      case 7:
        // left arm
        ctx.beginPath();
        ctx.moveTo(boardwidth*5/8 + 105, 150 + 25);
        ctx.lineTo(boardwidth*5/8 + 75, 150 + 25 + 50);
        ctx.stroke();
        break;
      case 8:
        // right arm
        ctx.beginPath();
        ctx.moveTo(boardwidth*5/8 + 105, 150 + 25);
        ctx.lineTo(boardwidth*5/8 + 135, 150 + 25 + 50);
        ctx.stroke();
        break;
      case 9:
        // left leg
        ctx.beginPath();
        ctx.moveTo(boardwidth*5/8 + 105, 250);
        ctx.lineTo(boardwidth*5/8 + 65, 300);
        ctx.stroke();
        break;
      case 10:
        // right leg
        ctx.beginPath();
        ctx.moveTo(boardwidth*5/8 + 105, 250);
        ctx.lineTo(boardwidth*5/8 + 145, 300);
        ctx.stroke();
        break;
      default:
        break;
    }
  }

  function paintCanvas() {
    // Clears canvas
    ctx.clearRect (0, 0, boardwidth, boardheight);

    // paint background
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, boardwidth, boardheight);

    // paint guess
    ctx.font = "30px Arial";
    ctx.fillStyle = "black";
    for (var i = 0; i < currentGuess.length; i++) {
      if (currentGuess[i] == "") {
        ctx.fillText("_", i*cellwidth + guessX, guessY);
      }
      else {
        ctx.fillText(currentGuess[i], i*cellwidth + guessX, guessY);
      }
    }

    // paint unused word board (40px by 40px cells for each cell)
    // 7 by 4 grid board
    ctx.strokeStyle = "black";
    for(var j = 0; j < 4; j++) {
      for (var i = 0; i < 7; i++) {
        var index = i + j*7;
        if (currentBoard[index] != undefined) {
          ctx.strokeRect(i*cellwidth + boardX, j*cellwidth + boardY, cellwidth, cellwidth);
          ctx.fillText(currentBoard[i + j*7], i*cellwidth + boardX, j*cellwidth + cellwidth + boardY);
        }
      }
    }

    // Paint dude
    // TODO 7: Paint all the parts of the dude from 1 up to numGuesses
    // Hint: use paintDude() defined above;
  }

    canvas.addEventListener("click", function(e) {
    /*
      This click event captures the letter that was clicked on the letter board,
      picks that letter as the guess, checks the guess, and repaints and canvas.
    */

    // Gets x and y coords relative to canvas
    var x = e.clientX - canvas.offsetLeft;
    var y = e.clientY - canvas.offsetTop;

    if (x > boardX && x < 8*cellwidth && y > boardY && y < boardY + 5*cellwidth) {
      // TODO 8: determine the col and row indices of the letter board from the x and y
      // coordinates of the mouse click. Using col and row, determine the index of the
      // currentBoard array that grid cell belongs to.
      //var col = Math.floor((x - boardX) / cellwidth);
      //var row = Math.floor((y - boardY) / cellwidth);
      // TODO 9: set index to the correct value
      var index = 0;

      if (index < currentBoard.length) {
        var letter = currentBoard[index];
        if (currentBoard[index] != "") {
          // TODO 10: call pickLetter on the guess, call checkLetter on the guess,
          // call paintCanvas();
        }
      }
    }
  }, false);


  function init() {
    // Initializes the game.
    numGuesses = 0;

    // TODO(last): change "ABATE" to getWord() to randomize word choice
    currentWord = "ABATE".split("");
    currentGuess = new Array(currentWord.length);

    // Set currentGuess to array of empty strings
    for (var i = 0; i < currentGuess.length; i++) {
      currentGuess[i] = "";
    }

    // Set currentBoard to full alphabet
    currentBoard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    paintCanvas();

  }

  init();
}
