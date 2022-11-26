// $("#toggleicon").click(function(){
//     $("#sh_ul").slideToggle();

//  });

 //$("#toggleicon").click(function(){
   // $("#sh_ul").toggle({
     //   direction:"right"
    //},3000)

 //});

let mytoggle = document.querySelector("#toggleicon");
let hideul = document.querySelector(".firstUl");
console.log(hideul)
console.log(mytoggle)

mytoggle.addEventListener('click', function(){
  hideul.classList.toggle("activeUl")
  
})


$(document).ready(function(){       
  var screen = 0;
  $(document).scroll(function() { 
      screen = $(this).scrollTop();
      if(screen > 110) {
          $("nav").css('background-color', '#1f2627');
      } else {
          $("nav").css('background-color', 'transparent');
      }
  });
});
