$(document).ready(function () {
	//$('#projet-des').fadeIn(3000).removeClass('hidden');
    var hash = window.location.hash.substr(1);
				switch (hash) {
				  case "prj1":
				 // console.log("jaune");
				   $("#prj-des1").css({"visibility": "visible", "opacity": "1", "transition": "opacity 2s linear"});
				   $("#prj-des1").fadeIn(3000);
				    $("#prj-des2").css("visibility","hidden");
				    //$("#prj-des1").fadeIn(3000).removeClass('hidden');
				    //$("#prj-des2").addClass('hidden');
				    break;
				  case "prj2":
				  //console.log("rouge");
				   $("#prj-des2").css({"visibility": "visible", "opacity": "1", "transition": "opacity 2s linear"});
				   $("#prj-des1").css("visibility","hidden");
				     //$("#prj-des2").fadeIn(3000).removeClass('hidden');
				   // $("#prj-des1").addClass('hidden');
				   


    
    }

});
















  