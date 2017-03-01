// To do: Twitter Button

var quotesArr = [["Knowing is not enough, we must apply. Willing is not enough, we must do.","Bruce Lee" ],
																	["And now go, and make interesting mistakes, make amazing mistakes, make glorious and fantastic mistakes. Break rules. Leave the world more interesting for your being here. Make good art.","Neil Gaiman"],
																["Use what talents you possess, the woods will be very silent if no birds sang there except those that sang best.","Henry van Dyke"],
																["You’ll stop worrying what others think about you when you realize how seldom they do.","Henry van Dyke"],
																["Ninety percent of life is just showing up.","Woody Allen"],
																["To escape criticism: do nothing, say nothing, be nothing.", "Elbert Hubbard"],
																["When you cease to make a contribution, you begin to die.", "Eleanor Roosevelt"],
																["Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.","Mark Twain"]];
//var quotesObj = [“Knowing is not enough, we must apply. Willing is not enough, we must do.”, "Bruce Lee"];

$(document).ready (function() {
  var currentQuote ="";
  var currentAuthor = "";	
	 function quoteGen() { 
			var randomNum = Math.floor(Math.random() * quotesArr.length);
			currentQuote = quotesArr[randomNum][0];
			currentAuthor = quotesArr[randomNum][1];
			$("span#quote-content").html("");
			$("span#quote-author").html("");
			$("span#quote-content").html(quotesArr[randomNum][0]);
			$("span#quote-author").html(quotesArr[randomNum][1]);
			$('.button#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
	}
	
	quoteGen();
	
	$(".button#new-quote").on("click", function(){
		quoteGen();
		console.log(currentQuote)
	});
	
// unnecessary?
// 	$(".button#tweet").on("click", function(){
// 		console.log('tweet');
// 		openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
// 	});
	
	
	
	
}
);