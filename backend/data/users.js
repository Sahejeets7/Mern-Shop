import bcrypt from 'bcryptjs'

const Users = [
    {
        name: 'admin',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true 
    },
    {
        name: 'James Bond',
        email: 'james@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false 
    },
    {
        name: 'Sylvia Plathe',
        email: 'sylvia@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false 
    },

]

export default Users