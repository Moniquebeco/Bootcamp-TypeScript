import { useContext } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";
import { useNavigate } from "react-router-dom";

export const login = async (email: string): Promise<void> => {
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()
    const data: any = await api

    console.log(setIsLoggedIn)

    if (!email || email === 'undefined' || email === null) {
        alert('A propriedade email deve ser preenchida');// criar teste
    } else if (email !== data.email) {
        return alert("Email inválido")
    } else {
        setIsLoggedIn(true)
        navigate(`/${data.id}`)
    }
};