import "./mensagem.css";
import { verificarVitoria } from "../helper/helper.js";
import { useEffect } from "react";

export function Mensagem({
  letrasCorretas,
  letrasErradas,
  palavra,
  setJogavel,
  jogarDenovo,
}) {
  let mensagemFinal = "";
  let mensagemFinalPalavra = "";
  let jogavel = true;

  if (verificarVitoria(letrasCorretas, letrasErradas, palavra) === "Vitoria") {
    mensagemFinal = "Parabéns! Você venceu!";
    jogavel = false;
  } else if (
    verificarVitoria(letrasCorretas, letrasErradas, palavra) === "Derrota"
  ) {
    mensagemFinal = "Você perdeu ";
    mensagemFinalPalavra = `A palavra era: ${palavra}`;
    jogavel = false;
  }

  useEffect(() => {
    setJogavel(jogavel);
  });

  return (
    <div
      className="mensagem-container"
      style={mensagemFinal !== "" ? { display: "flex" } : {}}
    >
      <div className="mensagem">
        <h2>{mensagemFinal}</h2>
        <h3>{mensagemFinalPalavra}</h3>
        <button onClick={jogarDenovo}>Jogar denovo</button>
      </div>
    </div>
  );
}
