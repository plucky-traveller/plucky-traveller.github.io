$.fn.fadingin = function(fadein) {
    this.css("display", "none");
    this.fadeIn(fadein);
  };

  $.fn.fadingout = function(fadeout) {
    this.fadeOut(fadeout);
  };

var visited = sessionStorage.getItem('visit');

if (visited == null || document.location.href == sessionStorage.getItem('lastPage')) 
    console.log(visited);
    console.log(document.location.href);
  $(document).ready(function() {
    $(".collage").fadingout(4000, 12000);
  });

  $(document).ready(function() {
    $(".fade-content").fadingin(7000, 1000);
  });
  sessionStorage.setItem('visit', 1);
}
sessionStorage.setItem('lastPage', document.location.href);
