"use client";
import { useRouter } from "next/navigation";
import { useContacts } from "@/app/context/ContactsContext";
import ContactForm from "@/app/components/ContactForm";
import styles from "@/app/styles/NewContact.module.css";

export default function EditContact({ params }) {
  const router = useRouter();
  const { contacts, updateContact } = useContacts();
  const contact = contacts.find((c) => c.id === parseInt(params.id));

  if (!contact) {
    router.push("/contacts");
    return null;
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Edit Contact</h1>
      <ContactForm
        contact={contact}
        onSubmit={(updatedContact) => {
          updateContact(updatedContact);
          router.push("/contacts");
        }}
        buttonText="Save Changes"
      />
    </main>
  );
}
