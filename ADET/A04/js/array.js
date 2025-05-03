var products = [
  {
    "category": "ALL MENU",
    "picture": "assets/img/all_menu.png",
    "contents": [
      {
        "isAvailable": true,
        "name": "Caramel Frappuccino",
        "code": "CF",
        "picture": "assets/img/frappuccino/caramel_frappuccino.png",
        "price": 185.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 185 },
          { "name": "medium", "code": "M", "price": 195 },
          { "name": "large", "code": "L", "price": 205 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Java Chip Frappuccino",
        "code": "JCF",
        "picture": "assets/img/frappuccino/java_chip_frappuccino.png",
        "price": 200.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 200 },
          { "name": "medium", "code": "M", "price": 210 },
          { "name": "large", "code": "L", "price": 220 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Coffee Jelly Frappuccino",
        "code": "CJF",
        "picture": "assets/img/frappuccino/coffee_jelly_frappuccino.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 200 },
          { "name": "large", "code": "L", "price": 205 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Mocha Jelly Frappuccino",
        "code": "MJF",
        "picture": "assets/img/frappuccino/mocha_jelly_frappuccino.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 200 },
          { "name": "large", "code": "L", "price": 205 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Vanilla Latte Frappuccino",
        "code": "VLF",
        "picture": "assets/img/frappuccino/vanilla_latte_frappuccino.png",
        "price": 190.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 190 },
          { "name": "medium", "code": "M", "price": 200 },
          { "name": "large", "code": "L", "price": 210 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Hazelnut Frappuccino",
        "code": "HF",
        "picture": "assets/img/frappuccino/hazelnut_mocha_frappuccino.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Espresso Frappuccino",
        "code": "EF",
        "picture": "assets/img/frappuccino/espresso_frappuccino.png",
        "price": 185.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 185 },
          { "name": "medium", "code": "M", "price": 195 },
          { "name": "large", "code": "L", "price": 205 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Cinnamon Frappuccino",
        "code": "CF",
        "picture": "assets/img/frappuccino/cinnamon_coffee_frappuccino.png",
        "price": 190.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 190 },
          { "name": "medium", "code": "M", "price": 200 },
          { "name": "large", "code": "L", "price": 210 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Matcha Green Tea",
        "code": "MGT",
        "picture": "assets/img/tea/matcha_green_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Thai Tea",
        "code": "THT",
        "picture": "assets/img/tea/thai_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Lemon Tea",
        "code": "LT",
        "picture": "assets/img/tea/lemon_frappuccino.png",
        "price": 200.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 200 },
          { "name": "medium", "code": "M", "price": 210 },
          { "name": "large", "code": "L", "price": 220 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Milk Tea",
        "code": "MT",
        "picture": "assets/img/tea/milk_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Strawberry Tea",
        "code": "ST",
        "picture": "assets/img/tea/strawberry_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Blue Lemonade Tea",
        "code": "BLT",
        "picture": "assets/img/tea/blue_lemonade_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Hibiscus Tea",
        "code": "HT",
        "picture": "assets/img/tea/hibiscus_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Blueberry Tea",
        "code": "BBT",
        "picture": "assets/img/tea/blue_berry_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Orange Juice",
        "code": "OJ",
        "picture": "assets/img/juice/orange_juice.png",
        "price": 150.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 150 },
          { "name": "medium", "code": "M", "price": 160 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Strawberry Juice",
        "code": "SJ",
        "picture": "assets/img/juice/strawberry_juice.png",
        "price": 150.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 150 },
          { "name": "medium", "code": "M", "price": 160 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Apple Juice",
        "code": "AJ",
        "picture": "assets/img/juice/apple_juice.png",
        "price": 155.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 155 },
          { "name": "medium", "code": "M", "price": 165 },
          { "name": "large", "code": "L", "price": 175 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Grape Juice",
        "code": "GJ",
        "picture": "assets/img/juice/grape_juice.png",
        "price": 160.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 160 },
          { "name": "medium", "code": "M", "price": 170 },
          { "name": "large", "code": "L", "price": 180 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Blue Mojito Juice",
        "code": "BMJ",
        "picture": "assets/img/juice/blue_mojito_juice.png",
        "price": 150.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 150 },
          { "name": "medium", "code": "M", "price": 160 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Pine Apple Juice",
        "code": "PAJ",
        "picture": "assets/img/juice/pine_apple_juice.png",
        "price": 155.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 155 },
          { "name": "medium", "code": "M", "price": 165 },
          { "name": "large", "code": "L", "price": 175 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Kiwi Juice",
        "code": "KJ",
        "picture": "assets/img/juice/kiwi_juice.png",
        "price": 150.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 150 },
          { "name": "medium", "code": "M", "price": 160 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Mango Juice",
        "code": "MJ",
        "picture": "assets/img/juice/mango_juice.png",
        "price": 160.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 160 },
          { "name": "medium", "code": "M", "price": 170 },
          { "name": "large", "code": "L", "price": 180 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Egg Pie",
        "code": "EP",
        "picture": "assets/img/pastry/egg_pie.png",
        "price": 80.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 80 },
          { "name": "medium", "code": "M", "price": 100 },
          { "name": "large", "code": "L", "price": 120 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Croissant",
        "code": "CRO",
        "picture": "assets/img/pastry/croissant.png",
        "price": 80.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 80 },
          { "name": "medium", "code": "M", "price": 100 },
          { "name": "large", "code": "L", "price": 120 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Doughnut",
        "code": "DOU",
        "picture": "assets/img/pastry/doughnut.png",
        "price": 90.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 90 },
          { "name": "medium", "code": "M", "price": 110 },
          { "name": "large", "code": "L", "price": 130 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Empanada",
        "code": "EMP",
        "picture": "assets/img/pastry/empanada.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 140 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Cinnamon roll",
        "code": "CR",
        "picture": "assets/img/pastry/cinnamon_roll.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Custard Tart",
        "code": "CT",
        "picture": "assets/img/pastry/custard_tart.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Churros",
        "code": "PFR",
        "picture": "assets/img/pastry/churros.png",
        "price": 90.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 90 },
          { "name": "medium", "code": "M", "price": 110 },
          { "name": "large", "code": "L", "price": 130 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Bibingka",
        "code": "BB",
        "picture": "assets/img/pastry/bibingka.png",
        "price": 90.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 90 },
          { "name": "medium", "code": "M", "price": 110 },
          { "name": "large", "code": "L", "price": 130 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Spaghetti Pasta",
        "code": "SPAG",
        "picture": "assets/img/pasta/spaghetti.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Carbonara Pasta",
        "code": "CARB",
        "picture": "assets/img/pasta/carbonara.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 160 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Tomato Pasta",
        "code": "TOM",
        "picture": "assets/img/pasta/tomato_pasta.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Mushroom Pasta",
        "code": "MUS",
        "picture": "assets/img/pasta/mushroom_pasta.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 160 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Shrimp Pasta",
        "code": "SHR",
        "picture": "assets/img/pasta/shrimp_pasta.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Pesto Pasta",
        "code": "PES",
        "picture": "assets/img/pasta/pesto_pasta.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 160 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Spinach Pasta",
        "code": "SPI",
        "picture": "assets/img/pasta/spinach_pasta.png",
        "price": 120.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 120 },
          { "name": "medium", "code": "M", "price": 140 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Lasagna Pasta",
        "code": "LAS",
        "picture": "assets/img/pasta/lasagna_pasta.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      }
    ]
  },

  {
    "category": "Frappuccino",
    "picture": "assets/img/frappuccino.png",
    "contents": [
      {
        "isAvailable": true,
        "name": "Caramel Frappuccino",
        "code": "CF",
        "picture": "assets/img/frappuccino/caramel_frappuccino.png",
        "price": 185.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 185 },
          { "name": "medium", "code": "M", "price": 195 },
          { "name": "large", "code": "L", "price": 205 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Java Chip Frappuccino",
        "code": "JCF",
        "picture": "assets/img/frappuccino/java_chip_frappuccino.png",
        "price": 200.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 200 },
          { "name": "medium", "code": "M", "price": 210 },
          { "name": "large", "code": "L", "price": 220 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Coffee Jelly Frappuccino",
        "code": "CJF",
        "picture": "assets/img/frappuccino/coffee_jelly_frappuccino.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 200 },
          { "name": "large", "code": "L", "price": 205 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Mocha Jelly Frappuccino",
        "code": "MJF",
        "picture": "assets/img/frappuccino/mocha_jelly_frappuccino.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 200 },
          { "name": "large", "code": "L", "price": 205 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Vanilla Latte Frappuccino",
        "code": "VLF",
        "picture": "assets/img/frappuccino/vanilla_latte_frappuccino.png",
        "price": 190.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 190 },
          { "name": "medium", "code": "M", "price": 200 },
          { "name": "large", "code": "L", "price": 210 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Hazelnut Frappuccino",
        "code": "HF",
        "picture": "assets/img/frappuccino/hazelnut_mocha_frappuccino.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Espresso Frappuccino",
        "code": "EF",
        "picture": "assets/img/frappuccino/espresso_frappuccino.png",
        "price": 185.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 185 },
          { "name": "medium", "code": "M", "price": 195 },
          { "name": "large", "code": "L", "price": 205 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Cinnamon Frappuccino",
        "code": "CF",
        "picture": "assets/img/frappuccino/cinnamon_coffee_frappuccino.png",
        "price": 190.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 190 },
          { "name": "medium", "code": "M", "price": 200 },
          { "name": "large", "code": "L", "price": 210 }
        ]
      }
    ]
  },
  {
    "category": "Tea",
    "picture": "assets/img/tea.png",
    "contents": [
      {
        "isAvailable": true,
        "name": "Matcha Green Tea",
        "code": "MGT",
        "picture": "assets/img/tea/matcha_green_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Thai Tea",
        "code": "THT",
        "picture": "assets/img/tea/thai_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Lemon Tea",
        "code": "LT",
        "picture": "assets/img/tea/lemon_frappuccino.png",
        "price": 200.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 200 },
          { "name": "medium", "code": "M", "price": 210 },
          { "name": "large", "code": "L", "price": 220 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Milk Tea",
        "code": "MT",
        "picture": "assets/img/tea/milk_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Strawberry Tea",
        "code": "ST",
        "picture": "assets/img/tea/strawberry_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Blue Lemonade Tea",
        "code": "BLT",
        "picture": "assets/img/tea/blue_lemonade_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Hibiscus Tea",
        "code": "HT",
        "picture": "assets/img/tea/hibiscus_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Blueberry Tea",
        "code": "BBT",
        "picture": "assets/img/tea/blue_berry_tea.png",
        "price": 195.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 195 },
          { "name": "medium", "code": "M", "price": 205 },
          { "name": "large", "code": "L", "price": 215 }
        ]
      }
    ]
  },
  {
    "category": "Juice",
    "picture": "assets/img/juice.png",
    "contents": [
      {
        "isAvailable": true,
        "name": "Orange Juice",
        "code": "OJ",
        "picture": "assets/img/juice/orange_juice.png",
        "price": 150.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 150 },
          { "name": "medium", "code": "M", "price": 160 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Strawberry Juice",
        "code": "SJ",
        "picture": "assets/img/juice/strawberry_juice.png",
        "price": 150.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 150 },
          { "name": "medium", "code": "M", "price": 160 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Apple Juice",
        "code": "AJ",
        "picture": "assets/img/juice/apple_juice.png",
        "price": 155.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 155 },
          { "name": "medium", "code": "M", "price": 165 },
          { "name": "large", "code": "L", "price": 175 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Grape Juice",
        "code": "GJ",
        "picture": "assets/img/juice/grape_juice.png",
        "price": 160.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 160 },
          { "name": "medium", "code": "M", "price": 170 },
          { "name": "large", "code": "L", "price": 180 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Blue Mojito Juice",
        "code": "BMJ",
        "picture": "assets/img/juice/blue_mojito_juice.png",
        "price": 150.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 150 },
          { "name": "medium", "code": "M", "price": 160 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Pine Apple Juice",
        "code": "PAJ",
        "picture": "assets/img/juice/pine_apple_juice.png",
        "price": 155.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 155 },
          { "name": "medium", "code": "M", "price": 165 },
          { "name": "large", "code": "L", "price": 175 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Kiwi Juice",
        "code": "KJ",
        "picture": "assets/img/juice/kiwi_juice.png",
        "price": 150.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 150 },
          { "name": "medium", "code": "M", "price": 160 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Mango Juice",
        "code": "MJ",
        "picture": "assets/img/juice/mango_juice.png",
        "price": 160.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 160 },
          { "name": "medium", "code": "M", "price": 170 },
          { "name": "large", "code": "L", "price": 180 }
        ]
      }
    ]
  },
  {
    "category": "Pastry",
    "picture": "assets/img/pastry.png",
    "contents": [
      {
        "isAvailable": true,
        "name": "Egg Pie",
        "code": "EP",
        "picture": "assets/img/pastry/egg_pie.png",
        "price": 80.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 80 },
          { "name": "medium", "code": "M", "price": 100 },
          { "name": "large", "code": "L", "price": 120 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Croissant",
        "code": "CRO",
        "picture": "assets/img/pastry/croissant.png",
        "price": 80.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 80 },
          { "name": "medium", "code": "M", "price": 100 },
          { "name": "large", "code": "L", "price": 120 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Doughnut",
        "code": "DOU",
        "picture": "assets/img/pastry/doughnut.png",
        "price": 90.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 90 },
          { "name": "medium", "code": "M", "price": 110 },
          { "name": "large", "code": "L", "price": 130 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Empanada",
        "code": "EMP",
        "picture": "assets/img/pastry/empanada.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 140 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Cinnamon roll",
        "code": "CR",
        "picture": "assets/img/pastry/cinnamon_roll.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Custard Tart",
        "code": "CT",
        "picture": "assets/img/pastry/custard_tart.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Churros",
        "code": "PFR",
        "picture": "assets/img/pastry/churros.png",
        "price": 90.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 90 },
          { "name": "medium", "code": "M", "price": 110 },
          { "name": "large", "code": "L", "price": 130 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Bibingka",
        "code": "BB",
        "picture": "assets/img/pastry/bibingka.png",
        "price": 90.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 90 },
          { "name": "medium", "code": "M", "price": 110 },
          { "name": "large", "code": "L", "price": 130 }
        ]
      }
    ]
  },
  {
    "category": "Pasta",
    "picture": "assets/img/pasta.png",
    "contents": [
      {
        "isAvailable": true,
        "name": "Spaghetti Pasta",
        "code": "SPAG",
        "picture": "assets/img/pasta/spaghetti.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Carbonara Pasta",
        "code": "CARB",
        "picture": "assets/img/pasta/carbonara.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 160 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Tomato Pasta",
        "code": "TOM",
        "picture": "assets/img/pasta/tomato_pasta.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Mushroom Pasta",
        "code": "MUS",
        "picture": "assets/img/pasta/mushroom_pasta.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 160 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Shrimp Pasta",
        "code": "SHR",
        "picture": "assets/img/pasta/shrimp_pasta.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Pesto Pasta",
        "code": "PES",
        "picture": "assets/img/pasta/pesto_pasta.png",
        "price": 110.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 110 },
          { "name": "medium", "code": "M", "price": 130 },
          { "name": "large", "code": "L", "price": 160 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Spinach Pasta",
        "code": "SPI",
        "picture": "assets/img/pasta/spinach_pasta.png",
        "price": 120.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 120 },
          { "name": "medium", "code": "M", "price": 140 },
          { "name": "large", "code": "L", "price": 170 }
        ]
      },
      {
        "isAvailable": true,
        "name": "Lasagna Pasta",
        "code": "LAS",
        "picture": "assets/img/pasta/lasagna_pasta.png",
        "price": 100.00,
        "sizes": [
          { "name": "small", "code": "S", "price": 100 },
          { "name": "medium", "code": "M", "price": 120 },
          { "name": "large", "code": "L", "price": 150 }
        ]
      }
    ]
  }
]

