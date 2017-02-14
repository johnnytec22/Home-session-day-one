
var request = require("request");
var readline = require('readline');


console.log('\n           HI, WELCOME TO ANDELA DICTIONARY. THIS DICTIONARY USES PEARSON API TO \n                  DELIVERY WORD MEANINGS AND THEIR EXAMPLES TO YOU...ENJOY.\n')

//getting input from User
//creating an object of the readline create interface module.
var readLine = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


readLine.question("ENTER A WORD:  ", function(answer)
	{
		var re = /WORD/;
		var url = "http://api.pearson.com/v2/dictionaries/ldoce5/entries?headword=WORD&limit=2";
		url = url.replace(re, answer);


	    request({
	    uri: url,
	    method: "GET",
	    timeout: 10000,
	    followRedirect: true,
	    maxRedirects: 10
        }, 

        function(error, response, body){
        	if(!error && response.statusCode == 200){
				var jsonData = JSON.parse(body);
				try 
				{
					for(var data = 0; data < jsonData.results.length; data++)
					{

						console.log("Headword: ", jsonData.results[data].headword.toString());
						console.log("PART OF SPEECH:     ", jsonData.results[data].part_of_speech.toString());
						console.log('\n')
						console.log("MEANING:      ", jsonData.results[data].senses[0].definition.toString());
						console.log("EXAMPLE:      ", jsonData.results[data].senses[0].examples[0].text.toString());
						console.log('\n\n');
					}
					if (jsonData.results.length == 0)
					{
						console.log('\nWord Not Found...\n')
					}
					process.exit();
				}catch (err){
					process.exit();
				}
			}else{
				console.log('SORRY, AN ERROR OCCURRED, DO TRY AGAIN...')
				process.exit()
			}
        
  		});
	
	});







