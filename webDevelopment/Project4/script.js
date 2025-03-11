// Dark Mode Toggle
const body = document.body;
const darkModeButton = document.getElementById('darkModeButton');
const darkModeIcon = document.getElementById('darkModeIcon');

darkModeButton.addEventListener('click', () => {

    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        darkModeIcon.src = 'images/lightM.png';
    } else {
        darkModeIcon.src = 'images/darkM.png';
    }
});

let page = 1;

// Search and Gallery
const agentsGalleryContainer = document.getElementById("agentsGalleryContainer");
const searchAgentsContainer = document.getElementById("searchAgentsContainer");

// Function of Agents Gallery
const loadAgentsGallery = async () => {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
        const data = await response.json();
        const agents = data.data;

        // Pagination 
        const start = (page - 1) * 8;
        const end = start + 8;
        const pageAgents = agents.slice(start, end);

        // Clear
        agentsGalleryContainer.innerHTML = '';

        // Render agent cards 
        pageAgents.forEach((agent, index) => {
            agentsGalleryContainer.innerHTML += `
                <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                     <div class="card rounded-5 my-3" onclick="goToViewPage('${agent.uuid}')">
                        <div class="imgcontainer">
                            <img src="${agent.displayIcon}" alt="${agent.displayName}">
                        </div>
                        <div class="agentname">${agent.displayName}</div>
                        <div class="agentrole">${agent.role ? agent.role.displayName : 'Unknown'}</div>
                    </div>
                </div>
            `;
            loadingBar.style.width = ((index + 1) / 8) * 100 + '%';
        });
    } catch (error) {
        console.error("Error loading agents:", error);
    }
};

// Next and Previous btn
function nextPage() {
    page += 1;
    loadAgentsGallery();
}

function prevPage() {
    if (page > 1) {
        page -= 1;
        loadAgentsGallery();
    }
}

// First 8 loads in Gallery
loadAgentsGallery();

//Navigation to view.html
function goToViewPage(agentId) {
    console.log("Navigating to view.html with agent ID:", agentId);
    window.location.href = `view.html?agent=${agentId}`;
}


// Function of Search Agents
const loadAgent = async (searchTerm) => {
    try {
        const response = await fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`);
        const data = await response.json();
        const agents = data.data;
        const agent = agents.find(a => a.displayName.toLowerCase() === searchTerm.toLowerCase() || a.uuid === searchTerm);

        // Agent Not Found notice
        if (!agent) {
            searchAgentsContainer.innerHTML = `<div class="col-12 text-center text-danger">Agent not found</div>`;
            return;
        }

        // Render the agent 
        searchAgentsContainer.innerHTML = `
            <div class="col-12">
                <div class="card text-center result-card">
                    <div class="imgcontainer">
                        <img src="${agent.fullPortrait}" alt="${agent.displayName}">
                    </div>
                    <div class="agentname">${agent.displayName}</div>
                    <div class="agentrole">${agent.role.displayName}</div>
                    <div class="agentdesc">${agent.description}</div>
                </div>
            </div>`;
    } catch (error) {
        searchAgentsContainer.innerHTML = `<div class="col-12 text-center text-danger">Error loading agent</div>`;
    }
};

// Function to search for an agent 
function searchAgent() {
    var searchTerm = document.getElementById("searchTerm").value.trim();
    if (searchTerm) {
        loadAgent(searchTerm);
    } else {
        searchAgentsContainer.innerHTML = `<div class="col-12 text-center text-danger">Please enter an Agent name or UUID to search.</div>`;
    }
}
//Initial state
document.addEventListener("DOMContentLoaded", () => {
    searchAgentsContainer.innerHTML = '';
});