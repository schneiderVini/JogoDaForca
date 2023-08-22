import "./palavra.css";

export function Palavra({ palavra, letrasCorretas }) {
  return (
    <div className="palavra">
      {palavra.split("").map((letra, index) => {
        return (
          <span className="letra" key={index}>
            {letrasCorretas.includes(letra) ? letra : " "}
          </span>
        );
      })}
    </div>
  );
}
