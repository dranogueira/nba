import './style.css'

// VERIFICAR SE TEM SUPORTE

if (!('serviceWorker' in navigator)) {
  console.log('Service Worker not supported');
}
navigator.serviceWorker.register('/sw.js')
.then(function(registration) {
  console.log('SW registered! Scope is: ' , registration.scope);
});



document.querySelector('#app').innerHTML = `
  <h1>NBA</h1>
  <a href="https://www.nba.com/" target="_blank">Site Official</a>
`
