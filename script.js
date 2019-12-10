// JavaScript Document
$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    infinite: false,
    arrows: false,
    dots: true,
    autoplay: false,
    speed: 1100,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
}

carousel();

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}

// Start of Parallax code -- scrolling effects taken from https://www.youtube.com/watch?v=llv5kW4sz0U with minor edits by the author

//const parallax = document.getElementById("parallax");

//window.addEventListener("scroll", function(){
	//let offset = window.pageYOffset;
	//console.log('Offset: ' + offset);  //this commented out code actually calculates the parallax scrolling values
	//console.log('offset * 0.7' + offset * 0.7);  //this commented out code actually calculates the parallax scrolling values
	//parallax.style.backgroundPositionY = offset * 0.7 + "px";  //code for the parallax
//})
//
//<script type="text/javascript" src="jquery-2.1.1.min.js"></script>
		//<script type="text/javascript"> 
		
		//	(function() {
			//	var documentElem = $(document),
				//	nav = $('nav'),
				//	lastScrollTop = 0;
				
				//documentElem.on('scroll', function() {
				//	var currentScrollTop = $(this).scrollTop();
					//scroll down 
				//	if ( currentScrollTop > lastScrollTop ) nav.addClass('hidden');
					//scroll up
				//	else nav.removeClass('hidden');
					
				//	lastScrollTop = currentScrollTop;
			//	});
				
				
				
		//	})();
		
	//	</script> 
		
	// End of scrolling and disappearing navigation bar  //







