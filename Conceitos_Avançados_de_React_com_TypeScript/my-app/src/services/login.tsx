import { api } from "../api";

export const login = async (email: string): Promise<void> => {
    const data: any = await api

    if (email !== data.email) {
        return alert("Email inválido")
    }

    if (!email || email === 'undefined' || email === null ) {
        alert('A propriedade email deve ser preenchida');
    } else {
        alert(`Seja bem vinda ${email}`)
    }
    
};