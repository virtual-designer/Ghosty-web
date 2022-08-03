// Fetch GitHub Org public members list
fetch('https://api.github.com/orgs/GhostyORG/members')
	.then(res => res.json())
	.then(data => {
		console.log(data);
		// var membersAvatar = document.getElementById('members').innerHTML = "<img src='" + data[0]["avatar_url"] + "'>"
		var membersAvatar = document.getElementById('members');
		var devName = document.getElementById('devName');
		var devLink1 = document.getElementById('devLink1');



		membersAvatar.src = data[0]["avatar_url"];
		devName.textContent = data[0]["login"];
		devLink1.href = data[0]["html_url"];

	})
	.catch(err => console.error(err))

