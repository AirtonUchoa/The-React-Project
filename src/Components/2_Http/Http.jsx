import './Http.css'
import {useState, useEffect} from "react";

const Http = () => {
    // Configurações iniciais para HTTPS Request

    const url = "http://localhost:3000/infos"
    const [infos, setInfos] = useState([]);
    useEffect(() =>{

        async function getData () {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
        setInfos(data);
        }

        getData();
        console.log("Carregou")
    },[])

    return(
        <>
            <div className='http-board'>

                <h2>Dados do Banco:</h2>

                {/* Resgate de dados do Servidor: */}
                
                {infos.map((info)=> ( 
                    // tag map é como se fosse um 'for each' mais visual, utilizado justamente para criar listas mais visuais.

                    <ul>
                        <li key={info.id}>
                        Nome: {info.name}; <br/> E-mail: {info.email}; <br/> Idade: {info.age}; <br/> Bio: {info.bio}; <br/> Função: {info.role} <br/> <br/>
                        </li>
                    </ul>
                    
                ))}
            </div>
        </>
    )
};


export default Http;