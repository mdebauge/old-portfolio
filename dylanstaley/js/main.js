//Loading script
$(window).load(function() {
    $(".se-pre-con").fadeOut("slow");
    $(".se-pre-con-home").fadeOut("slow");

    var currentImg = 'img-' + imgNumberRandomizer();
    var imgID = document.getElementById(currentImg);
    $('#' + currentImg).css({ top: '50%'});
    $('#' + currentImg).css({ left: '50%'});
    $('#' + currentImg).css('z-index', -1);
});

//Book 1 Array
var book1Array = new Array();

book1Array[0] = new Image();
book1Array[0].src = 'img/book1/1.jpg';

book1Array[1] = new Image();
book1Array[1].src = 'img/book1/2.jpg';

book1Array[2] = new Image();
book1Array[2].src = 'img/book1/3.jpg';

book1Array[3] = new Image();
book1Array[3].src = 'img/book1/4.jpg';

book1Array[4] = new Image();
book1Array[4].src = 'img/book1/5.jpg';

book1Array[5] = new Image();
book1Array[5].src = 'img/book1/6.jpg';

book1Array[6] = new Image();
book1Array[6].src = 'img/book1/7.jpg';

book1Array[7] = new Image();
book1Array[7].src = 'img/book1/8.jpg';

book1Array[8] = new Image();
book1Array[8].src = 'img/book1/9.jpg';

book1Array[9] = new Image();
book1Array[9].src = 'img/book1/10.jpg';

book1Array[10] = new Image();
book1Array[10].src = 'img/book1/11.jpg';

book1Array[11] = new Image();
book1Array[11].src = 'img/book1/12.jpg';

book1Array[12] = new Image();
book1Array[12].src = 'img/book1/13.jpg';

book1Array[13] = new Image();
book1Array[13].src = 'img/book1/14.jpg';

book1Array[14] = new Image();
book1Array[14].src = 'img/book1/15.jpg';

book1Array[15] = new Image();
book1Array[15].src = 'img/book1/16.jpg';

book1Array[16] = new Image();
book1Array[16].src = 'img/book1/17.jpg';

//Book 2 Array
var book2Array = new Array();

book2Array[0] = new Image();
book2Array[0].src = 'img/book2/1.jpg';

book2Array[1] = new Image();
book2Array[1].src = 'img/book2/2.jpg';

book2Array[2] = new Image();
book2Array[2].src = 'img/book2/3.jpg';

book2Array[3] = new Image();
book2Array[3].src = 'img/book2/4.jpg';

book2Array[4] = new Image();
book2Array[4].src = 'img/book2/5.jpg';

book2Array[5] = new Image();
book2Array[5].src = 'img/book2/6.jpg';

book2Array[6] = new Image();
book2Array[6].src = 'img/book2/7.jpg';

book2Array[7] = new Image();
book2Array[7].src = 'img/book2/8.jpg';

book2Array[8] = new Image();
book2Array[8].src = 'img/book2/9.jpg';

book2Array[9] = new Image();
book2Array[9].src = 'img/book2/10.jpg';

book2Array[10] = new Image();
book2Array[10].src = 'img/book2/11.jpg';

book2Array[11] = new Image();
book2Array[11].src = 'img/book2/12.jpg';

book2Array[12] = new Image();
book2Array[12].src = 'img/book2/13.jpg';

book2Array[13] = new Image();
book2Array[13].src = 'img/book2/14.jpg';

$(document).ready(function(){
    $(".fade").hide(0).delay(500).fadeIn(2500)
});

//Random number generator
function numberRandomizer(){
  var x = Math.floor((Math.random() * (80-20+1)) + 20); //random number between 20 and 80
  return x;
}

function imgNumberRandomizer(){
  var x = Math.floor((Math.random() * 40) + 1); //random number between 0 and 40
  return x;
}

//Image array
//var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];

