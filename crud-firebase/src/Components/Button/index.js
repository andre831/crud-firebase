import ButtonContainer from './style';

function Button(props){
    return(
        <ButtonContainer 
            buttonTheme={props.buttonTheme}
            onClick={props.actionClick}>    
            {props.children}
        </ButtonContainer>
    )
}

export default Button;