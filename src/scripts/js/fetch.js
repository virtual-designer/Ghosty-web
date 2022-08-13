fetch('https://api.github.com/repos/GhostyORG/ghosty-web/releases')
	.then(res => res.json())
	.then(data => {
		current_web_version = data[0]['tag_name'];
		document.getElementById('version_footer').innerHTML = current_web_version;
	})
	.catch(err => console.error(err))

