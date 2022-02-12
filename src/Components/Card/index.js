
import Button from '../Button'
import { ContainerCard, CardContent, 
    CardContentHead, CardTitle, 
    CardContentBody, CardContentList, 
    CardListUl, CardListLi, CardContentButtons } from "./style";

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
                        <Button buttonTheme={`#00ddfa`}
                            action={props.updateAction}>
                            Alterar
                        </Button>
                        <Button buttonTheme={`#ff0000`}
                            action={props.deleteAction}>
                            Deletar
                        </Button>
                    </CardContentButtons>
                </CardContentBody>
            </CardContent>
        </ContainerCard>
    );
}

export default Card;