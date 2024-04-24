document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".btn-filter");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function() {
            const filterValue = this.getAttribute("data-filter");

            projectItems.forEach(item => {
                const technologies = item.querySelector("h2").textContent.toLowerCase();
                const itemTechnologies = technologies.split(":")[1].trim().split(" "); // Extracting technologies from the string

                // Check if the item should be displayed based on the filter value
                if (filterValue === "all" ||
                    (filterValue === "html" && itemTechnologies.includes("html") && !itemTechnologies.includes("css") && !itemTechnologies.includes("js")) ||
                    (filterValue === "css" && itemTechnologies.includes("html") && itemTechnologies.includes("css") && !itemTechnologies.includes("js")) ||
                    (filterValue === "js" && itemTechnologies.includes("html") && itemTechnologies.includes("css") && itemTechnologies.includes("js"))) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
