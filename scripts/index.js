var App = function() {
  var self = this;

  this.SELECTORS = {
    overlay: '[data-overlay]',
    wrapper: '[data-wrapper]'
  }

  this.time = {
    loading: 500,
    loaderAnimation: 800
  }
}

App.prototype.init = function() {
  this.hideLoader();
  this.animateBackground();
}


App.prototype.hideLoader = function() {
  var self = this;
  var overlay = document.querySelector(this.SELECTORS.overlay);
  overlay.classList.add('loaded');

  // to remove rendering of animations on the element
  setTimeout(function() {
    overlay.style.display = 'none';
  }, self.time.loaderAnimation);
}

App.prototype.animateBackground = function() {
  var self = this;
  var wrapper = document.querySelector(this.SELECTORS.wrapper);

  setTimeout(function () {
    wrapper.classList.add('star--init')
  }, self.time.loaderAnimation - 100)
}


// Emulate loading time
var app = new App();
