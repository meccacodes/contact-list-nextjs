"use client";
import { useRouter } from "next/navigation";
import styles from "@/app/styles/NewContact.module.css";

export default function ContactForm({
  contact,
  onSubmit,
  buttonText = "Save",
}) {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone_number: formData.get("phone_number"),
      image_url: formData.get("image_url"),
    };

    if (contact?.id) {
      contactData.id = contact.id;
    }

    onSubmit(contactData);
  };

  return (
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
          defaultValue={contact?.name || ""}
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
          defaultValue={contact?.email || ""}
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
          defaultValue={contact?.phone_number || ""}
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
          defaultValue={contact?.image_url || ""}
          className={styles.input}
        />
      </div>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.submitButton}>
          {buttonText}
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
  );
}
