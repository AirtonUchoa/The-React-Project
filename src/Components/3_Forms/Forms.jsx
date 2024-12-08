import { useState } from 'react';
import './Forms.css'
const Forms = () => {
    {/* Envio de Form */}
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value)
    };

    console.log(NamedNodeMap)




    return (
        <div className='form'>

            <div>
                <h2>Formulário:</h2>
            </div>

            <form >
                <div className='Form-Field-Style'> 

                    {/* Label envolvendo o Input */}
                    <label htmlFor="name">
                        <span>Nome:</span>
                        <input type="text" name="name" placeholder="Digite o seu nome:" onChange={handleName}/>
                    </label>
                    
                    {/* Label envolvendo o Input */}
                    <label htmlFor="name">
                        <span>Idade:</span>
                        <input type="number" name="age" placeholder="Coloque a sua idade:"/>
                    </label>

                    <div>
                        <input type="submit" value="Enviar"/>
                    </div>

                </div>
            </form>
        </div>
    );      
};

export default Forms;