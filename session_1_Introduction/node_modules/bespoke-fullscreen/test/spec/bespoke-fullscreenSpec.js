Function.prototype.bind = Function.prototype.bind || require('function-bind');

var bespoke = require('bespoke'),
  fullscreen = require('../../lib/bespoke-fullscreen.js'),
  simulant = require('simulant');

describe('bespoke-fullscreen', function() {
  var KEY = { f: 70, f11: 122 },
    deck,
    setup = function() {
      document.fullscreenEnabled = true;
      document.documentElement.requestFullscreen = jasmine.createSpy('requestFullscreen');
      document.exitFullscreen = jasmine.createSpy('exitFullscreen');
    },
    createDeck = function() {
      var parent = document.createElement('article');
      for (var i = 1; i <= 5; i++) {
        var section = document.createElement('section');
        parent.appendChild(section);
      }

      document.body.appendChild(parent);

      deck = bespoke.from(parent, [
        fullscreen()
      ]);
    },
    destroyDeck = function() {
      deck.fire('destroy');
      var parentNode = deck.parent.parentNode;
      if (parentNode) parentNode.removeChild(deck.parent);
      deck = null;
    },
    pressKey = function(which, opts, element) {
      opts = opts ? opts : {};
      opts.which = KEY[which] || which;
      simulant.fire((element || document), 'keydown', opts);
    };

  beforeAll(setup);
  beforeEach(createDeck);
  afterEach(destroyDeck);

  describe('toggle fullscreen', function() {
    beforeEach(function() {
      document.documentElement.requestFullscreen.calls.reset();
      document.exitFullscreen.calls.reset();
      document.fullscreenElement = undefined;
    });

    ['f', 'f11'].forEach(function(key) {
      it('requests fullscreen when ' + key + ' key is pressed and fullscreen is not active', function() {
        pressKey(key);
        expect(document.documentElement.requestFullscreen.calls.count()).toBe(1);
      });

      it('exits fullscreen when ' + key + ' key is pressed and fullscreen is active', function() {
        document.fullscreenElement = true;
        pressKey(key);
        expect(document.exitFullscreen.calls.count()).toBe(1);
      });

      it('does not toggle fullscreen when ' + key + ' key is pressed when modifier is pressed', function() {
        pressKey(key, { shiftKey: true});
        expect(document.documentElement.requestFullscreen.calls.count()).toBe(0);
      });
    });

    it('requests fullscreen when fullscreen.toggle event is fired and fullscreen is not enabled', function() {
      deck.fire('fullscreen.toggle');
      expect(document.documentElement.requestFullscreen.calls.count()).toBe(1);
    });

    it('exits fullscreen when fullscreen.toggle event is fired and fullscreen is enabled', function() {
      document.fullscreenElement = true;
      deck.fire('fullscreen.toggle');
      expect(document.exitFullscreen.calls.count()).toBe(1);
    });
  });
});
