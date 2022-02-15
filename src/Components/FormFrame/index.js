import { FormContainer, FormBody, FormTitle, FormInputField, FormSubmit } from './style';

function FormFrame(props){
    return(
        <FormContainer>
            <FormBody>
                <FormTitle>Name:</FormTitle>
                <FormInputField type="text" value={props.name} onChange={props.changeValueName} />
                <FormTitle>Lastname:</FormTitle>
                <FormInputField type="text" value={props.lastname} onChange={props.changeValueLastname} />
                <FormTitle>Years:</FormTitle>
                <FormInputField type="text"  maxLength="2" value={props.year} onChange={props.changeValueYear} />
                <FormTitle>Birthday:</FormTitle>
                <FormInputField type="date" value={props.birth} onChange={props.changeValueBirth} />
                <FormTitle>CPF:</FormTitle>
                <FormInputField type="text" maxLength="11" pattern="[0-9]" value={props.cpf} onChange={props.changeValueCpf} />
                <FormSubmit type="submit" onClick={props.buttonSubmit}>{props.children}</FormSubmit>
            </FormBody>
        </FormContainer>
    );
}

export default FormFrame;