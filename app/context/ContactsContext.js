"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ContactsContext = createContext();

export function ContactsProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedContacts = localStorage.getItem("contacts");
      if (savedContacts) {
        setContacts(JSON.parse(savedContacts));
      }
    } catch (error) {
      console.error("Error loading contacts:", error);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("contacts", JSON.stringify(contacts));
      } catch (error) {
        console.error("Error saving contacts:", error);
      }
    }
  }, [contacts, isLoaded]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const updateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) => {
        if (contact.id === updatedContact.id) {
          return updatedContact;
        }
        return contact;
      })
    );
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        addContact,
        deleteContact,
        updateContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
}

export function useContacts() {
  const context = useContext(ContactsContext);
  if (!context) {
    throw new Error("useContacts must be used within a ContactsProvider");
  }
  return context;
}
