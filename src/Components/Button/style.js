import styled from 'styled-components';

const ButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105px;
    margin: 5px;
    padding: 10px 20px;
    border: 1px solid transparent;
    border-radius: 3px;
    color: #fff;
    font-weight: 600;
    
    background: ${(props) => props.buttonTheme} ;
    cursor: pointer;
    transition: .3s;

    &:hover{
        color: ${(props) => props.buttonTheme};
        border-color: ${(props) => props.buttonTheme};
        background: #fff;
    }
`;

export default ButtonContainer