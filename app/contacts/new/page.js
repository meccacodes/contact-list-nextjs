"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/NewContact.module.css";
import { useContacts } from "../../context/ContactsContext";

export default function NewContact() {
  const router = useRouter();
  const { addContact } = useContacts();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    image_url: "",
  });

  const generateId = () => Math.round(Math.random() * 100000000);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      id: generateId(),
      ...formData,
    };
    addContact(newContact);
    router.push("/contacts");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Add New Contact</h1>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone_number" className={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone_number"
            name="phone_number"
            required
            value={formData.phone_number}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="image_url" className={styles.label}>
            Image URL
          </label>
          <input
            type="url"
            id="image_url"
            name="image_url"
            required
            value={formData.image_url}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            Add Contact
          </button>
          <button
            type="button"
            onClick={() => router.push("/contacts")}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
}
