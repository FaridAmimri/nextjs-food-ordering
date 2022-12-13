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

  const handleLogIn = async () => {
    try {
      setLoading(true)
      await axios.post(
        'https://nextjs-food-ordering-seven.vercel.app/api/auth/login',
        {
          email,
          password
        }
      )
      router.push('/admin')
    } catch (error) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {loading && <Loading color='warning' type='gradient' size='xl' />}
        <h1 className={styles.title}>Admin Dashboard</h1>
        <form className={styles.form}>
          <Input
            type='email'
            size='md'
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
            size='md'
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
            size='md'
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
    </div>
  )
}

export default Login
