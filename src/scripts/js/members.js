// Fetch GitHub Org public members list

const orgName = "GhostyORG";

// Fetch the data
export function membersFetch() {
  fetch("https://api.github.com/orgs/" + orgName + "/members")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      var memAvatar = document.getElementById("members");
      var devName = document.getElementById("devName");
      var devLink = document.getElementById("devLink");

      // Add for the first elem
      memAvatar.src = data[0]["avatar_url"];
      devName.textContent = data[0]["login"];
      devLink.href = data[0]["html_url"];

      for (var i = 1; i <= Object.keys(data).length - 1; i++) {
        var newDiv = document.createElement("div");
        newDiv.classList.add("col-lg-4");
        newDiv.classList.add("col-sm-12");
        newDiv.classList.add("col-md-6");

        var devCard = document.getElementById("devCard");
        var clonedDiv = devCard.cloneNode(true);
        // Append the elems to the DOM
        newDiv.appendChild(clonedDiv);
        document.getElementById("cardsHolder").appendChild(newDiv);

        // Image
        memAvatar.id = "memImage" + i;
        var newMemberAvatar = document.getElementById("memImage" + i);
        newMemberAvatar.src = data[i]["avatar_url"];

        // Dev Name
        devName.id = "devName" + i;
        var newDevName = document.getElementById("devName" + i);
        newDevName.textContent = data[i]["login"];

        //Github profile link
        devLink.id = "devLink" + i;
        var newDevLink = document.getElementById("devLink" + i);
        newDevLink.href = data[i]["html_url"];
      }
    })
    .catch((err) => console.error(err));
}
