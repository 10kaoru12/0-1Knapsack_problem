var CronJob = require('cron').CronJob;
new CronJob('* * * * * *', function() {
	console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');

require('date-utils');
var twitter = require('twitter');

var dt = new Date();
var formatted = dt.toFormat("YYYYMMDDHH24MISS");

var client=new twitter({
	consumer_key: 'oPT3BJhlFLHjL5uKPZEKNkNIH',
	consumer_secret: 'fW7UWBx630PVylsZWP9POjYTX8RT3XL04fh4J2tnifitTwVZGD',
	access_token_key: '2253204859-eHBOoCYmTaPWxVyNwSOqDXodOwNHfTMh4JcthWY',
	access_token_secret: 'pwy7VeCe9KxIKmsbNyzRwo6lJ6OQciPEbvJsx26krAGk2'
})

client.post("statuses/update",
	{status:formatted},
	function (error,tweet,response) {
		if(!error){
			console.log(tweet)
		}
	})
