const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  butInstall.hidden = false;

  butInstall.addEventListener('click', async () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
  });
});


window.addEventListener('appinstalled', (event) => {
  butInstall.textContent = 'Installed'
  console.log('App installed!', event);
});
