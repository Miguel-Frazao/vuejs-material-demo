<template>
  <div class="users">
    <h2>Users (stored in localStorage)<span v-if="len_users > 0">. We already have users</span></h2>
    <h3>Total de users: {{len_users}}</h3>
    <div class="form-container" v-on:keyup.13="add_user">
      <md-layout md-gutter>
        <div class="md-flex-50 md-flex-xsmall-100">
          <md-input-container>
            <label>Name</label>
            <md-input ref="name_input" v-model="new_user.name"></md-input>
          </md-input-container>
          <md-input-container>
            <label>Phone</label>
            <md-input v-model="new_user.phone"></md-input>
          </md-input-container>
          <md-button v-on:click="add_user" class="md-raised md-accent">
            <md-icon>add</md-icon><span>add user</span>
          </md-button>
        </div>
        <div class="md-flex-100">
          <small>{{log}}</small>
        </div>
      </md-layout>
    </div>
    <md-layout md-gutter class="cards-container">
      <md-layout md-flex="25" md-flex-small="50" md-flex-xsmall="100" class="card-container" v-for="(user, idx) in users" :key="idx">
        <md-whiteframe md-elevation="4">
          <md-card>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{user.name}}</div>
                <div class="md-subhead">Phone: {{user.phone}}</div>
              </md-card-header-text>

              <md-menu md-size="5" md-direction="top left">
                <md-button class="md-icon-button" md-menu-trigger>
                  <md-icon>contacts</md-icon>
                </md-button>
                <md-menu-content>
                  <div class="author-card">
                    <md-avatar class="md-large">
                      <img src="https://media.licdn.com/mpr/mpr/shrinknp_100_100/p/2/005/04b/1b5/18b2432.jpg" alt="Miguel Frazão">
                    </md-avatar>
                    <div class="author-card-info">
                      <span>Miguel Frazão</span>
                      <div class="author-card-links">
                        <a href="https://www.linkedin.com/in/miguel-fraz%C3%A3o-01974274/" target="_blank" rel="noopener">Linkedin</a>
                        <a href="https://github.com/Miguel-Frazao?tab=repositories" target="_blank" rel="noopener">GitHub</a>
                        <a target="_blank" href="http://migueldvl.com/">Website</a>
                      </div>
                    </div>
                  </div>
                </md-menu-content>
              </md-menu>
            </md-card-header>
            <md-card-area>

              <md-card-media>
                <div class="card-image" style="background-image: url(https://images.pexels.com/photos/285171/pexels-photo-285171.jpeg?h=180)"></div>
              </md-card-media>
            </md-card-area>
            <md-card-actions>
              <md-button class="md-warn md-raised delete-user" v-on:click="open_modal(user)"><md-icon>delete</md-icon> Delete user</md-button>
            </md-card-actions>
          </md-card>
        </md-whiteframe>
      </md-layout>
    </md-layout>
    <modal v-if="showModal" v-on:close="showModal = false">
      <h3 slot="header">Delete {{modal_item.name}}?</h3>
      <p slot="body">Phone: {{modal_item.phone}}</p>
      <div slot="footer" class="align-right">
        <md-button class="md-raised md-warn" v-on:click="delete_user(modal_item)">
          Yes
        </md-button>
        <md-button class="md-raised" v-on:click="showModal = false">
          Cancel
        </md-button>
      </div>
    </modal>
  </div>
</template>
<script>
export default {
  props: ['users'],
  data () {
    return {
      showModal: false,
      log: '',
      new_user: {name: '', phone: ''},
    }
  },
  methods: {
    add_user: function() {
      if(this.new_user.name.trim() == '' || this.new_user.phone.trim() == '') {
        alert('fill in all data correcly');
        return;
      }
      this.users.push(this.new_user);
      localStorage.setItem("users", JSON.stringify(this.users));
      this.new_user = {name: '',  phone: ''};
      this.$refs.name_input.$el.focus();
    },
    delete_user: function(user) {
      this.users.splice(this.users.findIndex((u, idx) => u == user), 1);
      localStorage.setItem("users", JSON.stringify(this.users));
      this.showModal = false;
    },
    open_modal: function(item) {
      this.modal_item = item;
      this.showModal = true;
    },
  },
  watch: {
    len_users: function(new_val, old_val) {
      this.log = 'We have ' +new_val+ ' users now, not ' +old_val+ ' anymore';
    }
  },
  computed: {
    len_users: function() {
      return this.users.length;
    }
  },
  mounted: function() {
    setTimeout(() => {this.$refs.name_input.$el.focus();}, 100); // settimeout, only way I got focus to work
  }
}
</script>

<style scoped>
.author-card {
  padding: 8px 16px;
  display: flex;
  align-items: center;
}
</style>