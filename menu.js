$(document).ready(function(){
  $(".sp_menu_toggle").each(function() {
    $(this).css("height", $(this).height()+"px");
  });
  $("#menu").click(function(){
    $(".sp_menu_toggle").slideToggle();
  });
});
