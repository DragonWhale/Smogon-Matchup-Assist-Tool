function displayMatchups() {
  var inputtedText = document.getElementById('roundInput').value;

  var reg = /\[B\].+\[\/B\]/g;
  var winners = inputtedText.match(reg);

  if(!winners) {
    document.getElementById('outputArea').innerText = 'Could not find any winners.';
  }

  var nextRound = '';
  for(var i = 0; i<winners.length; i+=2) {
    var nextMatchup = '@' + winners[i].slice(3,-4) + ' vs @' + winners[i+1].slice(3,-4) + '\n';
    console.log(nextMatchup);
    nextRound += nextMatchup;
  }

  document.getElementById('outputArea').innerText = 'Next Round:\n\n' + nextRound;
}
