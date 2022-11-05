
// list of instances, in the future, this will be stored in browser cookies
let fed_instances = ['mastodon.lol', 'hci.social'];
// args for fetch function, should be updated
const fetch_args = {method:"GET", referrerPolicy:"unsafe-url"};
// temp url for testing purposes
const url = `https://hci.social/api/v1/timelines/public?local=true&only_media=false`;

// convert base urls to full api urls, then to fetch promises
fed_instances = fed_instances.map((value) => {
	return `https://${value}/api/v1/timelines/public?local=true&only_media=false`;
}).map((value) => {
	return fetch(value, fetch_args);
});

// single fetch promise for testing
fetch(url, fetch_args).then( async (data) => {
	const json = await data.json();
	console.log(json);
});

console.log(fed_instances);