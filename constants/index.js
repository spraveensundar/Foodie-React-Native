export const categories =[

    {
        id:1,
        name:'Burger',
        image:require("../assets/images/burger.png")
    },
    {
        id:2,
        name:'Pizza',
        image:require("../assets/images/pizzaIcon.png")
    },
    {
        id:3,
        name:'Sand wich',
        image:require("../assets/images/sandwich.png")
    },
    {
        id:4,
        name:'Chinese',
        image:require("../assets/images/soup.png")
    },
    {
        id:5,
        name:'Sweets',
        image:require("../assets/images/sweet.png")
    },
    {
        id:6,
        name:'Noodels',
        image:require("../assets/images/noodles.png")
    },
    {
        id:7,
        name:'Italian',
        image:require("../assets/images/pasta.png")
    } ,
    {
        id:8,
        name:'Drinks',
        image:require("../assets/images/Drink.png")
    },
    {
        id:9,
        name:'KFC',
        image:require("../assets/images/kfcicon.png")
    }
    
]





export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'KFC',
            image: require('../assets/images/kfc.jpg'),
            description: 'Hot and spicy pizzas',
            lng: 8.866194285377759,
            lat: 77.49575827586199,
            address: 'PF32+F3J, Ambai',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Chicken',
                   description: 'cheezy garlic chicken',
                   price: 1999,
                   image:  require('../assets/images/chicken.jpg')
                },
                {
                   id: 2,
                   name: 'Burger',
                   description: 'cheezy Burger',
                   price: 200,
                   image:  require('../assets/images/burgers.jpg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 250,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 4,
                    name: 'Sandwich',
                    description: 'spicy pizza',
                    price: 100,
                    image:  require('../assets/images/sandwichs.jpg')
                 },
                 {
                    id: 5,
                    name: 'Fries',
                    description: 'French Fries',
                    price: 100,
                    image:  require('../assets/images/french.jpg')
                 },
            ]
    
        },
        {
            id: 2,
            name: 'Foodi Hunter',
            image: require('../assets/images/food.jpg'),
            description: 'Hot and spicy pizzas',
            lng: 8.866194285377759,
            lat: 77.49575827586199,
            address: 'Salai,Kokirakulam',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Chicken',
                   description: 'cheezy garlic chicken',
                   price: 1999,
                   image:  require('../assets/images/chicken.jpg')
                },
                {
                   id: 2,
                   name: 'Burger',
                   description: 'cheezy Burger',
                   price: 200,
                   image:  require('../assets/images/burgers.jpg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 250,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 4,
                    name: 'Sandwich',
                    description: 'spicy pizza',
                    price: 100,
                    image:  require('../assets/images/sandwichs.jpg')
                 },
                 {
                    id: 5,
                    name: 'Driks',
                    description: 'Chill driks',
                    price: 50,
                    image:  require('../assets/images/drinks.jpg')
                 },
            ]
    
        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: 8.866194285377759,
            lat: 77.49575827586199,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Chicken',
                   description: 'cheezy garlic chicken',
                   price: 1999,
                   image:  require('../assets/images/chicken.jpg')
                },
                {
                   id: 2,
                   name: 'Burger',
                   description: 'cheezy Burger',
                   price: 200,
                   image:  require('../assets/images/burgers.jpg')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 250,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                    id: 4,
                    name: 'Sandwich',
                    description: 'spicy pizza',
                    price: 100,
                    image:  require('../assets/images/sandwichs.jpg')
                 },
            ]
    
        }
    ]
}