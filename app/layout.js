import { Inter } from "next/font/google";
import "./globals.css";
import { ContactsProvider } from "./context/ContactsContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contact List",
  description: "A simple contact list application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactsProvider>
          <div id="app">{children}</div>
        </ContactsProvider>
      </body>
    </html>
  );
}
