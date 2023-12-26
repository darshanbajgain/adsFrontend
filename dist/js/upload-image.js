// upload-image.js

document.addEventListener("DOMContentLoaded", () => {
    const videoUpload = document.getElementById("image-upload");
    const videoFilename = document.getElementById("image-filename");
    const playAndAnalyzeBtn = document.getElementById("predict");

    videoUpload.addEventListener("change", (event) => {
        const file = event.target.files[0];
        if (file) {
            videoFilename.textContent = `Selected file: ${file.name}`;
        } else {
            videoFilename.textContent = "";
        }
    });

    document.getElementById("image-form").addEventListener("submit", (event) => {
        event.preventDefault();
        // Assuming an async operation here, like uploading the video
        playAndAnalyzeBtn.textContent = "Uploading...";
        // Here you can implement the logic for uploading the video or any other operation
        setTimeout(() => {
            // After the operation, you might want to reset the button text or show success message
            playAndAnalyzeBtn.textContent = "Predict";
        }, 2000); // Just a placeholder for simulating an operation
    });
});
