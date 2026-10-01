// When someone opens an app page directly (from a search engine or a link elsewhere),
// put the home page one step behind it, so the browser's Back button goes to "All apps".
// Visitors who came from inside the site keep normal history.
(function () {
  try {
    var r = document.referrer;
    if (r && r.indexOf(location.origin + '/') === 0) return;
    if (history.state && history.state.rtApp) return;
    var home = document.documentElement.getAttribute('data-home') || '/';
    var here = location.href;
    history.replaceState({ rtHome: 1 }, '', home);
    history.pushState({ rtApp: 1 }, '', here);
    addEventListener('popstate', function (e) {
      if (e.state && e.state.rtHome) location.reload();
    });
  } catch (e) {}
})();