//On spacebar show image    
$('.body-home').keyup(function(e){
   if(e.keyCode === 32){
       // user has pressed space
       var currentImg = 'img-' + imgNumberRandomizer();
       var imgID = document.getElementById(currentImg);
       $('.instructions').remove();
       $('.fade-in').css('z-index', -100);
       $('#' + currentImg).css({ top: numberRandomizer() + '%'});
       $('#' + currentImg).css({ left: numberRandomizer() + '%'});
       //imgID.style.top = numberRandomizer() + '%';
       //imgID.style.left = numberRandomizer() + '%';
       $('#' + currentImg).css('z-index', -1);
   }
});

// $('.body-home').one("click", function () {

//   $('')
// });

//On click show image    
$('.body-home').click(function(){
       // user has clicked
       var currentImg = 'img-' + imgNumberRandomizer();
       var imgID = document.getElementById(currentImg);
       $('.instructions').remove();
       $('.fade-in').css('z-index', -100);
       $('#' + currentImg).css({ top: numberRandomizer() + '%'});
       $('#' + currentImg).css({ left: numberRandomizer() + '%'});
       //imgID.style.top = numberRandomizer() + '%';
       //imgID.style.left = numberRandomizer() + '%';
       $('#' + currentImg).css('z-index', -1);
});

//Show Nav
$('.site-header').hover(
  function() {

    $('.trigger').addClass('show-nav');
  }, function() {

    $('.trigger').removeClass('show-nav');
  }
);

//Show/hide About
$('.about-link').click(function(event){
	event.stopPropagation();
	event.preventDefault();
  $('.fade-in').css('z-index', -100);
	$('.about-wrap').fadeIn(1000);
});
$('.about-wrap').click(function(){
	$('.about-wrap').fadeOut(1000);
});

//If on mobile device
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  // tasks to do if it is a Mobile Device
  $('.instructions').text('Tap. Tap.').css({ left: '50%'});

}

//Photography on load hide

//Images shrink/stretch to fit
function fitImage(element) 
{
	    var img_height = $(element).height();
	    var div_height = $(element).parent().height();
	    if(img_height<div_height){
	        //IMAGE IS SHORTER THAN CONTAINER HEIGHT - CENTER IT VERTICALLY
	        // var newMargin = (div_height-img_height)/2+'px';
	        // $(element).css({'margin-top': newMargin });
	    }else if(img_height>div_height){
	        //IMAGE IS GREATER THAN CONTAINER HEIGHT - REDUCE HEIGHT TO CONTAINER MAX - SET WIDTH TO AUTO  
	        $(element).css({'width': 'auto', 'height': '100%'});
	        //CENTER IT HORIZONTALLY
	        // var img_width = $(element).width();
	        // var div_width = $(element).parent().width();
	        // var newMargin = (div_width-img_width)/2+'px';
	        // $(element).css({'margin-left': newMargin});
	    }
}

//Photography Nav
function book1Link(event){
  event.preventDefault();
  $('.featured-photo-projects').hide();;
  $('<img id="loader" src="img/book1/1.jpg">').appendTo('.photography');
  // $('#loader').ready(function(){
  //  $('<img src="randomimg/1.jpg">').appendTo('#featured-alina');
    $('#featured-book1').fadeIn('slow');
  // });
  $('#loader').remove();
  $('.active').removeClass('active');
  $('#book1-link').addClass('active');
  $(".counter").show();
  $("#photo-number").text(1);
  $("#photo-total").text(book1Array.length);
}

function book2Link(event){
  event.preventDefault();
  $('.featured-photo-projects').hide();;
  $('<img id="loader" src="img/book2/1.jpg">').appendTo('.photography');
  // $('#loader').ready(function(){
  //  $('<img src="randomimg/1.jpg">').appendTo('#featured-alina');
    $('#featured-book2').fadeIn('slow');
  // });
  $('#loader').remove();
  $('.active').removeClass('active');
  $('#book2-link').addClass('active');
  $(".counter").show();
  $("#photo-number").text(1);
  $("#photo-total").text(book2Array.length);
}

