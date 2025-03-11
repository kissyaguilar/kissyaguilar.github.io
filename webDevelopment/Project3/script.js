// Dark Mode Toggle
function changeMode() {
  var bodyElement = document.getElementById("body");
  bodyElement.classList.toggle("dark-mode");
}

// Arrays for slideshow
var biniSlides = [
  { src: "images/group_1.png", alt: "BINI Group Slide 1" },
  { src: "images/group_2.png", alt: "BINI Group Slide 2" },
  { src: "images/group_3.png", alt: "BINI Group Slide 3" },
  { src: "images/group_4.png", alt: "BINI Group Slide 4" },
  { src: "images/group_5.png", alt: "BINI Group Slide 5" }
];

var slideshowContent = document.getElementById("slideshowContent");

// Loop for slideshow
biniSlides.forEach(function (slide, i) {
  var isActive = i === 0 ? " active" : ""; // Make the first slide active
  slideshowContent.innerHTML +=
    '<div class="carousel-item' + isActive + '">' +
    '<img src="' + slide.src + '" class="d-block w-100 img-fluid" alt="' + slide.alt + '">' +
    '</div>';
});


// Arrays for hover informattions
var biniMembers = ["Bini Aiah", "Bini Colet", "Bini Maloi", "Bini Gwen", "Bini Stacey", "Bini Mikha", "Bini Sheena", "Bini Jhoanna"];
var memberPics = [
  "aiah.png", "colet.png", "maloi.jpg", "gwen.jpg", "stacey.jpg", "mikha.jpg", "sheena.png", "jhoanna.png"
];

var realNames = ["Maraiah Queen Jaraula Arceta", "Ma. Nicolette Florenosos Vergara", "Mary Loi Yves Kipte Ricalde", "Gweneth Llaguno Apuli", "Lindtsey Stacey Aubrey Casumpang Sevilleja", "Mikhaela Janna Jimenea Lim", "Sheena Mae Manuel Catacutan", "Jhoanna Christine Burgos Robles"

];

var memberBirthdays = [
  "January 27, 2001", "September 14, 2001", "May 27, 2002", "June 19, 2003", "July 13, 2003", "November 8, 2003", "May 9, 2004", "January 26, 2004"
];

var memberCountries = [
  "Lapu-lapu City, Cebu", "Tagbilaran City, Bohol", "General Trias, Cavite", "Daraga, Albay", "Bagabag, Nueva Vizcaya", "City of San Juan, Metro Manila", "Santiago, Isabela", "Calamba City, Laguna"
];

var memberPositions = [
  "Main Rapper, Visual", "Main Vocal, Lead Dancer, Lead Rapper", "Main Vocal", "Lead Vocal, Lead Rapper", "Main Rapper, Lead Dancer, Sub Vocalist", "Main Rapper, Lead Dancer, Visual", "Main Dancer", "Leader, Lead Vocal, Lead Rapper"
];

var faveColors = [
  "Light Blue", "Green", "Yellow", "Orange", "Pink", "Red", "Purple", "Blue"
];

var memberDescriptions = [
  "Don’t just dream it, do it.",
  "It’s okay not to be okay.",
  "Life is short, so always choose to be happy.",
  "Life is not about waiting the storm to pass.",
  "Always do your best and God will do the rest.",
  "Dreams will only stay dreams unless you act.",
  "Never give up. Don’t ever think of giving up.",
  "Keep your eyes on the stars; your feet on ground."
];

var biniLinks = [
  "https://www.instagram.com/bini_aiah/",
  "https://www.instagram.com/bini_colet/",
  "https://www.instagram.com/bini_maloi/",
  "https://www.instagram.com/bini_gwen/",
  "https://www.instagram.com/bini_stacey/",
  "https://www.instagram.com/bini_mikha/",
  "https://www.instagram.com/bini_sheena/",
  "https://www.instagram.com/bini_jhoanna/"
];

var myContainer = document.getElementById("cardContainer");

// Function to handle hover effect
function highlightCard(card) {
  card.classList.add("highlight");
}

function resetCard(card) {
  card.classList.remove("highlight");
}

