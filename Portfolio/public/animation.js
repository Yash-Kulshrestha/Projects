$(".animation").click(()=>{
  $("#About").attr("class","slide-left")
})
$(".ham-menu").click(()=>{
  $("header").slideToggle("slow")
})
// var cssProperties = { right: '200px' }

// $('.ham-menu').click(function() {
//   $('header').animate(cssProperties);
// });