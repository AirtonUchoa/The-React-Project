import './Http.css'
import {useState, useEffect} from "react";

const Http = () => {
    // Configurações iniciais para HTTPS Request

    const url = "http://localhost:3000/products"
    const [products, setProducts] = useState([]);
    useEffect(() =>{

        async function getData () {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data);
        setProducts(data);
        }

        getData();
        console.log("Carregou")
    },[])

    // // Envio de dados:
    // const [name, setName] = useState("");
    // const [price, setPrice] = useState("");

    // const handleSubmit = async(e) => {

    //     e.preventDefault()

    //     const product = {
    //         name,
    //         price
    //     };

    //     console.log(product);

    //     const res = await fetch(url, {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(product),
    //     });
    // }

    return(
        <>
            <div className='http-board'>

                <h2>Dados do Banco:</h2>

                {/* Resgate de dados do Servidor: */}
                
                {products.map((product)=> (

                    <li key={product.id}>
                        Nome: {product.name}, <br/> E-mail: {product.email}, <br/> Idade: {product.age}, <br/> Bio: {product.bio}, <br/> Função: {product.role} <br/> <br/>
                    </li>
                ))}
            </div>

            {/* Envio de de dados: */}
            {/* <div className='http-board'>
                <form className='form-styles' onSubmit={handleSubmit}>
                    <label>
                        <span>Nome: </span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </label>

                    <label>
                        <span>Preço: </span>
                        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                    </label>

                    <label>
                        
                        <input type="submit" value="Enviar" id='submit-styles'></input>
                    </label>
                </form>
            </div> */}
        </>
    )
};


export default Http;