// Loop for hover informattions
biniMembers.forEach(function (member, i) {
  // Condition
  var cardPositionClass = (i % 2 === 0) ? "card-left" : "card-right";

  myContainer.innerHTML +=
    "<div class=\"col-xl-4 col-md-4 col-sm-6 col-12\">" +
    "<div class=\"card my-1 " + cardPositionClass + "\" onmouseover=\"highlightCard(this)\" onmouseout=\"resetCard(this)\">" +
    "<img src=\"pictures/" + memberPics[i] + "\" class=\"card-img-top\" alt=\"" + member + "\">" +
    "<div class=\"hover-info\">" +
    "<p><strong>Real Name:</strong><br>" + realNames[i] + "</p>" +
    // For updated age
    "<p><strong>Age:</strong><br>" + (new Date().getFullYear() - new Date(memberBirthdays[i]).getFullYear()) + "</p>" +
    "<p><strong>Birth date:</strong><br>" + memberBirthdays[i] + "</p>" +
    "<p><strong>Origin:</strong><br>" + memberCountries[i] + "</p>" +
    "<p><strong>Position:</strong><br>" + memberPositions[i] + "</p>" +
    "<p><strong>Color:</strong><br>" + faveColors[i] + "</p>" +
    "</div>" +
    "<div class=\"card-body\">" +
    "<h5 class=\"card-title\">" + member + "</h5>" +
    "<p class=\"card-text\">" + memberDescriptions[i] + "</p>" +
    "<a href=\"" + biniLinks[i] + "\" target=\"_blank\" class=\"btn btn-outline-secondary\">Go bloom</a>" +
    "</div>" +
    "</div>" +
    "</div>";
});

// Add styles for hover effect
var style = document.createElement('style');
style.innerHTML = `
  .highlight {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s, box-shadow 0.3s;
  }
`;
document.head.appendChild(style);

function toggleFooter() {
  var footer = document.getElementById("footer");
  var btnExpand = document.getElementById("btnExpand");

  if (footer.style.display === "none" || footer.style.display === "") {
    footer.style.display = "block";  // Show the footer
    btnExpand.innerHTML = "Collapse";  // Change button text to "Collapse"
  } else {
    footer.style.display = "none";  // Hide the footer
    btnExpand.innerHTML = "Expand";  // Change button text to "Expand"
  }
}

// Arrays for event details
var dates = [
  "October 20",
  "November 16",
  "November 17",
  "November 18"
];

var titles = [
  "IAM WORLDWIDE HIS7ORY 7TH ANNIVERSARY Anniversary + Music Festival",
  "Grand BINIverse Day 1",
  "Grand BINIverse Day 2",
  "Grand BINIverse Day 3"
];

var locations = [
  "Mall of Asia Arena",
  "Araneta Coliseum",
  "Araneta Coliseum)",
  "Araneta Coliseum"
];

var links = [
  "https://www.facebook.com/story.php?story_fbid=860578996257020&id=100069147816393",
  "https://www.facebook.com/story.php?story_fbid=915592557268211&id=100064524256576",
  "https://www.facebook.com/story.php?story_fbid=915592557268211&id=100064524256576",
  "https://www.facebook.com/photo/?fbid=929874172506716&set=pcb.929874202506713"
];

// Function
function toggleEvents() {
  var eventContainer = document.getElementById("eventContainer");
  var btnExpand = document.getElementById("btnExpand");

  // If else
  if (eventContainer.style.display === "none" || eventContainer.style.display === "") {
    eventContainer.style.display = "block";
    btnExpand.innerHTML = "Collapse";
    addEvents();
  } else {
    eventContainer.style.display = "none";
    btnExpand.innerHTML = "Expand";
  }
}

// Function to add event cards 
function addEvents() {
  var myContainer = document.getElementById("eventContainer");
  myContainer.innerHTML = "";

  // Loop of upcoming events
  titles.forEach(function (title, i) {
    myContainer.innerHTML +=
      "<div class=\"row event-row mt-3 align-items-center p-3\">" +

      "<div class=\"col-12 col-md-3 text-center text-md-start\">" +
      "<div class=\"event-date\">" + dates[i] + "</div>" +
      "</div>" +

      "<div class=\"col-12 col-md-5 text-center text-md-start mt-2 mt-md-0\">" +
      "<div class=\"event-details fw-bold\">" + title + "</div>" +
      "<div class=\"event-location\">" + locations[i] + "</div>" +
      "</div>" +

      "<div class=\"col-12 col-md-4 text-center text-md-end mt-2 mt-md-0\">" +
      "<a href=\"" + links[i] + "\" target=\"_blank\" class=\"btn btn-outline-secondary btn-sm\">See Details</a>" +
      "</div>" +
      "</div>";
  });
}
