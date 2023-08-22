import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/index";
import { PalavrasErradas } from "./components/index";
import { Palavra } from "./components/index";
import { palavras } from "./palavras";
import { Mensagem } from "./components/index";

let palavraSelecionada =
  palavras[Math.floor(Math.random() * palavras.length)].toLowerCase();

function App() {
  const [jogavel, setJogavel] = useState(true);
  const [letrasCorretas, setLetrasCorretas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);

  useEffect(() => {
    const lerTeclas = (event) => {
      const { key, keyCode } = event;
      if (jogavel && keyCode >= 65 && keyCode <= 90) {
        const letra = key.toLowerCase();
        if (palavraSelecionada.includes(letra)) {
          if (!letrasCorretas.includes(letra)) {
            setLetrasCorretas((letrasAtuais) => [...letrasAtuais, letra]);
          }
        } else {
          if (!letrasErradas.includes(letra)) {
            setLetrasErradas((letraAtuais) => [...letraAtuais, letra]);
          }
        }
      }
    };
    window.addEventListener("keydown", lerTeclas);

    return () => window.removeEventListener("keydown", lerTeclas);
  }, [letrasCorretas, letrasErradas, jogavel]);

  function jogarDenovo() {
    setJogavel(true);
    setLetrasCorretas([]);
    setLetrasErradas([]);

    palavraSelecionada =
      palavras[Math.floor(Math.random() * palavras.length)].toLowerCase();
  }

  return (
    <>
      <Header />
      <div className="container">
        <Palavra palavra={palavraSelecionada} letrasCorretas={letrasCorretas} />
        <PalavrasErradas letraErradas={letrasErradas} />
        <Mensagem
          letrasCorretas={letrasCorretas}
          letrasErradas={letrasErradas}
          palavra={palavraSelecionada}
          setJogavel={setJogavel}
          jogarDenovo={jogarDenovo}
        />
      </div>
    </>
  );
}

export default App;
