import { login } from './login'

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert
    let mockEmail = 'Test@test.com'

    it('Deve exibir um alert com boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toBeCalled()
        expect(mockAlert).toHaveBeenCalledWith(`Seja bem vinda ${mockEmail}`)
    })

    it('Não deve exibir a mensagem de boas vindas sem o email', () => {
        login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith(`Seja bem vinda ${mockEmail}`)
    })

    it('Deve exibir um alert de erro', () => {
        login('')
        expect(mockAlert).toBeCalled()
        expect(mockAlert).toHaveBeenCalledWith('A propriedade email deve ser preenchida')
    })
})