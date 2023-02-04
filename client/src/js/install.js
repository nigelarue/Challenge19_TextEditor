const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {

//  store the triggered event
 window.deferredPrompt = event;

 butInstall.classList.toggle('hidden', false);
 // force is not given, "toggles" token, removing it if it's present and adding it if it's not present. If force is true, adds token (same as add()). If force is false, removes token (same as remove()).
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
 const promptEvent = window.deferredPrompt;

 if (!promptEvent) {
  return;
 }
 //  show prompt
 promptEvent.prompt();
//  reset the deferred prompt variable (used once) 
 window.deferredPrompt = null;
 
 butInstall.classList.toggle('hidden', true);
});

// Event listener for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
 window.deferredPrompt = null;
});
