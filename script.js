$(document).ready(function(){

//BOOK APPOINTMENT POPUP
// $('.clickBookAppoint').onclick(function(){
//   togglePopup();
// })

$('.confirmBookAppoint').click(function(){
  $('.formVisibility').addClass('invisible');
  $('.confirmVisibility').removeClass('invisible');
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


// $(".stylistRobbie")


})

function togglePopup(){
  $('#popBookAppoint').toggle()
}