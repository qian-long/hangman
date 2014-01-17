function getWord() {
  var words = new Array('abate','aberrant','abscond','accolade','acerbic','acumen','adulation','adulterate','aesthetic','aggrandize','alacrity','alchemy','amalgamate','ameliorate','amenable','anachronism','anomaly','approbation','archaic','arduous','ascetic','assuage','astringent','audacious','austere','avarice','aver','axiom','bolster','bombast','bombastic','bucolic','burgeon','cacophony','canon','canonical','capricious','castigation','catalyst','caustic','censure','chary','chicanery','cogent','complaisance','connoisseur','contentious','contrite','convention','convoluted','credulous','culpable','cynicism','dearth','decorum','demur','derision','desiccate','diatribe','didactic','dilettante','disabuse','discordant','discretion','disinterested','disparage','disparate','dissemble','divulge','dogmatic','ebullience','eccentric','eclectic','effrontery','elegy','eloquent','emollient','empirical','endemic','enervate','enigmatic','ennui','ephemeral','equivocate','erudite','esoteric','eulogy','evanescent','exacerbate','exculpate','exigent','exonerate','extemporaneous','facetious','fallacy','fawn','fervent','filibuster','flout','fortuitous','fulminate','furtive','garrulous','germane','glib','grandiloquence','gregarious','hackneyed','halcyon','harangue','hedonism','hegemony','heretical','hubris','hyperbole','iconoclast','idolatrous','imminent','immutable','impassive','impecunious','imperturbable','impetuous','implacable','impunity','inchoate','incipient','indifferent','inert','infelicitous','ingenuous','inimical','innocuous','insipid','intractable','intransigent','intrepid','inured','inveigle','irascible','laconic','laud','loquacious','lucid','luminous','magnanimity','malevolent','malleable','martial','maverick','mendacity','mercurial','meticulous','misanthrope','mitigate','mollify','morose','mundane','nebulous','neologism','neophyte','noxious','obdurate','obfuscate','obsequious','obstinate','obtuse','obviate','occlude','odious','onerous','opaque','opprobrium','oscillation','ostentatious','paean','parody','pedagogy','pedantic','penurious','penury','perennial','perfidy','perfunctory','pernicious','perspicacious','peruse','pervade','pervasive','phlegmatic','pine','pious','pirate','pith','pithy','placate','platitude','plethora','plummet','polemical','pragmatic','prattle','precipitate','precursor','predilection','preen','prescience','presumptuous','prevaricate','pristine','probity','proclivity','prodigal','prodigious','profligate','profuse','proliferate','prolific','propensity','prosaic','pungent','putrefy','quaff','qualm','querulous','query','quiescence','quixotic','quotidian','rancorous','rarefy','recalcitrant','recant','recondite','redoubtable','refulgent','refute','relegate','renege','repudiate','rescind','reticent','reverent','rhetoric','salubrious','sanction','satire','sedulous','shard','solicitous','solvent','soporific','sordid','sparse','specious','spendthrift','sporadic','spurious','squalid','squander','static','stoic','stupefy','stymie','subpoena','subtle','succinct','superfluous','supplant','surfeit','synthesis','tacit','tenacity','terse','tirade','torpid','torque','tortuous','tout','transient','trenchant','truculent','ubiquitous','unfeigned','untenable','urbane','vacillate','variegated','veracity','vexation','vigilant','vilify','virulent','viscous','vituperate','volatile','voracious','waver','zealous');
  var max = 0;
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > max) {
      max = words[i].length;
    }
  }
  console.log(max);
  return words[parseInt(Math.random() * words.length)].toUpperCase();

}

window.onload = function() {

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var boardwidth = canvas.width;
  var boardheight = canvas.height;

  // Game variables
  var numGuesses = 0;
  var maxGuesses;
  var currentWord = [];
  var currentGuess = [];
  var currentBoard;

  var cellwidth = 30
  var boardX = 0;
  var boardY = boardheight - 4*cellwidth;
  var guessX = 0;
  var guessY = boardheight/3;

  function paintDude(guess_num) {
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
    console.log("in paintcanvas()");
    ctx.clearRect (0, 0, boardwidth, boardheight);
    // paint background
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, boardwidth, boardheight);

    // paint guess
    console.log("current guess" + currentGuess);
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

    // paint unused word board (40px by 40px cells)
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
    for (var i = 0; i <= numGuesses; i++) {
      paintDude(i);
    }

  }

  function pickLetter(letter) {
    console.log("in pickletter: " + letter);
    // remove from board
    for (var i = 0; i < currentBoard.length; i++) {
      if (letter == currentBoard[i]) {
        console.log("setting to empty");
        console.log(currentBoard[i]);
        // Set to empty string
        currentBoard[i] = '';
        console.log(currentBoard);
        break;
      }
    }
    console.log(currentBoard);
  }

  function checkLetter(letter) {
    // increment guesses
    // check numGuesses
    // 8 guesses
    var found = false;
    for (var i = 0; i < currentWord.length; i++) {
      if (letter == currentWord[i]) {
        currentGuess[i] = letter;
        found = true;
      }
    }

    if (found) {
      var complete = true;
      for (var i = 0; i < currentWord.length; i++) {
        if (currentGuess[i] != currentWord[i]) {
          complete = false;
          break;
        }
      }
      if (complete) {
        alert("You Win!");
      }
    }
    else {
      numGuesses++;
      if (numGuesses > maxGuesses) {
        alert("You Lose!");
      }
    }
    return found;
  }

  canvas.addEventListener("click", function(e) {
    var x = e.clientX - canvas.offsetLeft;
    var y = e.clientY - canvas.offsetTop;
    if (x > boardX && x < 8*cellwidth && y > boardY && y < boardY + 5*cellwidth) {
      // get grid index from pixels
      console.log("e.x: " + x + " e.y: " + y);
      var col = Math.floor((x - boardX) / cellwidth);
      var row = Math.floor((y - boardY) / cellwidth);
      var index = row*7 + col;
      if (index < currentBoard.length) {
        var letter = currentBoard[index];
        if (currentBoard[index] != "") {
          console.log(currentBoard[index]);
          pickLetter(letter);
          checkLetter(letter);
          paintCanvas();
        }
      }
    }
  }, false);

  function init() {
    numGuesses = 0;
    currentWord = "ABATE".split("");
    maxGuesses = 10;
    currentGuess = new Array(currentWord.length);
    for (var i = 0; i < currentGuess.length; i++) {
      currentGuess[i] = "";
    }

    currentGuess = ["A","", "A", "", ""];
    currentBoard = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
                    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    paintCanvas();

  }
  init();
  getWord();
}
