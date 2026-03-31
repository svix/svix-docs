const APOLLO_APP_ID = '66317583955bbd0438bc78c3';

function trackApolloPage() {
  if (window.trackingFunctions) {
    console.log('trackingFunctions', window.trackingFunctions);
    window.trackingFunctions.onLoad({ appId: APOLLO_APP_ID });
  }
}

export function onRouteDidUpdate({ location, previousLocation }) {
  if (location.pathname !== previousLocation?.pathname) {
    trackApolloPage();
  }
}
