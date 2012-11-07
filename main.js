(function() {
	$('#tweets').html('<img src="ajax-loader.gif" align="middle">');

	$.ajax({
		url: 'load_tweets.php',
		success: function(response) {
			$('#tweets').html(response);
		},
		error: function(err1, err2, err3) {
			console.log(err1, err2, err3);
		}
	});
})();


var points = {
		mycenter: [-26.74561,133.668458] //array .. first latitude second longitude
	};
		var mycenter = new google.maps.LatLng(points.mycenter[0], points.mycenter[1]); //latlng is a constructor function already defined

		var myOptions = { //properties google expect
			zoom: 2,
			center: mycenter,
			mapTypeId: google.maps.MapTypeId.ROADMAP //change to SATTELITE

		};

	//add map
	var map = new google.maps.Map(document.getElementById('map'), myOptions);
	

	var processJSONP = function(jsonData) {
		var html = "";
		console.log(jsonData);
		for(var i=0; i<jsonData.events.event.length; i++)
		{
			 console.log(jsonData.events.event[i].latitude);
			 console.log(jsonData.events.event[i].longitude);
			//it works! yay!

			var point = new google.maps.LatLng(jsonData.events.event[i].latitude, jsonData.events.event[i].longitude);
			var marker = new google.maps.Marker({ //object literal
		position: point,
		title: 'Coldplay!',
		map:map

			});

			console.log(marker);
			marker.setMap(map); 
		
		var templateString = document.getElementById('page-template').innerHTML;
		var templateFunction = Handlebars.compile(templateString);
		var html = templateFunction(jsonData);
		document.getElementById('info').innerHTML = html;

		}


	};


	(function() {
		var script = document.createElement('script');
		script.src = "http://api.eventful.com/json/events/search?c=music&app_key=NpmnLBfV4QKQtQ2N&page_number=1&date=Future&keywords=linkin+park&callback=processJSONP";
		document.getElementsByTagName('head')[0].appendChild(script);
	})();


	// //add marker
	// var marker = new google.maps.Marker({ //object literal
	// 	position: mycenter,
	// 	title: 'Center!'

	// });

	//apply marker object to the map
	//marker.setMap(map); //have to pass type of google.maps.Map

	//anywhere we click we can get longitude and latitude ; google has a click event listener
//what object we are clicking

	