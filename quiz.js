var gameRunning = false;
var score = 0;
var question = 0;
var answer = 0;
var selection = [];
const t = 47;
var previousAns = '';

function startGame() {
  if(gameRunning) {
    console.log('game already running');
    return;
  }
  console.log('game start');
  gameRunning = true;
  score = 0;
  question = 0;
  selection = [];
  while(selection.length < 10) {
    var teamid = Math.floor(Math.random()*t) + 1;
    if (selection.indexOf(teamid) === -1) selection.push(teamid);
  }
  console.log(selection);
  loadQuestion();
}

function loadQuestion() {
  if(question > 9) {
    loadResults();
    return;
  }

  console.log('loading question: ' + (question + 1));

  var team = teamlist[selection[question]];

  document.getElementById('centerarea').innerHTML = '<table><tr><th>' + team[0] + '</th></tr><tr><td><i class="icon icon-' + team[2] + '"></i><span> Lv.50</span></td></tr><tr><td><i class="icon icon-' + team[3] + '"></i><span> Lv.50</span></td></tr><tr><td><i class="icon icon-' + team[4] + '"></i><span> Lv.50</span></td></tr><tr><td><i class="icon icon-' + team[5] + '"></i><span> Lv.50</span></td></tr><tr><td><i class="icon icon-' + team[6] + '"></i><span> Lv.50</span></td></tr><tr><td><i class="icon icon-' + team[7] + '"></i><span> Lv.50</span></td></tr>';
  document.getElementById('bottomarea').innerHTML = '<h5>Current question: ' + (question + 1) + '</h5><h5>Current Score: ' + score + '</h5><h5>Previous result: ' + previousAns + '</h5>';

  answer = team[8];
}

function loadResults() {
  document.getElementById('centerarea').innerHTML = '<h1>You scored <br> ' + score + ' out of 10!</h1>';
  gameRunning = false;
  document.getElementById('bottomarea').innerHTML = '<span><h1 style="color: white;"> TRY AGAIN <h1></span>'
}

function selectRapid() {
  if(!gameRunning) {
    console.log('game is not running');
    return;
  }
  if(answer === '0') {
    score++;
    question++;
    previousAns = 'Correct!'
    loadQuestion();
  }
  else if(answer === '1') {
    question++;
    previousAns = 'Incorrect';
    loadQuestion();
  }
}

function selectSingle() {
  if(!gameRunning) {
    console.log('game is not running');
    return;
  }
  if(answer === '1') {
    score++;
    question++;
    previousAns = 'Correct!';
    loadQuestion();
  }
  else if(answer === '0') {
    question++;
    previousAns = 'Incorrect';
    loadQuestion();
  }
}
