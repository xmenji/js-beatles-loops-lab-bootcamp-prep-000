function theBeatlesPlay(musicians, instruments){
  var theBand = [];
  
  for(var x = 0; x < musicians.length; x++){
    theBand[x] = musicians[x] + " plays " + instruments[x];
  }
  return theBand;
}