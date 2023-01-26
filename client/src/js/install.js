const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
 window.deferredPrompt = event;
 butInstall.classList.toggle('hidden', false);
 // force is not given, "toggles" token, removing it if it's present and adding it if it's not present. If force is true, adds token (same as add()). If force is false, removes token (same as remove()).
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
 const eventListenerPrompt = window.deferredPrompt;

 if (!eventListenerPrompt) {
  return;
 }

 eventListenerPrompt.prompt();
 window.deferredPrompt = null;
 butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
 window.deferredPrompt = null;
});
