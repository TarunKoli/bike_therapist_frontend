if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,a,i)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return c;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return c.default||(c.default=s),c}))})))}}define("./service-worker.js",["./workbox-1ca495a9"],(function(e){"use strict";importScripts("worker-b7Iejof-N6LHQ_0oWTN4C.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/b7Iejof-N6LHQ_0oWTN4C/_buildManifest.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/b7Iejof-N6LHQ_0oWTN4C/_ssgManifest.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/106-74b40081372dc2500fb5.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/122-2766c9200e031ca87905.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/157-3f29bc24cdc14f6275b0.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/258.d0879c2366da12e8aaee.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/328-a6c174a16cc2bd169ca8.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/433-53fdb7b5f592448624ee.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/486-dde5161e713fb0601a14.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/4a3ea9cd-eb5ff7f58eb7b2d29e99.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/62-047e0558f4c7ecdaf81f.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/639-674acf53478028c48b49.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/669-28a7d911a311ece12ac5.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/6de13d4a.181bbff19ea01369daed.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/75fc9c18-eb17fc416bcc83ce589a.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/764-428256be696d030a57b5.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/816-9c354201219ab6ed2cc6.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/framework-b7a4ab549a529f6f82dd.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/main-d6d55a7c82ae8dfec822.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/_app-8c61dd9617868282004b.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/_error-16045bd1a11e7a9148c1.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/about-047dac89675a5caf77b8.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/admin-dashboard-b4e7b6cc474239f9a1df.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/authentication-dc50bb8873b68be044af.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/book-service-1cc02b6725a86c262c05.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/clients-6e03ff660c42aed6930b.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/contact-us-2e52af7dd92fb7ab50db.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/fallback-14ba808c46b7ec140b8b.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/fix-date-04ea674243ba430ec3d9.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/forgot-password-526da58b311e64222095.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/how-it-works-00565ce77c32701aafe0.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/index-b6ec62f5be69515b558b.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/payments-6c8ef2fa2480c696b886.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/pricing-69d80a4e8b1b5e7e971e.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/reset/%5Breset%5D-8fdd815d93d1d92a80e4.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/services-16f3b3e752dd7bafe8ab.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/pages/user-details-71c5c4b401763f7fea75.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/polyfills-a8c6a898a3c55f3fa486.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/chunks/webpack-b0eca035c150ebace533.js",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/027bff0104ebf721cbda.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/092e43881edfbce01433.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/0d06f4683a15c9c9965c.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/28c9a72fc1d008a139db.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/2b1ae56639c76644ca1c.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/46057d1b421337ebe554.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/4810453411001d1c87cc.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/7a66e3a84e73ca78e2cd.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/87531d8866c15b63a918.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/9ab5cc0431b002e069d6.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/a8d2be1ff8cd465d61ba.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/b65211913e3a6122c988.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/bba8d216516f33b65d73.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/c249036b319263ab98bc.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/css/efb136368caf072b5af7.css",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/_next/static/media/bikes.5cb6844c3c2c681df2862b82b55ecc9b.webp",revision:"b7Iejof-N6LHQ_0oWTN4C"},{url:"/alert.mp3",revision:"a4a3f6ea9bc9bea984dd796808b3f35a"},{url:"/android-chrome-192x192.png",revision:"927501b62e07ca7d89139a18ba0d79aa"},{url:"/android-chrome-512x512.png",revision:"f2859fa91dc17cfdace1c8ec004e2ffa"},{url:"/apple-touch-icon.png",revision:"6b712f5587eb9d4fdc0a0e9b3f86c674"},{url:"/avatar.svg",revision:"7954635700afcfc1e2f2312f53b931c3"},{url:"/banner-big-circle.webp",revision:"90c3ba5a0aa54d8ac7ba2d1f1e7c215a"},{url:"/banner-small-circle.png",revision:"aa380abb3fcb9d495110112456ad8e12"},{url:"/bike.webp",revision:"45fe1436fdcd73d00bdbb0ca0088f634"},{url:"/bikeImg.webp",revision:"9ccd79899f7a75f681f655e420373d35"},{url:"/bikes.webp",revision:"183e2edc63995617bbe4c5a20cbf0f42"},{url:"/brand-logo1.svg",revision:"ca1280e8c5200d450f0b78b833850b14"},{url:"/brand-logo10.svg",revision:"ec1c38532bb83e6c6ad28a3628817e05"},{url:"/brand-logo2.svg",revision:"0f22870f1051b9ae2ffdf52ac6a9bd2b"},{url:"/brand-logo3.svg",revision:"0b05545a4fca633cb7985f394749868b"},{url:"/brand-logo4.svg",revision:"6ef8d475c30433f7cb83893fe26ed622"},{url:"/brand-logo5.svg",revision:"0af6c9358d3f010bf7fa064d143853dc"},{url:"/brand-logo6.svg",revision:"4805f10bac06cc5086b97e6965ae2411"},{url:"/brand-logo7.svg",revision:"55fefddecc31e1f80417e3761dda313f"},{url:"/brand-logo8.svg",revision:"ad1bf6f206790b054a3d06f09ad94905"},{url:"/brand-logo9.svg",revision:"e91a3233af4bad62b04792295cb86bd4"},{url:"/call.webp",revision:"002a118c92d3cf2734d50fea56f1f78b"},{url:"/card-img1.png",revision:"d33ad78159e08cafea89acf1143c908f"},{url:"/card-img2.png",revision:"183d53140e7fa6974b207e67ffd08007"},{url:"/card-img3.png",revision:"c4fb3b8d17023bcb2b1d18ac9b43cc6a"},{url:"/card-img4.png",revision:"6b05a188fcedabf12ed770bbe120caaf"},{url:"/card-img5.png",revision:"a1a817670e6d03451399b2a930382e39"},{url:"/card-img6.png",revision:"009a1e724a17bba2229b3b9a0cf8edb0"},{url:"/center-bike.webp",revision:"32ffa5bde463b9c8742997b19c0f4cf4"},{url:"/comma-end.png",revision:"f9301587a80368acf77af10a040acb59"},{url:"/comma-start.png",revision:"235c3892c6f3fae3b6f9718a6e0baef5"},{url:"/counter-bg.webp",revision:"fc6d540f92f8096d8bd876dc222296cf"},{url:"/earth.webp",revision:"28d7a17d1134a8a8332dfbdb206caa9d"},{url:"/engine.webp",revision:"bf72159f2ffdccc483fd557b24dde776"},{url:"/favicon-16x16.png",revision:"bb928e607963551d6b7ffd8dbb787dc4"},{url:"/favicon-32x32.png",revision:"2ee44037c985997bc153c15592b154ae"},{url:"/favicon.ico",revision:"e0da01a990ec5afd7515fba5bbe4bbff"},{url:"/footer-circle-left.png",revision:"2faaaff881a49a8b2065f60e14feac55"},{url:"/footer-circle-right.png",revision:"cdb72832a74d4d2a67f64af002c0f6d4"},{url:"/landing.webp",revision:"135af8e657179b23e2bd1c31b0b2399e"},{url:"/list1.svg",revision:"1af7c8d3ee0a9954c3c6c0e217fe3439"},{url:"/list2.svg",revision:"b1f80ca3bfcc762eb10fa17b0139ada5"},{url:"/manifest.json",revision:"3636d8bb35a554513cdb515db1804a41"},{url:"/mechanic.webp",revision:"8bfaf73769115a7a11386f758a48ccd7"},{url:"/message.svg",revision:"41f433fdd4dc6a36602e86b0398c34a8"},{url:"/preloader.gif",revision:"56373cf32526a60fdbeb10d63953e978"},{url:"/pricing center design.webp",revision:"fe22d9e7a5a1dd4434d23aa8ef8c6a5d"},{url:"/scene.glb",revision:"1d192ca50dee44b93eda8ce0e6b476b5"},{url:"/service.webp",revision:"df0dff2ba8120c5de06ce5fcaf601604"},{url:"/service_icon1.svg",revision:"cf680a1b3427b91cd2752c40007a3f08"},{url:"/service_icon2.svg",revision:"6319266133bc6c8f377ca22a9faf4d14"},{url:"/service_icon3.svg",revision:"5f9957516f8de839105a49e6aa7d93fd"},{url:"/service_icon4.svg",revision:"742850fb8e12f4e9fbb1d21f55b6c009"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/welding.webp",revision:"cd03879c2b6a07928edeeb5afef14492"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