var cart = [];
var subtotal = 0;
var discount = 0;
var tax = 0;
var total = 0;
var selectedPayment = '';
var selectedCategoryIndex = 0;

function generateBillNumber() {
  var randomNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  return randomNumber;
}

function updateBillNumber() {
  var billNumber = generateBillNumber();
  document.getElementById("bill-details").textContent = `BILL DETAILS #${billNumber}`;
}

function setCurrentDate() {
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById("currentDate").textContent = today.toLocaleDateString('en-US', options);
}

function loadCategories() {
  var categoriesContainer = document.getElementById("categories");
  categoriesContainer.innerHTML = '';
  products.forEach((product, index) => {
    var imageHtml = product.picture ? `<img src="` + product.picture + `" class="product-image" alt="` + product.category + `">` : '';
    categoriesContainer.innerHTML += `
        <div onclick="loadProducts('` + index + `')" class="card mx-1 custom-button text-center ${index === selectedCategoryIndex ? 'active' : ''}">
          ` + imageHtml + `
          <small>` + product.category + `</small>
        </div>
      `;
  });
}

function loadProducts(categoryIndex) {
  selectedCategoryIndex = categoryIndex;
  var maincontainer = document.getElementById("maincontainer");
  maincontainer.innerHTML = "";
  products[categoryIndex].contents.forEach((content, contentIndex) => {
    if (!content.isAvailable) return;
    var selectedSize = content.selectedSize || 'S';
    var displayPrice = content.sizes.find(s => s.code === selectedSize).price.toFixed(2);
    maincontainer.innerHTML += `
        <div class="product-card">
          <img src="` + content.picture + `" alt="` + content.name + `">
          <div>` + content.name + `</div>
          <div class="price">₱` + displayPrice + `</div>
          <div class="custom-option">
            <span>Size</span>
            <div>
              <button class="` + (selectedSize === 'S' ? 'active' : '') + `" onclick="setSize('` + categoryIndex + `', '` + contentIndex + `', 'S')">S</button>
              <button class="` + (selectedSize === 'M' ? 'active' : '') + `" onclick="setSize('` + categoryIndex + `', '` + contentIndex + `', 'M')">M</button>
              <button class="` + (selectedSize === 'L' ? 'active' : '') + `" onclick="setSize('` + categoryIndex + `', '` + contentIndex + `', 'L')">L</button>
            </div>
          </div>
          <button class="add-to-cart" onclick="addToCart('` + categoryIndex + `', '` + contentIndex + `')">Add to Cart</button>
        </div>
      `;
  });
  loadCategories();
}

