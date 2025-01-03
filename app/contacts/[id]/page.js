"use client";

import { useContacts } from "@/app/context/ContactsContext";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/styles/ContactDetail.module.css";

export default function ContactPage({ params }) {
  const { contacts } = useContacts();

  if (!contacts) {
    return <div>Loading...</div>;
  }

  const contact = contacts.find((c) => c.id === parseInt(params.id));

  if (!contact) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/contacts" className={styles.backLink}>
          <svg
            className={styles.backIcon}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Contacts
        </Link>

        <div className={styles.card}>
          <div className={styles.cardContent}>
            <div className={styles.contactInfo}>
              <div className={styles.imageContainer}>
                <Image
                  src={contact.image_url}
                  alt={contact.name}
                  fill
                  className={styles.image}
                  priority
                />
              </div>

              <div className={styles.details}>
                <h1 className={styles.name}>{contact.name}</h1>

                <div className={styles.infoGroup}>
                  <label className={styles.label}>Email</label>
                  <p className={styles.value}>{contact.email}</p>
                </div>

                <div className={styles.infoGroup}>
                  <label className={styles.label}>Phone</label>
                  <p className={styles.value}>{contact.phone_number}</p>
                </div>

                <div className={styles.actions}>
                  <Link
                    href={`/contacts/${contact.id}/edit`}
                    className={styles.editButton}
                  >
                    <svg
                      className={styles.editIcon}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                    Edit Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
