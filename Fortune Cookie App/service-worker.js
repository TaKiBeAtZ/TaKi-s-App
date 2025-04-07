self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/style.css',
          '/dice.js',
          '/diceresult1.png',
          '/diceresult2.png',
          '/diceresult3.png',
          '/diceresult4.png',
          '/diceresult5.png',
          '/diceresult6.png',
          '/TaKiAppBackground.jpg',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png'
        ]).catch(error => {
          // Log any errors to the console
          console.error('Failed to cache files:', error);
        });
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      }).catch(error => {
        // Log fetch errors
        console.error('Failed to fetch resource:', error);
      })
    );
  });
  