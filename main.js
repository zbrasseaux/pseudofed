

// temp url for testing purposes
// const url = `https://hci.social/api/v1/timelines/public?local=true&only_media=false`;

// list of instances, in the future, this will be stored in browser cookies
let fed_instances = ['hci.social', 'mastodon.social', 'indiepocalypse.social'];
// args for fetch function, should be updated
const fetch_args = {method:"GET", referrerPolicy:"unsafe-url"};

const data_field = document.getElementById('data');

fed_instances.forEach( (site) => {
	data_field.innerHTML += `<script src="https://${site}/embed.js" async="async"></script>`;
});

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

let count = 0;

setTimeout(() => {
	data_store.flat().forEach((value) => {
		const url = value['uri'];
		
		console.log(count);
		data_field.innerHTML += 
		`<iframe onload="resizeIframe(this)" src="${url}/embed" class="mastodon-embed" style="max-width: 100%; border: 0; padding:20px;" width=700 allowfullscreen="false"></iframe>`;
		count += 1;
	});	
}, 3000);





