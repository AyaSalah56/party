
//section 2
$(".singers h3").click(function (e) {

  $(".singers p").not($(e.target).next()).slideUp(500);
  $(e.target).next().slideToggle(500);

});




// sctolling nav 
$("a[href^='#']").click(function (e) {
  let aHref = $(e.target).attr("href");
  let sectionOffSet = $(aHref).offset().top;
  $("html , body").animate({ scrollTop: sectionOffSet }, 1000);
})


// close icon
let navWidth = $(".lista").outerWidth(true);

$(".lista i ").click(function () {
  $(".navaya").animate({ left: `-${navWidth}` }, 500);
})



// open icon
$(".openNav").click(function () {
  $(".navaya").animate( {left: `0px`} , 500 ) ;
})



// to hide navbar 
$("body").not(".navaya").click(function(){
  if($(".navaya").css("left") == '0px')
    {
      
      $(".navaya").animate({left: `-${ navWidth }`}, 500 ) ;
    }
})


// countDown
var countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();
let counter = setInterval(() => {
 
  let TimeNow = new Date().getTime();
  let distance = countDownDate - TimeNow ;
  var days = Math.floor(distance/(1000*60*60*24)) ;
  var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60)) ;
  var min = Math.floor((distance%(1000*60*60)) / (1000*60)) ;
  var sec = Math.floor((distance%(1000*60)) / (1000));

  document.getElementById("days").innerHTML = days + " D" ;
  document.getElementById("hours").innerHTML = hours + " h" ;
  document.getElementById("min").innerHTML = min + " m" ;
  document.getElementById("sec").innerHTML = sec + " s" ;
},1000)


// inputs
$("textarea").keyup(function (e) { 
  
  if(100 - e.target.value.length > 0)
  {
    document.getElementById("cts").innerHTML = 100 - e.target.value.length + " Character Remaining" ;
    document.getElementById("stop").innerHTML = "" ;
  }
  else
  {
    document.getElementById("cts").innerHTML = "" ;
    document.getElementById("stop").innerHTML = "text available finished";
  }
});