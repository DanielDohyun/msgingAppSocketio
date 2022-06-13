import React, {useRef} from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import {v4 as uuidV4} from 'uuid'

export default function Login({setId}) {

  const idRef =useRef()

  const handleSumit = (e) => {
    e.preventDefault()

    setId(idRef.current.value)

  }

  const createNewId = () => {
    setId(uuidV4())
  }

  return (
    <Container className='align-items-center d-flex' style={{height: '100vh'}}>
      <Form onSubmit={handleSumit} className='w-100'>
        <Form.Group>
          <Form.Label>Enter your Id</Form.Label>
          <Form.Control type='text' ref={idRef} required />
        </Form.Group>
        <Button type='submit' className='mr-2'>Login</Button>
        <Button variant='secondary' onClick={createNewId}>Create A New Id</Button>
      </Form>
    </Container>
  )
}
