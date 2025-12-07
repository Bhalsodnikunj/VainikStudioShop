// NAV MENU
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// DYNAMIC YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// SAMPLE PRODUCTS
const products = [
  {
    id: 1,
    title: "Unisex Hoodie - Navy Blue",
    desc: "Feel the softness in cold of super combed cotton-rich fleece.",
    price: "₹911",
    img: "https://stopover-store.b-cdn.net/api/designs/VS___394160/preview.png",
  },

  {
    id: 2,
    title: "Coffee Mug - White",
    desc: "Coffee, tea, or art? Have it all with this eye-opening ceramic mug.",
    price: "₹302",
    img: "https://stopover.store/api/alignImage.php?curr_product=Coffee%20Mug&art=designs/VS___847577/68e7b3807cf24.png&color=ffffff&side=front&onBunny=false",
  },
  
  

];

// RENDER PRODUCTS
const productGrid = document.getElementById("productGrid");

products.forEach((p) => {
  const card = document.createElement("div");
  card.classList.add("product-card");
  card.innerHTML = `
    <img src="${p.img}" alt="${p.title}" />
    <div class="product-info">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <p class="price">${p.price}</p>
      <button class="btn details-btn" data-id="${p.id}">View Details</button>
    </div>
  `;
  productGrid.appendChild(card);
});

// MODAL LOGIC
const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");

document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id");
    const product = products.find((p) => p.id == id);
    if (product) {
      modalImg.src = product.img;
      modalTitle.textContent = product.title;
      modalDesc.textContent = product.desc;
      modalPrice.textContent = product.price;
      modal.style.display = "flex";
    }
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

// NEWSLETTER
document.getElementById("newsletterForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for subscribing!");
  e.target.reset();
});
