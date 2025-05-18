document.addEventListener('DOMContentLoaded', () => {
  const btnEs = document.getElementById('btn-es');
  const btnEn = document.getElementById('btn-en');

  console.log('translate.js carregou, btnEs=', btnEs, 'btnEn=', btnEn);

  btnEs.addEventListener('click', () => {
    console.log('Clicou ESP → redirecionando...');
    window.location.href = 'index-es.html';
  });

  btnEn.addEventListener('click', () => {
    console.log('Clicou ENG → redirecionando...');
    window.location.href = 'index.html';
  });
});