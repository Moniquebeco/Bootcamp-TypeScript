import { Header } from './Header/Header'
import { Login } from './Login';

interface ICard {
    id: number,
    paragraph: string,
    details: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
    // console.log(props);
    // console.log(id);
    return(
    <div>
        {/* <h1>Card {id}</h1>
        <p>paragraph {paragraph}</p>
        <p>details {details}</p> */}
        <Login></Login>
    </div>
    )
}