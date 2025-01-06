"use client";
import { useRouter } from "next/navigation";
import { useContacts } from "@/app/context/ContactsContext";
import ContactForm from "@/app/components/ContactForm";
import styles from "@/app/styles/NewContact.module.css";

export default function NewContact() {
  const router = useRouter();
  const { addContact } = useContacts();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Add New Contact</h1>
      <ContactForm
        onSubmit={(contact) => {
          addContact({ ...contact, id: Date.now() });
          router.push("/contacts");
        }}
        buttonText="Add Contact"
      />
    </main>
  );
}
