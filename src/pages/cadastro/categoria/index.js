import React, {useState} from 'react'
import PageDefault from '../../../components/pageDefault'
import {Link} from 'react-router-dom'

function CadastroCategoria(){
  const [nomeDaCategoria,setNomeDacategoria] = useState('Valor Inicial')
  const [categorias,setCategorias] = useState(['Teste'])
  console.log(nomeDaCategoria)
  return(
    <PageDefault>
     <h1>Cadastro de categoria:{nomeDaCategoria}</h1>
     <form onSubmit={function handleSubmit(info){
       info.preventDefault()
       console.log("Você tentou enviar um form")
       setCategorias([
         ...categorias,
         nomeDaCategoria
       ])
     }}>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={nomeDaCategoria}
            onChange={function mudarValor(info){
              console.log(nomeDaCategoria)
              console.log(info.target.value)
              setNomeDacategoria(info.target.value)
            }}
          />
        </label>
        <button>
          Cadastrar
        </button>
      </form>
      <ul>
       {categorias.map((categoria,indice) => {
         return(
           <li key={`${categoria}${indice}`}>
            {categoria}
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
