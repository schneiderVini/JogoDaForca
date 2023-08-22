import "./palavrasErradas.css";

export function PalavrasErradas({ letraErradas }) {
  return (
    <div className="pe">
      <div>
        {letraErradas.length > 0 && (
          <p>{"Tentativas " + letraErradas.length + "/6"}</p>
        )}
        {letraErradas
          .map((letra, index) => <span key={index}>{letra}</span>)
          .reduce(
            (anterior, atual) =>
              anterior === null ? [atual] : [anterior, "-", atual],
            null
          )}
      </div>
    </div>
  );
}
