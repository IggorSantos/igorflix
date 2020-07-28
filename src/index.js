import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import CadastroVideo from './pages/cadastro/video'


ReactDOM.render(
  <BrowserRouter>
    <Switch>
     <Route path="/" component={App} exact />
     <Route path="/cadastro/video" component={CadastroVideo} />
     <Route component={() => (<div>Pagina 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
