import React, { useState } from 'react';
import styles from '../ContactTable/Contact.module.css';
import { Link } from 'react-router-dom';
import BackNav from '../BackNav/BackNav';

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', email: '' });
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  // Add contact to the table
  const addContact = () => {
    if (newContact.name && newContact.email) {
      setContacts([...contacts, newContact]);
      setNewContact({ name: '', email: '' });
    }
  };

  // Delete contact from the table
  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index));
  };

  return (
    <div className='row mx-0'>
      <BackNav/>
        <div className='col-md-10'>
        <div className={styles.contactForm}>
      <h2 className="text-xl font-semibold mb-4">Contact List</h2>

      {/* Add Contact Form */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleInputChange}
          className="p-2 border rounded mr-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleInputChange}
          className="p-2 border rounded mr-2"
        />
        <button
          onClick={addContact}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Contact
        </button>
      </div>

      {/* Contacts Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{contact.name}</td>
              <td className="border p-2">{contact.email}</td>
              <td className="border p-2">
                <button
                  onClick={() => deleteContact(index)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    </div>
   
  );
};

export default ContactTable;
