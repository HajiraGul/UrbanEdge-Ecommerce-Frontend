// Countdown Configuration for Each Showcase
const countdowns = [
    { selector: '.showcase1', endTime: new Date(new Date().getTime() + 24 * 60 * 60 * 1000) }, // 24 Hours from now
    { selector: '.showcase2', endTime: new Date(new Date().getTime() + 12 * 60 * 60 * 1000) }, // 12 Hours from now
    { selector: '.showcase3', endTime: new Date(new Date().getTime() + 6 * 60 * 60 * 1000) }   // 6 Hours from now
];

// Initialize Countdown Timers
countdowns.forEach(({ selector, endTime }) => {
    const countdownElement = document.querySelector(selector);
    if (!countdownElement) {
        console.error(`Selector ${selector} not found`);
        return;
    }

    const hoursElement = countdownElement.querySelector('.countdown-content:nth-child(1) .display-number');
    const minutesElement = countdownElement.querySelector('.countdown-content:nth-child(2) .display-number');
    const secondsElement = countdownElement.querySelector('.countdown-content:nth-child(3) .display-number');

    if (!hoursElement || !minutesElement || !secondsElement) {
        console.error(`Countdown elements missing in ${selector}`);
        return;
    }

    function updateCountdown() {
        const now = new Date();
        const timeLeft = endTime - now;

        if (timeLeft > 0) {
            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
            const seconds = Math.floor((timeLeft / 1000) % 60);

            hoursElement.innerHTML = hours.toString().padStart(2, '0');
            minutesElement.innerHTML = minutes.toString().padStart(2, '0');
            secondsElement.innerHTML = seconds.toString().padStart(2, '0');
        } else {
            hoursElement.innerHTML = '00';
            minutesElement.innerHTML = '00';
            secondsElement.innerHTML = '00';

            // Stop the interval when the timer ends
            clearInterval(interval);
        }
    }

    // Update every second
    const interval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to avoid delay
});

