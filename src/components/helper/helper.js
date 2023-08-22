export function verificarVitoria(correta, errada, palavra) {
  let status = "Vitoria";

  // Verifica vitoria
  palavra.split("").forEach((letra) => {
    if (!correta.includes(letra)) {
      status = "";
    }
  });

  // Verifica derrota
  if (errada.length === 6) status = "Derrota";

  return status;
}
