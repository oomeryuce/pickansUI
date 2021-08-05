import createApp from './app.js'

import authService from './service.auth.js'

const appConfig = {"apiKey":"AIzaSyC78cMNeu8zB72J0wlbxG6Kkv0tX_jnzFc","authDomain":"pickans-ef1dc.firebaseapp.com","databaseURL":"https:\u002F\u002Fpickans-ef1dc.firebaseio.com","projectId":"pickans-ef1dc","storageBucket":"pickans-ef1dc.appspot.com","messagingSenderId":"660052866177","appId":"1:660052866177:web:cdef1f0aa880c610d8c980"}

export default async (ctx, inject) => {
  const { firebase, session } = await createApp(appConfig, ctx)

  let servicePromises = []

  if (process.server) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  if (process.client) {
    servicePromises = [
      authService(session, firebase, ctx, inject),

    ]
  }

  const [
    auth
  ] = await Promise.all(servicePromises)

  const fire = {
    auth: auth
  }

    inject('fireModule', firebase)
    ctx.$fireModule = firebase

  inject('fire', fire)
  ctx.$fire = fire
}

function forceInject (ctx, inject, key, value) {
  inject(key, value)
  const injectKey = '$' + key
  ctx[injectKey] = value
  if (typeof window !== "undefined" && window.$nuxt) {
  // If clause makes sure it's only run when ready() is called in a component, not in a plugin.
    window.$nuxt.$options[injectKey] = value
  }
}