let itemList = document.querySelector('.items');
let items = [
    { id: 1, name: 'LuxeWhite', category: 'shoes', image: 'https://images.pexels.com/photos/1302320/pexels-photo-1302320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-20%', description: 'A premium pair of white sneakers for those who value both style and comfort' },
{ id: 2, name: 'CedarCraft', category: 'shoes', image: 'https://images.pexels.com/photos/2830912/pexels-photo-2830912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-15%', description: 'Shoes made from premium leather, offering both comfort and elegance.' },
{ id: 3, name: 'Shadow Allure', category: 'shoes', image: 'https://images.pexels.com/photos/4734653/pexels-photo-4734653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-20%', description: 'Black heels that combine bold style with refined sophistication.' },
{ id: 4, name: 'Autumn Walk', category: 'shoes', image: 'https://images.pexels.com/photos/3015286/pexels-photo-3015286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-50%', description: 'Warm, brown boots that exude a rustic charm and timeless style' },
{ id: 5, name: 'Chestnut Charm', category: 'shoes', image: 'https://images.pexels.com/photos/3155234/pexels-photo-3155234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-30%', description: 'Rich, brown sandals that elevate any outfit with their deep, earthy hue' },
{ id: 6, name: 'Sable Silhouette', category: 'shoes', image: 'https://images.pexels.com/photos/2044228/pexels-photo-2044228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-40%', description: 'Sleek, sophisticated black stilettos that complement any outfit.' },
{ id: 7, name: 'Island Bliss', category: 'shoes', image: 'https://images.pexels.com/photos/8455822/pexels-photo-8455822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-40%', description: 'Easygoing flip-flops that bring a touch of paradise to your everyday wear' },
{ id: 8, name: 'Vivid Vibe', category: 'shoes', image: 'https://images.pexels.com/photos/16234311/pexels-photo-16234311/free-photo-of-a-woman-in-colorful-shoes-standing-on-some-steps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-40%', description: 'A striking pair of multi-color pumps that bring energy and style to every outfit.' },
{ id: 9, name: 'Midnight Motion', category: 'shoes', image: 'https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-40%', description: 'Stylish black jogger shoes that move with you, offering comfort and flair' },
{ id: 10, name: 'Soft Glow', category: 'shoes', image: 'https://images.pexels.com/photos/15694852/pexels-photo-15694852/free-photo-of-person-standing-on-wooden-floor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-40%', description: 'Skin-colored shoes that exude a subtle radiance, perfect for any occasion' },
{ id: 11, name: 'Warm Tones', category: 'shoes', image: 'https://images.pexels.com/photos/8635546/pexels-photo-8635546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-40%', description: 'Comfortable beige flats that bring a cozy, stylish touch to your look.' },
{ id: 12, name: 'Cedar Luxe', category: 'shoes', image: 'https://images.pexels.com/photos/27874103/pexels-photo-27874103/free-photo-of-a-woman-in-a-black-dress-and-brown-boots.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-40%', description: 'Elegant boots that combine natural beauty with refined design.' },
// Clothing
{ id: 13, name: 'Starlight Twirl', category: 'clothing', image: 'https://images.pexels.com/photos/297367/pexels-photo-297367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 50, discount: '-30%', description: 'Luxurious velvet shoes designed for an elegant evening out.' },
{ id: 14, name: 'Opulent Aura', category: 'clothing', image: 'https://images.pexels.com/photos/5447531/pexels-photo-5447531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 55, discount: '-25%', description: 'Amber-colored sandals offering both style and comfort.' },
{ id: 15, name: 'Black Mirage', category: 'clothing', image: 'https://images.pexels.com/photos/19236219/pexels-photo-19236219/free-photo-of-blonde-woman-in-maxi-embroidered-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 60, discount: '-20%', description: 'Ultra-lightweight sneakers for everyday wear and long walks.' },
{ id: 16, name: 'Empress Coat', category: 'clothing', image: 'https://images.pexels.com/photos/792325/pexels-photo-792325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 120, discount: '-25%', description: 'A royal-style winter coat that blends warmth with luxury.' },
{ id: 17, name: 'Eternal Cozy', category: 'clothing', image: 'https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 60, discount: '-15%', description: 'A soft, oversized sweater perfect for chilly evenings.' },
{ id: 18, name: 'Soft Embrace', category: 'clothing', image: 'https://images.pexels.com/photos/3962433/pexels-photo-3962433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 70, discount: '-20%', description: 'A flowy dress designed for both comfort and style.' },
{ id: 19, name: 'City Denim', category: 'clothing', image: 'https://images.pexels.com/photos/1667506/pexels-photo-1667506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 80, discount: '-20%', description: 'A bold red dress that speaks elegance and confidence.' },
{ id: 20, name: 'Blossom Dream', category: 'clothing', image: 'https://images.pexels.com/photos/29847691/pexels-photo-29847691/free-photo-of-happy-woman-posing-in-floral-dress-against-grey-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 65, discount: '-15%', description: 'A breezy blue tunic perfect for summer outings.' },
{ id: 21, name: 'Cherry Glow', category: 'clothing', image: 'https://images.pexels.com/photos/3756775/pexels-photo-3756775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 90, discount: '-25%', description: 'A golden dress perfect for sunset events and celebrations.' },
{ id: 22, name: 'Urban Monochrome', category: 'clothing', image: 'https://images.pexels.com/photos/601316/pexels-photo-601316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 75, discount: '-20%', description: 'Layered outfit that blends comfort with a chic aesthetic.' },
{ id: 23, name: 'Blue Horizon', category: 'clothing', image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 110, discount: '-30%', description: 'A stylish white coat to keep you warm during the coldest days.' },
{ id: 24, name: 'Golden Dawn', category: 'clothing', image: 'https://images.pexels.com/photos/29830314/pexels-photo-29830314/free-photo-of-elegant-woman-in-a-dramatic-low-light-interior.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 85, discount: '-20%', description: 'A dress inspired by the vibrant colors of a sunset.' },
// Jewelry
{ id: 25, name: 'Aurora Bangles', category: 'jewelry', image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 35, discount: '-10%', description: 'Golden bangles that shine with elegance.' },
{ id: 26, name: 'Eternal Grace', category: 'jewelry', image: 'https://images.pexels.com/photos/266621/pexels-photo-266621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 50, discount: '-15%', description: 'A graceful pendant for timeless beauty.' },
{ id: 27, name: 'Trio of Grace', category: 'jewelry', image: 'https://images.pexels.com/photos/1302307/pexels-photo-1302307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-10%', description: 'A set of three delicate rings for any occasion.' },
{ id: 28, name: 'Silent Charm', category: 'jewelry', image: 'https://images.pexels.com/photos/9637586/pexels-photo-9637586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 40, discount: '-10%', description: 'Elegant pearl necklace that shines under moonlight.' },
{ id: 29, name: 'Golden Pulse', category: 'jewelry', image: 'https://images.pexels.com/photos/1338587/pexels-photo-1338587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 35, discount: '-10%', description: 'A sleek silver bracelet for a refined look.' },
{ id: 30, name: 'Venomous Grace', category: 'jewelry', image: 'https://images.pexels.com/photos/7588183/pexels-photo-7588183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 50, discount: '-15%', description: 'Gold floral earrings that add a natural charm to your style.' },
{ id: 31, name: 'Glittering Essence', category: 'jewelry', image: 'https://images.pexels.com/photos/29483946/pexels-photo-29483946/free-photo-of-elegant-diamond-and-pearl-earrings-on-stone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 55, discount: '-20%', description: 'A crystal-embedded pendant for dreamy elegance.' },
{ id: 32, name: 'Dazzle Cuff', category: 'jewelry', image: 'https://images.pexels.com/photos/3641056/pexels-photo-3641056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 60, discount: '-25%', description: 'An emerald green necklace that captures timeless beauty.' },
{ id: 33, name: 'Crown Of Luxe', category: 'jewelry', image: 'https://images.pexels.com/photos/15553579/pexels-photo-15553579/free-photo-of-crown-with-diamonds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 45, discount: '-15%', description: 'Delicate earrings resembling drops of starlight.' },
{ id: 34, name: 'Timeless Allure', category: 'jewelry', image: 'https://images.pexels.com/photos/15684108/pexels-photo-15684108/free-photo-of-crystal-jewelry-set-on-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 70, discount: '-30%', description: 'A statement gold necklace fit for royalty.' },
{ id: 35, name: 'Titans Grace', category: 'jewelry', image: 'https://images.pexels.com/photos/17482173/pexels-photo-17482173/free-photo-of-close-up-of-a-ring.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 65, discount: '-25%', description: 'Opal earrings that shimmer with every movement.' },
{ id: 36, name: 'Noble Glow', category: 'jewelry', image: 'https://images.pexels.com/photos/9651417/pexels-photo-9651417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', price: 85, discount: '-20%', description: 'A dazzling diamond bracelet that shines bright on any occasion.' }
];

function initItems() {
    const category = document.body.getAttribute('data-category'); // Get category from HTML
    const filteredItems = items.filter(item => item.category === category);
    const itemList = document.querySelector('.items');

    filteredItems.forEach(({ image, name, price, id, category }) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.width = '33%';

        // Determine the link based on the item category
        let detailsLink = '';
        if (category === 'shoes') {
            detailsLink = 'shoesdetails.html'; // Link for shoes
        } else if (category === 'clothing') {
            detailsLink = 'clothesdetails.html'; // Link for clothing
        } else if (category === 'jewelry') {
            detailsLink = 'jewellerydetails.html'; // Link for jewelry
        }

        card.innerHTML = `
            <img src="${image}" class="card-img-top" alt="${name}">
            <div class="card-body">
                <h4 class="card-title text-center">${name}</h4>
                <p class="card-text text-center">Price: $${price}</p>
                <button class="add-to-cart btn btn-dark form-control" onclick="addToCart(${id})">Add to Cart</button>
                <a href="${detailsLink}?id=${id}" class="btn btn-info form-control mt-2">View Details</a>
            </div>
        `;

        itemList.appendChild(card);
    });
}


// Add to Cart Functionality with Alert
function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let item = items.find(item => item.id === id);
    let existingItemIndex = cart.findIndex(cartItem => cartItem.id === id);

    if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1;  // Increase quantity
    } else {
        item.quantity = 1;
        cart.push(item);  // Add new item
    }

    localStorage.setItem('cart', JSON.stringify(cart));  // Save to localStorage

    // Display an alert indicating that the item has been added to the cart
    alert('Item has been added to your cart!');
}


// Start the script
initItems();