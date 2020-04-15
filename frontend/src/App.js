import React /*,{useState}*/ from 'react';
// import Header from './Header'
// import Logon from './pages/Logon'
import './globals.css'
import Routes from './routes'

function App() {
//   const [counter,  setCounter] = useState(0);
// // Use State retorna Array [valor, funçao de atualizaçao]

//   function increment() {
//     setCounter(counter + 1);
//     console.log(counter);
//   }

  return (
    <div>
      {/* <Header title="Semana OmniStack 11">
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button> */}

      <Routes />
    </div>
  );
}

export default App;