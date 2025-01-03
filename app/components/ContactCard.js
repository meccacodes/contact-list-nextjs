import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/ContactCard.module.css";
import { useContacts } from "../context/ContactsContext";

export default function ContactCard({ contact }) {
  const { deleteContact } = useContacts();

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src={contact.image_url}
            alt={contact.name}
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.info}>
          <Link
            href={`/contacts/${contact.id}`}
            className="text-lg font-semibold hover:text-blue-600 transition-colors"
          >
            {contact.name}
          </Link>
          <p>{contact.email}</p>
          <p>{contact.phone_number}</p>
        </div>
      </div>
      <div className={styles.actions}>
        <Link href={`/contacts/${contact.id}/edit`} className={styles.editLink}>
          Edit
        </Link>
        <button
          className={styles.deleteButton}
          onClick={() => deleteContact(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

ContactCard.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone_number: PropTypes.string.isRequired,
  }).isRequired,
};
