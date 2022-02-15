import styled from 'styled-components';

const FormContainer = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 80px;

`;

const FormBody = styled.div`

    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    border-radius 5px;
    background: #19143d;

`;

const FormTitle = styled.label`
    
    width: 61vw;
    padding-bottom: 5px;
    text-align: start;
    font-size: 1.2rem;
    border-bottom: 1px solid #777;
    color: #fff;

`;

const FormInputField = styled.input`
    
    width: 60vw;
    margin: 10px 0 30px;
    padding: 10px;
    font-size: 1.2rem;

`;

const FormSubmit = styled.button`

    padding: 10px 50px;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    background: #ffbf00;
    color: #19143d;
    cursor: pointer;

`;

export { FormContainer, FormBody, FormTitle, FormInputField, FormSubmit };