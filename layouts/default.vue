<template>
  <v-app id="inspire" class="grey lighten-4">
    <div class="hidden-sm-and-down">
      <v-toolbar app fixed clipped-left class="white">
        <img src="//steamhub.cn/logo_64x64.png" alt="SteamHub Logo">
        <span class="title ml-3 mr-5">SteamHub -- 管理员平台</span>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/">发布</v-btn>
          <v-btn flat to="/editor">编辑</v-btn>
        </v-toolbar-items>
      </v-toolbar>
    </div>
    <div class="hidden-md-and-up">
      <v-toolbar app tabs fixed clipped-left class="white">
        <img src="//steamhub.cn/logo_20x20_white.png" alt="SteamHub Logo">
        <span class="title ml-3 mr-5 mt-2">SteamHub</span>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat to="/">发布</v-btn>
        </v-toolbar-items>
        <v-tabs slot="extension" centered slider-color="black">
          <v-tab to="/">
            浏览
          </v-tab>
          <v-tab to="/editor">
            编辑
          </v-tab>
        </v-tabs>
      </v-toolbar>
    </div>
    <div class="grey lighten-4">
      <nuxt />
    </div>
  </v-app>
</template>

<script>
  export default {
    async asycnData () {
    },
    data: () => ({
      dialog: false,
      bottomNav: 1,
      search: ''
    }),
    props: {
      source: String
    },
    methods: {
    },
    created: function () {
    },
    watch: {
    }
  }
</script>

<style>
  #keep main .container {
    height: 660px;
  }
  .v-navigation-drawer__border {
    display: none;
  }
  .text {
    font-weight: 400;
  }
  @media (min-width: 1264px) {
    .index-main-container {
      width: 1700px;
      max-width: 90%;
    }
  }
  @media (max-width: 960px) {
    .page-main {
      margin: 114px 0 40px 0
    }
  }
  @media (max-width: 600px) {
    .page-main {
      margin: 66px 0 40px 0
    }
    .v-toolbar__content {
      height: 0 !important;
    }
  }
</style>