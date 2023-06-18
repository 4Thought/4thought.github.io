if (typeof Element.prototype.addEventListener === "undefined") {
  Element.prototype.addEventListener = function (e, callback) {
    e = "on" + e;
    return this.attachEvent(e, callback);
  };
}

function playDemo() {
  var player = document.createElement("div");
  player.style.width = "66vw";
  player.style.height = "80vh";
  player.style.margin = "auto";
  player.innerHTML =
    '<iframe src="https://player.vimeo.com/video/822774374?h=cebe2573ff&autoplay=1&title=0&byline=0&portrait=0" style="width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe><script src="https://player.vimeo.com/api/player.js"></script>';

  var closeButton = document.createElement("div");
  closeButton.style.position = "fixed";
  closeButton.style.fontSize = "4rem";
  closeButton.style.right = "16vw";
  closeButton.style.top = "1vh";
  closeButton.style.color = "white";
  closeButton.style.cursor = "pointer";
  closeButton.innerText = "x";
  player.appendChild(closeButton);

  var wrapper = document.createElement("div");
  wrapper.style.display = "flex";
  wrapper.style.width = "100%";
  wrapper.style.height = "100%";
  wrapper.style.background = "rgb(0,0,0,0.8)";
  wrapper.appendChild(player);

  var overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.zIndex = 9999;
  overlay.style.left = "0";
  overlay.style.top = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.appendChild(wrapper);

  function closePlayer() {
    document.body.removeChild(overlay);
  }
  overlay.addEventListener("click", closePlayer);
  closeButton.addEventListener("click", closePlayer);

  document.body.appendChild(overlay);
}

function setupClickHandler() {
  document.addEventListener("click", function (e) {
    var clickedElement = e.target;
    while (clickedElement) {
      if (clickedElement.hasAttribute) {
        if (clickedElement.hasAttribute("data-play-demo")) {
          playDemo();
        }
        if (clickedElement.hasAttribute("data-nav-drawer-toggle")) {
          document
            .querySelector("[data-nav-drawer]")
            .classList.toggle("is-active");
        }
        if (clickedElement.hasAttribute("data-back-to-top-link")) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
      clickedElement = clickedElement.parentElement;
    }
  });
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

  setupClickHandler();
};
