import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@crunchyroll/navbar",
//   app: () => System.import("@crunchyroll/navbar"),
//   activeWhen: ["/"]
// });
//
// start({
//   urlRerouteOnly: true,
// });

registerApplication(
    '@crunchyroll/etp-csi',
    () => System.import('@crunchyroll/etp-csi'),
    location => location.pathname.startsWith('/etp-csi')
);

start();
