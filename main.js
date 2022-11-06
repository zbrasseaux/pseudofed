

// temp url for testing purposes
const url = `https://hci.social/api/v1/timelines/public?local=true&only_media=false`;

// list of instances, in the future, this will be stored in browser cookies
let fed_instances = ['hci.social'];
// args for fetch function, should be updated
const fetch_args = {method:"GET", referrerPolicy:"unsafe-url"};

const data_field = document.getElementById('data');

// convert base urls to full api urls, then to fetch promises
fed_instances = fed_instances.map((value) => {
	return `https://${value}/api/v1/timelines/public?local=true&only_media=false`;
}).map((value) => {
	return fetch(value, fetch_args);
});

const data_store = []

fed_instances.forEach( (value) => {
	value.then( async (data) => {
		let y = await data.json();
		data_store.push(y);
	});
});

setTimeout(() => {
	data_store.flat().forEach((value) => {
		const content = value['content'];
		const username = value['account']['username'];
		data_field.innerHTML += `<h3>${username}</h3><p>${content}</p>`;
	});	
}, 3000);



