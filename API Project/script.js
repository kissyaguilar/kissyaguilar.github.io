// Dark Mode Toggle
const body = document.body;
const container = document.querySelector('.content-container');
const darkModeButton = document.getElementById('darkModeButton');
const darkModeIcon = document.getElementById('darkModeIcon');

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    container.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        darkModeIcon.src = 'images/lightM.png';
    } else {
        darkModeIcon.src = 'images/darkM.png';
    }
});

// Agent Pagination and Loading
let page = 1;

const loadAgents = async () => {
    try {
        const response = await fetch('https://valorant-api.com/v1/agents?isPlayableCharacter=true');
        const data = await response.json();
        const agents = data.data;

        // Pagination 
        const start = (page - 1) * 8;
        const end = start + 8;
        const pageAgents = agents.slice(start, end);

        // Clear current cards
        cardContainer.innerHTML = '';

        // Render agent cards
        pageAgents.forEach((agent, index) => {
            cardContainer.innerHTML += `
                <div class="col-6 col-sm-6 col-md-4 col-lg-3">
                    <div class="card rounded-5 my-3">
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

// Next and Previous page functions
function nextPage() {
    page += 1;
    loadAgents();
}

function prevPage() {
    if (page > 1) {
        page -= 1;
        loadAgents();
    }
}

// Initial agent load
loadAgents();

// Map Loading and Navigation
let maps = [];
let currentIndex = 0;

async function fetchMaps() {
    try {
        const response = await fetch("https://valorant-api.com/v1/maps");
        const data = await response.json();
        maps = data.data;
        populateThumbnails();
        updateMainImage();
    } catch (error) {
        console.error("Error fetching maps data:", error);
    }
}

// Populate map thumbnails
function populateThumbnails() {
    const thumbnailContainer = document.getElementById('thumbnailContainer');
    thumbnailContainer.innerHTML = '';
    const limit = Math.min(currentIndex + 3, maps.length);

    for (let i = currentIndex; i < limit; i++) {
        const thumbnail = document.createElement('img');
        thumbnail.src = maps[i].splash;
        thumbnail.alt = maps[i].displayName;
        thumbnail.classList.add('img-thumbnail');

        // Thumbnail click event
        thumbnail.onclick = () => {
            document.querySelectorAll('.thumbnail-container img').forEach(img => img.classList.remove('active'));
            thumbnail.classList.add('active');
            updateMainImage(maps[i]);
        };

        thumbnailContainer.appendChild(thumbnail);
    }
}

// Update the main map image
function updateMainImage(map) {
    const mainImage = document.getElementById('mainImage');
    const mapTitle = document.getElementById('mapTitle');

    if (map) {
        mainImage.src = map.splash;
        mapTitle.textContent = map.displayName;
    } else if (maps[currentIndex]) {
        mainImage.src = maps[currentIndex].splash;
        mapTitle.textContent = maps[currentIndex].displayName;
    }
}

// Previous and Next map thumbnail navigation
document.getElementById('prevButton').onclick = () => {
    if (currentIndex > 0) {
        currentIndex -= 3;
        populateThumbnails();
        updateMainImage();
    }
};

document.getElementById('nextButton').onclick = () => {
    if (currentIndex + 3 < maps.length) {
        currentIndex += 3;
        populateThumbnails();
        updateMainImage();
    }
};

// Initialize map data on page load
fetchMaps();


