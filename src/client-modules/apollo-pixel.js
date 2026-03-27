const APOLLO_APP_ID = '66317583955bbd0438bc78c3';

function loadApolloScript() {
  const nocache = Math.random().toString(36).substring(7);
  const script = document.createElement('script');
  script.src = `https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=${nocache}`;
  script.async = true;
  script.defer = true;
  script.onload = function () {
    window.trackingFunctions.onLoad({ appId: APOLLO_APP_ID });
  };
  document.head.appendChild(script);
}

loadApolloScript();

export function onRouteDidUpdate({ location, previousLocation }) {
  if (location.pathname !== previousLocation?.pathname) {
    if (window.trackingFunctions) {
      window.trackingFunctions.onLoad({ appId: APOLLO_APP_ID });
    }
  }
}
