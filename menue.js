// Burger-Menü für kleine Bildschirme: klappt das Hauptmenü auf und zu.
(function () {
  var kopf = document.querySelector('.kopf');
  var knopf = kopf && kopf.querySelector('.menue-knopf');
  if (!knopf) return;
  kopf.classList.add('hat-js');
  knopf.addEventListener('click', function () {
    var offen = kopf.classList.toggle('offen');
    knopf.setAttribute('aria-expanded', offen ? 'true' : 'false');
  });
})();
