function isAuthenticated(): boolean { return false }
// ---cut---
export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if a user is authenticated
  console.log('start auth middleware')
  if (isAuthenticated() === false) {
    return navigateTo('/')
  }
})
