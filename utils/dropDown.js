const catalogFilterBtn = document.querySelector(".filter__catalog_drop-down");
const dropContent = document.querySelector(".filtering-form");

const dropDown = (btn) => btn.classList.toggle("hidden");

const catalogFilterDropDown = () => dropDown(dropContent);

catalogFilterBtn.addEventListener("click", catalogFilterDropDown);