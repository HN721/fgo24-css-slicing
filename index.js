const container = document.querySelector(".table-trans");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageNumbers = document.getElementById("page-numbers");
const currentRange = document.getElementById("current-range");
const totalEntries = document.getElementById("total-entries");
const searchInput = document.querySelector("#search");

const url =
  "https://raw.githubusercontent.com/HN721/fgo24-source-ewallet/refs/heads/main/source-code.txt";

let people = [];
let filteredPeople = [];

const itemsPerPage = 5;
let currentPage = 1;

async function fetchPeople() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Gagal fetch data");
    }
    const textData = await response.json();
    people = textData;
    filteredPeople = [...people];
    displayPeople(currentPage, filteredPeople);
  } catch (error) {
    console.error("Error saat mengambil data:", error);
  }
}

function displayPeople(page, peopleList) {
  container.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedPeople = peopleList.slice(start, end);

  paginatedPeople.forEach((item) => {
    const listTrans = document.createElement("a");
    listTrans.classList.add("list-trans");
    listTrans.href = `/src/Dashboard/detail.html?"name"=${encodeURIComponent(
      item.name
    )}&"phone"=${encodeURIComponent(item.phone)}&"image"=${encodeURIComponent(
      item.image
    )}`;

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    const textWrapper = document.createElement("div");
    textWrapper.classList.add("text-wrapper");

    const p1 = document.createElement("p");
    p1.textContent = item.name;

    const p2 = document.createElement("p");
    p2.textContent = item.phone;

    textWrapper.append(p1, p2);

    const star = document.createElement("img");
    star.classList.add("star");
    star.src = "/src/img/star.png";
    star.alt = "Favorite";

    listTrans.append(img, textWrapper, star);
    container.append(listTrans);
  });

  currentRange.textContent = `${start + 1}-${Math.min(end, peopleList.length)}`;
  totalEntries.textContent = peopleList.length;
  updatePaginationControls(peopleList);
}

function updatePaginationControls(peopleList) {
  const totalPages = Math.ceil(peopleList.length / itemsPerPage);

  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages || totalPages === 0;

  pageNumbers.innerHTML = "";
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button");
    pageBtn.textContent = i;
    pageBtn.classList.toggle("active", i === currentPage);
    pageBtn.addEventListener("click", () => {
      currentPage = i;
      displayPeople(currentPage, filteredPeople);
    });
    pageNumbers.append(pageBtn);
  }
}

function searchData() {
  const searchParams = searchInput.value.toLowerCase();
  filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(searchParams) ||
      person.phone.includes(searchParams)
  );
  currentPage = 1;
  displayPeople(currentPage, filteredPeople);
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayPeople(currentPage, filteredPeople);
  }
});

nextBtn.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredPeople.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayPeople(currentPage, filteredPeople);
  }
});

searchInput.addEventListener("input", searchData);

fetchPeople();
