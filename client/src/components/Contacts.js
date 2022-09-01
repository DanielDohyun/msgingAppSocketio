import React from 'react'
import { useContacts } from './Contexts/ContactsProvider'
import { ListGroup } from 'react-bootstrap'

export default function Contacts() {
  const {contacts} = useContacts()

  return (
    //flush to remove outer borders and rounded corners
    <ListGroup variant='flush'>
      {
        contacts.map(contact => (
          <ListGroup.Item key={contact.id}>
            {contact.name}
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}
