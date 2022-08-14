import React from "react";
import { Octokit } from "@octokit/rest";

export default function Projects() {
  return (
    <div>
      <div className="container-sm">
        <section>
          <h1 className="h1 text-center">Our Projects</h1>

          {/* Show the GhostyORG projects here using github API */}
          <div id="orgProjects"></div>
        </section>

        {/* Custom JS */}
      </div>
    </div>
  );
}

const octokit = new Octokit();

// Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
octokit.rest.repos
  .listForOrg({
    org: "GhostyORG",
    type: "public",
  })
  .then(({ data }) => {
    // handle data
    console.log(data);
    var d = document,
      main = d.getElementById("orgProjects"),
      ul = d.createElement("ul");

    main.appendChild(ul);

    data.forEach((element) => {
      var link = d.createElement("a");
      link.textContent = element["name"];
      link.setAttribute("href", element["html_url"]);
      var li = d.createElement("li");
      var des = d.createElement("div");
      des.textContent = element["description"];

      li.appendChild(link);
      li.appendChild(des);
      ul.appendChild(li);
    });
  });
