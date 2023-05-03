import logo from './logo.svg';
import './App.css';

// Usando o JSX, crie um button no App.js. Este button deve conter a frase “Clique em mim, seu-nome”.
// Para isso, vamos alterar o retorno da função em nosso arquivo App.js


// Agora, vamos criar variáveis e funções para nosso App recém-criado.
// Altere o button do exercício anterior, para que seu nome seja guardado em uma variável antes de ser exibido.
// Crie uma classe “meu-nome” no App.css, que pinte o texto de laranja, e adicione esta classe ao botão.
// Crie uma função olaMundo, que deve ser executada no clique do botão. 
// Esta função deve exibir “Olá, Mundo!” em um alert.

function App() {
  function tomaAwa() {
    console.log("tomar awa")
  }

  const texto = "aqui tem um texto"

  const nome = "joao"

  function abrirAlert() {
    alert("Olá, Mundo!")
  }

  return (
    <div className="App">
      <button className="meu-nome" onClick={tomaAwa}>clique aqui {nome} </button>
      {texto}
      <button className='meu-nome' onClick={abrirAlert}> Abrir alert</button>
    </div>
  );
}

export default App;
