const ratingCard = document.getElementById("ratingCard");
const ratingScale = document.getElementById("ratingScale");
const buttonSubmit = document.getElementById("buttonSubmit");
const thankyouCard = document.getElementById("thankyouCard");
const selection = document.getElementById("selection");

let rate = {
    value: 0,
};

document.addEventListener("click", (event) => {
    if (
        event.target.classList.value.search("ratingValue") !== -1 &&
        event.target.dataset.value !== undefined
    ) {
        rate.value = event.target.dataset.value;
    } else if (event.target.id === "buttonSubmit" && rate.value !== 0) {
        selection.textContent = `You selected ${rate.value} out of 5`;
        ratingCard.style.display = "none";
        thankyouCard.style.display = "flex";
    }
});
