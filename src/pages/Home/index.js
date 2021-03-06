import { useState, useEffect } from "react";

import Card from "../../Components/Card";
import Container from "../../Components/Container";

import firebase from '../../service/firebase/firebaseConnection';

function Home() {

  const [personData, setPersonData] = useState([]);

  useEffect(() => {
    async function getAllPersonRecords() {
      await firebase.firestore().collection('persons')
        .onSnapshot(doc => {
          const data = [];

          doc.forEach(e => {
            data.push({
              id: e.id,
              name: e.data().name,
              lastname: e.data().lastname,
              year: e.data().year,
              cpf: e.data().cpf,
              birth: e.data().birth,
            })
          });

        setPersonData(data);
      });
    } 
    getAllPersonRecords();

  }, []);

   async function  deleteRecordItemPerson(docId){
    await firebase.firestore().collection('persons')
    .doc(docId)
    .delete()
    .then(
      alert('Deleted item')
    );
  }

  return (
    <Container>
        {personData.map(item =>{
          return(
            <Card key={item.id} name={item.name} lastname={item.lastname}
                  year={item.year} birth={item.birth} cpf={item.cpf}
                  personId={item.id}
                  actionDelete={() => deleteRecordItemPerson(item.id)}
            />
          )
        })}
    </Container>
  );
}

export default Home;