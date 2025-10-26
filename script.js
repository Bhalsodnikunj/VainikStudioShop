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
    title: "Coffee Mug - Black",
    img: "https://stopover.store/api/alignImage.php?curr_product=Coffee%20Mug&art=designs/VS___193999/68f5e93f7d141.png&color=333333&side=front&onBunny=false",
  },
 {
    id: 2,
    title: "Unisex Hoodie - Navy Blue",
    img: "https://stopover-store.b-cdn.net/api/designs/VS___394160/preview.png",
  },

  {
    id: 3,
    title: "Coffee Mug - White",
    img: "https://stopover.store/api/alignImage.php?curr_product=Coffee%20Mug&art=designs/VS___847577/68e7b3807cf24.png&color=ffffff&side=front&onBunny=false",
  },
  
  {
    id: 4,
    title: "Throw Pillow - White",
    img: "https://stopover.store/api/alignImage.php?curr_product=Throw%20Pillow&art=designs/VS___847577/68e7b3807cf24.png&color=ffffff&side=front&onBunny=false",
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

document.querySelectorAll(".details-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id");
    const product = products.find((p) => p.id == id);
    if (product) {
      modalImg.src = product.img;
      modalTitle.textContent = product.title;
      
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




