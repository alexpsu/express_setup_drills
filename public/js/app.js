console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	var title;
	var director;

	$.ajax({
		method: 'GET',
		url: 'http://localhost:3000/api/movies',
		success: function(data) {
			data.forEach(function(ele){
				title = ele.title;
				director = ele.director;
				$('.container').append("<p>" + title + " by " + director + "</p>")
			})
		}
	})

})