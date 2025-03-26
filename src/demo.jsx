export const products = [
    {
        id: '1',
        name: 'Samsung Galaxy S23 Ultra 5G',
        category: 'electronics',
        brand: 'Samsung',
        color: ['Phantom Black', 'Cream', 'Green'],
        price: 124999,
        discount: 12,
        finalPrice: 109999,
        images: [
            'https://via.placeholder.com/300x300?text=Front+View',
            'https://via.placeholder.com/300x300?text=Back+View',
            'https://via.placeholder.com/300x300?text=Side+View'
        ],
        stock: { available: true, quantity: 50 },
        rating: 4.8
    },
    {
        id: '2',
        name: 'Apple iPhone 15 Pro Max',
        category: 'electronics',
        brand: 'Apple',
        color: ['Natural Titanium', 'Blue Titanium'],
        price: 159999,
        discount: 10,
        finalPrice: 143999,
        images: [
            'https://via.placeholder.com/300x300?text=Front',
            'https://via.placeholder.com/300x300?text=Back'
        ],
        stock: { available: true, quantity: 30 },
        rating: 4.9
    },
    {
        id: '3',
        name: 'Sony WH-1000XM5 Wireless Headphones',
        category: 'audio',
        brand: 'Sony',
        color: ['Black', 'Silver'],
        price: 29999,
        discount: 15,
        finalPrice: 25499,
        images: ['https://via.placeholder.com/300x300?text=Headphones'],
        stock: { available: true, quantity: 100 },
        rating: 4.7
    },
    {
        id: '4',
        name: 'LG 55-inch 4K OLED TV',
        category: 'home_appliance',
        brand: 'LG',
        color: ['Black'],
        price: 189999,
        discount: 18,
        finalPrice: 155999,
        images: ['https://via.placeholder.com/300x300?text=TV'],
        stock: { available: true, quantity: 20 },
        rating: 4.6
    },
    {
        id: '5',
        name: 'Nike Air Zoom Pegasus 40',
        category: 'fashion',
        brand: 'Nike',
        color: ['Black', 'White', 'Blue'],
        price: 12999,
        discount: 20,
        finalPrice: 10399,
        images: ['https://via.placeholder.com/300x300?text=Shoes'],
        stock: { available: true, quantity: 75 },
        rating: 4.5
    },
    {
        id: '6',
        name: 'Dell XPS 15 (2024 Model)',
        category: 'laptops',
        brand: 'Dell',
        color: ['Silver', 'Black'],
        price: 199999,
        discount: 14,
        finalPrice: 171999,
        images: ['https://via.placeholder.com/300x300?text=Laptop'],
        stock: { available: false, quantity: 0 },
        rating: 4.8
    },
    {
        id: '7',
        name: 'Samsung 500L Double Door Refrigerator',
        category: 'home_appliance',
        brand: 'Samsung',
        color: ['Silver'],
        price: 69999,
        discount: 25,
        finalPrice: 52499,
        images: ['https://via.placeholder.com/300x300?text=Fridge'],
        stock: { available: true, quantity: 40 },
        rating: 4.4
    },
    {
        id: '8',
        name: 'Apple Watch Series 9',
        category: 'wearables',
        brand: 'Apple',
        color: ['Midnight', 'Starlight'],
        price: 45999,
        discount: 8,
        finalPrice: 42399,
        images: ['https://via.placeholder.com/300x300?text=Watch'],
        stock: { available: true, quantity: 65 },
        rating: 4.9
    },
    {
        id: '9',
        name: 'Bose SoundLink Revolve+ Bluetooth Speaker',
        category: 'audio',
        brand: 'Bose',
        color: ['Triple Black', 'Silver'],
        price: 24999,
        discount: 15,
        finalPrice: 21249,
        images: ['https://via.placeholder.com/300x300?text=Speaker'],
        stock: { available: true, quantity: 80 },
        rating: 4.7
    },
    {
        id: '10',
        name: 'Xiaomi Pad 6 Pro',
        category: 'tablets',
        brand: 'Xiaomi',
        color: ['Blue', 'Gray'],
        price: 49999,
        discount: 10,
        finalPrice: 44999,
        images: ['https://via.placeholder.com/300x300?text=Tablet'],
        stock: { available: true, quantity: 90 },
        rating: 4.6
    }
];

console.log(products);
