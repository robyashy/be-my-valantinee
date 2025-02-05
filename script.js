function handleYesClick() {
    window.location.href = "yes.html";  // Redirect to another page
}

function moveNoButton() {
    const noButton = document.querySelector(".no-button");
    const x = Math.random() * window.innerWidth * 0.8;
    const y = Math.random() * window.innerHeight * 0.8;

    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
}
