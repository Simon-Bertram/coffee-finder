export function filterShopsByTown(selectedTown: string) {
  // get the shop cards
  const shopCards = document.querySelectorAll(".shop-card");
  // loop through each card
  shopCards.forEach((card instanceof HTMLElement) => {
    // get the town data attribute
    const cardTown = card.getAttribute("data-town");
    // if the selected town is "All" or the card town matches the selected town
    if (selectedTown === "All" || cardTown === selectedTown) {
      // show the card
      card.style.display = "block";
    } else {
      // hide the card
      card.style.display = "none";
    }
  });
}
