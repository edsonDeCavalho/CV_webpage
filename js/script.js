document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("modeToggle");

    toggleButton.addEventListener("click", () => {
        const body = document.body;

        if (body.classList.contains("day-mode")) {
            switchToNightMode();
        } else {
            switchToDayMode();
        }
    });

    function switchToNightMode() {
        document.body.classList.remove("day-mode");
        document.body.classList.add("night-mode");

        // Update image to night mode
        document.getElementById("modeToggle").src = "./img/lightMode.svg";
        document.getElementById("modeToggle").alt = "Switch to Day Mode";  // Optionally update the alt text

        // Change all elements with class "day-mode" to "night-mode"
        document.querySelectorAll(".day-mode").forEach((element) => {
            element.classList.remove("day-mode");
            element.classList.add("night-mode");
        });

        // Change button style
        document.querySelectorAll(".styled-button").forEach((button) => {
            button.classList.remove("day-mode");
            button.classList.add("night-mode");
        });
    }

    function switchToDayMode() {
        document.body.classList.remove("night-mode");
        document.body.classList.add("day-mode");

        // Update image to day mode
        document.getElementById("modeToggle").src = "./img/daymode_light.svg";
        document.getElementById("modeToggle").alt = "Switch to Night Mode";  // Optionally update the alt text

        // Change all elements with class "night-mode" to "day-mode"
        document.querySelectorAll(".night-mode").forEach((element) => {
            element.classList.remove("night-mode");
            element.classList.add("day-mode");
        });

        // Change button style
        document.querySelectorAll(".styled-button").forEach((button) => {
            button.classList.remove("night-mode");
            button.classList.add("day-mode");
        });
    }

    // Initialize with day mode
    switchToDayMode();
});
