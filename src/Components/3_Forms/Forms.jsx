import { useState } from 'react';

import './Forms.css'


const Forms = (defaultName, defaultEmail, defaultAge) => {

    
    // Envio de Form

    // Definindo as variáveis 'useState':

    const [infos, setInfos] = useState([]); 
    // useState para declarar informações que aparecem no quadro.

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [bio, setBio] = useState("");
    const [role, setRole] = useState("estagiário");

    const handleName = (e) => {
        setName(e.target.value)
    };

    console.log(name, email, age, bio, role)


    // Função abaixo executa quando aciona-se o evento 'onSubmit' do formulário.

    const handleSubmit = async () => {

        const url = "http://localhost:3000/infos"

        const info = {
            name,
            email,
            age,
            bio,
            role,
        };

        console.log(info);

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        });

        // esta parte abaixo serve para tirar aqueles warnings do console.
        const addedInfos = await res.json();

        setInfos((prevInfos) => [...prevInfos, addedInfos])
    };


    return (
        <div className='form-division-style'>

            <div>
                <h2>Formulário:</h2>
            </div>

            <form onSubmit={handleSubmit}> {/*  Envio de formulário*/}
                <div className='form-field-style'> 

                    {/* Label envolvendo o Input (nome)*/}
                    <label htmlFor="name" className='form-elements'>
                        <span>Nome:</span>
                        <input type="text" name="name" placeholder="Digite o seu nome:" onChange={handleName} value={name || ""} />
                    </label>

                    {/* Label envolvendo o Input (email)*/}
                    <label htmlFor="name" className='form-elements'>
                        <span>E-mail:</span>
                        <input type="text" name="email" placeholder="Digite o seu e-mail:" onChange={(e) => setEmail(e.target.value)} value={email || ""}/> {/* onChange inline / || "" (or e string vazia) para definir como input controlado (controlled inputs) */}
                    </label>
                    
                    {/* Label envolvendo o Input (idade)*/}
                    <label htmlFor="name" className='form-elements'>
                        <span>Idade:</span>
                        <input type="number" name="age" placeholder="Coloque a sua idade:" onChange={(e) => setAge(e.target.value)} value={age || ""}/> {/* onChange inline */}
                    </label>

                    <label className='form-elements'>
                        <span>Bio:</span>
                        <textarea name="bio" placeholder="Descrição do usuário:" onChange={(e) => setBio(e.target.value)} value={bio || ""}/>
                    </label>

                    <label className='form-elements' id='select-style'>
                        <span>Função no sistema: </span>
                        <select  onChange={(e) => setRole(e.target.value)} value={role || ""} defaultValue="estagiario">
                            <option value='estagiario' name="role">Estagiário</option>
                            <option value='funcionario' name="role">Funcionário</option>
                            <option value='coordenador' name="role">Coordenador</option>
                        </select>
                    </label>

                    <div>
                        <input type="submit" value="Enviar" id="submit-styles"/> {/* Botão enviar (submit)*/}
                    </div>

                </div>
            </form>
        </div>
    );      
};

export default Forms;