function setSize(categoryIndex, contentIndex, size) {
  products[categoryIndex].contents[contentIndex].selectedSize = size;
  products[categoryIndex].contents[contentIndex].price = products[categoryIndex].contents[contentIndex].sizes.find(s => s.code === size).price;
  loadProducts(categoryIndex);
}

function addToCart(categoryIndex, contentIndex) {
  var product = products[categoryIndex].contents[contentIndex];
  var size = product.selectedSize || 'S';
  var price = product.sizes.find(s => s.code === size).price;

  var existingItem = cart.find(item => item.code === product.code && item.size === size);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    var cartItem = {
      name: product.name,
      code: product.code,
      size: size,
      price: price,
      quantity: 1
    };
    cart.push(cartItem);
  }

  updateCart();
}

function updateCart() {
  subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
  });
  tax = subtotal * 0.01;
  total = subtotal - discount + tax;

  var receiptContainer = document.getElementById("receipt-items");
  receiptContainer.innerHTML = '';
  cart.forEach((item, index) => {
    receiptContainer.innerHTML += `
        <div class="receipt-item">
          <div>
            <div>` + item.code + ` x` + item.quantity + `</div>
            <small>Size: ` + item.size + `</small>
          </div>
          <div>₱` + (item.price * item.quantity).toFixed(2) + `</div>
        </div>
      `;
  });

  document.getElementById("subtotalValue").innerHTML = "₱" + subtotal.toFixed(2);
  document.getElementById("discountValue").innerHTML = "-₱" + discount.toFixed(2);
  document.getElementById("taxValue").innerHTML = "₱" + tax.toFixed(2);
  document.getElementById("totalValue").innerHTML = "₱" + total.toFixed(2);
}

