import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { ContactsProvider } from "./Contexts/ContactsProvider";
import { ConversationsProvider } from "./Contexts/ConversationsProvider";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  const [id, setId] = useLocalStorage("id");

  const dashboard = (
    <ContactsProvider>
      <ConversationsProvider id={id}>
        <Dashboard id={id} />
      </ConversationsProvider>
    </ContactsProvider>
  );

  return id ? dashboard : <Login setId={setId} />;
}

export default App;
