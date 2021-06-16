<template>
  <nb-container :style="{ backgroundColor: '#fff' }">
    <nb-header>
      <nb-left>
        <nb-button
          transparent
          :onPress="() => this.props.navigation.openDrawer()"
        >
          <nb-icon name="menu" />
        </nb-button>
      </nb-left>
      <nb-body>
        <nb-title>Header</nb-title>
      </nb-body>
      <nb-right />
    </nb-header>

    <nb-content padder>
      <nb-button primary :onPress='ok' >
        <nb-text>Calcula</nb-text>
      </nb-button>
      
      <nb-button primary :onPress='cambia' >
        <nb-text>Cambia</nb-text>
      </nb-button>

      <nb-text>{{ datos }} Content goes here {{ posts }}</nb-text>
    </nb-content>

    <nb-footer>
      <nb-footer-tab>
        <nb-button active full>
          <nb-text>Footer</nb-text>
        </nb-button>
      </nb-footer-tab>
    </nb-footer>
  </nb-container>
</template>

<script>
import axios from 'axios'
import store from '../../store';

export default {
    data: function() {
      return {
        //posts: store.state.posts,
        datos: 'NA'
      }
    },
    methods: {
        ok: function() {
            console.log('nuevos datos de bitso');
            axios.get('https://petstore.ci.ultrasist.net/api/bitso.json')
            .then(response => {
                this.datos = response.data.payload;
            })
        },
        cambia: function() {
          var content = ['x','y','zzzz'];
          store.commit('setPosts', content);
        }
    },
    mounted() {
      this.ok();
    },
    computed: {
      posts() {
        return store.state.posts;
      }
    }
}
</script>
