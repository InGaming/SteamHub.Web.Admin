<template>
  <div style="padding-top: 150px">
    <v-container>
      <v-form>
        <v-alert type="info" :color=alert.color :value=alert.value outline>
          {{ data }}
        </v-alert>
        <v-progress-linear :indeterminate="true" :height=progress.height></v-progress-linear>
        <v-text-field label="用户名" v-model="email" required></v-text-field>
        <v-text-field label="密码" v-model="password" required></v-text-field>
        <div class="text-xs-right">
          <v-btn v-on:click="submit">
            登入
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    title: '登入',
    data: '请先登录',
    email: '',
    password: '',
    alert: {
      value: true,
      color: 'blue'
    },
    progress: {
      height: 0
    }
  }),
  methods: {
    submit: async function ({ redirect, $axios }, event, callback) {
      this.data = `正在登入`
      this.alert.color = 'blue'
      this.progress.height = '5'
      await this.$axios
        .$post(`https://api.steamhub.cn/api/v1/admin/login`, {
          email: this.email,
          password: this.password
        })
        .then((res) => {
          console.log(res.token)
          if (res.token === undefined) {
            this.alert.color = 'red'
            this.data = '授权失败'
            this.progress.height = '0'
          } else {
            this.$cookiz.set('token', res.token, {
              path: '/',
              maxAge: 60 * 60 * 24 * 14
            })
            this.alert.color = 'green'
            this.data = '授权成功'
            this.progress.height = '0'
          }
        })
        .catch(error => {
          if (error.response) {
            if (error.response.status === 401) {
              this.alert.color = 'red'
              this.data = '授权失败'
              this.progress.height = '0'
            }
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          }
        })
    }
  },
  head () {
    return {
      title: this.title
    }
  }
}
</script>