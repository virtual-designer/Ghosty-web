// Fetch GitHub Org public members list

var newDiv = document.createElement("div");
newDiv.classList.add("col-4");
var devCard = document.getElementById('devCard');
var clonedDiv = devCard.cloneNode(true);
// Append the elems to the DOM
newDiv.appendChild(clonedDiv);
document.getElementById('cardsHolder').appendChild(newDiv);


// Fetch the data
/* fetch('https://api.github.com/orgs/nodejs/members')
	.then(res => res.json())
	.then(data => {
		console.log(data);
		// var membersAvatar = document.getElementById('members').innerHTML = "<img src='" + data[0]["avatar_url"] + "'>"
		var membersAvatar = document.getElementById('members');
		var devName = document.getElementById('devName');
		var devLink1 = document.getElementById('devLink1');




		for (i = 0; i < 3; i++) {
			membersAvatar.cloneNode()
			membersAvatar.src = data[i]["avatar_url"];
			devName.textContent = data[i]["login"];
			devLink1.href = data[i]["html_url"];
		}


	})
	.catch(err => console.error(err)) */







