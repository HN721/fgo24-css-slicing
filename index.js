const people = [
  {
    name: "Ghaluh 1",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    phone: "(239) 555–0101",
  },
  {
    name: "Albert Flores",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    phone: "(239) 555–0102",
  },
  {
    name: "Bessie Cooper",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    phone: "(239) 555–0103",
  },
  {
    name: "Jacob Jones",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    phone: "(239) 555–0104",
  },
  {
    name: "Leslie Alexander",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    phone: "(239) 555–0105",
  },
  {
    name: "Cody Fisher",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    phone: "(239) 555–0106",
  },
  {
    name: "Jenny Wilson",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    phone: "(239) 555–0107",
  },
  {
    name: "Dianne Russell",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    phone: "(239) 555–0108",
  },
  {
    name: "Ronald Richards",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    phone: "(239) 555–0109",
  },
  {
    name: "Arlene McCoy",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
    phone: "(239) 555–0110",
  },
  {
    name: "Savannah Nguyen",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    phone: "(239) 555–0111",
  },
  {
    name: "Wade Warren",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    phone: "(239) 555–0112",
  },
  {
    name: "Jane Cooper",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    phone: "(239) 555–0113",
  },
  {
    name: "Eleanor Pena",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    phone: "(239) 555–0114",
  },
  {
    name: "Floyd Miles",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    phone: "(239) 555–0115",
  },
  {
    name: "Annette Black",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    phone: "(239) 555–0116",
  },
  {
    name: "Esther Howard",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    phone: "(239) 555–0117",
  },
  {
    name: "Guy Hawkins",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    phone: "(239) 555–0118",
  },
  {
    name: "Marvin McKinney",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    phone: "(239) 555–0119",
  },
  {
    name: "Kristin Watson",
    image: "https://randomuser.me/api/portraits/women/20.jpg",
    phone: "(239) 555–0120",
  },
];

const container = document.querySelector(".table-trans");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageNumbers = document.getElementById("page-numbers");
const currentRange = document.getElementById("current-range");
const totalEntries = document.getElementById("total-entries");
const searchInput = document.querySelector("#search");

const itemsPerPage = 5;
let currentPage = 1;
let filteredPeople = [...people]; // Initially, all people

function displayPeople(page, peopleList) {
  container.innerHTML = ""; // Clear previous content
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedPeople = peopleList.slice(start, end);

  paginatedPeople.forEach((item) => {
    const listTrans = document.createElement("div");
    listTrans.classList.add("list-trans");

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.name;

    const p1 = document.createElement("p");
    p1.textContent = item.name;

    const p2 = document.createElement("p");
    p2.textContent = item.phone;

    const star = document.createElement("img");
    star.classList.add("star");
    star.src = "/src/img/star.png";
    star.alt = "Favorite";

    listTrans.append(img, p1, p2, star);
    container.append(listTrans);
  });

  // Update pagination info
  currentRange.textContent = `${start + 1}-${Math.min(end, peopleList.length)}`;
  totalEntries.textContent = peopleList.length;
  updatePaginationControls(peopleList);
}

function updatePaginationControls(peopleList) {
  const totalPages = Math.ceil(peopleList.length / itemsPerPage);

  // Update buttons
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages || totalPages === 0;

  // Generate page numbers
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
  currentPage = 1; // Reset to first page on new search
  displayPeople(currentPage, filteredPeople);
}

// Event listeners
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

// Initial display
displayPeople(currentPage, filteredPeople);
