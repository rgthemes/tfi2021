/*!
* LazyYoutube v1.0.0
* by Fayearth - https://github.com/fayearth
* Licensed under the WTFPL license - http://sam.zoy.org/wtfpl/
*/
(function() {
  var ytlazy = document.querySelectorAll(".rg-lazyYT");

  for (var i = 0; i < ytlazy.length; i++) {
    var image = new Image(),
      source = "https://img.youtube.com/vi/" + ytlazy[i].dataset.embed + "/sddefault.jpg";

    image.className = "rg-lazyImage";
    image.src = source;
    image.addEventListener("load", function() {
      ytlazy[i].appendChild(image);
    }(i));

    ytlazy[i].addEventListener("click", function() {
      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  };

})();
