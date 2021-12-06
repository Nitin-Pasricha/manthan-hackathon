import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../../../components/Button/Button'
import InputControl from '../../../components/InputControl/InputControl'
import signUp from '../../../welcome.svg'

import styles from '../Auth.module.css'

function Signup() {
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
  })
  const [errorMessage, setErrorMessage] = useState('')
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(false)

  const validateForm = () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const errors = {}
    if (!fname) {
      errors.fname = 'Enter First Name'
    }
    if (!lname) {
      errors.lname = 'Enter Last Name'
    }

    if (email.trim() === '') {
      errors.email = 'Enter Email'
    } else if (emailRegex.test(String(email).toLowerCase())) {
      errors.email = 'Account already exists'
    } else {
      errors.email = ''
    }

    if (!password) {
      errors.password = 'Enter Password'
    } else if (password.length < 6)
      errors.password = 'Password must be of 6 characters'

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      return false
    } else {
      return true
    }
  }

  const submission = (e) => {
    e.preventDefault()
    const emailValue = email
    const passwordValue = password

    if (!emailValue || !passwordValue) {
      setErrorMessage('Enter Credentials')
      return
    }
    setErrorMessage('')

    if (!validateForm()) {
      return
    }

    // disable login button while calling api
    // setLoginButtonDisabled(true);
  }
  return (
    <section className={styles['login']}>
      <img src={signUp} alt='sign-up' className={styles['logo']} />
      <div className={styles['signin-form']}>
        <h1 className={styles['signin-form_head']}>Sign up</h1>
        <h3 className={styles['signin-form_sub-head']}>Futuristic</h3>
        <form onSubmit={(e) => submission(e)}>
          <div className={styles.formFeilds}>
            <InputControl
              label='First Name'
              onChange={(e) => {
                const value = e.target.value
                setFname(value)
              }}
              placeholder='Rosy'
              error={errors.email}
            />
            <InputControl
              label='Last Name'
              onChange={(e) => {
                const value = e.target.value
                setLname(value)
              }}
              placeholder='Fernando'
              error={errors.email}
            />
            <InputControl
              label='Email'
              onChange={(e) => {
                const value = e.target.value
                setEmail(value)
              }}
              placeholder='abc@xyz.com'
              error={errors.email}
            />
            <InputControl
              label='Password'
              password
              onChange={(e) => {
                const value = e.target.value
                setPassword(value)
              }}
              placeholder='w23@e3r#rf'
              error={errors.password}
            />
            {errorMessage && (
              <small className='error-msg'>{errorMessage}</small>
            )}

            <div style={{ display: 'flex', placeContent: 'center' }}>
              <Button disabled={loginButtonDisabled} type='submit'>
                Sign up
              </Button>
            </div>
          </div>
        </form>
        <br />
        <p className={styles['signin_footer-text']}>
          Already Signed In? &nbsp;
          <Link to='/login'>
            <span className={styles['signin_special-text']}>Log in</span>
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Signup
