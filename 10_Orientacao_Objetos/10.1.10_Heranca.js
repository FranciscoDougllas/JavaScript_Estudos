//Herança em Programação Funcional

const defaultUser = {
    name: "",
    email: "",
    level: 1
}

const user1 = {
    ...defaultUser,
    name: 'Mateus',
    email: 'absdh@gmail.com'
}

const admi1 = {
    ...defaultUser,
    name: 'Admin',
    email: 'admin@gmail.com',
    level: 2
}

console.log(admi1)