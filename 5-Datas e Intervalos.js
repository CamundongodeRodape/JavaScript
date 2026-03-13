// Temporizador de contagem regressiva
// Data futura: 7 dias a partir de agora
const dataFutura = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

function calcularTempoRestante(dataFutura) {
  const agora = new Date();
  const diferencaMs = dataFutura - agora;

  if (diferencaMs <= 0) {
    return {
      totalMs: 0,
      dias: 0,
      horas: 0,
      minutos: 0,
      segundos: 0,
    };
  }

  const totalSegundos = Math.floor(diferencaMs / 1000);
  const dias = Math.floor(totalSegundos / (24 * 60 * 60));
  const horas = Math.floor((totalSegundos % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((totalSegundos % (60 * 60)) / 60);
  const segundos = totalSegundos % 60;

  return {
    totalMs: diferencaMs,
    dias,
    horas,
    minutos,
    segundos,
  };
}

function atualizarTemporizador() {
  const restante = calcularTempoRestante(dataFutura);

  console.clear();
  console.log(`Faltam ${restante.dias}d ${restante.horas}h ${restante.minutos}m ${restante.segundos}s`);

  if (restante.totalMs === 0) {
    console.log("Tempo esgotado!");
    clearInterval(intervalId);
  }
}

// Atualiza a cada segundo
const intervalId = setInterval(atualizarTemporizador, 1000);

// Primeira atualização imediata
atualizarTemporizador();