import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Carlos Santos"
  return (
    <div className="App">
      <h1>Testando CSS</h1>
           <Frase />
           <Frase />
           <SayMyName nome="Carlos" />
           <SayMyName nome="Guilherme" />
           <SayMyName nome={nome} />
           <Pessoa
             nome="Carlos Guilherme"
             idade="28"
             profissao="Analista"
             foto="https://via.placeholder.com/150"
          />
    </div>
  )
}

export default App;
