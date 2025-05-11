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
people.forEach((item) => {
  const listTrans = document.createElement("div");
  const star = document.createElement("img");
  star.classList.add("star");
  star.src = "/src/img/star.png";

  listTrans.classList.add("list-trans");
  const img = document.createElement("img");

  img.src = item.image;

  const p1 = document.createElement("p");
  p1.textContent = item.name;

  const p2 = document.createElement("p");
  p2.textContent = item.phone;
  console.log((p2.textContent = item.phone));
  listTrans.append(img);
  listTrans.append(p1);
  listTrans.append(p2);
  listTrans.append(star);
  container.append(listTrans);
});
people.forEach((item) => {
  const listGaluh = document.createElement("div");
  listGaluh.classList.add("listGaluh");
  const p1 = document.createElement("p");
  p1.textContent = item.name;
  const star = document.createElement("img");
  star.classList.add("star");
  const p2 = document.createElement("p");
  p2.textContent = item.phone;
  listGaluh.append(p1);
  listGaluh.append(p2);
  listGaluh.append(star);
  star.src = "/src/img/star.png";

  container.append(listGaluh);
});
document.querySelector("#search").addEventListener("input", searchData);

function searchData() {
  const searchParams = document.querySelector("#search").value.toLowerCase();
  const container = document.querySelector(".table-trans");

  container.innerHTML = "";

  const filteredPeople = people.filter((person) =>
    person.name.toLowerCase().includes(searchParams)
  );

  filteredPeople.forEach((item) => {
    const listTrans = document.createElement("div");
    listTrans.classList.add("list-trans");

    const img = document.createElement("img");
    img.src = item.image;

    const p1 = document.createElement("p");
    p1.textContent = item.name;

    const p2 = document.createElement("p");
    p2.textContent = item.phone;

    const star = document.createElement("img");
    star.classList.add("star");
    star.src = "/src/img/star.png";

    listTrans.append(img, p1, p2, star);
    container.append(listTrans);
  });
}

const typeElement = document.querySelector("#move-p");
const text = "Experience the Future of Digital Payments with e-wallet";
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  const isPassword = input.type === "password";
  input.type = isPassword ? "text" : "password";
  icon.src = isPassword
    ? "/src/pages/assets/eye-open.png"
    : "/src/pages/assets/eye-closed.png";
}
