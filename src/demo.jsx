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
            'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-kv.jpg',
            'https://images.samsung.com/in/smartphones/galaxy-s23-ultra/images/galaxy-s23-ultra-highlights-back.jpg'
        ],
        stock: { available: true, quantity: 50 },
        rating: 4.8,
        disruption:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptas reiciendis recusandae vitae dolore, odit laborum labore, alias fugit aut velit consequuntur omnis sit. Doloremque similique voluptatibus molestiae corrupti ipsum?'
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
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009279096',
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693009278906'
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
        images: [
            'https://m.media-amazon.com/images/I/61uEv9ZPZKL._SL1500_.jpg',
            'https://m.media-amazon.com/images/I/71D9OsZoqaL._SL1500_.jpg'
        ],
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
        images: [
            'https://www.lg.com/in/images/tvs/md07562586/gallery/OLED55C3PSA-D-01-v1.jpg'
        ],
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
        images: [
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/175e4ce0-0e1c-4d22-bc54-ba62d80a8ba6/air-zoom-pegasus-40-mens-road-running-shoes-zD8H1c.png'
        ],
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
        images: [
            'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/notebook-xps-9530-t-gallery-1.psd?fmt=png-alpha&pscan=auto&scl=1&wid=4560&hei=2400&qlt=100,0&resMode=sharp2&size=4560,2400'
        ],
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
        images: [
            'https://images.samsung.com/is/image/samsung/in-side-by-side-refrigerator-rl53tgba4x1-rl53tgba4x1-gl-531001577?$650_519_PNG$'
        ],
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
        images: [
            'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-series9-aluminum-midnight-cell-45mm-s9?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1693504587416'
        ],
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
        images: [
            'https://assets.bose.com/content/dam/Bose_DAM/Web/consumer_electronics/global/products/speakers/soundlink_revolve_plus_speaker/product_silo_images/SoundLink_Revolve_Plus_Black_EC_hero.psd/jcr:content/renditions/cq5dam.web.1000.1000.png'
        ],
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
        images: [
            'https://i02.appmifile.com/821_operator_in/22/06/2023/4c5c6a1a7d8a1c8d0b3c3e3e3e3e3e3e!800x800.png'
        ],
        stock: { available: true, quantity: 90 },
        rating: 4.6
    }
];