function searchProducts(query) {
  var maincontainer = document.getElementById("maincontainer");
  maincontainer.innerHTML = "";
  query = query.toLowerCase().trim();
  if (query === '') {
    loadProducts(selectedCategoryIndex);
    return;
  }

  var seenNames = new Set();
  var matchingProducts = [];

  products.forEach((category, categoryIndex) => {
    category.contents.forEach((content, contentIndex) => {
      var contentNameLower = content.name.toLowerCase();
      if (content.isAvailable && contentNameLower.includes(query)) {
        matchingProducts.push({
          categoryIndex,
          contentIndex,
          content,
          exactMatch: contentNameLower === query
        });
      }
    });
  });

  matchingProducts.sort((a, b) => {
    if (a.exactMatch && !b.exactMatch) return -1;
    if (!a.exactMatch && b.exactMatch) return 1;
    return a.content.name.localeCompare(b.content.name);
  });

  //no duplicates
  matchingProducts.forEach(({ categoryIndex, contentIndex, content, exactMatch }) => {
    var contentNameLower = content.name.toLowerCase();
    if (!seenNames.has(contentNameLower)) {
      seenNames.add(contentNameLower);
      var selectedSize = content.selectedSize || 'S';
      var displayPrice = content.sizes.find(s => s.code === selectedSize).price.toFixed(2);
      maincontainer.innerHTML += `
            <div class="product-card">
              <img src="` + content.picture + `" alt="` + content.name + `">
              <div>` + content.name + `</div>
              <div class="price">₱` + displayPrice + `</div>
              <div class="custom-option">
                <span>Size</span>
                <div>
                  <button class="` + (selectedSize === 'S' ? 'active' : '') + `" onclick="setSize('` + categoryIndex + `', '` + contentIndex + `', 'S')">S</button>
                  <button class="` + (selectedSize === 'M' ? 'active' : '') + `" onclick="setSize('` + categoryIndex + `', '` + contentIndex + `', 'M')">M</button>
                  <button class="` + (selectedSize === 'L' ? 'active' : '') + `" onclick="setSize('` + categoryIndex + `', '` + contentIndex + `', 'L')">L</button>
                </div>
              </div>
              <button class="add-to-cart" onclick="addToCart('` + categoryIndex + `', '` + contentIndex + `')">Add to Cart</button>
            </div>
          `;
    }
  });
}

function selectPayment(method) {
  selectedPayment = method;
  document.getElementById("cashButton").classList.remove("active");
  document.getElementById("cardButton").classList.remove("active");
  if (method === 'Cash') {
    document.getElementById("cashButton").classList.add("active");
  } else if (method === 'Card') {
    document.getElementById("cardButton").classList.add("active");
  }
}

function proceedTransaction() {
  if (cart.length === 0) {
    alert("Cart is empty. Please add items before proceeding.");
    return;
  }
  if (!selectedPayment) {
    alert("Please select a payment method.");
    return;
  }
  alert(`Transaction processed successfully via ${selectedPayment}!\nTotal: ₱${total.toFixed(2)}`);
  cart = [];
  subtotal = 0;
  discount = 0;
  tax = 0;
  total = 0;
  selectedPayment = '';
  updateCart();
  updateBillNumber();
  selectPayment('');
}

// Initialize
updateBillNumber();
setCurrentDate();
loadCategories();
loadProducts(0);