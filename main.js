
var fed_instances = ['mastodon.lol', 'hci.social'];

var fetch_args = {method:"GET", referrerPolicy:"unsafe-url"}
var url = 'https://hci.social/api/v1/timelines/public?local=true&only_media=false';


async function f(a,b) {
	var promise = fetch(a,b).resolve(1);
	return await promise;
}

var data = f(url, fetch_args);

console.log(data);