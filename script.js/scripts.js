// script.js

document.addEventListener('DOMContentLoaded', function() {
    
    var buyButton = document.getElementById('buyButton');

   
    buyButton.addEventListener('click', function() {
       
        window.location.href = 'Medicines.html'; 
    });
});
document.addEventListener('DOMContentLoaded', function() {
    
    var buyButton = document.getElementById('home');
    buyButton.addEventListener('click', function() {
   
        window.location.href = 'index.html'; 
    });
    var buyButton = document.getElementById('doctor');
    buyButton.addEventListener('click', function() {
   
        window.location.href = 'doctor.html'; 
    });
});
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Dummy data for medicines
const medicineNames = ["Aspirin", "Paracetamol", "Ibuprofen", "Amoxicillin", "Cetirizine", "Loratadine", "Omeprazole", "Simvastatin","Nexaril","Valtorin", "Dynoxin","Celestol","Medaxon","Vitalixir"," Nexiumin"," Cardiolix","Neuroxinol","Pulmoxin"];
const maxMedicines = 15;

function getRandomMedicine() {
    const name = medicineNames[Math.floor(Math.random() * medicineNames.length)];
    const price = `$${(Math.random() * 50 + 1).toFixed(2)}`;
    const imgSrc = `https://via.placeholder.com/150?text=${name}`;
    return {name, price, imgSrc};
}

const medicines = Array.from({length: maxMedicines}, getRandomMedicine);

const medServicesContainer = document.getElementById('med-Services');

medicines.forEach(medicine => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    
    const img = document.createElement('img');
    img.src = medicine.imgSrc;
    img.alt = medicine.name;
    
    const name = document.createElement('h3');
    name.textContent = medicine.name;
    
    const price = document.createElement('p');
    price.textContent = medicine.price;
    
    const button = document.createElement('button');
    button.textContent = "Add to Cart";
    button.classList.add('add-to-cart');
    
    gridItem.appendChild(img);
    gridItem.appendChild(name);
    gridItem.appendChild(price);
    gridItem.appendChild(button);
    
    medServicesContainer.appendChild(gridItem);
});

function Myfunction(){
    console.log("hello");
}
