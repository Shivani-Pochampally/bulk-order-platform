const db = require('./config/db');

// Array of products with images

    const products = [
  { name: 'Tomato', price: 20, image: 'https://media.istockphoto.com/id/847335116/photo/tomatoes-on-the-vine.jpg?s=612x612&w=0&k=20&c=XspM2ySvUfqjnt7HL5qKyn0tyRb5qLsf1GAP6-3xQsw=' },
  { name: 'Potato', price: 15, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG90YXRvfGVufDB8fDB8fHww' },
  { name: 'Apple', price: 50, image: 'https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Banana', price: 30, image: 'https://media.gettyimages.com/id/173242750/photo/banana-bunch.jpg?s=612x612&w=gi&k=20&c=0zMAHtwBfpRc6EVz-JSmpkhPn9wVIJt6O_4DSzc3UTw=' },
  { name: 'Carrot', price: 25, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90fGVufDB8fDB8fHww' },
  { name: 'Onion', price: 18, image: 'https://i.pinimg.com/736x/57/1d/50/571d509a0690989ce5f325b4c2559d8e.jpg' },

  { name: 'Cabbage', price: 22, image: 'https://assets.clevelandclinic.org/transform/871f96ae-a852-4801-8675-683191ce372d/Benefits-Of-Cabbage-589153824-770x533-1_jpg' },
  { name: 'Cauliflower', price: 28, image: 'https://media.istockphoto.com/id/90634594/photo/close-up-of-several-heads-of-cauliflower.jpg?s=612x612&w=0&k=20&c=hpYY7BqSUNwM-oq26wNv5pGLSPf4HijXr3zA0J3yd0E=' },
  { name: 'Brinjal', price: 24, image: 'https://smartyield.in/wp-content/uploads/2021/06/Big-brinjal-eggplant.png' },
  { name: 'Capsicum', price: 35, image: 'https://t4.ftcdn.net/jpg/02/87/25/37/360_F_287253716_I1seSRet5pt8YGBRRcTbPPV1WesM00n9.jpg' },
  { name: 'Beans', price: 26, image: 'https://img.freepik.com/free-photo/fresh-raw-green-beans_181624-6071.jpg?semt=ais_hybrid&w=740&q=80' },
  { name: 'Mango', price: 60, image: 'https://www.shutterstock.com/image-photo/fresh-mango-on-tree-garden-260nw-2617161019.jpg' },
  { name: 'Orange', price: 40, image: 'https://i.pinimg.com/736x/61/23/e1/6123e1e54a33de953797718103887089.jpg' },
  { name: 'Grapes', price: 55, image: 'https://m.media-amazon.com/images/I/51qW4jcUVJL._AC_UF1000,1000_QL80_.jpg' },
  { name: 'Pineapple', price: 45, image: 'https://findfresh.in/attachments/shop_images/pineapple-500x500.webp' },
  { name: 'Papaya', price: 38, image: 'https://media.istockphoto.com/id/864053288/photo/whole-and-half-of-ripe-papaya-fruit-with-seeds-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=hJ5DpNTt0oKjZMIHYV6gUHTntB2zIs_78dPKiuDUXgE=' }
];



// Insert products into the database
products.forEach((p) => {
    db.run(
        'INSERT INTO products (name, price, image) VALUES (?, ?, ?)',
        [p.name, p.price, p.image],
        (err) => {
            if (err) console.error('Error inserting product:', err.message);
            else console.log(`Inserted ${p.name}`);
        }
    );
});
