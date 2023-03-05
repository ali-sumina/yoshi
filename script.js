$(document).ready(function(){

// BOOK APPOINTMENT POPUP
// $('#clickBookAppoint').onclick(function(){
//   $('#formVisibility').addClass('active');
// })

$('#confirmBookAppoint').click(function(){
  $('#formVisibility').addClass('invisible');
  $('#confirmVisibility').removeClass('invisible');
})

$('#popBackButton').click(function(){
  $('#confirmVisibility').addClass('invisible');
  $('#formVisibility').removeClass('invisible');

})


//ROBBIE HOVER
$(".stylistRobbie").mouseenter(function(){
    $(this).css('background-image', "url('../img/robbie-hovered.png')")
    $(this).html(`
    <div class="textFrameWrapper" id = "stylistInfo">
    <h3 class="stylistTitle">Robbie Dough</h3>
    <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
    <a href="staff.html" class="stylistInfoLink">
      <h6 class="stylistInfoLink">Read more</h6>
    </a>
</div>
    `)
    $("#stylistInfo").fadeIn()
}).mouseleave(function(){
    console.log("class: ", $(".textFrameWrapper"), "success");
    $(this).html(`
    <div class="textFrameWrapper" style = "display: none !important">
    <h3 class="stylistTitle">Robbie Dough</h3>
    <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
    <a href="" class="stylistInfoLink">
      <h6 class="stylistInfoLink">Read more</h6>
    </a>
</div>

`)
$(".stylistRobbie").css('background-image', "url('../img/robbie.png')")
})


//Stylist 2
$(".stylist2").mouseenter(function(){
  $(this).css('background-image', "url('../img/valerie-hovered.png')")
  $(this).html(`
  <div class="textFrameWrapper" id = "stylistInfo">
  <h3 class="stylistTitle">Valerie Jefferson</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="staff.html" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>
  `)
  $("#stylistInfo").fadeIn()
}).mouseleave(function(){
  console.log("class: ", $(".textFrameWrapper"), "success");
  $(this).html(`
  <div class="textFrameWrapper" style = "display: none !important">
  <h3 class="stylistTitle">Robbie Dough</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>

`)
$(".stylist2").css('background-image', "url('../img/about/stylist2.png')")
})


//Stylist 3
$(".stylist3").mouseenter(function(){
  $(this).css('background-image', "url('../img/olivia-hovered.png')")
  $(this).html(`
  <div class="textFrameWrapper" id = "stylistInfo">
  <h3 class="stylistTitle">Olivia Thompson</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="staff.html" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>
  `)
  $("#stylistInfo").fadeIn()
}).mouseleave(function(){
  console.log("class: ", $(".textFrameWrapper"), "success");
  $(this).html(`
  <div class="textFrameWrapper" style = "display: none !important">
  <h3 class="stylistTitle">Robbie Dough</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>

`)
$(".stylist3").css('background-image', "url('../img/about/stylist3.png')")
})


//Stylist 4
$(".stylist4").mouseenter(function(){
  $(this).css('background-image', "url('../img/benji-hovered.png')")
  $(this).html(`
  <div class="textFrameWrapper" id = "stylistInfo">
  <h3 class="stylistTitle">Benjamin Evans</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="staff.html" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>
  `)
  $("#stylistInfo").fadeIn()
}).mouseleave(function(){
  console.log("class: ", $(".textFrameWrapper"), "success");
  $(this).html(`
  <div class="textFrameWrapper" style = "display: none !important">
  <h3 class="stylistTitle">Robbie Dough</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>

`)
$(".stylist4").css('background-image', "url('../img/about/stylist4.png')")
})


//Stylist 5
$(".stylist5").mouseenter(function(){
  $(this).css('background-image', "url('../img/ava-hovered.png')")
  $(this).html(`
  <div class="textFrameWrapper" id = "stylistInfo">
  <h3 class="stylistTitle">Ava Mitchell</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="staff.html" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>
  `)
  $("#stylistInfo").fadeIn()
}).mouseleave(function(){
  console.log("class: ", $(".textFrameWrapper"), "success");
  $(this).html(`
  <div class="textFrameWrapper" style = "display: none !important">
  <h3 class="stylistTitle">Robbie Dough</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>

`)
$(".stylist5").css('background-image', "url('../img/about/stylist5.png')")
})



//Stylist 6
$(".stylist6").mouseenter(function(){
  $(this).css('background-image', "url('../img/sonia-hovered.png')")
  $(this).html(`
  <div class="textFrameWrapper" id = "stylistInfo">
  <h3 class="stylistTitle">Sonia Robinson</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="staff.html" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>
  `)
  $("#stylistInfo").fadeIn()
}).mouseleave(function(){
  console.log("class: ", $(".textFrameWrapper"), "success");
  $(this).html(`
  <div class="textFrameWrapper" style = "display: none !important">
  <h3 class="stylistTitle">Robbie Dough</h3>
  <p class="textStylist">Lorem ipsum dolor sit amet consectetur. Sociis vehicula scelerisque sed at integer non elementum sed neque. Risus massa arcu ipsum tortor. </p>
  <a href="" class="stylistInfoLink">
    <h6 class="stylistInfoLink">Read more</h6>
  </a>
</div>

`)
$(".stylist6").css('background-image', "url('../img/about/stylist6.png')")
})






})






function togglePopup(){
  $('#popBookAppoint').toggle()
}