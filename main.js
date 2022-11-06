

// temp url for testing purposes
const url = `https://hci.social/api/v1/timelines/public?local=true&only_media=false`;

// list of instances, in the future, this will be stored in browser cookies
let fed_instances = ['hci.social'];
// args for fetch function, should be updated
const fetch_args = {method:"GET", referrerPolicy:"unsafe-url"};

// convert base urls to full api urls, then to fetch promises
fed_instances = fed_instances.map((value) => {
	return `https://${value}/api/v1/timelines/public?local=true&only_media=false`;
}).map((value) => {
	return fetch(value, fetch_args);
});

// fetch(url, fetch_args).then( async (data) => {
// 	const y = await data;
// 	console.log(y);
// });

const data_store = []

// promise all generated fetches for page data
// Promise.all(fed_instances).then( async (data) => {
// 	const x = await data;
// 	// console.log(x);
// 	x.forEach((value) => {
// 		data_store.push(value);
// 	})
// 	console.log(x);
// });

console.log(data_store);


