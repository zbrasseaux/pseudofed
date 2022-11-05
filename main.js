
var fed_instances = ['mastodon.lol', 'hci.social'];

var fetch_args = {method:"GET", referrerPolicy:"unsafe-url"}
var url = 'https://hci.social/api/v1/timelines/public?local=true&only_media=false';


var page_data = fetch(url, fetch_args).then({ (data) => {
	console.log(data)
}});

console.log(page_data);