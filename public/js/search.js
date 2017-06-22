const songList = [
  'STEREO DIVE FOUNDATION - Renegade',
  'Iwasaki Taku - Dance Macabre',
  'JAM Project - THE HERO!! ~Ikareru Kobushi ni Hi o Tsukero~',
  'Linked Horizon - Shinzou o Sasageyo!',
  'Porno Graffitti - THE DAY'
];

let matchedSongs = [];

const findMatches = (song) => {

  for (song of songList) {
    const pattern = new RegExp($('#searchInput').val());
    const hasPattern = pattern.test(song);

    if (hasPattern && matchedSongs.indexOf(song) === -1) {
      matchedSongs.push(song);
      $('#searchResult').html(matchedSongs.join('<br />'));
    }

    if (!$('#searchInput').val()) {
      $('#searchResult').html('');
      matchedSongs = [];
    }
  }
};

$('#songList').html(songList.join('<br />'));

$('#searchInput').on('keyup', findMatches);
