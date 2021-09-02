// header function
var headerScrolled = () => {
  function checkScroll() {
    if ($(window).scrollTop() >= 50) {
      $(".header-main").addClass("header-scrolled");
    } else {
      $(".header-main").removeClass("header-scrolled");
    }
  }
  
  $(document).ready(function() {
    checkScroll();
    $(window).scroll(checkScroll);
  });
}



var sidebarFunction = () => {
  $('.btn-toogle').click(function(){
    $('body').toggleClass("show");
  });

  $(document).keyup(function(e) {
    if (e.key === "Escape") {
     $('body').removeClass("show");
   }
  }); 
}

var submenu = () => {
  $(".sidebar .main-menu li").each(function() {
    var submenuHeight = $(this).find(".sub-menu");
    var defaultHeight = 42;

    $(this).mouseover(function() {
      if ($(this).find(".sub-menu").length > 0) {
        var numberOfLi = $(this).find(".sub-menu li").length;
        var liHeight = numberOfLi * defaultHeight;
        var formattedHeight = liHeight+"px";
        $(this).find(".sub-menu").css("max-height", formattedHeight);
        // console.log($(this));
        // console.log("formatted height:" + formattedHeight);
      }
    }).mouseout(function() {
      $(this).find(".sub-menu").css("max-height", 0);
    })
  });
}


var hidenavbar = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}
}

// initialize the functions
headerScrolled();
sidebarFunction();
submenu();
hidenavbar();