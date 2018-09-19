(function() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyAehVx8bAyxF2JR5weFkAymWApp-o-MK8Q',
    authDomain: 'yml-auth.firebaseapp.com',
    databaseURL: 'https://yml-auth.firebaseio.com',
    projectId: 'yml-auth',
    storageBucket: 'yml-auth.appspot.com',
    messagingSenderId: '592095457327'
  };
  firebase.initializeApp(config);

  // Get all the elements
  const email = document.getElementById('email');
  const pass = document.getElementById('password');
  const form = document.getElementById('login');
  // const signUp = document.getElementById('signup');
  const alert = document.getElementById('alert');

  function alertMsg(msg) {
    let promise;
    alert.innerHTML = `<h3>${msg}</h3>`;
    alert.classList.remove('hidden');
    clearTimeout(promise);
    promise = setTimeout(() => {
      alert.classList.add('hidden');
    }, 3000);
  }

  function validateEmail() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email.value) == false) {
      alertMsg('Invalid Email Address');
      return false;
    }

    return true;
  }

  // Add Event Listener
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateEmail()) {
      const auth = firebase.auth();

      // Sign in
      const promise = auth.signInWithEmailAndPassword(email.value, pass.value);
      promise.catch(e => alertMsg(e.message));
    }
  });

  // Signup
  // signUp.addEventListener('click', () => {
  //   const auth = firebase.auth();

  //   // Sign in
  //   const promise = auth.createUserWithEmailAndPassword(
  //     email.value,
  //     pass.value
  //   );
  //   // promise
  //   //   .then(user => {
  //   //     console.log(user);
  //   //   })
  //   //   .catch(e => console.log(`Error: ${e.message}`));
  // });

  // Firebase Listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    let page = window.location.href.split(window.location.origin)[1];
    if (firebaseUser) {
      if (page != '/home.html') {
        window.location = '/home.html';
      }
    } else {
      if (page != '/login.html') {
        window.location = '/login.html';
      }
    }
  });
})();
