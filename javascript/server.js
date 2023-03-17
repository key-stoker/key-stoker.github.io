navigator.serviceWorker.addEventListener('controllerchange',  ()  => {
    console.log('Update foudned');
    localStorage.setItem('dialog-update', true);
    window.location.reload();
});

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js', { scope: '/' }).then(() => {
            console.log('[SW]: Registered successfully.');
        }).catch(error => {
            console.log('[SW]: Registration failed:', error);
        });
    }
}

registerServiceWorker();