(function () {
  if (typeof window === 'undefined') return;
  if (typeof window.signals !== 'undefined') return;
  var script = document.createElement('script');
  script.src = 'https://cdn.cr-relay.com/v1/site/b184a8a2-6ac1-4606-b0cb-a52a8b86395b/signals.js';
  script.async = true;
  window.signals = Object.assign(
    [],
    ['page', 'identify', 'form'].reduce(function (acc, method) {
      acc[method] = function () {
        signals.push([method, arguments]);
        return signals;
      };
      return acc;
    }, {})
  );
  document.head.appendChild(script);
})(); 