import { useState } from "react";
import FormFrame from "../../Components/FormFrame";
import firebase from "../../service/firebase/firebaseConnection";

function FormAdd(){
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [year, setYear] = useState('');
    const [birth, setBirth] = useState('');
    const [cpf, setCpf] = useState('');

    async function setValuesForm(){
        await firebase.firestore().collection('persons')
        .add({
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
            setCpf('')
        )
    }

    return(
        <FormFrame 
            name={name} changeValueName={e => setName(e.target.value)}
            lastname={lastname} changeValueLastname={e => setLastname(e.target.value)}
            year={year} changeValueYear={e => setYear(e.target.value)}
            birth={birth} changeValueBirth={e => setBirth(e.target.value)}
            cpf={cpf} changeValueCpf={e => setCpf(e.target.value)}
            buttonSubmit={ setValuesForm }> 
            Add
        </FormFrame>
    );
}

export default FormAdd;