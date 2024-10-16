import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "@fortawesome/fontawesome-free/css/all.css"
import "normalize.css";
//to work mixins correctly make search
createApp(App).use(store).use(router).mixin({
  methods: {
    abbr: function (sentence, charsLimit = 11) {
      console.log("sentence ? sentence.slice(0, charsLimit).padEnd(charsLimit+3 , '.') : null", sentence ? sentence.slice(0, charsLimit).padEnd(charsLimit+3 , '.') : null)
      return sentence ? (sentence.length > charsLimit ) ? sentence.slice(0, charsLimit).padEnd(charsLimit+3 , '.') : sentence : null;
    },
    abbrLetter  : function (sentence, charsLimit = 11) {
      return sentence ? sentence.length > charsLimit ? sentence.substr(0, charsLimit-3 ) + '...' : sentence : null;
    }
  }
}).mount('#app')
