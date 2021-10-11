if ('serviceWorker' in navigator)
          {
          window.addEventListener('load', function() {
            navigator.serviceWorker.register('/safesearch/service-worker.js')
            .then(function() { console.log("Service Worker Registered, Cheers to PWA Fire!"); });
          }
          );
        }




