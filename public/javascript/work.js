/* global $ */
$(".block").hover(function(){
      $(this).find('.gradient').animate({height: "8em"}, "fast");
      $(this).find('.block-show').animate({fontSize: '0.7em'}, "fast");
      $(this).find('.block-btn').show();
}, function(){
      $(this).find('.gradient').animate({height: "2em"}, "fast");
      $(this).find('.block-show').animate({fontSize: '0.5em'}, "fast");
      $(this).find('.block-btn').hide();
});

  // $(document).ready(function() {
  //     $('#content_goes_here').load('/portfolio.html');
  
  //     $('#current-list li a').click(function(e) {
  //       e.preventDefault();
  //       $("#content_goes_here").load(e.target.href);
  //       //console.log(e.target.href);
  //     })
  //   });