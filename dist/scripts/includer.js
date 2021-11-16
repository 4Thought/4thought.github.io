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

function setupPlayDemo() {
  var playDemoInterval = setInterval(function () {
    document
      .querySelectorAll("[data-play-demo]")
      .forEach(function (playDemoElement) {
        clearInterval(playDemoInterval);
        playDemoElement.addEventListener("click", function () {
          var player = document.createElement("div");
          player.innerHTML =
            '<div style="display:flex;width:100%;height:100%;background:rgb(0,0,0,0.8);"><div style="width:80vw;height:80vh;margin:auto;"><iframe src="https://player.vimeo.com/video/646100003?h=ad1d9a49fe&autoplay=1&title=0&byline=0&portrait=0" style="width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div></div><script src="https://player.vimeo.com/api/player.js"></script>';
          player.style.position = "fixed";
          player.style.zIndex = 9999;
          player.style.left = "0";
          player.style.top = "0";
          player.style.width = "100vw";
          player.style.height = "100vh";
          player.addEventListener("click", function () {
            document.body.removeChild(player);
          });
          document.body.appendChild(player);
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
  setupPlayDemo();
};
