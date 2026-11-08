// Ganzúa Lacre — comportamiento de la página. Sin dependencias.
// Probador (tamaño y frases) y comparación A/B de la retícula. Todo funciona sin JS salvo
// estos dos controles, que sin script se quedan en su estado inicial. Es un script clásico
// (no módulo) para que funcione también al abrir index.html directamente desde el disco.

const probador = document.getElementById('probador');
const tamano = document.getElementById('tamano');
const tamanoValor = document.getElementById('tamano-valor');

if (probador && tamano) {
  const aplicar = () => {
    // El tamaño viaja como token del proyecto: la regla CSS solo lee --lacre-tester-size
    probador.style.setProperty('--lacre-tester-size', `${tamano.value}px`);
    if (tamanoValor) tamanoValor.textContent = tamano.value;
  };
  tamano.addEventListener('input', aplicar);
  tamano.addEventListener('change', aplicar);
  aplicar();

  document.querySelectorAll('[data-frase]').forEach((boton) => {
    boton.addEventListener('click', () => {
      probador.textContent = boton.dataset.frase;
      probador.focus();
    });
  });

  // Pegar como texto plano: el probador no debe heredar estilos de otra página
  probador.addEventListener('paste', (evento) => {
    evento.preventDefault();
    const texto = evento.clipboardData?.getData('text/plain') ?? '';
    document.execCommand('insertText', false, texto);
  });
}

const comparacion = document.getElementById('comparacion');
if (comparacion) {
  document.querySelectorAll('input[name="version"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      const antes = radio.value === 'v04' && radio.checked;
      comparacion.querySelectorAll('.lacre-specimen').forEach((linea) => {
        linea.classList.toggle('lacre-specimen--v04', antes);
      });
    });
  });
}
