// fetch the items from the JSON file
function loadItems() {
  return fetch("data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function displayItems(items) {
  const container = document.querySelector(".items");
  container.innerHTML = items.map((item) => createHTMLString(item)).join("");
}

function createHTMLString(item) {
  return `
        <li class="item">
            <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
            <span class="item__description">${item.gender}, ${item.size}</span>
        </li>
    `;
}

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }
  //updateItems(items, key, value);

  const filtered = items.filter((item) => item[key] === value);
  //console.log(filtered);
  displayItems(filtered);
}

//function updateItems(items, key, value) {
//  items.forEach((item) => {
//   if (item.dataset[key] === value) {
//      item.classList.remove("invisible");
//    } else {
//      item.classList.add("invisible");
//    }
//  });
//}

function setEventListners(items) {
  const logo = document.querySelector(".logo");
  const buttons = document.querySelector(".buttons");
  logo.addEventListener("click", () => displayItems(items));
  buttons.addEventListener("click", (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    console.log(items);
    displayItems(items);
    setEventListners(items);
  })
  .catch(console.log);
