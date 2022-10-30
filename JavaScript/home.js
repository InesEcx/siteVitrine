$(document).ready(function(){
    // Drop down menu on mobile screens
    $(".mob-nav").click(function() {
      if ($(".dropDN-menu").css("display") === "none") {
        $(".dropDN-menu").css("display", "block");
      } else {
        $(".dropDN-menu").css("display", "none");
      }
    });

    $(".dropDN-menu a").click(function() {
      $(".dropDN-menu").css("display","none");
    });
    // scroll, shodow effects
      if ($(window).width() >= 768) {
        var lastId,
            topNav = $("#nav"),
            topMenuHeight = topNav.outerHeight();
            menuItems = $(".header a");
            scrollItems = menuItems.map(function() {
              var item = $($(this).attr("href"));
              if (item.length) {
                return item;
              }
            });

        menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 500);
        e.preventDefault();
        });
  
        $(window).scroll(function() {
          var fromTop = $(this).scrollTop() + topMenuHeight;
          var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop) {
              return this;
            }
          });
          cur = cur[cur.length-1];
          var id = cur && cur.length ? cur[0].id : "";
  
        });
      };
  
});