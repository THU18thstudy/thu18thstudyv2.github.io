// 啟用scroll需要先初始化
var s = skrollr.init();

// 行動版需添加這條並在html中將整份文件包在#skrollr-body才能順利滑動
document.body.id = "skrollr-body"

// 點擊訂閱後輸入的email會消失

$(".btn").click(function(){
  $("input").val("")
  
});


//- 滑動高度: $(window).scrollTop()

// $(window).scroll(function(evt){
//   if($(window).scrollTop()>0){}
//   else{}
// });