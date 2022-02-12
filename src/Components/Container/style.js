import styled from 'styled-components';

const ContainerField = styled.div`

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 60px;

    @media (min-width: 768px){
        flex-direction: row;
    }

`

export default ContainerField;