// Simulando chamada de api
const conta = {
    email: "test@test.com",
    password: "test123" ,
    name: "MB Test"
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})