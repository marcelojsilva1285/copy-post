const btnToCopy = document.querySelector('.bx-copy');
const btnToPoste = document.querySelector('.poste i');

const inputToCopyText = document.querySelector('.copy input');
const InputToPosteText = document.querySelector('.poste input');

let iconResteTimer;

function toggleIconCopyCheck() {
  if (btnToCopy.classList.contains('bx-copy')) {
    btnToCopy.classList.remove('bx-copy');
    btnToCopy.classList.add('bx-check');
  } else if (btnToCopy.classList.contains('bx-check')) {
    btnToCopy.classList.add('bx-copy');
    btnToCopy.classList.remove('bx-check');
  }
}

btnToCopy.addEventListener('click', async () => {
  if (!inputToCopyText.value) {
    console.warn('Não há texto para copiar.');
    return;
  }

  clearTimeout(iconResteTimer);

  // Muda o ícone para "check"
  toggleIconCopyCheck();

  try {
    // Tenta copiar o texto
    await navigator.clipboard.writeText(inputToCopyText.value);
    // Usa 'setTimeout' para reverter o ícone APENAS UMA VEZ após 2s
    setTimeout(() => toggleIconCopyCheck(), 2000);
  } catch (error) {
    console.error(' Falha ao copiar', error);
    // Se falhar, reverta o ícone imediatamente
    toggleIconCopyCheck();
  }
});

btnToPoste.addEventListener('click', async () => {
  try {
    await navigator.clipboard.readText().then((textoColado) => {
      InputToPosteText.value = textoColado;
    });
  } catch (error) {
    console.error('Erro ao colar texto', error);
  }
});
