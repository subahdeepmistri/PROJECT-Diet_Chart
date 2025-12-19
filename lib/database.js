export const meals = {
    breakfast: [
        {
            id: 'b1',
            name: 'Paneer Bhurji with Toast',
            type: 'veg',
            calories: 350,
            protein: 18,
            carbs: 30,
            fats: 15,
            ingredients: [
                'Paneer (crumbled) - 100g',
                'Onion (chopped) - 1 small',
                'Tomato (chopped) - 1 small',
                'Green Chili - 1',
                'Whole Wheat Bread - 2 slices',
                'Oil/Ghee - 1 tsp'
            ],
            steps: [
                'Heat oil in a pan, add cumin seeds and chopped onions. Sauté until golden.',
                'Add tomatoes and green chili. Cook until soft.',
                'Add crumbled paneer, turmeric, salt, and chili powder. Mix well and cook for 2-3 mins.',
                'Serve hot with toasted bread.'
            ]
        },
        {
            id: 'b2',
            name: 'Oats Upma',
            type: 'veg',
            calories: 300,
            protein: 10,
            carbs: 45,
            fats: 8,
            ingredients: [
                'Rolled Oats - 50g',
                'Mixed Vegetables (Carrot, Peas) - 1/2 cup',
                'Onion - 1 small',
                'Mustard seeds - 1/2 tsp',
                'Curry leaves - 4-5',
                'Oil - 1 tsp'
            ],
            steps: [
                'Dry roast oats for 2-3 mins and set aside.',
                'Heat oil, add mustard seeds, curry leaves, and onions.',
                'Add vegetables and sauté for 2 mins. Add water and salt.',
                'When water boils, add roasted oats usually and cook until water evaporates.'
            ]
        },
        {
            id: 'b3',
            name: 'Egg Bhurji with Roti',
            type: 'non-veg',
            calories: 320,
            protein: 20,
            carbs: 25,
            fats: 12,
            ingredients: [
                'Eggs - 3',
                'Onion - 1 small',
                'Tomato - 1 small',
                'Whole Wheat Roti - 1',
                'Oil - 1 tsp'
            ],
            steps: [
                'Sauté onions and tomatoes in oil.',
                'Break eggs into the pan, add salt and spices.',
                'Scramble the eggs until cooked.',
                'Serve with a roti.'
            ]
        }
    ],
    lunch: [
        {
            id: 'l1',
            name: 'Chicken Curry & Rice',
            type: 'non-veg',
            calories: 500,
            protein: 30,
            carbs: 60,
            fats: 15,
            ingredients: [
                'Chicken Breast - 150g',
                'Rice (cooked) - 1.5 cups',
                'Onion & Tomato base',
                'Ginger Garlic Paste - 1 tsp',
                'Spices'
            ],
            steps: [
                'Sauté onion paste and ginger-garlic paste.',
                'Add tomato puree and cook until oil separates.',
                'Add chicken pieces and spices. Cover and cook until tender.',
                'Serve with steamed rice.'
            ]
        },
        {
            id: 'l2',
            name: 'Dal Tadka, Sabzi & Roti',
            type: 'veg',
            calories: 450,
            protein: 18,
            carbs: 65,
            fats: 12,
            ingredients: [
                'Toor Dal (cooked) - 1 cup',
                'Seasonal Vegetable Sabzi - 1 cup',
                'Rotis - 2',
                'Ghee - 1 tsp'
            ],
            steps: [
                'Prepare dal with a tadka of cumin, garlic, and chili.',
                'Make a dry vegetable stir-fry (sabzi) with minimal oil.',
                'Serve with rotis.'
            ]
        },
        {
            id: 'l3',
            name: 'Soya Chunk Curry & Rice',
            type: 'veg',
            calories: 480,
            protein: 25,
            carbs: 60,
            fats: 14,
            ingredients: [
                'Soya Chunks - 50g',
                'Potato - 1 small',
                'Rice - 1.5 cups',
                'Yogurt - 2 tbsp'
            ],
            steps: [
                'Boil soya chunks and squeeze out water.',
                'Marinate with yogurt and spices.',
                'Cook in onion-tomato gravy with potatoes until soft.',
                'Enjoy with rice.'
            ]
        }
    ],
    dinner: [
        {
            id: 'd1',
            name: 'Grilled Fish/Chicken Salad',
            type: 'non-veg',
            calories: 350,
            protein: 35,
            carbs: 10,
            fats: 15,
            ingredients: [
                'Fish Fillet or Chicken Breast - 150g',
                'Mixed Lettuce/Veggies',
                'Olive Oil - 1 tsp',
                'Lemon Juice'
            ],
            steps: [
                'Marinate protein with lemon, salt, and pepper.',
                'Grill in a pan with olive oil.',
                'Toss with fresh salad greens.'
            ]
        },
        {
            id: 'd2',
            name: 'Moong Dal Khichdi',
            type: 'veg',
            calories: 350,
            protein: 12,
            carbs: 55,
            fats: 8,
            ingredients: [
                'Rice & Moong Dal mix - 3/4 cup',
                'Cumin seeds',
                'Turmeric',
                'Ghee - 1 tsp'
            ],
            steps: [
                'Wash rice and dal.',
                'Pressure cook with turmeric, salt, and water.',
                'Temper cumin seeds in ghee and pour over khichdi.'
            ]
        },
        {
            id: 'd3',
            name: 'Paneer Tickka & Salad',
            type: 'veg',
            calories: 300,
            protein: 18,
            carbs: 15,
            fats: 18,
            ingredients: [
                'Paneer cubes - 100g',
                'Capsicum, Onion cubes',
                'Yogurt marinade',
                'Salad'
            ],
            steps: [
                'Marinate paneer and veggies in yogurt and spices.',
                'Grill on a tawa or oven until charred.',
                'Serve with cucumber salad.'
            ]
        }
    ],
    snacks: [
        {
            id: 's1',
            name: 'Roasted Chana & Tea',
            type: 'veg',
            calories: 150,
            protein: 6,
            carbs: 20,
            fats: 4,
            ingredients: ['Roasted Gram - 1/2 cup', 'Tea/Coffee (no sugar)'],
            steps: ['Simply serve roasted chana with your evening beverage.']
        },
        {
            id: 's2',
            name: 'Fruit Salad',
            type: 'veg',
            calories: 120,
            protein: 2,
            carbs: 30,
            fats: 0,
            ingredients: ['Seasonal Fruits - 1 bowl', 'Chaat Masala'],
            steps: ['Chop fruits and sprinkle chaat masala.']
        }
    ]
};
