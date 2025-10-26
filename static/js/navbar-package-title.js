(function () {
    console.log('Navbar package title script loaded');
  // small map of route segment -> display title (keep in sync with index.tsx)
  var packageTitles = {
    'places-autocomplete': 'React Native Places Autocomplete',
    'app-onboard': 'React Native App Onboarding',
    'payment-card-icons': 'React Native Payment Card Icons',
    'input-tag': 'React Native Input Tags'
  };

  function getActivePackageKey(path) {
    if (!path) return 'places-autocomplete';
    // strip leading/trailing slashes
    var p = path.replace(/^\/+|\/+$/g, '');
    // first segment
    var seg = p.split('/')[0];
    if (!seg) return 'places-autocomplete';
    return seg;
  }

  function updateTitle() {
    var el = document.getElementById('package-title');
    if (!el) return;
    var path = window.location.pathname || '/';
    var key = getActivePackageKey(path);
    var title = packageTitles[key] || packageTitles['places-autocomplete'] || 'Package';
    // remove dashes from the displayed title (replace '-' with space)
    title = title.replace(/-/g, ' ');
    el.textContent = title;
  }

  // Setup MutationObserver to handle React re-renders that replace the element
  function observePackageTitle() {
    if (typeof MutationObserver === 'undefined') return;
    var observer = new MutationObserver(function (mutations) {
      for (var i = 0; i < mutations.length; i++) {
        var m = mutations[i];
        if (m.type === 'childList') {
          // If addedNodes contains our element, update
          for (var j = 0; j < m.addedNodes.length; j++) {
            var node = m.addedNodes[j];
            if (node && node.id === 'package-title') {
              updateTitle();
              return;
            }
            // also check descendants
            if (node && node.querySelector && node.querySelector('#package-title')) {
              updateTitle();
              return;
            }
          }
        }
        if (m.type === 'attributes' && m.target && m.target.id === 'package-title') {
          updateTitle();
          return;
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
    // also periodically try just in case
    var interval = setInterval(function () {
      if (document.getElementById('package-title')) {
        clearInterval(interval);
        updateTitle();
      }
    }, 200);
  }

  // update on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      updateTitle();
      observePackageTitle();
    });
  } else {
    updateTitle();
    observePackageTitle();
  }

  // update on history navigation
  window.addEventListener('popstate', updateTitle);

  // also patch pushState/replaceState to call updateTitle
  var _push = history.pushState;
  history.pushState = function () {
    _push.apply(history, arguments);
    updateTitle();
  };
  var _replace = history.replaceState;
  history.replaceState = function () {
    _replace.apply(history, arguments);
    updateTitle();
  };
})();
