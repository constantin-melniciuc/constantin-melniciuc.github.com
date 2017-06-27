window.onload = function() {
  var app = new App();
}

var App = function() {
  this.ELEMENTS = {
    container: '[data-intro]'
  }

  this.CONST = {
    styling: {
      fixed: {
        'position': 'fixed',
        'left': '0',
        'bottom': '0'
      }
    }
  }

  this.init();
}

App.prototype.init = function() {
  this.setElements();
  this.bindScroll();
}

App.prototype.setElements = function() {
  for (var key in this.ELEMENTS) {
    this.ELEMENTS[key] = document.querySelector(this.ELEMENTS[key])
  }
}

App.prototype.bindScroll = function() {
  var sizes = this.ELEMENTS.container.getBoundingClientRect();

  window.onresize = function() {
    sizes = this.ELEMENTS.container.getBoundingClientRect();
  }.bind(this)

  window.onscroll = function() {
    if (window.scrollY + window.innerHeight > sizes.height) {
      console.log('add')
      this.ELEMENTS.container.classList.add('intro--fixed')
    }else {
      console.log('remove')
      this.ELEMENTS.container.classList.remove('intro--fixed')
    }
  }.bind(this)
}
