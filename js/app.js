// Nav Bar Toggle
let toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	this.classList.toggle("toggled");

	let links = document.getElementById("sideBar");
	if (
		links.style.transform === "translateX(-200%)" ||
		links.style.transform === ""
	) {
		links.style.transform = "translateX(0px)";
	} else {
		links.style.transform = "translateX(-200%)";
	}
}

// Visibility Toggle
const toggleVisibility = document.getElementById("toggleVisibility");
const hiddenContent = document.querySelector(".hidden");

toggleVisibility.addEventListener("click", () => {
	if (hiddenContent.classList.contains("hidden")) {
		hiddenContent.classList.remove("hidden");
		toggleVisibility.textContent = "Less Details";
	} else {
		hiddenContent.classList.add("hidden");
		toggleVisibility.textContent = "More Details";
	}
});

// Accordion
const items = document.querySelectorAll(".accordion-item");

items.forEach((item) => {
	const header = item.querySelector(".accordion-header");

	header.addEventListener("click", () => {
		const content = item.querySelector(".accordion-content");
		const toggle = item.querySelector(".accordion-toggle");

		content.classList.toggle("active");
		toggle.classList.toggle("turned");
	});
});
