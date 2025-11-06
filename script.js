const copy = document.querySelector('.bx-copy');
const poste = document.querySelector('.poste');
const copyInput = document.querySelector('.copy input');

let iconResteTimer;

copy.addEventListener('click', async () => {
  if (!copyInput.value) {
    console.warn('Não há texto para copiar.');

    return;
  }

  clearTimeout(iconResteTimer);

  // Muda o ícone para "check"
  IconCopyCheck();

  try {
    // Tenta copiar o texto
    await navigator.clipboard.writeText(copyInput.value);
    // Usa 'setTimeout' para reverter o ícone APENAS UMA VEZ após 2s
    setTimeout(() => inconCopyPoste(), 2000);
  } catch (error) {
    console.error(' Falha ao copiar', error);
    // Se falhar, reverta o ícone imediatamente
    inconCopyPoste()
  }
});

function IconCopyCheck() {
  copy.classList.remove('bx-copy');
  copy.classList.add('bx-check');
}

function inconCopyPoste() {
  copy.classList.add('bx-copy');
  copy.classList.remove('bx-check');
}
