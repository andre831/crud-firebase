import { Link, useParams } from 'react-router-dom'; 
import Button from '../Button'
import { ContainerCard, CardContent, 
    CardContentHead, CardTitle, 
    CardContentBody, CardContentList, 
    CardListUl, CardListLi, CardContentButtons} from "./style";

function Card(props) {

    return (
        <ContainerCard>
            <CardContent>
                <CardContentHead>
                    <CardTitle>{props.name} {props.lastname}</CardTitle>
                </CardContentHead>
                <CardContentBody>
                    <CardContentList>
                        <CardListUl>
                            <CardListLi>Idade: {props.year}</CardListLi>
                            <CardListLi>Data de Nascimento: {props.birth}</CardListLi>
                            <CardListLi>CPF: {props.cpf}</CardListLi>
                        </CardListUl>
                    </CardContentList>
                    <CardContentButtons>
                        <Link to={`/formupdate/${props.personId}`}>
                            Update
                        </Link>
                        <Button buttonTheme={`#ff0000`}
                            actionClick={props.actionDelete}>
                            Delete
                        </Button>
                    </CardContentButtons>
                </CardContentBody>
            </CardContent>
        </ContainerCard>
    );
}

export default Card;