"use client";
import { useState } from "react";
import Link from "next/link";
import ContactCard from "../components/ContactCard";
import styles from "../styles/Contacts.module.css";
import { useContacts } from "../context/ContactsContext";
import { sampleContacts } from "../utils/sampleContacts";

export default function Contacts() {
  const { contacts, addContact } = useContacts();

  const loadDemoData = () => {
    sampleContacts.forEach((contact) => {
      addContact({
        ...contact,
        id: contact.id + Date.now(), // ensure unique IDs
      });
    });
  };

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contacts</h1>
        <div className={styles.actions}>
          {contacts.length === 0 && (
            <button onClick={loadDemoData} className={styles.demoButton}>
              Load Demo Data
            </button>
          )}
          <Link href="/contacts/new" className={styles.addButton}>
            Add Contact
          </Link>
        </div>
      </div>

      <div className={styles.grid}>
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>

      {contacts.length === 0 && (
        <p className={styles.emptyMessage}>
          No contacts yet. Add some or load demo data!
        </p>
      )}
    </main>
  );
}
