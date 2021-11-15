function setupMenuToggle() {
  var menuToggleInterval = setInterval(function () {
    document
      .querySelectorAll("[data-nav-drawer-toggle]")
      .forEach(function (navToggle) {
        clearInterval(menuToggleInterval);
        navToggle.addEventListener("click", function () {
          document
            .querySelector("[data-nav-drawer]")
            .classList.toggle("is-active");
        });
      });
  }, 100);
}

window.onload = function () {
  function a(a, b) {
    var c = /^(?:file):/,
      d = new XMLHttpRequest(),
      e = 0;
    d.onreadystatechange = function () {
      4 == d.readyState && (e = d.status),
        c.test(location.href) && d.responseText && (e = 200),
        4 == d.readyState && 200 == e && (a.outerHTML = d.responseText);
    };
    try {
      d.open("GET", b, !0), d.send();
    } catch (f) {}
  }
  var b,
    c = document.getElementsByTagName("*");
  for (b in c)
    c[b].hasAttribute &&
      c[b].hasAttribute("data-include") &&
      a(c[b], c[b].getAttribute("data-include"));

  setupMenuToggle();
};
