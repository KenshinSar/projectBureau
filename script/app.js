    var hasnaoui =[35.6989,-0.5633729999999559];

    //creation de la map
	var map = L.map('map').setView(hasnaoui,10);

	//creation du calque
	L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
	maxZoom: 20 }).addTo(map);
       

   //creation du marqueur
   var marker = L.marker(hasnaoui).bindPopup('Hasnaoui, Oran').addTo(map);
  
   
  
