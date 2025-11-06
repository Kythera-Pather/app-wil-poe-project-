// This is a mock user database. In a real application, this data would
// come from a secure backend server.

interface User {
  id: string;
  email: string;
  password: string; // Storing passwords in plain text is insecure. Use hashing in a real app.
  fullName: string;
}

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

// Function to find a user by email. Simulates an async API call.
export const findUserByEmail = async (email: string): Promise<User | undefined> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return users.find(user => user.email.toLowerCase() === email.toLowerCase());
};

// Function to create a new user. Simulates an async API call.
export const createUser = async (
  userData: Omit<User, 'id'>
): Promise<User> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const newUser: User = {
    id: String(users.length + 1), // Simple ID generation
    ...userData,
  };
  users.push(newUser);
  return newUser;
};