const songList = [
  'STEREO DIVE FOUNDATION - Renegade',
  'Iwasaki Taku - Dance Macabre',
  'JAM Project - THE HERO!! ~Ikareru Kobushi ni Hi o Tsukero~',
  'Linked Horizon - Shinzou o Sasageyo!',
  'Porno Graffitti - THE DAY'
];

let matchedSongs = [];

  const findMatches = (song) => {

  for (let song of songList) {
    const pattern = new RegExp($('#searchInput').val());
    const hasPattern = pattern.test(song);

    if (hasPattern && !(matchedSongs[song])) {
      matchedSongs.push(song + '<br />');
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

let currentSongs = songList.join('<br />');
$('#songList').html(currentSongs);

$('#searchInput').on('keyup', findMatches);
