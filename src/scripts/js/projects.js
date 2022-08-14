import { Octokit } from "@octokit/rest";
export function projectsFetch() {
  const octokit = new Octokit();

  // Compare: https://docs.github.com/en/rest/reference/repos/#list-organization-repositories
  octokit.rest.repos
    .listForOrg({
      org: "GhostyORG",
      type: "public",
    })
    .then(({ data }) => {
      // handle data
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
}
