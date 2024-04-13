- state:

* userId
* token

- getters:

* userId
* token
* isAuthenticated

- actions:

* signin
* signup
* logout

- mutations:

* setUser

signin url:https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDu2NLLgMIq7qnjZwBiKtPaRYvPPf39d5s
signup url:https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDu2NLLgMIq7qnjZwBiKtPaRYvPPf39d5s

- payload sigin/signup:
  {
  email,
  password,
  returnSecureToken
  }
- response:
  {
  idToken, localId, expiresIn
  }

files: SignInForm.vue, SignupForm.vue, TheAuthentication.vue, router/index.js
paths need to authen: /coaches/register
/requests-received: `https://vue-coachs-default-rtdb.asia-southeast1.firebasedatabase.app/requests.json?auth=${token}`
