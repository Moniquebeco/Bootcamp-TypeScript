import { login } from './login'

describe('login', () => {
    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        let nome = 'Monique'
        login(nome)
        expect(mockAlert).toBeCalled()
        expect(mockAlert).toHaveBeenCalledWith(`Seja bem vinda ${nome}`)
    })

    it('Deve exibir um alert de erro', () => {
        login('')
        expect(mockAlert).toBeCalled()
        expect(mockAlert).toHaveBeenCalledWith('A propriedade nome deve ser preenchida')
    })
})