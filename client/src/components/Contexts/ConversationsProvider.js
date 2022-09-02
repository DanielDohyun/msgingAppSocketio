import React, {useContext, useState} from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useContacts } from './ContactsProvider'

const ConversationsContext = React.createContext()

export function useConversations() {
  return useContext(ConversationsContext)
}

export  function ConversationsProvider({ id, children }) {
  const [conversations, setConversations] = useLocalStorage('conversations', [])
  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
  const {contacts} = useContacts()

  const addMsgToConversation = ({recipients, text, sender})=> {

  }

  const sendMsg = (recipients, text) => {
    addMsgToConversation({recipients, text, sender: id})
  }

  const createConversation = (recipients) => {
    setConversations(prevConversations => {
      return [...prevConversations, {recipients, mesaage: []}]
    })
  }

  const formattedConversations = conversations.map((conversation, i) => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contacts.find(contact => {
        return contact.id === recipient
      })

      const name = (contact && contact.name) || recipient
      return {id: recipient, name}
    })
    const selected = i === selectedConversationIndex
    return {...conversations, recipients, selected}
  })

  return (
    <ConversationsContext.Provider value={{conversations: formattedConversations, createConversation, selectConversationIndex: setSelectedConversationIndex, selectedConversation: formattedConversations[selectedConversationIndex]}}>
      {children}
    </ConversationsContext.Provider>
  )
}
