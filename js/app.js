document.addEventListener("DOMContentLoaded", function () {
    const pdfLinks = document.querySelectorAll(".pdf-link");

    pdfLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const pdfUrl = this.getAttribute("data-pdf");

            const viewer = document.getElementById("pdf-viewer");
            viewer.setAttribute("src", pdfUrl);
        });
    });
});
