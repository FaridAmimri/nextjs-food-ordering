/** @format */

import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Input, Loading } from '@nextui-org/react'
import styles from '../../styles/Login.module.css'
import axios from 'axios'

function Login() {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleLogIn = async (e) => {
    try {
      setLoading(true)
      await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password
      })
      router.push('/admin')
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      {loading && <Loading color='warning' type='gradient' size='xl' />}
      <h1 className={styles.title}>Admin Dashboard</h1>
      <form className={styles.wrapper}>
        <Input
          type='email'
          size='xl'
          name='email'
          clearable
          color='warning'
          bordered
          placeholder='Email'
          aria-labelledby='email'
          id='email'
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
        <Input.Password
          type='password'
          size='xl'
          name='password'
          clearable
          color='warning'
          bordered
          placeholder='Password'
          aria-labelledby='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <span className={styles.error}>Invalid username or password</span>
        )}
        <Button
          size='lg'
          aria-labelledby='form submit'
          ghost
          flat
          color='warning'
          onPress={handleLogIn}
        >
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default Login