$('#book1-link').click(function(event){
  book1Link(event);
});
$('#book2-link').click(function(event){
  book2Link(event);
});

//Navigate photos 

//nextImage
function nextImage(element, imgArray)
{
    var img = document.getElementById(element);
    $('#photo-total').text(imgArray.length);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === (imgArray.length-1)){
            	$(img).hide();
                document.getElementById(element).src = imgArray[0].src;
                $(img).show();
                $("#photo-number").text(1);
                break;
                
            }
            $(img).hide();
            document.getElementById(element).src = imgArray[i+1].src;
            $(img).show();
            $("#photo-number").text(i+2);
            break;
        }       
    }
} 

//previousImage
function previousImage(element, imgArray)
{
    var img = document.getElementById(element);
    $('#photo-total').text(imgArray.length);

    for(var i = 0; i < imgArray.length;i++)
    {
        if(imgArray[i].src == img.src) // << check this
        {
            if(i === 0){
            	$(img).hide();
                document.getElementById(element).src = imgArray[(imgArray.length - 1)].src;
                $(img).show();
                $("#photo-number").text(imgArray.length);
                break;
                
            }
            $(img).hide();
            document.getElementById(element).src = imgArray[i-1].src;
            $(img).show();
            $("#photo-number").text(i);
            break;
        }
        
    }
} 

//Navigate images 
//$('.body-photo'). 
$('.body-photo').keyup(function(e){
   if(e.keyCode === 39){
       // user has pressed right
       $('.arrows').hide();
       if ($('.counter').css('display') == 'none') {
        $('.counter').show();
       }
       if($('#book1-link').hasClass('active')) {
          nextImage('featured-img-book1', book1Array);
       }
       else if($('#book2-link').hasClass('active')) {
          nextImage('featured-img-book2', book2Array);
       }
   }
   if(e.keyCode === 37){
   	// user has pressed left
    $('.arrows').hide();
    if ($('.counter').css('display') == 'none') {
        $('.counter').show();
       }
       if($('#book1-link').hasClass('active')) {
          previousImage('featured-img-book1', book1Array);
       }
       else if($('#book2-link').hasClass('active')) {
          previousImage('featured-img-book2', book2Array);
       }
   }
   if(e.keyCode === 40){
    // user has pressed down
    $('.arrows').hide();
      if($('#book1-link').hasClass('active')) {
          book2Link(event);
       }
       else if($('#book2-link').hasClass('active')) {
          book1Link(event);
       }
       $('.counter').hide();
   }
   if(e.keyCode === 38){
    // user has pressed up
    $('.arrows').hide();
      if($('#book1-link').hasClass('active')) {
          book2Link(event);
       }
       else if($('#book2-link').hasClass('active')) {
          book1Link(event);
       }
       $('.counter').hide();
   }
});

$('.body-photo').click(function() {
   if ($('.counter').css('display') == 'none') {
        $('.counter').show();
       }
   if($('#book1-link').hasClass('active')) {
      nextImage('featured-img-book1', book1Array);
   }
   else if($('#book2-link').hasClass('active')) {
      nextImage('featured-img-book2', book2Array);
   }
});

var audioOn = 'img/audioon.svg';
var audioOff = 'img/audiooff.svg';
//Audio Button

$('.audio').click(function() {
  if ($('.audio').hasClass('audio-on')) {
    $('#audio-icon').attr('src', audioOff);
    $('.audio').removeClass('audio-on');
    $('.audio').addClass('audio-off');
  }
  else if ($('.audio').hasClass('audio-off')) {
    $('#audio-icon').attr('src', audioOn);
    $('.audio').removeClass('audio-off');
    $('.audio').addClass('audio-on');
  }
  $('.thevideo').prop('muted', !$('.thevideo').prop('muted'));

});
