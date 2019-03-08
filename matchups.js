function displayMatchups() {
  var inputtedText = document.getElementById('roundInput').value;

  var userlessText = inputtedText.replace(/\[\/?USER(\=[0-9]*)?\]/g,'').replace(/\n/g,',');
  console.log(userlessText);
  var findBolds = /\[B\].+?\[\/B\]/g;
  var boldList = userlessText.match(findBolds);
  console.log(winnerList);
  var winnerList = boldList.join(',');
  var winners = winnerList.split(',');
  console.log(winners);

  if(!winners) {
    document.getElementById('outputArea').innerText = 'Could not find any winners.';
  }

  var nextRound = '';
  for(var i = 0; i<winners.length; i+=2) {
    if(!winners[i+1]) {
      nextMatchup = '@' + winners[i].replace(/\[\/?B\]/g,'').trim() + ' vs bye';
    } else {
      var nextMatchup = '@' + winners[i].replace(/\[\/?B\]/g,'').trim() + ' vs @' + winners[i+1].replace(/\[\/?B\]/g,'').trim() + '\n';
    }
    console.log(nextMatchup);
    nextRound += nextMatchup;
  }

  document.getElementById('outputArea').innerText = 'Next Round:\n\n' + nextRound;
}
