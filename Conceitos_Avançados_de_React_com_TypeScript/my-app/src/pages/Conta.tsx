import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import CardInfo from "../components/CardInfo";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

interface userData {
    email: string
    password: string
    name: string
    balance: number
    id: string
}

const Conta = () => {
    const [userData, setUserData] = useState<null | userData>()
    const { id } = useParams() 
    const navigate = useNavigate()
    const { isLoggedIn } = useContext(AppContext)

    !isLoggedIn && navigate('/')
    
    useEffect(() => {
        const getData = async () => {
            const data: any | userData = await api
            setUserData(data)
        }
        
        getData()
    }, [])
    
    const actualDate = new Date()


    
    if (userData && id !== userData.id) {
        navigate('/')
    }
    

    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} padding={'16px 0'}>
                {
                    userData === undefined || userData === null ?
                        (
                            <Center>
                                <Spinner size={'xl'} color="white" />
                                <h1>Carregando</h1>
                            </Center>
                        ) :
                        (
                            <>
                                <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={`${actualDate.getDay()}/${actualDate.getMonth()}/${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`} />
                                <CardInfo mainContent="Saldo" content={`R$ ${userData?.balance}`} />
                            </>
                        )
                }

            </SimpleGrid>
        </Center>
    )
}

export default Conta;