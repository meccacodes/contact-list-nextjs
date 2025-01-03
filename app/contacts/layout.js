"use client";

import { ContactsProvider } from "../context/ContactsContext";

export default function ContactsLayout({ children }) {
  return <ContactsProvider>{children}</ContactsProvider>;
}
