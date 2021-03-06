$.fn.fadingin = function(fadein) {
    this.css("display", "none");
    this.fadeIn(fadein);
  };

$.fn.fadingout = function(fadeout) {
    this.fadeOut(fadeout);
};

$.fn.hideThis = function() {
    this.css("display", "none");
};

var visited = sessionStorage.getItem('visit');
if (visited === null) {

  $(document).ready(function() {
    $(".collage").fadingout(4000, 12000);
  });
  
  $(document).ready(function() {
    $(".fade-content").fadingin(7000, 1000);
  });
  sessionStorage.setItem('visit', 1);
}

else {
  
   $(document).ready(function() {
    $(".collage").hideThis();
  });
  
 $(document).ready(function() {
    $(".fade-content").fadingin(0, 1000);
  });
}
