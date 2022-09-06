const foods = [
    {
        id: "1",
        name: "Grill Chicken",
        desc: " A mix of dried spices such as paprika, cumin, garlic, onion, coriander, salt, and pepper.",
        image_url: "https://www.spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20.jpg",
        price: 38,
        c: "Grillers"
    },
    {
        id: "2",
        name: "Tandoori Chicken",
        desc: "A dish of roasted chicken marinated in yogurt and generously spiced,",
        image_url: "https://img.delicious.com.au/FYRZk_hs/w759-h506-cfill/del/2017/06/tandoori-style-chicken-48263-2.jpg",
        price: 35,
        c: "Grillers"
    },
    {
        id: "3",
        name: "Barbeque Chicken",
        desc: "Chickens that are barbecued, grilled or smoked",
        image_url: "https://www.mashed.com/img/gallery/heres-the-difference-between-grilled-and-tandoori-chicken/intro-1607603831.jpg",
        price: 40,
        c: "Grillers"
    },
    {
        id: "4",
        name: "Crab and samphire salad",
        desc: "Samphire is a coastal succulent available from greengrocers. If unavailable, shaved asparagus, fennel or radish can be used.",
        image_url: "https://img.delicious.com.au/xgDVmFy4/w759-h506-cfill/del/2015/10/del1015p149-1-16842-1.jpg",
        price: 28,
        c: "Starters"
    },
    {
        id: "5",
        name: "Zucchini fritters",
        desc: "Gold zucchini fritters make a crunchy flavour-packed opener for any entertaining situation",
        image_url: "https://img.delicious.com.au/JiaTxDTT/w759-h506-cfill/del/2015/10/zucchini-fritters-15773-2.jpg",
        price: 24,
        c: "Starters"
    },
    {
        id: "6",
        name: "Carrot tzatziki",
        desc: "Carrot Dish",
        image_url: "https://img.delicious.com.au/SxcErOEi/w759-h506-cfill/del/2015/10/carrot-tzatziki-15562-2.jpg",
        price: 20,
        c: "Starters"
    },
    {
        id: "7",
        name: "Beef Manhattan ",
        desc: "A dish consisting of roast beef and gravy.",
        image_url: "https://www.foodtasticmom.com/wp-content/uploads/2021/03/manhattan-feature.jpg",
        price: 36,
        c: "Steaks"
    },
    {
        id: "8",
        name: "Classic Steak Fries",
        desc: "A meat and potatoes dish, but this French version is covered in an herb-spiked butter sauce",
        image_url: "https://www.eatthis.com/wp-content/uploads/sites/4/2019/01/paleo-steak-frites-compound-butter.jpg?resize=640,468&quality=82&strip=all",
        price: 50,
        c: "Steaks"
    },
    {
        id: "9",
        name: "Steak Nachos",
        desc: " a spicy cheese sauce and plenty of salsa, beans, tomatoes, onions, and jalapeño pepper to really spice up the steak",
        image_url: "https://www.eatthis.com/wp-content/uploads/sites/4/2018/12/healthy-steak-nachos.jpg?resize=640,468&quality=82&strip=all",
        price: 42,
        c: "Steaks"
    },
    {
        id: "10",
        name: "Chronic Candy",
        desc: "Powered Soft Drink",
        image_url: "https://images.squarespace-cdn.com/content/v1/525f12ace4b09f9731f53fa5/1610370280372-XBW1RQGE85EZH1U6R7V6/Solo-Flavor-Promo-Chronic.png",
        price: 10,
        c: "Soft Drinks"
    },
    {
        id: "11",
        name: "Explosion",
        desc: "Powered Soft Drink",
        image_url: "https://images.squarespace-cdn.com/content/v1/525f12ace4b09f9731f53fa5/1610370284182-H5YCCXQODZI9DOTOGFHI/Solo-Flavor-Promo-Explosion.png",
        price: 10,
        c: "Soft Drinks"
    },
    {
        id: "12",
        name: "Rainbow Chew",
        desc: "Powered Soft Drink",
        image_url: "https://images.squarespace-cdn.com/content/v1/525f12ace4b09f9731f53fa5/1610370288494-4LL12CU2B4JVX918TSY8/Solo-Flavor-Promo-Rainbow-Chew.png",
        price: 10,
        c: "Soft Drinks"
    },
    {
        id: "13",
        name: "Chocolate  Mousse",
        desc: "Choco Dessert",
        image_url: "https://i.pinimg.com/originals/8a/37/6c/8a376cd5d6dd75c0b97ef6a3c347c7f6.jpg",
        price: 20,
        c: "Desserts"
    },
    {
        id: "14",
        name: "Apple Mousse with Vanilla",
        desc: "Fruit Dessert",
        image_url: "https://gradcontent.com/lib/400x296/apple-mousse.jpg",
        price: 22,
        c: "Desserts"
    },
    {
        id: "15",
        name: "Mousse de dulce",
        desc: "Special Dessert",
        image_url: "https://www.que.es/wp-content/uploads/2022/07/Mousse-de-dulce-de-leche-el-postre-solo-apto-para-los-golosos-de-verdad-3-edited.jpg",
        price: 35,
        c: "Desserts"
    },
    {
        id: "16",
        name: "Ice Cream Sandwitch",
        desc: "Ice Cream",
        image_url: "https://images.aws.nestle.recipes/original/3b4fcb0e4565fe4241678146ba2a82d7_sundae_ice_cream_sandwich[1].jpg",
        price: 40,
        c: "Ice-Creams"
    },
    {
        id: "17",
        name: "Chocolate Peanut Butter Fudge Sundae",
        desc: "Ice Cream",
        image_url: "http://www.nigella.com/assets/uploads/recipes/chocolate-peanut-butter-fudge-5630e0c0e5919.jpg",
        price: 42,
        c: "Ice-Creams"
    },
    {
        id: "18",
        name: "Choco Sundae",
        desc: "Ice Cream",
        image_url: "https://www.keep-calm-and-eat-ice-cream.com/wp-content/uploads/2020/10/Chocolate-sundae-square.png",
        price: 12,
        c: "Ice-Creams"
    },
    {
        id: "19",
        name: "Mushroom and COrn",
        desc: "Soup",
        image_url: "https://www.recipetineats.com/wp-content/uploads/2021/09/Barley-Soup_40.jpg?w=747&h=747&crop=1",
        price: 36,
        c: "Soups"
    },
    {
        id: "20",
        name: "Pasta with Tomatoes",
        desc: "Soup",
        image_url: "https://food.unl.edu/newsletters/images/vegetable-soup-with-pasta.png",
        price: 34,
        c: "Soups"
    },
    {
        id: "21",
        name: "Mint and Veggies",
        desc: "Soup",
        image_url: "https://media.istockphoto.com/photos/hot-vegetable-soup-in-a-dish-made-of-natural-materials-traditional-picture-id1226586928?k=20&m=1226586928&s=170667a&w=0&h=ONvNkaRKNCw6qxItaGyRidQ6P7E98Xsb_JLncf-SvUs=",
        price: 32,
        c: "Soups"
    },



]
export default foods;