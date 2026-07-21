import bcrypt from "bcryptjs"

const hashPassword=bcrypt.hashSync('123456',salt);

const users=[
    {
        name:"Admin User",
        email:"admin@shopping.com",
        password:hashedPassword,
        isAdmin:true
    },
    {name:'Jane Doe',
        email:"jan@example.com",
        password:hashPassword,
        isAdmin:false
    }
];

export default users;
