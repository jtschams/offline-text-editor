const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();

  butInstall.addEventListener('click', async () => {
    event.prompt();
    butInstall.setAttribute('disabled', true);
    installBtn.textContent = 'Installed'
  });
});


window.addEventListener('appinstalled', (event) => {
  butInstall.setAttribute('hidden', true);
  console.log('App already installed', event);
});
