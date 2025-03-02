const CACHE_NAME = 'scrollers-mpr-v2';
const ASSETS = [
  // Root paths
  '/scrollersmpr/',
  '/scrollersmpr/offline.html',
  '/scrollersmpr/index.html',
  '/scrollersmpr/styles.css',
  '/scrollersmpr/images/icon-192x192.png',
  '/scrollersmpr/images/icon-512x512.png',
  '/scrollersmpr/images/favicon.ico',

  // Additional paths for /scrollers and /scrollers1
  '/scrollers/',
  '/scrollers/index.html',
  '/scrollers1/',
  '/scrollers1/index.html',
  // tsr backups
    '/scrollers/The Scrollers Reforged (long live zay) - Community - links [1258242214572855317].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - partnerships [1257507457941635093].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - 𝔞𝔫𝔦𝔪𝔢⛩🌸 [1254892480546082866].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - 𝔤𝔞𝔪𝔦𝔫𝔤🎮 [1254940288464715867].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - 𝔤𝔢𝔫𝔢𝔯𝔞𝔩💬 [1254890430378803307].html',
    '/scrollers/Create The Scrollers Reforged (long live zay) - Community - 𝔤𝔢𝔫𝔢𝔯𝔞𝔩💬 …',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - 𝔪𝔢𝔪𝔢𝔰😂 [1254892699538952366].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - 𝔪𝔬𝔳𝔦𝔢𝔰🎥 [1254892759542796359].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - 𝔭𝔦𝔠𝔱𝔲𝔯𝔢𝔰📷 [1254892403991515156].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - 𝔯𝔬𝔩𝔢𝔭𝔩𝔞𝔶 [1255165655481716786].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - 𝔰𝔠𝔯𝔢𝔢𝔫𝔰𝔥𝔬𝔱𝔰📱 [1254892853042217033].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Community - 𝔰𝔢𝔩𝔣-𝔭𝔯𝔬𝔪𝔬🤙 [1254892913297457244].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Music - engineers [1258892551092703243].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Music - music [1254939694874099776].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Music - producers [1258892502048706601].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Music - your-own-music [1258892571237679256].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - announcements [1256739218974179418].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - music-question-of-the-day [1254898339862941827].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - music-question-of-the-day-response [1254898391993942037].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - shouts [1254897233518923927].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - song-of-the-day [1254944552926580847].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - suggest-emojis [1254949795106394213].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - unreleased-song-of-the-day-files [1254964979321409628].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - unreleased-track-of-the-day [1254898270677897393].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - 𝔰𝔠𝔯𝔬𝔩𝔩𝔢𝔯-𝔯𝔬𝔩𝔢𝔰 [1254898176838598760].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Server - 📚𝗿𝘂𝗹𝗲𝘀📚 [1254897470132191374].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Staff - gambling-with-comine [1255368020268945418].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Staff - logs [1254941288726270022].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Staff - staff-chat [1254941102239387819].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Voice Channels - gaming [1254975797857484820].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Voice Channels - music [1254941699101163542].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Voice Channels - scrollers 2 [1254941643870703726].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Voice Channels - scrollers [1254890430378803308].html',
    '/scrollers/The Scrollers Reforged (long live zay) - Voice Channels - vc-text [1254941717929529365].html',
    '/scrollers/The Scrollers Reforged (long live zay) - logs - b [1263624549241585797].html',
    '/scrollers/The Scrollers Reforged (long live zay) - logs - join-leave-log [1259216762369736814].html',
    '/scrollers/The Scrollers Reforged (long live zay) - logs - member-log [1259216763690680370].html',
    '/scrollers/The Scrollers Reforged (long live zay) - logs - message-log [1259216761446862868].html',
    '/scrollers/The Scrollers Reforged (long live zay) - logs - server-log [1259216764508831794].html',
    '/scrollers/The Scrollers Reforged (long live zay) - logs - voice-log [1259216760603938896].html',
    '/scrollers/The Scrollers Reforged (long live zay) - other - bot-spam🤖 [1254938265283330149].html',
    '/scrollers/The Scrollers Reforged (long live zay) - other - counting [1267108428464001034].html',
    '/scrollers/The Scrollers Reforged (long live zay) - other - gambling [1254942340561244273].html',
    '/scrollers/The Scrollers Reforged (long live zay) - other - kizo-updates [1260641738247372900].html',
    '/scrollers/The Scrollers Reforged (long live zay) - other - poketwo [1255285680079245424].html',
    '/scrollers/The Scrollers Reforged (long live zay) - other - sports-discussion [1254900827655634944].html',
    '/scrollers/The Scrollers Reforged (long live zay) - other - 【ｍａｔｒｉｘ】 [1254900592040476743].html',
    '/scrollers/The Scrollers Reforged (long live zay) - other - 𝓯𝓻𝓮𝓪𝓴 [1254900889555042476].html',
    '/scrollers/The Scrollers Reforged (long live zay) - tickets - ticket-35 [1258652646101876827].html',
    '/scrollers/The Scrollers Reforged (long live zay) - tickets - ticket-37 [1258958953669333045].html',
    '/scrollers/The Scrollers Reforged (long live zay) - tickets - ticket-49 [1260443572533203016].html',
    '/scrollers/The Scrollers Reforged (long live zay) - tickets - ticket-54 [1260444293995434004].html',
    '/scrollers/The Scrollers Reforged (long live zay) - tickets - ticket-59 [1260623746746810498].html',
    '/scrollers/The Scrollers Reforged (long live zay) - tickets - ticket-60 [1261751250483937464].html',
    '/scrollers/The Scrollers Reforged (long live zay) - tickets - ticket-61 [1262610987954208778].html',
    '/scrollers/The Scrollers Reforged (long live zay) - tickets - tickets [1255368184811225211].html',
    '/scrollers/The Scrollers Reforged (long live zay) - tickets - transcripts [1255379014596427906].html',
    '/scrollers/The Scrollers Reforged (long live zay) - verify [1254929423073804310].html',
    '/scrollers/The Scrollers Reforged (long live zay) - 𝓦𝓮𝓵𝓬𝓸𝓶𝓮❤ [1254893117195423844].html',
    '/scrollers/The Scrollers Reforged (long live zay) - 𝔤𝔢𝔫𝔢𝔯𝔞𝔩💬 - assamalaykum brother mashallah [1260823822030868480].html',
    '/scrollers/The Scrollers Reforged (long live zay) - 𝔤𝔢𝔫𝔢𝔯𝔞𝔩💬 - clarification [1260456993810944103].html',
    '/scrollers/The Scrollers Reforged (long live zay) - 𝔤𝔢𝔫𝔢𝔯𝔞𝔩💬 - ios that juice wrldi [1263240584152354866].html',
    '/scrollers/The Scrollers Reforged (long live zay) - 𝔤𝔢𝔫𝔢𝔯𝔞𝔩💬 - ripper [1260052439151935513].html',
    '/scrollers/The Scrollers Reforged (long live zay) - 𝔤𝔢𝔫𝔢𝔯𝔞𝔩💬 - wahhhh wahhhhhh [1264248823438639175].html'
];

// Install the service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate the service worker and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // Delete old caches that don't match the current CACHE_NAME
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // Handle navigation requests (HTML pages)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached HTML page if found
        if (response) {
          return response;
        }

        // If not found in cache, fetch from network
        return fetch(event.request).catch(() => {
          // If network fails, return the offline fallback page
          return caches.match('/scrollersmpr/offline.html');
        });
      })
    );
  } else {
    // Handle other requests (CSS, JS, images, etc.)
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // If not found in cache, fetch from network
        return fetch(event.request);
      })
    );
  }
});
