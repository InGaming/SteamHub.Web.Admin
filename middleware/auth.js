export default function ({ redirect, app, $axios }) {
  if (app.$cookiz.get('token') === undefined) {
    return redirect('/auth/login')
  } else {
    $axios.setToken(app.$cookiz.get('token'), 'Bearer')
  }
}
