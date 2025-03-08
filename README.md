**Market Shop**

**Author:** Chaymae Belamkadem

*****
**Steps:**

- `git clone https://github.com/chama700/market_shop.git market_shop`

*****
**Backend:**

- `cd market_shop/backend`
  
- `npm install`

- `node server.js`

*****
**Frontend:**

- `cd market_shop/client`

- `npm install`

- `npm start`

**Website:**
- http://localhost:3000/

*****
**Database:**

- Insert the data into the products collection:

```javascript
db.products.insertMany([
  {
    "_id": ObjectId("67c75710160dbaaaa7db6eaf"),
    "name": "Apple",
    "type": "Fruit",
    "description": "Fresh and crispy",
    "price": 150,
    "image": "/images/apple.jpg",
    "__v": 0
  },
  {
    "_id": ObjectId("67c75710160dbaaaa7db6eb0"),
    "name": "Banana",
    "type": "Fruit",
    "description": "Rich in potassium",
    "price": 75,
    "image": "/images/banana.jpg",
    "__v": 0
  },
  {
    "_id": ObjectId("67c75710160dbaaaa7db6eb1"),
    "name": "Orange",
    "type": "Fruit",
    "description": "Packed with vitamin C",
    "price": 200,
    "image": "/images/orange.jpg",
    "__v": 0
  },
  {
    "_id": ObjectId("67c75710160dbaaaa7db6eb2"),
    "name": "Carrot",
    "type": "Vegetable",
    "description": "Healthy and crunchy",
    "price": 100,
    "image": "/images/carrot.jpg",
    "__v": 0
  },
  {
    "_id": ObjectId("67c75710160dbaaaa7db6eb3"),
    "name": "Broccoli",
    "type": "Vegetable",
    "description": "Nutrient-rich greens",
    "price": 175,
    "image": "/images/brocoli.jpg",
    "__v": 0
  },
  {
    "_id": ObjectId("67c75710160dbaaaa7db6eb4"),
    "name": "Grapes",
    "type": "Fruit",
    "description": "Sweet and juicy",
    "price": 250,
    "image": "/images/grapes.jpg",
    "__v": 0
  },
  {
    "_id": ObjectId("67c75710160dbaaaa7db6eb5"),
    "name": "Strawberry",
    "type": "Fruit",
    "descriptio
