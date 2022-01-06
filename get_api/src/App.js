import React, {useEffect, useState} from 'react';

export default function App() {

  // os dados da api cairam aqui
  const [record, setRecord] = useState([]); 

  // irá renderizar assim que entrarmos na pagina, trazendo os dados
  useEffect(() => {

    const url =  'https://sujeitoprogramador.com/rn-api/?api=posts'

    function load(){
      fetch(url)
      .then((response) => response.json()) // transforma o objeto em json
      .then((responseJson) =>{
        console.log(responseJson)
        setRecord(responseJson); // define os dados dentro do array record que estava vazio
      })
    }

    load();

  }, []) // executa como didMount
  
  return (
    <div>
      {
        record.map((record) => {
          return(
            <div>
              <img src={record.capa} width='50%'/>
              <article key={record.id}>
                <h2>{record.titulo}</h2>
                <p>{record.subtitulo}</p>
                <h4>Categoria: {record.categoria}</h4>
              </article>
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}
