import { useNavigate } from 'react-router-dom';
import { login } from './login';

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })    
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe('login', () => {
    let mockEmail = 'test@test.com'

    it('Deve exibir um alert de boas vindas caso o email seja válido', async () => {
        await login(mockEmail)
        expect(mockSetIsLoggedIn).toHaveBeenCalledWith(true)
        expect(mockNavigate).toHaveBeenCalledWith('/0')
    })

    it('Deve exibir um erro caso o email seja inválido', async () => {
        await login('email@invalido.com')
        expect(mockSetIsLoggedIn).not.toBeCalled()
        expect(mockNavigate).not.toHaveBeenCalled()
    })


})