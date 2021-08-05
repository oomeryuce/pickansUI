import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4808603e = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _7d39da52 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _6f216c04 = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _1fd2e0d2 = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _0d629f6c = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _10892080 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/home",
    component: _4808603e,
    name: "home"
  }, {
    path: "/login",
    component: _7d39da52,
    name: "login"
  }, {
    path: "/posts",
    component: _6f216c04,
    name: "posts"
  }, {
    path: "/profile",
    component: _1fd2e0d2,
    name: "profile"
  }, {
    path: "/posts/:id",
    component: _0d629f6c,
    name: "posts-id"
  }, {
    path: "/",
    component: _10892080,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
