var Player = function() {
  this.SELECTORS = {
    svgBox: '[data-svg-box]',
    classToggle: 'active'
  }
  this.videoId = 'mz811zOx44g';
}

var myYTPlayer;
function onYouTubeIframeAPIReady() {
  myYTPlayer = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'M7lc1UVf-VE',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

Player.prototype.init = function() {
  this.player = myYTPlayer;
  this.player.loadVideoById(this.videoId);
  this.player.playVideo();
};

Player.prototype.initAnimation = function() {
  var self = this;
  var container = document.querySelector(this.SELECTORS.svgBox);
  setTimeout(function() {
    container.classList.add(self.SELECTORS.classToggle);
  }, 2500)
}



// 4. The API will call this function when the video player is ready.
var p = new Player();
function onPlayerReady(event) {
  p.init();
}


function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    p.initAnimation();
    app.init();
  }
}

