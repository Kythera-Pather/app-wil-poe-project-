// This is a mock user database. In a real application, this data would
// come from a secure backend server with a proper database (like PostgreSQL, MongoDB, etc.).
// We're using this file to simulate user authentication without needing a backend.

interface User {
  id: string;
  email: string;
  password: string; // WARNING: Storing passwords in plain text is highly insecure. In a real app, always hash and salt passwords.
  fullName: string;
}

// This array acts as our "users" table in the database.
const users: User[] = [
  {
    id: '1',
    email: 'test@example.com',
    password: 'password123',
    fullName: 'Test User',
  },
  {
    id: '2',
    email: 'jane.doe@example.com',
    password: 'password456',
    fullName: 'Jane Doe',
  },
];

/**
 * Finds a user by their email address.
 * This function simulates an asynchronous API call to a backend.
 */
export const findUserByEmail = async (email: string): Promise<User | undefined> => {
  // Simulate a network delay to mimic a real API request.
  await new Promise(resolve => setTimeout(resolve, 500));
  return users.find(user => user.email.toLowerCase() === email.toLowerCase());
};

/**
 * Creates a new user and adds them to our mock database.
 * This function also simulates an asynchronous API call.
 */
export const createUser = async (
  userData: Omit<User, 'id'>
): Promise<User> => {
  // Simulate a network delay.
  await new Promise(resolve => setTimeout(resolve, 500));

  const newUser: User = {
    id: String(users.length + 1), // Simple ID generation
    ...userData,
  };
  users.push(newUser);
  return newUser;
};