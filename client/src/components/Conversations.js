import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from './Contexts/ConversationsProvider'

export default function Conversations() {
  const {conversations, selectConversationIndex} = useConversations()

  return (
    <ListGroup variant='flush'>
      {
        conversations.map((conversation, i) => (
          <ListGroup.Item 
          key={i}
          action
          onClick={() => selectConversationIndex(i)}
          active={conversation.selected}
          >
            {conversation.recipients.map(recipient => recipient.name).join(', ')}
          </ListGroup.Item>
        ))
      }
    </ListGroup>
  )
}
