const songList = [
  'STEREO DIVE FOUNDATION - Renegade',
  'Iwasaki Taku - Dance Macabre',
  'JAM Project - THE HERO!! ~Ikareru Kobushi ni Hi o Tsukero~',
  'Linked Horizon - Shinzou o Sasageyo!',
  'Porno Graffitti - THE DAY'
];

let matchedSongs = [];

 const findMatches = (song) => {

  for (song = 0; song < songList.length; song++) {
    const pattern = new RegExp($('#searchInput').val());
    const hasPattern = pattern.test(songList[song]);

    if (hasPattern && !(matchedSongs[songList[song]])) {
      matchedSongs.push(songList[song] + '<br />');
      $('#searchResult').html(matchedSongs);
      console.log('matchedSongs', matchedSongs);
    }

    console.log('---');
    console.log(`does song list contain searched pattern? ${pattern}, ${hasPattern}`);
    console.log('---');
  };

  if (!$('#searchInput').val()) {
    $('#searchResult').html('');
    matchedSongs = [];
  }
}

let currentSongs = songList.toString().split(',').join('<br />');
$('#songList').html(currentSongs);

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', findMatches);