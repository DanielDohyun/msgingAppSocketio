import React from "react";
import { useConversations } from "./Contexts/ConversationsProvider";
import ConversationTab from "./ConversationTab/ConversationTab";
import Sidebar from "./Sidebar";

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations();

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <ConversationTab />}
    </div>
  );
}
