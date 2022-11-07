/** @format */

import { useRouter } from 'next/router'
import { useState } from 'react'
import { Button, Input } from '@nextui-org/react'
import styles from '../../styles/Login.module.css'
import axios from 'axios'

function Login() {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)
  const router = useRouter()

  const handleClick = async (e) => {
    try {
      await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password
      })
      console.log('Yes You are connected')
      router.push('/admin')
    } catch (error) {
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Admin Dashboard</h1>
      <form className={styles.wrapper}>
        <Input
          type='text'
          size='xl'
          name='email'
          placeholder='Email'
          aria-labelledby='email'
          id='email'
          onChange={(e) => setUsername(e.target.value)}
        ></Input>
        <Input
          type='password'
          size='xl'
          name='password'
          placeholder='Password'
          aria-labelledby='password'
          id='password'
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        {error && (
          <span className={styles.error}>Invalid username or password</span>
        )}
        <Button
          size='lg'
          aria-labelledby='form submit'
          color='warning'
          onPress={handleClick}
        >
          Sign In
        </Button>
      </form>
    </div>
  )
}

export default Login

{
  /* <Modal closeButton preventClose aria-labelledby='modal-title' open={true}>
        <Modal.Header>
          <Text id='modal-title' size={20}>
            Welcome to Login Dashbord
          </Text>
        </Modal.Header>
        <Spacer y={1} />
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            name='email'
            aria-labelledby='email'
            color='primary'
            size='lg'
            placeholder='Username'
            onChange={handleChange}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            name='password'
            aria-labelledby='password'
            color='primary'
            size='lg'
            placeholder='Password'
            onChange={handleChange}
          />
          {error && (
            <span className={styles.error}>Email or Password invalid</span>
          )}
          <Row justify='space-between'>
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color='error'>
            Close
          </Button>
          <Button auto>Sign in</Button>
        </Modal.Footer>
      </Modal> */
}
