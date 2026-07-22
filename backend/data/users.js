import bcrypt from 'bcryptjs';

// Automatically generates salt and hashes the password in one step
const hashedPassword = bcrypt.hashSync('123456', 10);

const users = [
    {
        name: 'Admin User',
        email: 'admin@shopping.com',
        password: hashedPassword,
        isAdmin: true,
    },
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        password: hashedPassword,
        isAdmin: false,
    },
];

export default users;
