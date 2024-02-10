// Issue data storage
let issues = [];

function addIssue() {
    const description = document.getElementById("issue-description").value;

    if (description.trim() === "") {
        alert("Please enter an issue description.");
        return;
    }

    const issue = {
        description,
        resolved: false,
    };

    issues.push(issue);
    document.getElementById("issue-description").value = "";
    displayIssues();
}

function resolveIssue(index) {
    issues[index].resolved = true;
    displayIssues();
}

function displayIssues() {
    const issuesList = document.getElementById("issues");
    issuesList.innerHTML = "";

    issues.forEach((issue, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
      <span>${issue.description}</span>
      <button onclick="resolveIssue(${index})">Resolve</button>
    `;

        if (issue.resolved) {
            listItem.style.backgroundColor = "#b0e57c"; // Green for resolved issues
        }

        issuesList.appendChild(listItem);
    });
}

// Initial display of issues
displayIssues();