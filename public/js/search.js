const songList = [
  'STEREO DIVE FOUNDATION - Renegade',
  'Iwasaki Taku - Dance Macabre',
  'JAM Project - THE HERO!! ~Ikareru Kobushi ni Hi o Tsukero~',
  'Linked Horizon - Shinzou o Sasageyo!',
  'Porno Graffitti - THE DAY'
];

const findMatches = (song) => {

  if (!$('#searchInput').val()) {
    $('#searchResult').html('');
  }

  if ($('#searchInput').val()) {
    for (song = 0; song < songList.length; song++) {
      const pattern = new RegExp($('#searchInput').val());
      const hasPattern = pattern.test(songList[song]);

      if (!hasPattern) {
        return;
      }

      $('#searchResult').html(songList[song]);

    console.log('does song list contain searched pattern?', hasPattern);
    console.log('pattern', pattern);
    };
  }
}

const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', findMatches);