
let fed_instances = ['mastodon.lol', 'hci.social'];
const fetch_args = {method:"GET", referrerPolicy:"unsafe-url"};

fed_instances = fed_instances.map((value) => {
	return `https://${value}/api/v1/timelines/public?local=true&only_media=false`;
});

fed_instances = fed_instances.map((value) => {
	return fetch(value, fetch_args);
});

const page_data = [];

Promise.all(fed_instances).then( async (data) => {
	console.log(await data.json);
});

console.log(page_data);