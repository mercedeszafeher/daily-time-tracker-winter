import React,  {useState, useEffect } from 'react';

import getFirebase from './firebase';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const MyPage = () => {
  const [currentUser, setCurrentUSer] = useState(null);

  let firebase = getFirebase();

  useEffect (() => {
    if (firebase) {
      firebase.auth().onAuthStateChanged((authUser)
     => {
      if (authUser) {
        setCurrentUser(authUser.email)
      } else {
          setCurrentUser(null);
      }
     });
    }
  });

  if (firebase) {
  }

  return (
    <div>
      The signed in user is: {currentUser}
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default MyPage;
