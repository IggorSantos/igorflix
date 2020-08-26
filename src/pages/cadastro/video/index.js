import React from 'react'
import PageDefault from '../../../components/pageDefault'
import {Link,useHistory} from 'react-router-dom'
import useForm from '../../../hooks'
import FormField from '../../../components/formField'
import Button from '../../../components/button'

function CadastroVideo(){
  const history = useHistory()
  const {handleChange,values} = useForm({

  })
  return(
    <PageDefault>
     <h1>Cadastro de videos</h1>
      <form onSubmit={(event) => {
       //event.preventDefault();
       console.log("Video cadastrado com sucesso");
       //history.push()
     }}>
     <FormField
        label="Titulo do video"
        name="titulo"
        value={values.titulo}
        onChange={handleChange}
     />
     <Button type="submit">
         Cadastrar
     </Button>
     </form>
        <Link to="/cadastro/categoria">
        Cadastrar categoria
      </Link>
    </PageDefault>
  )
}

export default CadastroVideo
