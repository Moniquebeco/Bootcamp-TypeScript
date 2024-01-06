import { login } from './login';


describe('login', () => {
    let mockEmail = 'test@test.com'

    it('Deve exibir um alert de boas vindas caso o email seja válido', async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        const response = await login('email@invalido.com')
        expect(response).toBeFalsy()
    })


})