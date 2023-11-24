import { api } from "../api";

export const login = async (email: string): Promise<void> => {
    const data: any = await api

    if (!email || email === 'undefined' || email === null) {
        alert('A propriedade email deve ser preenchida');
    } else if (email !== data.email) {
        return alert("Email inválido")
    } else {
        alert(`Seja bem vinda ${email}`)
    }
};