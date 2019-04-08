//$(this).scrollTop(0);
$(document).ready(function() {
				
				

				var sendId =$('.foo');
				sendId.click(function(e)
				{
				    e.preventDefault();
				    window.location = $(this).attr('href') + '#' + $(this).attr("id");
				    
				    
				});
				
				

  
			 
			  
			 


		});