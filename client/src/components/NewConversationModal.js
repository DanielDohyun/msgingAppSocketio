import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useContacts} from './Contexts/ContactsProvider'
import { useConversations} from './Contexts/ConversationsProvider'


export default function NewConversationModal({closeModal}) {
  const [selectedContactIds, setSelectedContactIds] = useState([])
  const {contacts} = useContacts()
  const {createConversation} = useConversations()

  const handleSubmit = (e) => {
    e.preventDefault()

    createConversation(selectedContactIds)

    closeModal()
  }

  const handleCheckbox = (contactId) => {
    setSelectedContactIds(prevSelectedId => {
      if (prevSelectedId.includes(contactId)) {
        return prevSelectedId.filter(prevId => {
          return contactId !== prevId
        })
      } else {
        return [...prevSelectedId, contactId]
      }
    })
  }

  return (
    <>
    <Modal.Header closeButton>Create Conversation</Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        {contacts.map(contact => (
          <Form.Group controlId={contact.id} key={contact.id}>
            <Form.Check
              type='checkbox'
              value={selectedContactIds.includes(contact.id)}
              label={contact.name}
              onChange={() => handleCheckbox(contact.id)}
            />

          </Form.Group>
        ))}
        <Button type="submit">Create</Button>
      </Form>
    </Modal.Body>
  </>
  )
}
