import { useState } from "react";
import { useParams } from "react-router-dom";
import FormFrame from "../../Components/FormFrame";
import firebase from "../../service/firebase/firebaseConnection";

function FormAdd(){
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [year, setYear] = useState('');
    const [birth, setBirth] = useState('');
    const [cpf, setCpf] = useState('');

    const {id} = useParams()

    async function setValuesForm(){
        await firebase.firestore().collection('persons')
        .doc(id)
        .update({
            "name" : name,
            "lastname" : lastname,
            "year" : year,
            "birth" : birth,
            "cpf": cpf
        })
        .then(
            setName(''),
            setLastname(''),
            setYear(''),
            setBirth(''),
            setCpf(''),
            alert("Update item in home")
        );
    }

    return(
        <FormFrame 
            name={name} changeValueName={e => setName(e.target.value)}
            lastname={lastname} changeValueLastname={e => setLastname(e.target.value)}
            year={year} changeValueYear={e => setYear(e.target.value)}
            birth={birth} changeValueBirth={e => setBirth(e.target.value)}
            cpf={cpf} changeValueCpf={e => setCpf(e.target.value)}
            buttonSubmit={ setValuesForm }> 
            `Update item {id}`
        </FormFrame>
    );
}

export default FormAdd;