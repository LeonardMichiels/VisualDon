$(window).on("popstate", evt  => {    
    let anchor = location.hash;
    anchor = anchor.substr(1);
    $('.face').hide();
      
  });
  $(window).trigger("popstate");
 