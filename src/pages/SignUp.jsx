import React, { useState } from 'react'
import '../App.css'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../Firebase";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {

  const [error, setError] = useState(false)

  const handlesubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
   console.log(displayName)
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',
        (error) => {
          setError(true)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "user", res.user.uid), {
              uid:res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            })
          });
        }
      );
    }
    catch (err) {
      setError(true)
    }


  }
  return (
    <div className='formContainer'>
      <div className="formWraper">
        <div className="logo">Lema Chat</div>
        <div className="title">Register</div>
        <form onSubmit={handlesubmit}>
          <input type="name" placeholder='Name' />
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <input type="file" name="Avtar" id="" />
          <button>Register</button>
        </form>
        {error ? <span>Something Went Wrong!</span> : null}
        <p>Already an Account ? Login</p>
      </div>
    </div>
  )
}

export default SignUp