import React, {useRef} from "react"
import {useHistory} from "react-router-dom"
import "./Login.css"

export const Register = (props) => {
  // Initialize variables
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const conflictDialog = useRef()
  const history = useHistory()

  // Declare function to check if email is associated with an existing account
  const existingUserCheck = () => {
    return fetch(`https://videogame-api.herokuapp.com/users?email=${email.current.value}`)
      .then(res => res.json())
      .then(user => !!user.length)
  }

  // Declare a function to register new users
  const handleRegister = (e) => {
    e.preventDefault()

    existingUserCheck()
      .then((userExists) => {
        if (!userExists) {
          fetch("https://videogame-api.herokuapp.com/users", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email.current.value,
              firstName: firstName.current.value,
              lastName: lastName.current.value
            })
          })
            .then(res => res.json())
            .then(createdUser => {
              if (createdUser.hasOwnProperty("id")) {
                localStorage.setItem("manager_user", createdUser.id)
                history.push("/")
              }
            })
        } else {
          conflictDialog.current.showModal()
        }
      })
  }

  return (
    <main style={{textAlign: "center"}}>

      <dialog className="dialog dialog--password" ref={conflictDialog}>
        <div>Account with that email address already exists</div>
        <button className="button--close" onClick={e => conflictDialog.current.close()}>Close</button>
      </dialog>

      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">Please Register for Manager</h1>
        <fieldset>
          <label htmlFor="firstName" className="fieldset-label">First Name</label>
          <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First Name" required autoFocus />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName" className="fieldset-label">Last Name</label>
          <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last Name" required />
        </fieldset>
        <fieldset>
          <label htmlFor="inputEmail" className="fieldset-label email-label">Email Address</label>
          <input ref={email} type="email" name="email" className="form-control" placeholder="Email Address" required />
        </fieldset>
        <fieldset>
          <button type="submit">Sign In</button>
        </fieldset>
      </form>
    </main>
  )
}