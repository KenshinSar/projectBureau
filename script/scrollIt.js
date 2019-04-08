$(document).ready(function() {
			$(this).scrollTop(0);
			document.getElementById("link1").onmousedown = function(event) {
    			event.preventDefault();
					}
			document.getElementById("link2").onmousedown = function(event) {
    			event.preventDefault();
					}
			document.getElementById("link3").onmousedown = function(event) {
   			    event.preventDefault();
					}

			var scrollLink = $('.scroll');
			  
			  // Smooth scrolling
			  scrollLink.click(function(e) {
			    e.preventDefault();
			    $('body,html').animate({
			      scrollTop: $(this.hash).offset().top
			    }, 1000 );
			  });
			 


		});