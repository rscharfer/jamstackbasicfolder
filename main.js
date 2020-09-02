const listRepos = async (userName) => {
  const repos = await fetch(
    `https://api.github.com/users/${userName}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((error) => console.log(error));

  const markup = repos
    .map((repo) => {
      return `
    <li><a href="${repo.html_url}">${repo.name}</a>(★ ${repo.stargazers_count})</li>
   `;
    })
    .join("");

  console.log("mu", markup);

  document.querySelector("#content").innerHTML = `<ul>${markup}</ul>`;
};

listRepos("rscharfer");

// we wanted to hit the API ... that is what we are doing above
// we will get an array back
// for each element in the array we will make a piece of markup
// we will concatenate all of the mark up and insert it into the DOM

// but only once the script is included on the site
