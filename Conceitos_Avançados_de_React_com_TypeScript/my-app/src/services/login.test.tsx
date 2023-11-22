import { login } from './login';
import { api } from '../api'; 

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    let mockEmail = 'test@test.com'

    it('Deve exibir um alert de boas vindas caso o email seja válido', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Seja bem vinda ${mockEmail}`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', async () => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith('Seja bem vinda')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido.com')
        expect(mockAlert).toHaveBeenLastCalledWith('Email inválido')
    })


})