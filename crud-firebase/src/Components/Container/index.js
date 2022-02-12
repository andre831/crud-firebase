import ContainerField from "./style";

function Container(props){
    return(
        <ContainerField>
            {props.children}
        </ContainerField>
    );
}

export default Container;