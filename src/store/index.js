/**
 * reference
 * https://github.com/weexteam/weex-hackernews/tree/master/src/store
 */

import Vue from 'vue-native-core';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    activeType: 'posts',
    posts: ['a', 'b', 'c'],
    logging_in: false,
    userObj: {},
    loadingPosts: false
  },
  mutations: {
    setPosts(state, info) {
      state.posts = info;
    }
  }
  
});

export default store;
