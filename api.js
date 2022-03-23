/*测试插件模块*/
document.getElementById("test_plugin").innerHTML="Hello World"
/*跳转模块*/
function golink(){
  window.location.href=link;
}
$(document).ready(function(e){
  $('#test_plugin').html('Hello World');
})
