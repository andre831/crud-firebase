import styled from "styled-components";

const ContainerCard = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align: center;
    width: 420px;
    height: 300px;
    margin: 20px;
    padding: 20px;
    border-radius: 5px;
    background: #05002b;

`;

const CardContent = styled.div`

    display: flex;
    flex-direction: column;
    justfy-content: center;
    align-items: center;
    text-align: center;

`;

const CardContentHead = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #bababa;
    width: 450px;

`

const CardTitle = styled.div`

    padding: 10px;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #fff;

`

const CardContentBody = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 10px;

`;

const CardContentList = styled.div`

    display: flex;
    justify-content: center;

`;

const CardListUl = styled.ul`

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    list-style: none;

`;

const CardListLi = styled.li`

    font-size: 1rem;
    padding: 5px;
    color: #fff;
    letter-spacing: 2px;

`;

const CardContentButtons = styled.li`

    display: flex;
    flex-direction: row;
`;

export { ContainerCard, CardContent, 
    CardContentHead, CardTitle, 
    CardContentBody, CardContentList, 
    CardListUl, CardListLi, CardContentButtons };