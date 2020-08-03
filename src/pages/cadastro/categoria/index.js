import React, {useState,useEffect} from 'react'
import PageDefault from '../../../components/pageDefault'
import {Link} from 'react-router-dom'
import FormField from '../../../components/formField'
import Button from '../../../components/button'
import useForm from '../../../hooks'

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor:'',
  }
  const [categorias,setCategorias] = useState([])
  const { handleChange, values, clearForm } = useForm(valoresIniciais);

 useEffect(() => {
       const URL = window.location.hostname.includes('localhost')
          ? 'http://localhost:8080/categorias'
          : 'https://igorflixdev.herokuapp.com/categorias';
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
     <h1>Cadastro de categoria:{values.nome}</h1>
     <form onSubmit={function handleSubmit(info){
       info.preventDefault()
       console.log("Você tentou enviar um form")
       setCategorias([
         ...categorias,
         values
       ]);
       clearForm();
     }}>
      <FormField
         label="Nome da Categoria"
         type="text"
         name="nome"
         value={values.nome}
         onChange={handleChange}
      />
      <FormField
         label="Descrição"
         type="textarea"
         name="descricao"
         value={values.descricao}
         onChange={handleChange}
      />
      <FormField
         label="Cor"
         type="color"
         name="cor"
         value={values.cor}
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
            {categoria.titulo}
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
