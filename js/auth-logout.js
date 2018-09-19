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

  const logout = document.querySelector('#logout');
  // Logout
  logout.addEventListener('click', e => {
    e.preventDefault();
    firebase.auth().signOut();
  });

  // Firebase Listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    let page = window.location.href.split(window.location.origin)[1];
    if (firebaseUser) {
      console.log(firebaseUser);
      if (page != '/home.html') {
        window.location = '/home.html';
      }
    } else {
      console.log('Not logged in');
      if (page != '/login.html') {
        window.location = '/login.html';
      }
    }
  });
})();
