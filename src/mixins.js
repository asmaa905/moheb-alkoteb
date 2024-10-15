// window.Vue = require('vue')
import Vue from 'vue'
Vue.mixin({
  methods: {
    abbr: function (sentence, charsLimit = 11, separator = ' ') {
      return sentence ? sentence.split(separator).reduce((acc, word) => acc.length < charsLimit ? acc + separator + word : acc, '') + (sentence.length > charsLimit ? '' : '') : null;
    },
    abbrLetter  : function (sentence, charsLimit = 11) {
      return sentence ? sentence.length > charsLimit ? sentence.substr(0, charsLimit-3 ) + '...' : sentence : null;
    },
  },
})
