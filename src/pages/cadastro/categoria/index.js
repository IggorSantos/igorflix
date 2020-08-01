import React, {useState,useEffect} from 'react'
import PageDefault from '../../../components/pageDefault'
import {Link} from 'react-router-dom'
import FormField from '../../../components/formField'
import Button from '../../../components/button'

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor:'',
  }
  const [categorias,setCategorias] = useState([])
  const [valores,setValores] = useState(valoresIniciais)

  function setValue(chave,valor){
    setValores({
      ...valores,
      [chave] : valor,
    })
  }

 function handleChange(info){
   setValue(
   info.target.getAttribute('name'),
   info.target.value
   );
 }

 useEffect(() => {
       const URL = 'http://localhost:8080/categorias';
       fetch(URL)
        .then(async (respostaDoServer) =>{
           const resposta = await respostaDoServer.json();
           setCategorias([
             ...resposta,
           ])
                 })

   }, []);

  return(
    <PageDefault>
     <h1>Cadastro de categoria:{valores.nome}</h1>
     <form onSubmit={function handleSubmit(info){
       info.preventDefault()
       console.log("Você tentou enviar um form")
       setCategorias([
         ...categorias,
         valores
       ]);
       setValores(valoresIniciais)
     }}>
      <FormField
         label="Nome da Categoria"
         type="text"
         name="nome"
         value={valores.nome}
         onChange={handleChange}
      />
      <FormField
         label="Descrição"
         type="textarea"
         name="descricao"
         value={valores.descricao}
         onChange={handleChange}
      />
      <FormField
         label="Cor"
         type="color"
         name="cor"
         value={valores.cor}
         onChange={handleChange}
      />
      <Button>
          Cadastrar
        </Button>
      </form>
      <ul>
       {categorias.map((categoria,indice) => {
         return(
           <li key={`${categoria}${indice}`}>
            {categoria.nome}
           </li>
         )
       })}
      </ul>
      <Link to="/">
        Ir para a Home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria
