function updateProgress(percent) {
    const progressBar = document.getElementById("progressBar");
    if(progressBar) {
        progressBar.style.width = percent + "%";
    }
}
