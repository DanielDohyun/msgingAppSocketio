import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { useConversations } from "../Contexts/ConversationsProvider";

function ConversationTab() {
  const [text, setText] = useState();
  const {sendMsg, selectedConversation} = useConversations()

  const handleSubmit = (e) => {
    e.preventDefault()

    sendMsg(selectedConversation.recipients.map(recipient => recipient.id), text)

    setText('')
  }

  return (
    <div className="d-flex flex-column flex-grow-1">
      <div className="flex-grow-1 overflow-auto"></div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="m-2">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ height: "75px", resize: "none" }}
            />
            {/* <InputGroup> */}
              <Button type="submit">Send</Button>
            {/* </InputGroup> */}
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
}

export default ConversationTab;
