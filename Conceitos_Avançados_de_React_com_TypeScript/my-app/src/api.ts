// Simulando chamada de api
const conta = {
    email: "test@test.com",
    password: "test123" ,
    name: "MB Test",
    balance: 2000,
    id: '0'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})