

export default async function (session, firebase, ctx, inject) {
  await import(/* webpackChunkName: 'firebase-auth' */'firebase/auth')

  const authService = session.auth()

    if (process.client) {
    const persistence = firebase.auth.Auth.Persistence.LOCAL
    try {
      await authService.setPersistence(persistence)
    } catch (err) {
      if (err.code === 'auth/invalid-persistence-type') {
        console.warn(`[@nuxtjs/firebase]: Invalid persistence type '${persistence}' provided`)
      } else if (err.code === 'auth/unsupported-persistence-type') {
        console.warn(`[@nuxtjs/firebase]: Persistence type '${persistence}' is not supported in this environment.`)
      }
    }
  }

  return authService
}
