// Core Database of 150 User-Provided Recipes
const coreRecipes = [
    // --- BATCH 1 (General Indian: 1-100) ---
    {
        id: 1, name: "Paneer & Matar Ghugni", type: "veg",
        ingredients: ["100g Dried Yellow Peas (soaked)", "100g Paneer (cubed)", "1 Onion (chopped)", "1 tsp Ginger-Garlic Paste", "1 Tomato", "2 Green Chilies", "1 tbsp Mustard Oil", "Spices: Cumin, Turmeric, Salt"],
        instructions: ["Pressure cook peas with salt/turmeric for 3 whistles.", "Fry paneer cubes until golden, set aside.", "Fry onions, ginger-garlic, tomato, and spices.", "Add boiled peas and simmer.", "Add paneer, cook 2 mins, serve."]
    },
    {
        id: 2, name: "Sattu Paratha (Stuffed)", type: "veg",
        ingredients: ["1 cup Wheat Flour", "4 tbsp Sattu", "1 Onion (chopped)", "½ inch Ginger", "1 tsp Pickle Masala", "Mustard Oil", "Nigella Seeds", "Salt & Chili"],
        instructions: ["Make dough with flour and water.", "Mix sattu, onion, spices, and oil for filling.", "Stuff dough with filling, roll into circles.", "Cook on tawa with oil until brown spots appear."]
    },
    {
        id: 3, name: "Soya Keema Sandwich", type: "veg",
        ingredients: ["½ cup Soya Granules", "4 slices Brown Bread", "1 Onion", "1 Tomato", "Spices: Cumin, Turmeric, Chili", "1 tsp Oil", "Butter"],
        instructions: ["Boil and squeeze soya granules.", "Sauté cumin, onion, tomato, and spices.", "Add soya, cook until dry (bhurji style).", "Fill bread slices and toast with butter."]
    },
    {
        id: 4, name: "Moong Dal Cheela", type: "veg",
        ingredients: ["1 cup Yellow Moong Dal (soaked)", "Ginger & Green Chili", "½ tsp Cumin Seeds", "Pinch Hing", "½ cup Spinach", "1 tbsp Oil"],
        instructions: ["Grind soaked dal, ginger, chili to paste.", "Mix in spinach, cumin, hing, salt.", "Spread batter on hot oiled tawa.", "Cook both sides until golden."]
    },
    {
        id: 5, name: "Besan & Vegetable Toast", type: "veg",
        ingredients: ["½ cup Besan", "4 Bread Slices", "Onion, Tomato, Capsicum (chopped)", "1 tbsp Coriander", "¼ tsp Turmeric", "1 tbsp Oil"],
        instructions: ["Make medium batter with besan, veggies, spices.", "Dip bread in batter.", "Cook on hot tawa until golden brown."]
    },
    {
        id: 6, name: "High-Protein Masoor Dal Khichdi", type: "veg",
        ingredients: ["¾ cup Masoor Dal", "¼ cup Rice", "½ cup Cauliflower", "¼ cup Peas", "Onion", "Panch Phoron", "1 tbsp Mustard Oil"],
        instructions: ["Sauté spices, onion, and veggies in cooker.", "Add washed dal/rice.", "Add water, pressure cook for 2 whistles (semi-dry)."]
    },
    {
        id: 7, name: "Paneer Bhurji with Roti", type: "veg",
        ingredients: ["150g Paneer (crumbled)", "1 Onion", "1 Tomato", "2 Green Chilies", "Pao Bhaji Masala", "½ cup Wheat Flour (for roti)"],
        instructions: ["Make rotis.", "Sauté onion, tomato, chilies, and spices.", "Add crumbled paneer, cook on high heat for 2 mins.", "Serve with rotis."]
    },
    {
        id: 8, name: "Warm Sprouted Moong Chaat", type: "veg",
        ingredients: ["1.5 cups Sprouted Moong", "1 Boiled Potato", "Cucumber & Tomato", "1 tsp Lemon Juice", "Chaat Masala"],
        instructions: ["Steam sprouts for 5-7 mins.", "Mix with chopped potato, veggies.", "Add spices and lemon juice."]
    },
    {
        id: 9, name: "Curd Chira with Walnuts", type: "veg",
        ingredients: ["1 cup Poha (thick)", "1 cup Curd", "2 tbsp Walnuts", "1 Banana", "1 tsp Jaggery/Honey"],
        instructions: ["Wash and drain poha.", "Whisk curd with jaggery.", "Mix poha into curd.", "Top with banana and walnuts."]
    },
    {
        id: 10, name: "Chholar Dal with Toast", type: "veg",
        ingredients: ["100g Chana Dal (soaked)", "1 tbsp Coconut", "Ginger Paste", "Whole Spices (Bay leaf, Chili, Cumin)", "1 tbsp Oil", "2 Bread Slices"],
        instructions: ["Pressure cook dal.", "Fry coconut, set aside.", "Temper spices, add ginger, then dal.", "Simmer with sugar/coconut. Serve with toast."]
    },
    {
        id: 11, name: "Paneer Paratha", type: "veg",
        ingredients: ["1 cup Wheat Flour", "100g Grated Paneer", "Green Chili", "Coriander", "Cumin Powder", "Oil/Ghee"],
        instructions: ["Make dough.", "Mix paneer with spices.", "Stuff, roll, and roast on tawa with oil."]
    },
    {
        id: 12, name: "Vegetable Dalia Khichdi", type: "veg",
        ingredients: ["½ cup Dalia", "¼ cup Moong Dal", "½ cup Veggies (Carrot, Beans)", "Ginger Paste", "Cumin Seeds", "1 tbsp Oil"],
        instructions: ["Roast dalia/dal.", "Sauté cumin, veggies, ginger.", "Add grains and water.", "Pressure cook 3 whistles."]
    },
    {
        id: 13, name: "Soya Chunks Curry with Toast", type: "veg",
        ingredients: ["1 cup Soya Chunks (boiled)", "Onion", "1 tbsp Tomato Sauce", "1 tsp Soya Sauce", "Green Chili", "Oil", "Bread"],
        instructions: ["Fry onion/chili.", "Add soya chunks, stir fry.", "Add sauces and salt, coat well.", "Serve with toast."]
    },
    {
        id: 14, name: "Paneer Stuffed Besan Chilla", type: "veg",
        ingredients: ["½ cup Besan", "50g Crumbled Paneer", "Ajwain", "Turmeric", "Oil"],
        instructions: ["Make besan batter.", "Spread on tawa.", "Sprinkle paneer, fold like omelet.", "Cook until crispy."]
    },
    {
        id: 15, name: "Koraishutir Kochuri (Peas Puri)", type: "veg",
        ingredients: ["1 cup Green Peas", "1 cup Flour", "Ginger-Chili Paste", "Hing", "Oil for frying"],
        instructions: ["Sauté pea paste with hing.", "Stuff into dough balls.", "Roll and deep fry."]
    },
    {
        id: 16, name: "Chirer Pulao with Peanuts", type: "veg",
        ingredients: ["1.5 cups Poha (washed)", "¼ cup Peanuts", "Onion, Carrot, Peas", "Mustard Seeds", "Curry Leaves"],
        instructions: ["Fry peanuts.", "Temper mustard/curry leaves, sauté veggies.", "Add poha, salt, sugar.", "Toss with peanuts."]
    },
    {
        id: 17, name: "Pink Masoor Dal Soup", type: "veg",
        ingredients: ["½ cup Masoor Dal", "1 Tomato", "2 Garlic Cloves", "Butter", "Black Pepper"],
        instructions: ["Pressure cook dal, tomato, garlic.", "Whisk smooth.", "Temper with garlic butter.", "Sprinkle pepper."]
    },
    {
        id: 18, name: "Corn & Paneer Sandwich", type: "veg",
        ingredients: ["½ cup Boiled Corn", "50g Paneer", "4 Bread Slices", "Mayo/Curd", "Pepper", "Butter"],
        instructions: ["Mix corn, paneer, mayo, pepper.", "Fill sandwiches.", "Grill with butter."]
    },
    {
        id: 19, name: "Savory Sattu Porridge", type: "veg",
        ingredients: ["4 tbsp Sattu", "1.5 cups Water/Buttermilk", "Onion", "Green Chili", "Lemon Juice", "Roasted Cumin"],
        instructions: ["Mix sattu in liquid.", "Add chopping veggies and spices.", "Drink cold."]
    },
    {
        id: 20, name: "Kala Chana Ghugni", type: "veg",
        ingredients: ["½ cup Black Chana (soaked)", "1 Potato", "Onion-Ginger-Garlic Paste", "Spices", "Mustard Oil"],
        instructions: ["Pressure cook chana/potato.", "Fry masala paste.", "Add chana, simmer.", "Serve with puffed rice/roti."]
    },
    {
        id: 21, name: "Besan Bread French Toast", type: "veg",
        ingredients: ["½ cup Besan", "4 Bread Slices", "Tomato, Onion, Coriander", "Turmeric", "Oil"],
        instructions: ["Make veggie-besan batter.", "Dip bread.", "Pan fry until golden."]
    },
    {
        id: 22, name: "Moong Dal Paratha", type: "veg",
        ingredients: ["½ cup Thick Moong Dal", "1 cup Wheat Flour", "Ajwain", "Red Chili Powder", "Oil"],
        instructions: ["Knead flour with dal and spices.", "Roll out.", "Roast on tawa with oil."]
    },
    {
        id: 23, name: "Jhal Suji (Savory Upma)", type: "veg",
        ingredients: ["½ cup Suji", "2 tbsp Peanuts", "2 tbsp Peas", "Onion", "Mustard Seeds", "Oil"],
        instructions: ["Roast suji.", "Fry peanuts, mustard, onion, peas.", "Add water, boil.", "Add suji, cook until dry."]
    },
    {
        id: 24, name: "Paneer & Corn Chaat", type: "veg",
        ingredients: ["100g Paneer (raw cubes)", "½ cup Sweeet Corn", "Tomato, Cucumber", "Chaat Masala", "Lemon"],
        instructions: ["Toss all ingredients.", "Add lemon and chaat masala.", "No cook."]
    },
    {
        id: 25, name: "Aloo-Soya Paratha", type: "veg",
        ingredients: ["1 Boiled Potato", "½ cup Soya Granules", "1 cup Wheat Flour", "Amchur", "Oil"],
        instructions: ["Mix potato, soya, spices.", "Stuff into dough.", "Roll and fry on tawa."]
    },
    {
        id: 26, name: "Grilled Curd Sandwich", type: "veg",
        ingredients: ["½ cup Hung Curd", "Carrot, Capsicum", "Bread", "Pepper", "Butter"],
        instructions: ["Mix curd, veggies, seasonings.", "Spread on bread.", "Grill on low heat."]
    },
    {
        id: 27, name: "Matar Paneer (Dry) with Roti", type: "veg",
        ingredients: ["100g Paneer", "½ cup Peas", "2 tbsp Tomato Puree", "Cumin Powder", "2 Rotis"],
        instructions: ["Cook peas with puree and spices.", "Add paneer.", "Cook until dry. Serve with Roti."]
    },
    {
        id: 28, name: "Rajma Wrap", type: "veg",
        ingredients: ["½ cup Cooked Rajma", "Onion", "2 Rotis", "Lemon Juice", "Ketchup"],
        instructions: ["Mash rajma slightly.", "Spread ketchup on roti.", "Add rajma, onion, lemon.", "Roll."]
    },
    {
        id: 29, name: "Sweet Potato & Chana Chaat", type: "veg",
        ingredients: ["1 Boiled Sweet Potato", "½ cup Boiled Chickpeas", "Tamarind Chutney", "Cumin Powder", "Black Salt"],
        instructions: ["Mix all ingredients.", "Toss well."]
    },
    {
        id: 30, name: "Palak Paneer Bhurji", type: "veg",
        ingredients: ["1 cup Chopped Spinach", "100g Crumbled Paneer", "Garlic", "Oil"],
        instructions: ["Sauté garlic and spinach.", "Add paneer and spices.", "Stir fry 2 mins."]
    },
    {
        id: 31, name: "Masala Oats", type: "veg",
        ingredients: ["½ cup Rolled Oats", "Onion, Carrot, Peas", "Maggi Masala/Cumin", "Turmeric", "Oil"],
        instructions: ["Sauté veggies and spices.", "Add oats and roast.", "Add water, cook until creamy."]
    },
    {
        id: 32, name: "Bread Upma", type: "veg",
        ingredients: ["4 Bread Slices (cubed)", "Peanuts", "Onion, Tomato", "Mustard Seeds", "Oil"],
        instructions: ["Fry peanuts, mustard, onion, tomato.", "Add bread cubes and splash of water.", "Toss well."]
    },
    {
        id: 33, name: "Paneer Tikki", type: "veg",
        ingredients: ["100g Grated Paneer", "1 Boiled Potato", "Ginger, Chili", "Cornflour", "Oil"],
        instructions: ["Mix all ingredients.", "Shape into patties.", "Shallow fry."]
    },
    {
        id: 34, name: "Methi Thepla", type: "veg",
        ingredients: ["1 cup Flour", "½ cup Methi Leaves", "2 tbsp Curd", "Sesame Seeds", "Oil"],
        instructions: ["Knead dough with all ingredients.", "Roll thin.", "Roast on tawa."]
    },
    {
        id: 35, name: "Dry Ghugni Salad", type: "veg",
        ingredients: ["1 cup Boiled Yellow Peas", "Onion, Tomato, Cucumber", "Tamarind/Lemon", "Roasted Cumin"],
        instructions: ["Mix peas and veggies.", "Add spices and lemon.", "Toss."]
    },
    {
        id: 36, name: "Sweet Dalia Porridge", type: "veg",
        ingredients: ["½ cup Dalia", "1.5 cups Milk", "Sugar/Jaggery", "Cardamom", "Almonds"],
        instructions: ["Cook dalia in water.", "Add milk and sweetener.", "Boil until thick."]
    },
    {
        id: 37, name: "Soya Chunk Pulao", type: "veg",
        ingredients: ["½ cup Rice", "½ cup Soya Chunks", "Biryani Masala", "Ghee"],
        instructions: ["Sauté soya.", "Add rice, masala, water.", "Pressure cook 2 whistles."]
    },
    {
        id: 38, name: "Stuffed Shimla Mirch", type: "veg",
        ingredients: ["2 Capsicums", "100g Crumbled Paneer", "Onion", "Cumin Powder", "Oil"],
        instructions: ["Hollow capsicum.", "Mix paneer stuffing.", "Stuff capsicum.", "Slow cook in covered pan."]
    },
    {
        id: 39, name: "Jhal Sewai", type: "veg",
        ingredients: ["1 cup Vermicelli", "Peanuts", "Mustard Seeds", "Curry Leaves", "Oil"],
        instructions: ["Fry spices and peanuts.", "Add water, boil.", "Add vermicelli, simmer until dry."]
    },
    {
        id: 40, name: "Suji Toast", type: "veg",
        ingredients: ["½ cup Suji", "¼ cup Curd", "Onion, Tomato", "Bread", "Butter"],
        instructions: ["Make suji-curd paste with veggies.", "Spread on bread.", "Toast paste-side down first."]
    },
    {
        id: 41, name: "Peas (Matar) Paratha", type: "veg",
        ingredients: ["1 cup Boiled Peas (mashed)", "1 cup Flour", "Cumin Powder", "Oil"],
        instructions: ["Mix mashed peas and spices.", "Stuff into dough.", "Roll and fry."]
    },
    {
        id: 42, name: "Dahi Sandwich", type: "veg",
        ingredients: ["½ cup Hung Curd", "Mustard Seeds, Curry Leaves", "Turmeric", "Bread"],
        instructions: ["Temper curd with mustard/curry leaves.", "Spread on bread.", "Lightly toast."]
    },
    {
        id: 43, name: "Spinach & Corn Sandwich", type: "veg",
        ingredients: ["1 cup Spinach (chopped)", "¼ cup Corn", "Cheese/Paneer", "Bread"],
        instructions: ["Mix spinach, corn, cheese.", "Fill sandwich.", "Grill."]
    },
    {
        id: 44, name: "Soya Keema Matar", type: "veg",
        ingredients: ["½ cup Soya Granules", "½ cup Peas", "Onion-Tomato Paste", "Garam Masala", "Oil"],
        instructions: ["Fry masala paste.", "Add soya and peas.", "Cook with water till thick."]
    },
    {
        id: 45, name: "Paneer Jalfrezi", type: "veg",
        ingredients: ["100g Paneer (strips)", "Capsicum, Onion Tomato (strips)", "Ketchup", "Vinegar"],
        instructions: ["Stir fry veggies.", "Add paneer.", "Add sauces, toss quickly."]
    },
    {
        id: 46, name: "Chana Dal with Roti", type: "veg",
        ingredients: ["½ cup Chana Dal", "Ginger-Cumin Paste", "Dried Red Chili", "Roti"],
        instructions: ["Boil dal.", "Temper spices and ginger.", "Simmer dal.", "Serve with Roti."]
    },
    {
        id: 47, name: "Vegetable Chop", type: "veg",
        ingredients: ["Beetroot/Carrot mix", "Peanuts", "Potato", "Breadcrumbs", "Panch Phoron"],
        instructions: ["Mix boiled veggies and spices.", "Shape cylinders.", "Roll in breadcrumbs.", "Air fry/Bake."]
    },
    {
        id: 48, name: "Fulkopi Roast", type: "veg",
        ingredients: ["1 cup Cauliflower", "Peas", "Yogurt", "Ginger", "Oil"],
        instructions: ["Marinate cauliflower in yogurt/ginger.", "Roast in oil with peas until tender."]
    },
    {
        id: 49, name: "Mushroom Masala Toast", type: "veg",
        ingredients: ["1 cup Mushrooms", "Garlic", "Pepper", "Bread", "Butter"],
        instructions: ["Sauté garlic and mushrooms.", "Add pepper.", "Serve on toast."]
    },
    {
        id: 50, name: "Sprouted Moong Stir Fry", type: "veg",
        ingredients: ["1.5 cups Sprouts", "Mustard Seeds", "Green Chili", "Coconut", "Oil"],
        instructions: ["Temper mustard/chili.", "Stir fry sprouts 3 mins.", "Garnish with coconut."]
    },
    {
        id: 51, name: "Palak Paratha", type: "veg",
        ingredients: ["½ cup Spinach Puree", "1 cup Flour", "Ajwain", "Oil"],
        instructions: ["Knead flour with puree.", "Roll parathas.", "Cook on tawa."]
    },
    {
        id: 52, name: "Sattu Stuffed Gobi Paratha", type: "veg",
        ingredients: ["½ cup Grated Gobi", "2 tbsp Sattu", "1 cup Flour", "Chili", "Oil"],
        instructions: ["Mix gobi, sattu, spices.", "Stuff in dough.", "Roll and fry."]
    },
    {
        id: 53, name: "Bread Poha", type: "veg",
        ingredients: ["4 Bread slices (torn)", "Peanuts", "Mustard Seeds", "Turmeric"],
        instructions: ["Fry peanuts.", "Temper mustard/turmeric.", "Toss bread pieces."]
    },
    {
        id: 54, name: "Namkeen Jave (Vermicelli)", type: "veg",
        ingredients: ["1 cup Wheat Vermicelli", "Potato, Peas, Carrot", "Cumin", "Oil"],
        instructions: ["Roast vermicelli.", "Sauté veggies.", "Boil with water until dry."]
    },
    {
        id: 55, name: "Oats Khichdi", type: "veg",
        ingredients: ["½ cup Oats", "¼ cup Moong Dal", "Spinach", "Turmeric"],
        instructions: ["Boil dal.", "Add oats and spinach.", "Cook until mushy."]
    },
    {
        id: 56, name: "Paneer Bhurji Sandwich", type: "veg",
        ingredients: ["100g Crumbled Paneer", "Onion", "Ketchup", "Bread"],
        instructions: ["Sauté paneer/onion.", "Fill sandwich.", "Toast."]
    },
    {
        id: 57, name: "Kabuli Chana Salad", type: "veg",
        ingredients: ["1 cup Boiled Chickpeas", "Onion, Tomato", "Chaat Masala", "Lemon"],
        instructions: ["Mix all.", "Serve cold."]
    },
    {
        id: 58, name: "Meetha Sattu Sharbat", type: "veg",
        ingredients: ["4 tbsp Sattu", "Sugar/Jaggery", "Water", "Lemon"],
        instructions: ["Mix well.", "Serve chilled."]
    },
    {
        id: 59, name: "Besan Puda", type: "veg",
        ingredients: ["½ cup Besan", "Onion, Tomato", "Water", "Oil"],
        instructions: ["Make batter.", "Cook like pancake."]
    },
    {
        id: 60, name: "High Protein Milkshake", type: "veg",
        ingredients: ["1 cup Milk", "1 Banana", "1 tbsp Peanut Butter", "Chia Seeds"],
        instructions: ["Blend all.", "Top with seeds."]
    },
    {
        id: 61, name: "Mushroom Pepper Fry on Toast", type: "veg",
        ingredients: ["1 cup Mushrooms", "Black Pepper", "Garlic", "Bread"],
        instructions: ["Sauté mushrooms and garlic.", "Add pepper.", "Serve on toast."]
    },
    {
        id: 62, name: "Palak Puri", type: "veg",
        ingredients: ["½ cup Spinach Puree", "1 cup Flour", "Ajwain", "Oil"],
        instructions: ["Knead stiff dough with puree.", "Deep fry puris."]
    },
    {
        id: 63, name: "Moong Dal Toast", type: "veg",
        ingredients: ["½ cup Moong Dal Paste", "Ginger-Chili", "Bread", "Oil"],
        instructions: ["Spread seasoned paste on bread.", "Cook paste-side down on tawa."]
    },
    {
        id: 64, name: "Aloo-Matar Sandwich", type: "veg",
        ingredients: ["1 Boiled Potato", "½ cup Peas", "Cumin Powder", "Bread"],
        instructions: ["Mix potato and peas.", "Fill sandwich.", "Toast."]
    },
    {
        id: 65, name: "Curd Rice", type: "veg",
        ingredients: ["1 cup Rice", "½ cup Yogurt", "Mustard Seeds, Curry Leaves"],
        instructions: ["Mix rice/yogurt.", "Add tempering.", "Top with pomegranate."]
    },
    {
        id: 66, name: "Soya Chunk Burgers", type: "veg",
        ingredients: ["2 Buns", "Soya Cutlets", "Onion/Tomato", "Ketchup"],
        instructions: ["Toast buns.", "Assemble with cutlet and veggies."]
    },
    {
        id: 67, name: "Gajar Paratha", type: "veg",
        ingredients: ["1 cup Grated Carrot", "1 cup Flour", "Chili", "Oil"],
        instructions: ["Knead carrot into flour.", "Roll and fry."]
    },
    {
        id: 68, name: "Corn & Cheese Toast", type: "veg",
        ingredients: ["½ cup Corn", "Cheese/Paneer", "Bread", "Herbs"],
        instructions: ["Top bread with corn/cheese.", "Cover on tawa until melted."]
    },
    {
        id: 69, name: "Roasted Makhana", type: "veg",
        ingredients: ["2 cups Makhana", "Peanuts", "Curry Leaves", "Ghee"],
        instructions: ["Roast everything in ghee until crisp."]
    },
    {
        id: 70, name: "Vermicelli Pulao", type: "veg",
        ingredients: ["1 cup Vermicelli", "Mixed Veggies", "Mustard Seeds", "Oil"],
        instructions: ["Roast vermicelli.", "Fry veggies.", "Boil with water until fluffy."]
    },
    {
        id: 71, name: "Roti Pizza", type: "veg",
        ingredients: ["1 Leftover Roti", "Sauce", "Veggies", "Cheese"],
        instructions: ["Top roti with sauce/veggies/cheese.", "Cook on covered tawa."]
    },
    {
        id: 72, name: "Chana Jor Garam Salad", type: "veg",
        ingredients: ["1 cup Chana Jor Garam", "Onion, Tomato", "Lemon"],
        instructions: ["Mix dry chana with fresh veggies.", "Serve immediately."]
    },
    {
        id: 73, name: "Banana PB Smoothie", type: "veg",
        ingredients: ["1 Frozen Banana", "1 cup Milk", "1 tbsp Peanut Butter"],
        instructions: ["Blend until smooth."]
    },
    {
        id: 74, name: "Methi Puri", type: "veg",
        ingredients: ["1 cup Flour", "1 tbsp Kasuri Methi", "Cumin", "Oil"],
        instructions: ["Knead dough.", "Deep fry puris."]
    },
    {
        id: 75, name: "Cabbage Paratha", type: "veg",
        ingredients: ["1 cup Grated Cabbage", "1 cup Flour", "Ginger", "Oil"],
        instructions: ["Knead cabbage into flour.", "Roll and fry."]
    },
    {
        id: 76, name: "Paneer Tomato Salad", type: "veg",
        ingredients: ["100g Paneer", "2 Tomatoes", "Olive Oil", "Basil"],
        instructions: ["Toss everything.", "Season with salt/pepper."]
    },
    {
        id: 77, name: "Shallow Fried Bread Pakora", type: "veg",
        ingredients: ["2 Bread Slices", "½ cup Besan batter", "Ajwain", "Oil"],
        instructions: ["Dip bread in batter.", "Shallow fry."]
    },
    {
        id: 78, name: "Cheesy Maggi", type: "veg",
        ingredients: ["1 Maggi Pack", "Peas/Carrots", "1 Cheese Slice"],
        instructions: ["Boil maggi with veggies.", "Melt cheese on top."]
    },
    {
        id: 79, name: "Aloo-Paneer Kati Roll", type: "veg",
        ingredients: ["1 Roti", "Paneer-Potato Mix", "Onion", "Sauces"],
        instructions: ["Fill roti with mix.", "Add onions/sauces.", "Roll."]
    },
    {
        id: 80, name: "Sattu & Onion Chokha", type: "veg",
        ingredients: ["3 tbsp Sattu", "Onion", "Raw Mustard Oil", "Chili"],
        instructions: ["Mix to dough ball.", "Eat with roti/rice."]
    },
    {
        id: 81, name: "Grilled Veg Sandwich", type: "veg",
        ingredients: ["Zucchini, Capsicum, Onion", "Bread", "Butter"],
        instructions: ["Sauté veggies.", "Fill and grill."]
    },
    {
        id: 82, name: "Peanut Chikki", type: "veg",
        ingredients: ["1 cup Peanuts", "¾ cup Jaggery"],
        instructions: ["Melt jaggery.", "Mix peanuts.", "Set and cut."]
    },
    {
        id: 83, name: "Masoor Dal Cheela", type: "veg",
        ingredients: ["½ cup Masoor Dal Paste", "Ginger", "Oil"],
        instructions: ["Make pancakes from paste."]
    },
    {
        id: 84, name: "Radish Paratha", type: "veg",
        ingredients: ["1 cup Grated Radish", "1 cup Flour", "Ajwain", "Oil"],
        instructions: ["Knead radish into flour.", "Roll and fry."]
    },
    {
        id: 85, name: "Sweet Potato Fries", type: "veg",
        ingredients: ["1 Sweet Potato (strips)", "Oil", "Seasoning"],
        instructions: ["Toss in oil.", "Air fry/Bake."]
    },
    {
        id: 86, name: "Cucumber Raita", type: "veg",
        ingredients: ["1 cup Curd", "½ Cucumber", "Bhujia", "Cumin"],
        instructions: ["Mix curd and cucumber.", "Top with bhujia."]
    },
    {
        id: 87, name: "Apple Peanut Salad", type: "veg",
        ingredients: ["1 Apple", "2 tbsp Peanuts", "Honey", "Cinnamon"],
        instructions: ["Toss together."]
    },
    {
        id: 88, name: "Lemon Rice", type: "veg",
        ingredients: ["1 cup Rice", "Lemon Juice", "Peanuts", "Mustard Seeds"],
        instructions: ["Temper spices/nuts.", "Toss rice.", "Add lemon."]
    },
    {
        id: 89, name: "Tawa Paneer Masala", type: "veg",
        ingredients: ["100g Paneer", "Pav Bhaji Masala", "Butter"],
        instructions: ["Toast paneer in spicy butter."]
    },
    {
        id: 90, name: "Oats Banana Pancakes", type: "veg",
        ingredients: ["½ cup Oats Powder", "1 Banana", "Milk", "Baking Powder"],
        instructions: ["Blend batter.", "Cook pancakes."]
    },
    {
        id: 91, name: "Garlic Bread Roti", type: "veg",
        ingredients: ["2 Rotis", "Garlic Butter", "Chili Flakes"],
        instructions: ["Spread butter.", "Fold.", "Toast."]
    },
    {
        id: 92, name: "Chola Bhuna", type: "veg",
        ingredients: ["1 cup Boiled Chickpeas", "Onion-Tomato Masala", "Spices"],
        instructions: ["Cook masala.", "Coat chickpeas dry."]
    },
    {
        id: 93, name: "Fruit Chaat", type: "veg",
        ingredients: ["1 cup Mixed Fruits", "Chaat Masala", "Lemon"],
        instructions: ["Toss and serve."]
    },
    {
        id: 94, name: "Jeera Aloo", type: "veg",
        ingredients: ["2 Boiled Potatoes", "1 tsp Jeera", "Turmeric"],
        instructions: ["Roast potatoes with jeera."]
    },
    {
        id: 95, name: "Brown Bread Condensed Milk", type: "veg",
        ingredients: ["2 Toast", "1 tbsp Condensed Milk"],
        instructions: ["Drizzle and eat."]
    },
    {
        id: 96, name: "Vegetable Daliya Stir Fry", type: "veg",
        ingredients: ["1 cup Boiled Dalia", "Veggies", "Soya Sauce"],
        instructions: ["Stir fry veggies.", "Add dalia and sauce."]
    },
    {
        id: 97, name: "Paneer Capsicum Toast", type: "veg",
        ingredients: ["Paneer", "Capsicum", "Bread", "Butter"],
        instructions: ["Sauté paneer/capsicum.", "Serve on toast."]
    },
    {
        id: 98, name: "Masoor Dal Bora", type: "veg",
        ingredients: ["Masoor Dal Paste", "Onion", "Oil"],
        instructions: ["Fry fritters."]
    },
    {
        id: 99, name: "Hot Garlic Spinach Salad", type: "veg",
        ingredients: ["Spinach", "Garlic", "Sesame Seeds"],
        instructions: ["Sauté garlic and spinach.", "Top with seeds."]
    },
    {
        id: 100, name: "Leftover Roti Noodles", type: "veg",
        ingredients: ["Roti strips", "Veggies", "Sauces"],
        instructions: ["Stir fry veggies.", "Add roti strips and sauces."]
    },
    // --- BATCH 2 (Vegetarian + Lactose Intolerant Breakfast: 101-150) ---
    {
        id: 101, name: "Soya Chunk Ghugni", type: "veg",
        ingredients: ["½ cup Dried Yellow Peas (soaked)", "½ cup Soya Chunks", "1 Onion", "Ginger-Garlic", "Tomato", "Mustard Oil", "Turmeric"],
        instructions: ["Pressure cook peas.", "Boil and fry soya chunks.", "Cook with onion paste and spices.", "Simmer together."]
    },
    {
        id: 102, name: "Besan Chilla (Veg Omelet)", type: "veg",
        ingredients: ["½ cup Besan", "Onion, Tomato, Chili", "Ajwain", "Oil"],
        instructions: ["Make batter with veggies.", "Spread on hot oil tawa.", "Cook both sides until crisp."]
    },
    {
        id: 103, name: "Masoor Dal Seddho", type: "veg",
        ingredients: ["½ cup Masoor Dal", "Onion", "Green Chili", "Raw Mustard Oil"],
        instructions: ["Boil dal until mushy/dry.", "Mix with raw onion, chili, and oil.", "Eat with toast/rice."]
    },
    {
        id: 104, name: "Sattu Sharbat (Savory)", type: "veg",
        ingredients: ["4 tbsp Sattu", "1.5 cups Chilled Water", "Onion", "Chili", "Lemon", "Black Salt"],
        instructions: ["Dissolve sattu in water.", "Add rest of ingredients.", "Stir and drink."]
    },
    {
        id: 105, name: "Poha with Extra Peanuts", type: "veg",
        ingredients: ["1 cup Chira (washed)", "¼ cup Peanuts", "Potato", "Onion", "Mustard Seeds", "Turmeric"],
        instructions: ["Fry peanuts.", "Cook potato and onion with seeds.", "Add chira and turmeric.", "Toss with peanuts."]
    },
    {
        id: 106, name: "Tofu Bhurji", type: "veg",
        ingredients: ["150g Firm Tofu (crumbled)", "Onion", "Tomato", "Kitchen King Masala", "Oil"],
        instructions: ["Sauté onion/tomato.", "Add tofu and spices.", "Stir fry vigorously."]
    },
    {
        id: 107, name: "Chola Chaat", type: "veg",
        ingredients: ["1 cup Boiled Kala Chana", "Potato", "Onion, Tomato, Cucumber", "Chaat Masala", "Lemon"],
        instructions: ["Mix boiled chana with raw veggies.", "Season and serve."]
    },
    {
        id: 108, name: "Methi Thepla (No Curd)", type: "veg",
        ingredients: ["1 cup Wheat Flour", "½ cup Methi Leaves", "Sesame Seeds", "Oil", "Spices"],
        instructions: ["Knead flour with methi and oil (no curd).", "Roll thin.", "Roast on tawa."]
    },
    {
        id: 109, name: "Moong Dal Chilla", type: "veg",
        ingredients: ["½ cup Moong Dal Paste", "Carrot, Capsicum", "Ginger", "Oil"],
        instructions: ["Mix veggies into dal paste.", "Cook like pancakes."]
    },
    {
        id: 110, name: "Aloo-Soya Beans Curry (Dry)", type: "veg",
        ingredients: ["½ cup Soya Chunks", "1 Potato", "Cumin Seeds", "Turmeric", "Oil"],
        instructions: ["Fry soya and potato.", "Add spices and splash of water.", "Cover cook until soft."]
    },
    {
        id: 111, name: "Sprouted Moong Stir Fry", type: "veg",
        ingredients: ["1.5 cups Sprouts", "Mustard Seeds", "Chili", "Lemon", "Oil"],
        instructions: ["Temper seeds.", "Stir fry sprouts 3 mins.", "Add lemon."]
    },
    {
        id: 112, name: "Peanut Butter Toast", type: "veg",
        ingredients: ["2 Bread Slices", "2 tbsp Peanut Butter", "½ Banana"],
        instructions: ["Toast bread.", "Spread PB.", "Top with banana."]
    },
    {
        id: 113, name: "Veggie Daliya", type: "veg",
        ingredients: ["½ cup Roasted Daliya", "Peas, Carrot, Beans", "Mustard Seeds", "Oil"],
        instructions: ["Sauté veggies and seeds.", "Add daliya and water.", "Cook until fluffy."]
    },
    {
        id: 114, name: "Spicy Bread Poha", type: "veg",
        ingredients: ["4 Bread Slices (cubed)", "2 tbsp Peanuts", "Onion", "Ketchup", "Oil"],
        instructions: ["Fry peanuts.", "Sauté onion, add ketchup.", "Toss bread cubes."]
    },
    {
        id: 115, name: "Mixed Dal Handvo", type: "veg",
        ingredients: ["1 cup Fermented Dal Batter", "Grated Lauki", "Sesame Seeds", "Oil"],
        instructions: ["Mix lauki in batter.", "Temper sesame.", "Cook thick pancake covered."]
    },
    {
        id: 116, name: "Soya Keema Paratha", type: "veg",
        ingredients: ["1 cup Wheat Flour", "½ cup Soya Granules", "Pickle Masala", "Onion", "Oil"],
        instructions: ["Stuff soya mix in dough.", "Roll and fry."]
    },
    {
        id: 117, name: "Luchi with Aloor Dum", type: "veg",
        ingredients: ["1 cup Maida/Atta", "2 Potatoes", "Peas", "Tomato Puree", "Oil"],
        instructions: ["Deep fry luchis.", "Cook potato gravy with peas."]
    },
    {
        id: 118, name: "Oatmeal with Almond Milk", type: "veg",
        ingredients: ["½ cup Oats", "1.5 cups Almond Milk", "Honey", "Nuts"],
        instructions: ["Cook oats in almond milk.", "Top with nuts/honey."]
    },
    {
        id: 119, name: "Rajma Salad", type: "veg",
        ingredients: ["1 cup Boiled Rajma", "Onion, Tomato, Capsicum", "Olive Oil", "Lemon"],
        instructions: ["Toss rajma and veggies.", "Add dressing."]
    },
    {
        id: 120, name: "Besan Bread Toast", type: "veg",
        ingredients: ["½ cup Besan batter", "Bread", "Spices", "Oil"],
        instructions: ["Dip bread in spicy batter.", "Pan fry."]
    },
    {
        id: 121, name: "Corn & Peas Chaat", type: "veg",
        ingredients: ["½ cup Corn", "½ cup Peas", "Oil", "Chaat Masala"],
        instructions: ["Sauté briefly.", "Season and serve."]
    },
    {
        id: 122, name: "Vegetable Suji Upma", type: "veg",
        ingredients: ["½ cup Suji", "Peanuts", "Peas/Carrot", "Mustard Seeds", "Oil"],
        instructions: ["Roast suji.", "Fry veggies and seeds.", "Boil water, add suji."]
    },
    {
        id: 123, name: "Tofu Sandwich", type: "veg",
        ingredients: ["100g Tofu (seared)", "Bread", "Mustard Sauce", "Cucumber"],
        instructions: ["Sear tofu.", "Assemble sandwich with mustard."]
    },
    {
        id: 124, name: "Matar Kachori (Baked)", type: "veg",
        ingredients: ["1 cup Flour", "½ cup Peas Paste", "Oil"],
        instructions: ["Stuff dough with peas.", "Bake at 200°C for 15 mins."]
    },
    {
        id: 125, name: "Chana Dal Vada", type: "veg",
        ingredients: ["1 cup Chana Dal (ground)", "Onion", "Chili", "Oil"],
        instructions: ["Shape patties.", "Shallow fry."]
    },
    {
        id: 126, name: "Sweet Potato Chaat", type: "veg",
        ingredients: ["1 Boiled Sweet Potato", "Peanuts", "Tamarind Chutney"],
        instructions: ["Toss all items."]
    },
    {
        id: 127, name: "Palak Corn Toast", type: "veg",
        ingredients: ["1 cup Spinach", "¼ cup Corn", "Garlic", "Bread"],
        instructions: ["Sauté spinach/corn.", "Serve on toast."]
    },
    {
        id: 128, name: "Roti Noodles", type: "veg",
        ingredients: ["2 Rotis (strips)", "1 cup Veggies", "Soya Sauce", "Oil"],
        instructions: ["Stir fry veggies.", "Add roti strips and soy sauce."]
    },
    {
        id: 129, name: "Masoor Dal Khichdi (No Ghee)", type: "veg",
        ingredients: ["¾ cup Masoor Dal", "¼ cup Rice", "Veggies", "Oil", "Cumin"],
        instructions: ["Pressure cook grains/veggies.", "Temper with oil/cumin."]
    },
    {
        id: 130, name: "Soya Chunks Fry", type: "veg",
        ingredients: ["1 cup Boiled Soya", "Cornflour", "Ginger-Garlic", "Oil"],
        instructions: ["Coat soya with flour/spices.", "Pan fry crisp."]
    },
    {
        id: 131, name: "Begun Bharta with Roti", type: "veg",
        ingredients: ["1 Roasted Eggplant", "Onion", "Mustard Oil", "Roti"],
        instructions: ["Mash eggplant with raw onion/oil.", "Eat with roti."]
    },
    {
        id: 132, name: "Peanut Salad", type: "veg",
        ingredients: ["1 cup Boiled/Roasted Peanuts", "Onion, Tomato", "Chaat Masala"],
        instructions: ["Mix all."]
    },
    {
        id: 133, name: "Lemon Vermicelli", type: "veg",
        ingredients: ["1 cup Vermicelli", "Peanuts", "Lemon Juice", "Turmeric"],
        instructions: ["Boil vermicelli.", "Toss with fried peanuts and lemon."]
    },
    {
        id: 134, name: "Onion Paratha", type: "veg",
        ingredients: ["1 cup Flour", "1 Chopped Onion", "Ajwain", "Oil"],
        instructions: ["Stuff onion in dough.", "Fry paratha."]
    },
    {
        id: 135, name: "Jhal Muri", type: "veg",
        ingredients: ["2 cups Puffed Rice", "Sprouts/Chickpeas", "Peanuts", "Mustard Oil"],
        instructions: ["Mix everything fresh."]
    },
    {
        id: 136, name: "Tofu Stir Fry", type: "veg",
        ingredients: ["100g Tofu", "Broccoli/Beans", "Soy Sauce", "Oil"],
        instructions: ["Stir fry veggies and tofu.", "Season with soy."]
    },
    {
        id: 137, name: "Gobi Paratha", type: "veg",
        ingredients: ["1 cup Grated Cauliflower", "1 cup Flour", "Spices", "Oil"],
        instructions: ["Mix gobi in dough or stuff.", "Fry paratha."]
    },
    {
        id: 138, name: "Pumpkin Chickpea Curry", type: "veg",
        ingredients: ["1 cup Pumpkin", "½ cup Chickpeas", "Panch Phoron", "Oil"],
        instructions: ["Cook pumpkin and chickpeas with spices."]
    },
    {
        id: 139, name: "Garlic Toast", type: "veg",
        ingredients: ["2 Bread Slices", "Minced Garlic", "Oil"],
        instructions: ["Brush garlic oil on bread.", "Toast."]
    },
    {
        id: 140, name: "Sabudana Khichdi", type: "veg",
        ingredients: ["1 cup Soaked Sabudana", "Peanuts", "Potato", "Oil"],
        instructions: ["Fry potato/peanuts.", "Add sabudana, cook till clear."]
    },
    {
        id: 141, name: "Bread Cutlet", type: "veg",
        ingredients: ["2 Bread Slices", "1 Potato", "Peanuts", "Oil"],
        instructions: ["Mash bread/potato.", "Shape cutlets.", "Shallow fry."]
    },
    {
        id: 142, name: "Rava Chilla", type: "veg",
        ingredients: ["½ cup Suji", "Onion/Tomato", "Oil"],
        instructions: ["Make batter.", "Cook pancake."]
    },
    {
        id: 143, name: "Mushroom Sauté on Toast", type: "veg",
        ingredients: ["1 cup Mushrooms", "Garlic", "Oil", "Bread"],
        instructions: ["Sauté mushrooms dry.", "Serve on toast."]
    },
    {
        id: 144, name: "Peas Pulao", type: "veg",
        ingredients: ["½ cup Rice", "½ cup Peas", "Whole Spices", "Oil"],
        instructions: ["Cook rice and peas with spices/water."]
    },
    {
        id: 145, name: "Soya Cutlet Burger", type: "veg",
        ingredients: ["1 Bun", "1 Soya Cutlet", "Salad", "Mustard"],
        instructions: ["Assemble burger."]
    },
    {
        id: 146, name: "Corn Flakes & Almond Milk", type: "veg",
        ingredients: ["1 cup Corn Flakes", "1 cup Almond Milk", "Fruit"],
        instructions: ["Combine."]
    },
    {
        id: 147, name: "Aloo Paratha (Oil Roasted)", type: "veg",
        ingredients: ["1 cup Flour", "1 Potato", "Oil"],
        instructions: ["Stuffed paratha cooked with oil."]
    },
    {
        id: 148, name: "Mixed Vegetable Soup", type: "veg",
        ingredients: ["1 cup Veggies", "2 tbsp Moong Dal", "Pepper"],
        instructions: ["Pressure cook and blend."]
    },
    {
        id: 149, name: "Masala Toast Sandwich", type: "veg",
        ingredients: ["Bread", "Potato Masala", "Oil"],
        instructions: ["Sandwich the masala.", "Toast."]
    },
    {
        id: 150, name: "Black Chana Soup", type: "veg",
        ingredients: ["1 cup Chana Water", "Lemon", "Ginger"],
        instructions: ["Season the broth.", "Serve hot."]
    },
    // --- BATCH 3 (Non-Vegetarian Breakfast: 151-250) ---
    {
        id: 151, name: "Dim Pauruti (Bengali Savory French Toast)", type: "non-veg",
        ingredients: ["2 Bread slices", "2 Eggs", "Onion, Chili", "Milk", "Butter"],
        instructions: ["Whisk egg, milk, veggies.", "Dip bread.", "Fry in butter."]
    },
    {
        id: 152, name: "Chicken Keema Sandwich", type: "non-veg",
        ingredients: ["100g Chicken Keema", "Bread", "Ginger-Garlic", "Butter"],
        instructions: ["Sauté keema with spices.", "Fill sandwich.", "Toast."]
    },
    {
        id: 153, name: "Egg Tadka with Roti", type: "non-veg",
        ingredients: ["½ cup Moong Dal (boiled)", "2 Eggs", "Tadka Masala", "Roti", "Butter"],
        instructions: ["Fry spices.", "Add dal and scrambled eggs.", "Simmer."]
    },
    {
        id: 154, name: "Masala Omelette", type: "non-veg",
        ingredients: ["2 Eggs", "Onion, Tomato", "Turmeric", "Toast"],
        instructions: ["Make spicy omelette.", "Serve with toast."]
    },
    {
        id: 155, name: "Chicken Stew with Bread", type: "non-veg",
        ingredients: ["150g Chicken", "Veggies", "Whole Peppercorns", "Butter"],
        instructions: ["Pressure cook all.", "Serve clear soup with bread."]
    },
    {
        id: 156, name: "Boiled Egg Chaat", type: "non-veg",
        ingredients: ["2 Boiled Eggs", "Onion, Tomato", "Chaat Masala", "Sev"],
        instructions: ["Mix cubed eggs with veggies.", "Season and serve."]
    },
    {
        id: 157, name: "Paneer & Egg Bhurji", type: "non-veg",
        ingredients: ["1 Egg", "50g Paneer", "Onion", "Butter"],
        instructions: ["Sauté paneer.", "Add egg and scramble."]
    },
    {
        id: 158, name: "Chicken Mayo Salad", type: "non-veg",
        ingredients: ["1 cup Boiled Chicken", "Mayo", "Capsicum", "Pepper"],
        instructions: ["Mix all.", "Serve cold."]
    },
    {
        id: 159, name: "Mughlai Paratha (Home Version)", type: "non-veg",
        ingredients: ["Dough", "1 Egg", "Onion", "Keema (optional)"],
        instructions: ["Fold egg in dough packet.", "Shallow fry."]
    },
    {
        id: 160, name: "Fish Fry with Toast", type: "non-veg",
        ingredients: ["2 Fish Fillets", "Breadcrumbs", "Egg", "Ginger-Garlic"],
        instructions: ["Bread and fry fish.", "Serve with toast."]
    },
    {
        id: 161, name: "Scrambled Eggs with Cheese", type: "non-veg",
        ingredients: ["2 Eggs", "1 Cheese Cube", "Milk", "Butter"],
        instructions: ["Soft scramble eggs.", "Melt cheese in."]
    },
    {
        id: 162, name: "Chicken Sausage Fry", type: "non-veg",
        ingredients: ["3 Sausages", "Onion", "Tomato Sauce"],
        instructions: ["Stir fry sausages and onion.", "Toss with sauce."]
    },
    {
        id: 163, name: "Dimer Jhal (Egg Curry)", type: "non-veg",
        ingredients: ["2 Boiled Eggs", "1 Potato", "Onion-Tomato Paste", "Rice"],
        instructions: ["Cook spicy gravy with potato.", "Add eggs.", "Serve with rice."]
    },
    {
        id: 164, name: "Grilled Chicken Sandwich", type: "non-veg",
        ingredients: ["Cooked Chicken", "Cheese Slice", "Bread", "Butter"],
        instructions: ["Fill sandwich.", "Grill."]
    },
    {
        id: 165, name: "Egg Paratha Roll", type: "non-veg",
        ingredients: ["1 Paratha", "1 Egg", "Salad", "Ketchup"],
        instructions: ["Cook egg on paratha.", "Fill and roll."]
    },
    {
        id: 166, name: "Oats with Poached Egg", type: "non-veg",
        ingredients: ["1 bowl Savory Oats", "1 Egg", "Pepper"],
        instructions: ["Top oats with poached egg."]
    },
    {
        id: 167, name: "Chicken Sweet Corn Soup", type: "non-veg",
        ingredients: ["50g Minced Chicken", "Corn", "1 Egg White", "Cornflour"],
        instructions: ["Boil soup.", "Thicken.", "Drizzle egg white."]
    },
    {
        id: 168, name: "Bread Omelette (Street Style)", type: "non-veg",
        ingredients: ["2 Bread Slices", "2 Eggs", "Spices", "Butter"],
        instructions: ["Coat bread in omelette pan.", "Fold together."]
    },
    {
        id: 169, name: "Soya & Egg Stir Fry", type: "non-veg",
        ingredients: ["½ cup Soya", "1 Egg", "Soy Sauce", "Veggies"],
        instructions: ["Stir fry soya.", "Scramble egg in.", "Season."]
    },
    {
        id: 170, name: "Doi Maach (Fish Yogurt)", type: "non-veg",
        ingredients: ["1 Fish Piece", "Yogurt", "Ginger", "Oil"],
        instructions: ["Simmer fish in light yogurt gravy."]
    },
    {
        id: 171, name: "Chicken Yogurt Salad", type: "non-veg",
        ingredients: ["1 cup Chicken", "Yogurt", "Mustard", "Veggies"],
        instructions: ["Toss in yogurt dressing."]
    },
    {
        id: 172, name: "Egg Devil", type: "non-veg",
        ingredients: ["1 Boiled Egg", "Mashed Potato", "Breadcrumbs"],
        instructions: ["Wrap egg in potato.", "Fry."]
    },
    {
        id: 173, name: "Keema Matar", type: "non-veg",
        ingredients: ["100g Keema", "Peas", "Spices"],
        instructions: ["Cook meat and peas dry."]
    },
    {
        id: 174, name: "Tuna Salad Sandwich", type: "non-veg",
        ingredients: ["Canned Tuna", "Mayo", "Bread"],
        instructions: ["Mix tuna salad.", "Make sandwich."]
    },
    {
        id: 175, name: "Shakshuka", type: "non-veg",
        ingredients: ["2 Eggs", "Tomato Gravy", "Capsicum"],
        instructions: ["Poach eggs in spicy tomato sauce."]
    },
    {
        id: 176, name: "Grilled Chicken Wings", type: "non-veg",
        ingredients: ["4 Wings", "BBQ Sauce"],
        instructions: ["Pan grill or air fry."]
    },
    {
        id: 177, name: "Egg & Spinach Wrap", type: "non-veg",
        ingredients: ["Spinach Omelette", "Tortilla", "Cheese"],
        instructions: ["Roll omelette in tortilla."]
    },
    {
        id: 178, name: "Fish Fingers", type: "non-veg",
        ingredients: ["Fish strips", "Crumbs", "Egg"],
        instructions: ["Bread and fry."]
    },
    {
        id: 179, name: "Chicken Liver Pepper Fry", type: "non-veg",
        ingredients: ["100g Liver", "Pepper", "Onion"],
        instructions: ["Sauté liver with lots of pepper."]
    },
    {
        id: 180, name: "Pancakes & Scrambled Eggs", type: "non-veg",
        ingredients: ["Pancakes", "2 Eggs"],
        instructions: ["Sweet and savory combo."]
    },
    {
        id: 181, name: "Egg Fried Rice", type: "non-veg",
        ingredients: ["1 cup Rice", "2 Eggs", "Soy Sauce"],
        instructions: ["Stir fry rice and eggs."]
    },
    {
        id: 182, name: "Chicken Momos", type: "non-veg",
        ingredients: ["Dough", "Chicken Mince"],
        instructions: ["Steam dumplings."]
    },
    {
        id: 183, name: "Egg Toast (Inside Out)", type: "non-veg",
        ingredients: ["Bread frame", "1 Egg"],
        instructions: ["Fried egg inside bread hole."]
    },
    {
        id: 184, name: "Chicken Tikka (Pan)", type: "non-veg",
        ingredients: ["Chicken Cubes", "Yogurt Marinade"],
        instructions: ["Pan sear marinated chicken."]
    },
    {
        id: 185, name: "Mutton Paya Soup", type: "non-veg",
        ingredients: ["Goat Trotters Broth", "Spices"],
        instructions: ["Reheat rich broth."]
    },
    {
        id: 186, name: "Cheese Omelette Toast", type: "non-veg",
        ingredients: ["2 Eggs", "Cheese", "Bread"],
        instructions: ["Sandwich cheese omelette."]
    },
    {
        id: 187, name: "Chicken Mushroom Sauté", type: "non-veg",
        ingredients: ["Chicken", "Mushrooms", "Garlic Butter"],
        instructions: ["Stir fry."]
    },
    {
        id: 188, name: "Egg Potato Chop", type: "non-veg",
        ingredients: ["Egg Slice", "Potato Mash", "Besan"],
        instructions: ["Fry potato coated egg."]
    },
    {
        id: 189, name: "Chili Chicken Dry with Bread", type: "non-veg",
        ingredients: ["Fried Chicken", "Chili Sauce", "Bread"],
        instructions: ["Toss chicken in sauce.", "Eat with bread."]
    },
    {
        id: 190, name: "Curd Chicken Sandwich", type: "non-veg",
        ingredients: ["Boiled Chicken", "Curd", "Bread"],
        instructions: ["Cold chicken salad sandwich."]
    },
    {
        id: 191, name: "Masala Half Fry", type: "non-veg",
        ingredients: ["2 Eggs", "Veggies"],
        instructions: ["Sunny side up with masala topping."]
    },
    {
        id: 192, name: "Prawn Malai Toast", type: "non-veg",
        ingredients: ["Prawns", "Cream", "Bread"],
        instructions: ["Creamy prawn topping on toast."]
    },
    {
        id: 193, name: "Chicken Macaroni Soup", type: "non-veg",
        ingredients: ["Chicken Stock", "Macaroni", "Chicken"],
        instructions: ["Clear soup with pasta."]
    },
    {
        id: 194, name: "Bombay Toast", type: "non-veg",
        ingredients: ["Bread", "Egg", "Sugar", "Milk"],
        instructions: ["Sweet French toast."]
    },
    {
        id: 195, name: "Egg Frankie", type: "non-veg",
        ingredients: ["Paratha", "Egg", "Salad"],
        instructions: ["Rolled egg paratha wrap."]
    },
    {
        id: 196, name: "Sausage & Mash", type: "non-veg",
        ingredients: ["Sausages", "Mashed Potato"],
        instructions: ["Classic combo."]
    },
    {
        id: 197, name: "Egg Curry & Paratha", type: "non-veg",
        ingredients: ["Egg Curry", "Paratha"],
        instructions: ["Meal combo."]
    },
    {
        id: 198, name: "Chicken Keema Toast", type: "non-veg",
        ingredients: ["Raw Keema", "Bread"],
        instructions: ["Fry bread with keema layer."]
    },
    {
        id: 199, name: "Creamy Akuri", type: "non-veg",
        ingredients: ["Eggs", "Cream", "Spices"],
        instructions: ["Parsi style soft scramble."]
    },
    {
        id: 200, name: "Fish Ball Soup", type: "non-veg",
        ingredients: ["Fish Balls", "Broth"],
        instructions: ["Clear soup."]
    },
    {
        id: 201, name: "Chicken Cheese Roll", type: "non-veg",
        ingredients: ["Chicken", "Cheese", "Paratha"],
        instructions: ["Melted cheese wrap."]
    },
    {
        id: 202, name: "Egg Chilla", type: "non-veg",
        ingredients: ["Besan batter", "Egg"],
        instructions: ["Savory crepe."]
    },
    {
        id: 203, name: "Garlic Butter Prawns Toast", type: "non-veg",
        ingredients: ["Prawns", "Garlic Butter", "Bread"],
        instructions: ["Sautéed topping."]
    },
    {
        id: 204, name: "Masala Fried Egg", type: "non-veg",
        ingredients: ["2 Eggs", "Fried Onion/Chili"],
        instructions: ["Crispy fried eggs."]
    },
    {
        id: 205, name: "Chicken Liver Toast", type: "non-veg",
        ingredients: ["Liver Masala", "Toast"],
        instructions: ["Spread liver on toast."]
    },
    {
        id: 206, name: "Egg Mayo Sandwich", type: "non-veg",
        ingredients: ["Boiled Eggs", "Mayo", "Bread"],
        instructions: ["Cold sandwich."]
    },
    {
        id: 207, name: "Mutton Keema Ghugni", type: "non-veg",
        ingredients: ["Peas", "Mutton Keema"],
        instructions: ["Meat and pea curry."]
    },
    {
        id: 208, name: "Chicken Noodle Soup", type: "non-veg",
        ingredients: ["Chicken", "Noodles", "Stock"],
        instructions: ["Soup."]
    },
    {
        id: 209, name: "Fish Butter Garlic", type: "non-veg",
        ingredients: ["Fish", "Butter Garlic Sauce"],
        instructions: ["Pan fried."]
    },
    {
        id: 210, name: "Egg Maggi", type: "non-veg",
        ingredients: ["Maggi", "Egg"],
        instructions: ["Noodles with egg."]
    },
    {
        id: 211, name: "Chicken Stuffed Paratha", type: "non-veg",
        ingredients: ["Dough", "Chicken Mince"],
        instructions: ["Stuffed flatbread."]
    },
    {
        id: 212, name: "Cheesy Spinach Scramble", type: "non-veg",
        ingredients: ["Eggs", "Spinach", "Cheese"],
        instructions: ["Scramble."]
    },
    {
        id: 213, name: "Chicken Bread Pizza", type: "non-veg",
        ingredients: ["Bread", "Chicken", "Cheese"],
        instructions: ["Toast with toppings."]
    },
    {
        id: 214, name: "Doi Dim", type: "non-veg",
        ingredients: ["Eggs", "Yogurt Gravy"],
        instructions: ["Yogurt base curry."]
    },
    {
        id: 215, name: "Sausage Pepper Fry", type: "non-veg",
        ingredients: ["Sausages", "Capsicum"],
        instructions: ["Stir fry."]
    },
    {
        id: 216, name: "Egg Halwa", type: "non-veg",
        ingredients: ["Eggs", "Milk", "Sugar", "Ghee"],
        instructions: ["Sweet pudding."]
    },
    {
        id: 217, name: "Chicken Kathi Roll", type: "non-veg",
        ingredients: ["Paratha", "Chicken Kabab"],
        instructions: ["Wrap."]
    },
    {
        id: 218, name: "Fish Cutlet", type: "non-veg",
        ingredients: ["Fish Mash", "Crumbs"],
        instructions: ["Fried snack."]
    },
    {
        id: 219, name: "Egg Drop Soup", type: "non-veg",
        ingredients: ["Stock", "Egg"],
        instructions: ["Soup."]
    },
    {
        id: 220, name: "Spicy Omelette Curry", type: "non-veg",
        ingredients: ["Omelette Strips", "Gravy"],
        instructions: ["Curry."]
    },
    {
        id: 221, name: "Chicken Porridge", type: "non-veg",
        ingredients: ["Rice", "Chicken", "Ginger"],
        instructions: ["Congee."]
    },
    {
        id: 222, name: "Potato Egg Salad", type: "non-veg",
        ingredients: ["Potato", "Egg", "Mayo"],
        instructions: ["Salad."]
    },
    {
        id: 223, name: "Salami Sandwich", type: "non-veg",
        ingredients: ["Salami", "Bread"],
        instructions: ["Sandwich."]
    },
    {
        id: 224, name: "Bhurji Pav", type: "non-veg",
        ingredients: ["Egg Bhurji", "Pav"],
        instructions: ["Street food."]
    },
    {
        id: 225, name: "Air Fried Chicken Lollipop", type: "non-veg",
        ingredients: ["Chicken Wings"],
        instructions: ["Crispy starter."]
    },
    {
        id: 226, name: "Egg Potato Toast", type: "non-veg",
        ingredients: ["Bread", "Egg-Potato Mash"],
        instructions: ["Fried toast."]
    },
    {
        id: 227, name: "Creamy Chicken Toast", type: "non-veg",
        ingredients: ["Chicken", "White Sauce", "Toast"],
        instructions: ["Open sandwich."]
    },
    {
        id: 228, name: "Masala Poached Egg", type: "non-veg",
        ingredients: ["Poached Egg", "Masala Base"],
        instructions: ["Breakfast dish."]
    },
    {
        id: 229, name: "Fish & Chips (Mourola)", type: "non-veg",
        ingredients: ["Small Fish", "Fries"],
        instructions: ["Crispy fry."]
    },
    {
        id: 230, name: "Egg Florentine", type: "non-veg",
        ingredients: ["Spinach", "Poached Egg"],
        instructions: ["Classic."]
    },
    {
        id: 231, name: "Baked Keema Samosa", type: "non-veg",
        ingredients: ["Pastry", "Keema"],
        instructions: ["Baked snack."]
    },
    {
        id: 232, name: "Frittata", type: "non-veg",
        ingredients: ["Eggs", "Veggies"],
        instructions: ["Baked omelette."]
    },
    {
        id: 233, name: "Curd Rice with Fish", type: "non-veg",
        ingredients: ["Curd Rice", "Fried Fish"],
        instructions: ["Combo."]
    },
    {
        id: 234, name: "Sausage Egg Mug", type: "non-veg",
        ingredients: ["Egg", "Sausage", "Cheese"],
        instructions: ["Microwave quick meal."]
    },
    {
        id: 235, name: "Chicken Reshmi Kabab", type: "non-veg",
        ingredients: ["Chicken", "Cream Marinade"],
        instructions: ["Pan fry."]
    },
    {
        id: 236, name: "Chili Egg", type: "non-veg",
        ingredients: ["Fried Eggs", "Chili Sauce"],
        instructions: ["Indo-Chinese."]
    },
    {
        id: 237, name: "Palak Chicken", type: "non-veg",
        ingredients: ["Chicken", "Spinach Gravy"],
        instructions: ["Curry."]
    },
    {
        id: 238, name: "Lemon Garlic Egg", type: "non-veg",
        ingredients: ["Boiled Eggs", "Garlic Butter"],
        instructions: ["Side dish."]
    },
    {
        id: 239, name: "Mutton Liver Fry", type: "non-veg",
        ingredients: ["Liver", "Spices"],
        instructions: ["Dry fry."]
    },
    {
        id: 240, name: "French Toast Rollups", type: "non-veg",
        ingredients: ["Flattened Bread", "Sausage/Cheese"],
        instructions: ["Rolled toast."]
    },
    {
        id: 241, name: "Chicken Pakora", type: "non-veg",
        ingredients: ["Chicken", "Besan"],
        instructions: ["Fritter."]
    },
    {
        id: 242, name: "Egg Korma", type: "non-veg",
        ingredients: ["Eggs", "White Gravy"],
        instructions: ["Mild curry."]
    },
    {
        id: 243, name: "Chicken Club Sandwich", type: "non-veg",
        ingredients: ["3 Bread Layers", "Chicken", "Egg"],
        instructions: ["Club sandwich."]
    },
    {
        id: 244, name: "Prawn Omelette", type: "non-veg",
        ingredients: ["Eggs", "Small Prawns"],
        instructions: ["Seafood egg."]
    },
    {
        id: 245, name: "Sweet & Sour Eggs", type: "non-veg",
        ingredients: ["Fried Eggs", "Tomato Vinegar Sauce"],
        instructions: ["Tangy dish."]
    },
    {
        id: 246, name: "Chicken Tikka Sandwich", type: "non-veg",
        ingredients: ["Leftover Tikka", "Bread"],
        instructions: ["Spicy sandwich."]
    },
    {
        id: 247, name: "Egg Bhurji Roll", type: "non-veg",
        ingredients: ["Chapati", "Bhurji"],
        instructions: ["Wrap."]
    },
    {
        id: 248, name: "Tandoori Egg", type: "non-veg",
        ingredients: ["Boiled Eggs", "Tandoori Masala"],
        instructions: ["Roast."]
    },
    {
        id: 249, name: "Chicken Malai Tikka", type: "non-veg",
        ingredients: ["Chicken", "Cream"],
        instructions: ["White marinade kabab."]
    },
    {
        id: 250, name: "Bengali Breakfast Platter", type: "non-veg",
        ingredients: ["Luchi", "Dal", "Omelette"],
        instructions: ["Full meal."]
    },
    ,
    // --- BATCH 4 (Vegetarian Lunch: 251-300) ---
    {
        id: 251, name: "Chanar Dalna (Paneer Curry)", type: "veg",
        ingredients: ["200g Paneer", "Potato", "Ginger", "Tomato", "Garam Masala"],
        instructions: ["Fry paneer and potato.", "Simmer in ginger-tomato gravy."]
    },
    {
        id: 252, name: "Rajma Masala", type: "veg",
        ingredients: ["1 cup Rajma", "Onion", "Tomato", "Rajma Masala"],
        instructions: ["Pressure cook rajma.", "Simmer in spicy onion-tomato gravy."]
    },
    {
        id: 253, name: "Nutrela Aloo Curry", type: "veg",
        ingredients: ["1 cup Soya Chunks", "Potato", "Onion-Garlic Paste"],
        instructions: ["Fry chunks and potatoes.", "Cook in spicy gravy."]
    },
    {
        id: 254, name: "Cholar Dal with Coconut", type: "veg",
        ingredients: ["1 cup Chana Dal", "Fried Coconut", "Ghee"],
        instructions: ["Boil dal.", "Temper with spices and coconut."]
    },
    {
        id: 255, name: "Palak Paneer", type: "veg",
        ingredients: ["Spinach Puree", "200g Paneer", "Garlic", "Cream"],
        instructions: ["Simmer paneer in spinach gravy.", "Finish with cream."]
    },
    {
        id: 256, name: "Dhokar Dalna", type: "veg",
        ingredients: ["Chana Dal Cakes", "Potato", "Ginger-Cumin Gravy"],
        instructions: ["Fry lentil cakes.", "Simmer in gravy with potatoes."]
    },
    {
        id: 257, name: "Mixed Dal Tadka", type: "veg",
        ingredients: ["Mixed Lentils", "Onion", "Tomato", "Ghee"],
        instructions: ["Pressure cook dals.", "Temper with spices."]
    },
    {
        id: 258, name: "Dahi Bhindi", type: "veg",
        ingredients: ["250g Okra", "Yogurt", "Cumin"],
        instructions: ["Fry bhindi.", "Simmer in yogurt gravy."]
    },
    {
        id: 259, name: "Paneer Butter Masala", type: "veg",
        ingredients: ["200g Paneer", "Butter", "Cashew Paste", "Cream"],
        instructions: ["Cook rich buttery gravy.", "Add paneer."]
    },
    {
        id: 260, name: "Green Moong Dal Curry", type: "veg",
        ingredients: ["Whole Green Moong", "Onion", "Tomato"],
        instructions: ["Pressure cook moong.", "Mash into masala gravy."]
    },
    {
        id: 261, name: "Lauki Chana Dal", type: "veg",
        ingredients: ["Bottle Gourd", "Chana Dal", "Turmeric"],
        instructions: ["Cook together until soft."]
    },
    {
        id: 262, name: "Soya Keema Matar", type: "veg",
        ingredients: ["Soya Granules", "Peas", "Meat Masala (Veg)"],
        instructions: ["Sauté well.", "Simmer until dry."]
    },
    {
        id: 263, name: "Dum Aloo (Bengali)", type: "veg",
        ingredients: ["Baby Potatoes", "Yogurt", "Ginger-Cumin"],
        instructions: ["Fry potatoes.", "Slow cook in yogurt gravy."]
    },
    {
        id: 264, name: "Masoor Dal with Mango (Tok Dal)", type: "veg",
        ingredients: ["Masoor Dal", "Raw Mango", "Mustard Seeds"],
        instructions: ["Boil dal with mango.", "Temper."]
    },
    {
        id: 265, name: "Mushroom Matar Malai", type: "veg",
        ingredients: ["Mushrooms", "Peas", "Cream", "Onion Paste"],
        instructions: ["Cook veggies in white gravy."]
    },
    {
        id: 266, name: "Kabuli Chana Curry", type: "veg",
        ingredients: ["Chickpeas", "Chana Masala", "Onion-Tomato"],
        instructions: ["Pressure cook chana.", "Simmer in spicy gravy."]
    },
    {
        id: 267, name: "Tofu Tomato Gravy", type: "veg",
        ingredients: ["Tofu", "Tomato Puree", "Kasuri Methi"],
        instructions: ["Simmer fried tofu in tomato sauce."]
    },
    {
        id: 268, name: "Labra (Mixed Veg)", type: "veg",
        ingredients: ["Pumpkin", "Eggplant", "Potato", "Panch Phoron"],
        instructions: ["Slow cook chopped veggies.", "Mash lightly."]
    },
    {
        id: 269, name: "Methi Malai Matar", type: "veg",
        ingredients: ["Fenugreek Leaves", "Peas", "Cream"],
        instructions: ["Cook methi and peas.", "Simmer in cream."]
    },
    {
        id: 270, name: "Aloo Posto", type: "veg",
        ingredients: ["Potato", "Poppy Seed Paste", "Green Chili"],
        instructions: ["Cook potatoes in thick poppy paste."]
    },
    {
        id: 271, name: "Whole Masoor Dal", type: "veg",
        ingredients: ["Whole Red Lentils", "Onion", "Garlic"],
        instructions: ["Boil dal.", "Fry masala separately and mix."]
    },
    {
        id: 272, name: "Paneer Do Pyaza", type: "veg",
        ingredients: ["Paneer", "Onion Petals", "Tomato"],
        instructions: ["Spicy gravy with crunchy onions."]
    },
    {
        id: 273, name: "Gobi Musallam", type: "veg",
        ingredients: ["Cauliflower", "Yogurt-Cashew Gravy"],
        instructions: ["Roast cauliflower.", "Simmer in rich white gravy."]
    },
    {
        id: 274, name: "Soybean Tehari (Biryani)", type: "veg",
        ingredients: ["Rice", "Soya Chunks", "Potato", "Biryani Masala"],
        instructions: ["One pot rice meal."]
    },
    {
        id: 275, name: "Potol Dorma (Stuffed)", type: "veg",
        ingredients: ["Pointed Gourd", "Paneer Stuffing", "Gravy"],
        instructions: ["Stuff and fry potol.", "Simmer in gravy."]
    },
    {
        id: 276, name: "Aloo Paneer Kofta", type: "veg",
        ingredients: ["Paneer Balls", "Creamy Tomato Gravy"],
        instructions: ["Fry kofras.", "Serve in rich gravy."]
    },
    {
        id: 277, name: "Moong Dal with Red Spinach", type: "veg",
        ingredients: ["Moong Dal", "Red Spinach", "Panch Phoron"],
        instructions: ["Cook dal with greens."]
    },
    {
        id: 278, name: "Shahi Soya Chunks", type: "veg",
        ingredients: ["Soya Chunks", "Yogurt-Cashew Gravy", "Ghee"],
        instructions: ["Rich creamy curry."]
    },
    {
        id: 279, name: "Dry Chana Masala", type: "veg",
        ingredients: ["Boiled Kabuli Chana", "Amchur", "Ginger"],
        instructions: ["Toss in dry spices."]
    },
    {
        id: 280, name: "Paneer Bhapa (Steamed)", type: "veg",
        ingredients: ["Paneer", "Mustard-Curd Paste"],
        instructions: ["Steam paneer in tiffin box."]
    },
    {
        id: 281, name: "Kachori & Aloo Curry", type: "veg",
        ingredients: ["Pea Stuffed Bread", "Potato Gravy"],
        instructions: ["Deep fry kachori.", "Serve with spicy potato."]
    },
    {
        id: 282, name: "Toor Dal Tadka", type: "veg",
        ingredients: ["Toor Dal", "Garlic", "Tomato"],
        instructions: ["Classic yellow dal."]
    },
    {
        id: 283, name: "Navratan Korma", type: "veg",
        ingredients: ["Mixed Veggies", "Paneer", "Nuts", "Fruity Gravy"],
        instructions: ["Sweet and creamy curry."]
    },
    {
        id: 284, name: "Masoor Dal Bora Jhol", type: "veg",
        ingredients: ["Lentil Fritters", "Potato Gravy"],
        instructions: ["Simmer fritters in spicy gravy."]
    },
    {
        id: 285, name: "Soya Keema Biryani", type: "veg",
        ingredients: ["Soya Granules", "Rice", "Mint"],
        instructions: ["Layered rice dish."]
    },
    {
        id: 286, name: "Palak Corn Curry", type: "veg",
        ingredients: ["Spinach", "Sweet Corn", "Cream"],
        instructions: ["Sweet and savory curry."]
    },
    {
        id: 287, name: "Bhindi Do Pyaza", type: "veg",
        ingredients: ["Okra", "Onion Petals"],
        instructions: ["Stir fry with lots of onions."]
    },
    {
        id: 288, name: "Paneer Jalfrezi", type: "veg",
        ingredients: ["Paneer Strips", "Capsicum", "Vinegar"],
        instructions: ["Tangy stir fry."]
    },
    {
        id: 289, name: "Methi Chana Dal", type: "veg",
        ingredients: ["Chana Dal", "Fresh Fenugreek"],
        instructions: ["Dal with bitter greens."]
    },
    {
        id: 290, name: "Veg Shepherd's Pie", type: "veg",
        ingredients: ["Lentil/Soya Base", "Mashed Potato Top"],
        instructions: ["Bake until golden."]
    },
    {
        id: 291, name: "Kadai Paneer", type: "veg",
        ingredients: ["Paneer", "Capsicum", "Roast Spices"],
        instructions: ["Spicy semi-dry curry."]
    },
    {
        id: 292, name: "Aloo Phulkopir Dalna", type: "veg",
        ingredients: ["Cauliflower", "Potato", "Ginger-Cumin"],
        instructions: ["Bengali winter curry."]
    },
    {
        id: 293, name: "Mushroom Do Pyaza", type: "veg",
        ingredients: ["Mushrooms", "Onion", "Tomato"],
        instructions: ["Dry spicy mushroom fry."]
    },
    {
        id: 294, name: "Curd Rice", type: "veg",
        ingredients: ["Mushy Rice", "Yogurt", "Mustard Tempering"],
        instructions: ["Mix cool yogurt and rice."]
    },
    {
        id: 295, name: "Soya Spinach Curry", type: "veg",
        ingredients: ["Soya Chunks", "Spinach Gravy"],
        instructions: ["Healthy green curry."]
    },
    {
        id: 296, name: "Rajasthani Panchmel Dal", type: "veg",
        ingredients: ["5 Mixed Lentils", "Ghee", "Cloves"],
        instructions: ["Rich dal."]
    },
    {
        id: 297, name: "Stuffed Capsicum Gravy", type: "veg",
        ingredients: ["Capsicum", "Potato-Paneer Stuffing", "Gravy"],
        instructions: ["Stuffed peppers in sauce."]
    },
    {
        id: 298, name: "Matar Paneer", type: "veg",
        ingredients: ["Paneer", "Peas", "Cashew Gravy"],
        instructions: ["Creamy classic."]
    },
    {
        id: 299, name: "Jeera Rice & Dal Fry", type: "veg",
        ingredients: ["Cumin Rice", "Thick Dal"],
        instructions: ["Standard combo."]
    },
    {
        id: 300, name: "Begun Basanti", type: "veg",
        ingredients: ["Eggplant", "Mustard-Yogurt Sauce"],
        instructions: ["Rich eggplant curry."]
    },
    // --- BATCH 5 (Non-Vegetarian Lunch: 301-400) ---
    {
        id: 301, name: "Doi Maach", type: "non-veg",
        ingredients: ["Rui Fish", "Yogurt", "Ginger-Garlic", "Green Chilies"],
        instructions: ["Fry fish.", "Simmer in yogurt gravy."]
    },
    {
        id: 302, name: "Chicken Curry (Bengali Style)", type: "non-veg",
        ingredients: ["500g Chicken", "Potato", "Onion", "Ginger-Garlic", "Mustard Oil"],
        instructions: ["Marinate chicken.", "Cook with potatoes in spicy gravy."]
    },
    {
        id: 303, name: "Dim Kosha (Egg Curry)", type: "non-veg",
        ingredients: ["4 Eggs", "Potato", "Onion", "Tomato", "Kashmiri Chili"],
        instructions: ["Fry eggs and potatoes.", "Cook in thick spicy gravy."]
    },
    {
        id: 304, name: "Shorshe Maach", type: "non-veg",
        ingredients: ["Fish", "Mustard Paste", "Nigella Seeds", "Green Chili"],
        instructions: ["Simmer fish in mustard gravy.", "Drizzle raw oil."]
    },
    {
        id: 305, name: "Chicken Bharta", type: "non-veg",
        ingredients: ["Shredded Chicken", "Boiled Egg", "Cream", "Kasuri Methi"],
        instructions: ["Cook shredded chicken in rich gravy.", "Add cream and egg."]
    },
    {
        id: 306, name: "Macher Kalia", type: "non-veg",
        ingredients: ["Katla Fish", "Onion-Yogurt Paste", "Raisins", "Ghee"],
        instructions: ["Rich spicy fish curry."]
    },
    {
        id: 307, name: "Chicken Stew", type: "non-veg",
        ingredients: ["Chicken", "Papaya", "Carrot", "Beans", "Butter"],
        instructions: ["Pressure cook chicken and veggies.", "Light broth."]
    },
    {
        id: 308, name: "Egg Tadka", type: "non-veg",
        ingredients: ["Moong Dal", "Scrambled Eggs", "Tadka Masala"],
        instructions: ["Mix dal and eggs.", "Temper with butter."]
    },
    {
        id: 309, name: "Rui Macher Jhol", type: "non-veg",
        ingredients: ["Rui Fish", "Potato", "Cauliflower", "Cumin Paste"],
        instructions: ["Light runny cumin gravy with veggies."]
    },
    {
        id: 310, name: "Mutton Curry (Kosha)", type: "non-veg",
        ingredients: ["Mutton", "Potato", "Onion-Garlic", "Mustard Oil"],
        instructions: ["Slow cook mutton for hours.", "serve with rice."]
    },
    {
        id: 311, name: "Paneer with Egg Gravy", type: "non-veg",
        ingredients: ["Paneer", "Eggs", "Tomato Gravy"],
        instructions: ["Fried paneer in egg-drop curry."]
    },
    {
        id: 312, name: "Chicken Do Pyaza", type: "non-veg",
        ingredients: ["Chicken", "Onion Petals", "Red Chili"],
        instructions: ["Spicy chicken with lots of onions."]
    },
    {
        id: 313, name: "Muri Ghonto", type: "non-veg",
        ingredients: ["Fish Head", "Moong Dal", "Rice", "Potato"],
        instructions: ["Cook crushed fish head with dal and rice."]
    },
    {
        id: 314, name: "Lemon Chicken", type: "non-veg",
        ingredients: ["Chicken", "Lemon Juice", "Pepper", "Ginger"],
        instructions: ["Tangy peppery chicken stew."]
    },
    {
        id: 315, name: "Egg Korma", type: "non-veg",
        ingredients: ["Boiled Eggs", "Yogurt", "Cashew Paste", "White Pepper"],
        instructions: ["Mild white creamy egg curry."]
    },
    {
        id: 316, name: "Prawn Malai Curry", type: "non-veg",
        ingredients: ["Prawns", "Coconut Milk", "Ghee", "Sugar"],
        instructions: ["Simmer prawns in sweet coconut gravy."]
    },
    {
        id: 317, name: "Chicken Rezala", type: "non-veg",
        ingredients: ["Chicken", "Yogurt", "Cashew-Poppy Paste", "Makhana"],
        instructions: ["Aromatic white gravy with dried chilies."]
    },
    {
        id: 318, name: "Omelette Curry", type: "non-veg",
        ingredients: ["Egg Omelette", "Potato", "Cumin Gravy"],
        instructions: ["Soak omelette pieces in spicy gravy."]
    },
    {
        id: 319, name: "Masoor Dal with Egg", type: "non-veg",
        ingredients: ["Masoor Dal", "Boiled Eggs (chopped)"],
        instructions: ["Dal mixed with chopped eggs."]
    },
    {
        id: 320, name: "Bhetki Paturi", type: "non-veg",
        ingredients: ["Bhetki Fillet", "Mustard-Coconut Paste", "Banana Leaf"],
        instructions: ["Steam fish in banana leaf parcels."]
    },
    {
        id: 321, name: "Chicken Keema Matar", type: "non-veg",
        ingredients: ["Minced Chicken", "Peas", "Garam Masala"],
        instructions: ["Semi-dry mince curry."]
    },
    {
        id: 322, name: "Fish Fry Curry", type: "non-veg",
        ingredients: ["Fried Fish Leftovers", "Spicy Tomato Gravy"],
        instructions: ["Toss fried fish in masala."]
    },
    {
        id: 323, name: "Chicken Liver Curry", type: "non-veg",
        ingredients: ["Chicken Liver", "Potato", "Spicy Masala"],
        instructions: ["Dry spicy liver fry."]
    },
    {
        id: 324, name: "Palak Chicken", type: "non-veg",
        ingredients: ["Chicken", "Spinach Puree", "Cream"],
        instructions: ["Green spinach chicken curry."]
    },
    {
        id: 325, name: "Parshe Macher Jhal", type: "non-veg",
        ingredients: ["Parshe Fish", "Mustard Paste", "Green Chili"],
        instructions: ["Spicy mustard gravy."]
    },
    {
        id: 326, name: "Egg Biryani", type: "non-veg",
        ingredients: ["Rice", "Boiled Eggs", "Potato", "Biryani Masala"],
        instructions: ["One pot egg rice."]
    },
    {
        id: 327, name: "Dahi Chicken", type: "non-veg",
        ingredients: ["Chicken", "Yogurt", "Curry Leaves"],
        instructions: ["Tangy yogurt chicken."]
    },
    {
        id: 328, name: "Lau Chingri", type: "non-veg",
        ingredients: ["Bottle Gourd", "Shrimps", "Cumin"],
        instructions: ["Gourd cooked with prawns."]
    },
    {
        id: 329, name: "Chicken Dak Bungalow", type: "non-veg",
        ingredients: ["Chicken", "Egg", "Potato", "Special Masala"],
        instructions: ["Colonial style curry with eggs."]
    },
    {
        id: 330, name: "Katla Kalia", type: "non-veg",
        ingredients: ["Katla Fish", "Rich Onion Gravy"],
        instructions: ["Spicy fish curry."]
    },
    {
        id: 331, name: "Soya Egg Curry", type: "non-veg",
        ingredients: ["Soya Chunks", "Boiled Eggs", "Potato"],
        instructions: ["Protein rich mix."]
    },
    {
        id: 332, name: "Methi Chicken", type: "non-veg",
        ingredients: ["Chicken", "Fenugreek Leaves", "Yogurt"],
        instructions: ["Chicken with bitter herbs."]
    },
    {
        id: 333, name: "Tangra Macher Jhol", type: "non-veg",
        ingredients: ["Catfish", "Eggplant", "Potato"],
        instructions: ["Light fish stew."]
    },
    {
        id: 334, name: "Egg Roast", type: "non-veg",
        ingredients: ["Boiled Eggs", "Caramelized Onion", "Pepper"],
        instructions: ["Dry onion masala eggs."]
    },
    {
        id: 335, name: "Chicken Chaap", type: "non-veg",
        ingredients: ["Chicken Legs", "Poppy-Cashew Paste", "Rose Water"],
        instructions: ["Slow cooked rich curry."]
    },
    {
        id: 336, name: "Fish Balls Gravy", type: "non-veg",
        ingredients: ["Fish Balls", "Spicy Gravy"],
        instructions: ["Fried fish balls in curry."]
    },
    {
        id: 337, name: "Masoor Dal with Chicken", type: "non-veg",
        ingredients: ["Red Lentils", "Chicken Wings/Neck"],
        instructions: ["Dal cooked with chicken parts."]
    },
    {
        id: 338, name: "Paneer Pasanda", type: "non-veg",
        ingredients: ["Stuffed Paneer", "Rich Gravy"],
        instructions: ["Sandwich paneer in sauce."]
    },
    {
        id: 339, name: "Dhania Chicken", type: "non-veg",
        ingredients: ["Chicken", "Coriander Paste", "Green Chili"],
        instructions: ["Green herbal chicken."]
    },
    {
        id: 340, name: "Pabda Macher Jhal", type: "non-veg",
        ingredients: ["Pabda Fish", "Mustard-Poppy Paste", "Bori"],
        instructions: ["Fish with lentil dumplings."]
    },
    {
        id: 341, name: "Anda Aloo Dum", type: "non-veg",
        ingredients: ["Eggs", "Baby Potatoes", "Yogurt"],
        instructions: ["Potato and egg curry."]
    },
    {
        id: 342, name: "Tawa Chicken", type: "non-veg",
        ingredients: ["Chicken Strips", "Capsicum", "Tawa Masala"],
        instructions: ["Dry fry chicken."]
    },
    {
        id: 343, name: "Fish Begun Jhol", type: "non-veg",
        ingredients: ["Fish", "Eggplant", "Kalonji"],
        instructions: ["Light stew."]
    },
    {
        id: 344, name: "Mughlai Chicken", type: "non-veg",
        ingredients: ["Chicken", "Almond Paste", "Milk"],
        instructions: ["White creamy curry."]
    },
    {
        id: 345, name: "Egg Bhurji Curry", type: "non-veg",
        ingredients: ["Scrambled Eggs", "Tomato Gravy"],
        instructions: ["Curry with egg scramble."]
    },
    {
        id: 346, name: "Garlic Butter Fish", type: "non-veg",
        ingredients: ["Fish Fillet", "Garlic Butter", "Veggies"],
        instructions: ["Pan seared."]
    },
    {
        id: 347, name: "Chicken Kofta Curry", type: "non-veg",
        ingredients: ["Chicken Balls", "Red Gravy"],
        instructions: ["Meatballs in sauce."]
    },
    {
        id: 348, name: "Doi Ilish", type: "non-veg",
        ingredients: ["Hilsa Fish", "Yogurt", "Green Chili"],
        instructions: ["Steamed in yogurt."]
    },
    {
        id: 349, name: "Pepper Chicken", type: "non-veg",
        ingredients: ["Chicken", "Black Pepper", "Curry Leaves"],
        instructions: ["Spicy pepper fry."]
    },
    {
        id: 350, name: "Egg Vindaloo", type: "non-veg",
        ingredients: ["Eggs", "Vinegar", "Garlic"],
        instructions: ["Goan sour curry."]
    },
    {
        id: 351, name: "Mutton Keema Matar", type: "non-veg",
        ingredients: ["Mutton Mince", "Peas", "Spices"],
        instructions: ["Minced meat curry."]
    },
    {
        id: 352, name: "Ilish Bhapa", type: "non-veg",
        ingredients: ["Hilsa Fish", "Mustard Paste"],
        instructions: ["Steamed mustard fish."]
    },
    {
        id: 353, name: "Chicken Jalfrezi", type: "non-veg",
        ingredients: ["Chicken", "Capsicum", "Vinegar"],
        instructions: ["Tangy stir fry."]
    },
    {
        id: 354, name: "Macher Dimer Bora Jhol", type: "non-veg",
        ingredients: ["Fish Roe Fritters", "Potato Gravy"],
        instructions: ["Egg fritter curry."]
    },
    {
        id: 355, name: "Achari Chicken", type: "non-veg",
        ingredients: ["Chicken", "Pickle Spices", "Yogurt"],
        instructions: ["Tangy pickle flavored."]
    },
    {
        id: 356, name: "Cauliflower Fish Curry", type: "non-veg",
        ingredients: ["Fish", "Cauliflower", "Potato"],
        instructions: ["Winter vegetable fish stew."]
    },
    {
        id: 357, name: "Dry Egg Masala", type: "non-veg",
        ingredients: ["Hard Boiled Eggs", "Onion Masala"],
        instructions: ["Tossed eggs."]
    },
    {
        id: 358, name: "Prawn Pulao", type: "non-veg",
        ingredients: ["Rice", "Prawns", "Ghee"],
        instructions: ["Prawn rice."]
    },
    {
        id: 359, name: "Chicken Liver Pepper Fry", type: "non-veg",
        ingredients: ["Liver", "Pepper", "Onion"],
        instructions: ["Dry fry."]
    },
    {
        id: 360, name: "Doi Pona", type: "non-veg",
        ingredients: ["Baby Rui Fish", "Yogurt", "Raisins"],
        instructions: ["Sweet and sour fish."]
    },
    {
        id: 361, name: "Chicken Tikka Masala", type: "non-veg",
        ingredients: ["Grilled Chicken", "Tomato Cream Sauce"],
        instructions: ["Classic rich curry."]
    },
    {
        id: 362, name: "Fish Head Cabbage", type: "non-veg",
        ingredients: ["Fish Head", "Cabbage", "Peas"],
        instructions: ["Dry veggie mix."]
    },
    {
        id: 363, name: "Egg Malai Curry", type: "non-veg",
        ingredients: ["Eggs", "Coconut Milk"],
        instructions: ["Creamy egg stew."]
    },
    {
        id: 364, name: "Shorshe Ilish", type: "non-veg",
        ingredients: ["Hilsa", "Mustard Paste", "Raw Oil"],
        instructions: ["Classic mustard fish."]
    },
    {
        id: 365, name: "Chicken Saagwala", type: "non-veg",
        ingredients: ["Chicken", "Spinach"],
        instructions: ["Green curry."]
    },
    {
        id: 366, name: "Pomfret Fry", type: "non-veg",
        ingredients: ["Pomfret", "Red Chili Paste"],
        instructions: ["Fried whole fish."]
    },
    {
        id: 367, name: "Egg Bhurji Gravy", type: "non-veg",
        ingredients: ["Scrambled Egg", "Spicy Gravy"],
        instructions: ["Curry."]
    },
    {
        id: 368, name: "Yellow Chicken Korma", type: "non-veg",
        ingredients: ["Chicken", "Yogurt", "Saffron"],
        instructions: ["Mild yellow curry."]
    },
    {
        id: 369, name: "Fish Tomato", type: "non-veg",
        ingredients: ["Fish", "Lots of Tomato"],
        instructions: ["Tangy red curry."]
    },
    {
        id: 370, name: "Minced Chicken Bharta", type: "non-veg",
        ingredients: ["Chicken Mince", "Egg", "Cream"],
        instructions: ["Mash curry."]
    },
    {
        id: 371, name: "Egg Drop Curry", type: "non-veg",
        ingredients: ["Raw Eggs", "Curry"],
        instructions: ["Poach eggs in gravy."]
    },
    {
        id: 372, name: "Keema Aloo", type: "non-veg",
        ingredients: ["Mince Meat", "Potato"],
        instructions: ["Dry fry."]
    },
    {
        id: 373, name: "Egg Lababdar", type: "non-veg",
        ingredients: ["Eggs", "Cheese", "Rich Gravy"],
        instructions: ["Cheesy curry."]
    },
    {
        id: 374, name: "Lemon Garlic Chicken", type: "non-veg",
        ingredients: ["Chicken", "Butter", "Lemon", "Garlic"],
        instructions: ["Buttery sauce."]
    },
    {
        id: 375, name: "Prawn Doi Maach", type: "non-veg",
        ingredients: ["Prawns", "Yogurt"],
        instructions: ["Yogurt prawns."]
    },
    {
        id: 376, name: "Chicken Changezi", type: "non-veg",
        ingredients: ["Roast Chicken", "Milk", "Tomato"],
        instructions: ["Rich red gravy."]
    },
    {
        id: 377, name: "Mourola Bati Chorchori", type: "non-veg",
        ingredients: ["Small Fish", "Potato", "Mustard Oil"],
        instructions: ["Steam in bowl."]
    },
    {
        id: 378, name: "Fish Finger Curry", type: "non-veg",
        ingredients: ["Fish Fingers", "Curry"],
        instructions: ["Fritter curry."]
    },
    {
        id: 379, name: "Chicken Kali Mirch", type: "non-veg",
        ingredients: ["Chicken", "Black Pepper", "Cream"],
        instructions: ["White pepper curry."]
    },
    {
        id: 380, name: "Mutton Stew", type: "non-veg",
        ingredients: ["Mutton", "Veggies", "Whole Spices"],
        instructions: ["Healthy broth."]
    },
    {
        id: 381, name: "Fish Pulao", type: "non-veg",
        ingredients: ["Fried Fish", "Rice"],
        instructions: ["Fish rice."]
    },
    {
        id: 382, name: "Chicken Angara", type: "non-veg",
        ingredients: ["Smoked Chicken", "Spicy Gravy"],
        instructions: ["Charcoal flavor."]
    },
    {
        id: 383, name: "Chitol Muitha", type: "non-veg",
        ingredients: ["Fish Balls", "Potato", "Rich Gravy"],
        instructions: ["Royal fish curry."]
    },
    {
        id: 384, name: "Duck Egg Curry", type: "non-veg",
        ingredients: ["Duck Eggs", "Potato", "Spicy Gravy"],
        instructions: ["Rich egg curry."]
    },
    {
        id: 385, name: "White Chicken Rezala", type: "non-veg",
        ingredients: ["Chicken", "Yogurt", "Kewra"],
        instructions: ["Aromatic white curry."]
    },
    {
        id: 386, name: "Fish Korma", type: "non-veg",
        ingredients: ["Fish", "Yogurt", "Fried Onion"],
        instructions: ["Thick rich gravy."]
    },
    {
        id: 387, name: "Mixed Fried Rice", type: "non-veg",
        ingredients: ["Rice", "Chicken", "Prawn", "Egg"],
        instructions: ["Stir fry."]
    },
    {
        id: 388, name: "Mutton Kosha", type: "non-veg",
        ingredients: ["Mutton", "Spices", "Oil"],
        instructions: ["Dry slow cooked."]
    },
    {
        id: 389, name: "Paneer Chicken", type: "non-veg",
        ingredients: ["Chicken", "Paneer"],
        instructions: ["Mix curry."]
    },
    {
        id: 390, name: "Tel Koi", type: "non-veg",
        ingredients: ["Koi Fish", "Mustard Oil"],
        instructions: ["Oily spicy fish."]
    },
    {
        id: 391, name: "Chicken Afghani", type: "non-veg",
        ingredients: ["Chicken", "Egg", "Cream"],
        instructions: ["Rich dry fry."]
    },
    {
        id: 392, name: "Fish Bharta", type: "non-veg",
        ingredients: ["Mashed Fish", "Onion", "Chili"],
        instructions: ["Spicy mash."]
    },
    {
        id: 393, name: "Egg Vindaloo Goan", type: "non-veg",
        ingredients: ["Eggs", "Vinegar", "Chili"],
        instructions: ["Sour spicy."]
    },
    {
        id: 394, name: "Chicken 65 Gravy", type: "non-veg",
        ingredients: ["Fried Chicken", "Yogurt Sauce"],
        instructions: ["Spicy red sauce."]
    },
    {
        id: 395, name: "Pabda Jhal", type: "non-veg",
        ingredients: ["Pabda Fish", "Coriander"],
        instructions: ["Spicy gravy."]
    },
    {
        id: 396, name: "Soya Chicken Keema", type: "non-veg",
        ingredients: ["Chicken Mince", "Soya Granules"],
        instructions: ["Volume curry."]
    },
    {
        id: 397, name: "Fish Head Dal", type: "non-veg",
        ingredients: ["Moong Dal", "Fish Head"],
        instructions: ["Lentil with fish."]
    },
    {
        id: 398, name: "Butter Chicken", type: "non-veg",
        ingredients: ["Chicken", "Butter", "Tomato", "Honey"],
        instructions: ["Sweet creamy."]
    },
    {
        id: 399, name: "Egg Potato Roast", type: "non-veg",
        ingredients: ["Eggs", "Potato", "Dry Spices"],
        instructions: ["Dry roast."]
    },
    {
        id: 400, name: "Gold Prawn Malai", type: "non-veg",
        ingredients: ["Jumbo Prawns", "Coconut Cream"],
        instructions: ["Premium rich curry."]
    },
    // --- BATCH 6 (Vegetarian Dinner: 401-450) ---
    {
        id: 401, name: "Paneer Bhurji", type: "veg",
        ingredients: ["150g Crumbled Paneer", "Onion", "Tomato", "Green Chili"],
        instructions: ["Sauté veggies and spices.", "Toss with crumbled paneer."]
    },
    {
        id: 402, name: "Masoor Dal Soup", type: "veg",
        ingredients: ["Red Lentils", "Carrot", "Beans", "Peas"],
        instructions: ["Pressure cook dal and veggies.", "Mash into soup."]
    },
    {
        id: 403, name: "Soya Chunks Kosha", type: "veg",
        ingredients: ["Soya Chunks", "Potato", "Onion Paste", "Garam Masala"],
        instructions: ["Spicy dry curry with soya and potato."]
    },
    {
        id: 404, name: "Lau Ghonto with Bori", type: "veg",
        ingredients: ["Bottle Gourd", "Fried Lentil Dumplings", "Cumin"],
        instructions: ["Cook gourd until soft.", "Add crunchy dumplings."]
    },
    {
        id: 405, name: "Palak Dal", type: "veg",
        ingredients: ["Moong Dal", "Spinach", "Garlic"],
        instructions: ["Mix spinach into boiled dal."]
    },
    {
        id: 406, name: "Mushroom Stir Fry", type: "veg",
        ingredients: ["Mushrooms", "Onion", "Capsicum", "Pepper"],
        instructions: ["High heat stir fry."]
    },
    {
        id: 407, name: "Mixed Veg Stew", type: "veg",
        ingredients: ["Papaya", "Beans", "Milk", "Butter"],
        instructions: ["Boil veggies.", "Simmer with milk and butter."]
    },
    {
        id: 408, name: "Jeera Aloo", type: "veg",
        ingredients: ["Boiled Potato", "Cumin Seeds", "Turmeric"],
        instructions: ["Toss potatoes in cumin oil."]
    },
    {
        id: 409, name: "Tofu Matar Masala", type: "veg",
        ingredients: ["Tofu", "Peas", "Onion-Tomato Gravy"],
        instructions: ["Simmer tofu and peas in curry."]
    },
    {
        id: 410, name: "Peper Dalna", type: "veg",
        ingredients: ["Raw Papaya", "Potato", "Ginger-Cumin Paste"],
        instructions: ["Light papaya stew."]
    },
    {
        id: 411, name: "Moong Dal Khichdi", type: "veg",
        ingredients: ["Moong Dal", "Rice", "Turmeric"],
        instructions: ["One pot mushy rice and lentils."]
    },
    {
        id: 412, name: "Bhindi Masala", type: "veg",
        ingredients: ["Okra", "Onion", "Amchur Powder"],
        instructions: ["Sauté okra with tangy spices."]
    },
    {
        id: 413, name: "Chana Masala (Light)", type: "veg",
        ingredients: ["Chickpeas", "Onion", "Tomato", "Chana Masala"],
        instructions: ["Low oil chickpea curry."]
    },
    {
        id: 414, name: "Paneer Tikka", type: "veg",
        ingredients: ["Paneer", "Yogurt Marinade"],
        instructions: ["Pan sear marinated paneer."]
    },
    {
        id: 415, name: "Cabbage with Peas", type: "veg",
        ingredients: ["Cabbage", "Peas", "Potato"],
        instructions: ["Dry vegetable stir fry."]
    },
    {
        id: 416, name: "Rajma Salad", type: "veg",
        ingredients: ["Kidney Beans", "Onion", "Tomato", "Lemon"],
        instructions: ["Warm bean salad."]
    },
    {
        id: 417, name: "Methi Aloo", type: "veg",
        ingredients: ["Fenugreek Leaves", "Potato", "Garlic"],
        instructions: ["Bitter-salty dry potato."]
    },
    {
        id: 418, name: "Corn Capsicum Masala", type: "veg",
        ingredients: ["Sweet Corn", "Capsicum", "Tomato Gravy"],
        instructions: ["Spicy corn curry."]
    },
    {
        id: 419, name: "Dhaba Dal Fry", type: "veg",
        ingredients: ["Toor Dal", "Ghee", "Garlic", "Red Chili"],
        instructions: ["Tempered yellow lentils."]
    },
    {
        id: 420, name: "Aloo Potol Dalna", type: "veg",
        ingredients: ["Pointed Gourd", "Potato", "Ginger-Cumin"],
        instructions: ["Bengali style gourd curry."]
    },
    {
        id: 421, name: "Soya Keema Matar", type: "veg",
        ingredients: ["Soya Granules", "Peas", "Onion-Tomato"],
        instructions: ["Minced soya curry."]
    },
    {
        id: 422, name: "Veg Jhal Frezi", type: "veg",
        ingredients: ["Mixed Veggies", "Paneer Strips", "Vinegar"],
        instructions: ["Tangy stir fry."]
    },
    {
        id: 423, name: "Begun Pora", type: "veg",
        ingredients: ["Roasted Eggplant", "Onion", "Mustard Oil"],
        instructions: ["Smoky eggplant mash."]
    },
    {
        id: 424, name: "Paneer Do Pyaza", type: "veg",
        ingredients: ["Paneer", "Onion Layers", "Tomato"],
        instructions: ["Light paneer curry."]
    },
    {
        id: 425, name: "Kumro Chechki", type: "veg",
        ingredients: ["Pumpkin", "Nigella Seeds", "Green Chili"],
        instructions: ["Sweet and spicy pumpkin."]
    },
    {
        id: 426, name: "Masoor Dal Seddho", type: "veg",
        ingredients: ["Masoor Dal", "Mustard Oil", "Chili"],
        instructions: ["Mashed lentils."]
    },
    {
        id: 427, name: "Stuffed Tomato", type: "veg",
        ingredients: ["Tomato", "Paneer Stuffing"],
        instructions: ["Baked stuffed tomatoes."]
    },
    {
        id: 428, name: "Beans Aloo", type: "veg",
        ingredients: ["French Beans", "Potato", "Mustard Seeds"],
        instructions: ["Bean and potato fry."]
    },
    {
        id: 429, name: "Labra", type: "veg",
        ingredients: ["Mixed Veggies", "Panch Phoron"],
        instructions: ["Slow cooked vegetable mash."]
    },
    {
        id: 430, name: "Chana Dal Lau", type: "veg",
        ingredients: ["Bottle Gourd", "Chana Dal", "Ginger"],
        instructions: ["Gourd with split chickpeas."]
    },
    {
        id: 431, name: "Dahi Baingan", type: "veg",
        ingredients: ["Fried Eggplant", "Yogurt Sauce"],
        instructions: ["Tangy yogurt curry."]
    },
    {
        id: 432, name: "Matar Paneer (Light)", type: "veg",
        ingredients: ["Paneer", "Peas", "Tomato Gravy"],
        instructions: ["Homestyle curry."]
    },
    {
        id: 433, name: "Broccoli Stir Fry", type: "veg",
        ingredients: ["Broccoli", "Garlic", "Almonds"],
        instructions: ["Garlic broccoli."]
    },
    {
        id: 434, name: "Arbi Masala", type: "veg",
        ingredients: ["Colocasia", "Ajwain", "Spices"],
        instructions: ["Crispy fried root veg."]
    },
    {
        id: 435, name: "Soya Bean Curry", type: "veg",
        ingredients: ["Soya Chunks", "Potato", "Cumin Gravy"],
        instructions: ["Nutrela curry."]
    },
    {
        id: 436, name: "Sweet Potato Roast", type: "veg",
        ingredients: ["Sweet Potato", "Chaat Masala", "Lemon"],
        instructions: ["Spicy roasted cubes."]
    },
    {
        id: 437, name: "Mooli Bhaji", type: "veg",
        ingredients: ["Grated Radish", "Mustard Seeds"],
        instructions: ["Dry radish stir fry."]
    },
    {
        id: 438, name: "Whole Masoor Dal", type: "veg",
        ingredients: ["Whole Red Lentils", "Garlic"],
        instructions: ["Black dal."]
    },
    {
        id: 439, name: "Capsicum Besan", type: "veg",
        ingredients: ["Capsicum", "Roasted Gram Flour"],
        instructions: ["Dry spiced peppers."]
    },
    {
        id: 440, name: "Veg Kofta Curry", type: "veg",
        ingredients: ["Steamed Veg Balls", "Tomato Gravy"],
        instructions: ["No-fry koftas."]
    },
    {
        id: 441, name: "Neem Begun", type: "veg",
        ingredients: ["Neem Leaves", "Eggplant"],
        instructions: ["Bitter cleanse."]
    },
    {
        id: 442, name: "Lemon Rice", type: "veg",
        ingredients: ["Rice", "Lemon", "Peanuts"],
        instructions: ["Tangy rice."]
    },
    {
        id: 443, name: "Paneer Kali Mirch", type: "veg",
        ingredients: ["Paneer", "Black Pepper", "Yogurt"],
        instructions: ["White pepper paneer."]
    },
    {
        id: 444, name: "Aloo Phulkopi Roast", type: "veg",
        ingredients: ["Cauliflower", "Potato", "Ginger"],
        instructions: ["Dry roast curry."]
    },
    {
        id: 445, name: "Ghugni", type: "veg",
        ingredients: ["Yellow Peas", "Coconut", "Tamarind"],
        instructions: ["Spicy pea curry."]
    },
    {
        id: 446, name: "Karela Fry", type: "veg",
        ingredients: ["Bitter Gourd", "Onion"],
        instructions: ["Crispy fry."]
    },
    {
        id: 447, name: "Tinda Masala", type: "veg",
        ingredients: ["Apple Gourd", "Onion Paste"],
        instructions: ["Spicy gourd."]
    },
    {
        id: 448, name: "Sprouts Salad", type: "veg",
        ingredients: ["Moong Sprouts", "Veggies", "Lemon"],
        instructions: ["Warm salad."]
    },
    {
        id: 449, name: "Veg Upma", type: "veg",
        ingredients: ["Semolina", "Veggies", "Mustard Seeds"],
        instructions: ["Savory porridge."]
    },
    {
        id: 450, name: "Tomato Soup", type: "veg",
        ingredients: ["Tomato", "Carrot", "Butter"],
        instructions: ["Homemade soup."]
    },
    // --- BATCH 7 (Non-Vegetarian Dinner: 451-485) ---
    {
        id: 451, name: "Kolkata Chicken Stew", type: "non-veg",
        ingredients: ["Chicken", "Raw Papaya", "Carrot", "Beans", "Butter"],
        instructions: ["Boil chicken and veggies.", "Light buttery broth."]
    },
    {
        id: 452, name: "Dimer Dalna", type: "non-veg",
        ingredients: ["Eggs", "Potato", "Onion-Tomato", "Sugar"],
        instructions: ["Fried egg and potato curry."]
    },
    {
        id: 453, name: "Chicken Bharta", type: "non-veg",
        ingredients: ["Shredded Chicken", "Egg", "Cashew Paste", "Cream"],
        instructions: ["Rich creamy shredded chicken."]
    },
    {
        id: 454, name: "Methi Chicken", type: "non-veg",
        ingredients: ["Chicken", "Fresh Fenugreek", "Yogurt"],
        instructions: ["Dry chicken with bitter herbs."]
    },
    {
        id: 455, name: "Fish Filet Fry", type: "non-veg",
        ingredients: ["Fish Fillet", "Lemon", "Garlic Butter"],
        instructions: ["Pan seared fish."]
    },
    {
        id: 456, name: "Masala Egg Bhurji", type: "non-veg",
        ingredients: ["Scrambled Eggs", "Onion", "Tomato", "Pav Bhaji Masala"],
        instructions: ["Spicy scrambled eggs."]
    },
    {
        id: 457, name: "Mutton Keema Matar", type: "non-veg",
        ingredients: ["Minced Mutton", "Peas", "Garam Masala"],
        instructions: ["Dry minced meat curry."]
    },
    {
        id: 458, name: "Palak Chicken", type: "non-veg",
        ingredients: ["Chicken", "Spinach Puree", "Cream"],
        instructions: ["Chicken in green gravy."]
    },
    {
        id: 459, name: "Grilled Fish Lemon Butter", type: "non-veg",
        ingredients: ["Fish Fillet", "Lemon Butter Sauce"],
        instructions: ["Grilled fish with sauce."]
    },
    {
        id: 460, name: "Chicken Do Pyaza", type: "non-veg",
        ingredients: ["Chicken", "Onion Petals", "Yogurt"],
        instructions: ["Chicken with lots of onions."]
    },
    {
        id: 461, name: "Dhaba Egg Tadka", type: "non-veg",
        ingredients: ["Moong Dal", "Scrambled Eggs", "Butter"],
        instructions: ["Dal with scrambled eggs."]
    },
    {
        id: 462, name: "Chicken Reshmi Kabab", type: "non-veg",
        ingredients: ["Chicken", "Cashew-Cream Marinade"],
        instructions: ["White creamy pan kabab."]
    },
    {
        id: 463, name: "Phulkopi Macher Jhol", type: "non-veg",
        ingredients: ["Fish", "Cauliflower", "Potato"],
        instructions: ["Light fish and vegetable stew."]
    },
    {
        id: 464, name: "Mamlet Jhol", type: "non-veg",
        ingredients: ["Omelette Pieces", "Potato Gravy"],
        instructions: ["Curry with omelette."]
    },
    {
        id: 465, name: "Lemon Garlic Chicken", type: "non-veg",
        ingredients: ["Chicken", "Lemon", "Garlic Sauce"],
        instructions: ["Tangy chicken gravy."]
    },
    {
        id: 466, name: "Prawn Malai Curry (Light)", type: "non-veg",
        ingredients: ["Prawns", "Coconut Milk", "Green Chili"],
        instructions: ["Light coconut prawn curry."]
    },
    {
        id: 467, name: "Spicy Egg Roast", type: "non-veg",
        ingredients: ["Hard Boiled Eggs", "Caramelized Meat Masala"],
        instructions: ["Dry spicy roasted eggs."]
    },
    {
        id: 468, name: "Tangra Macher Jhol", type: "non-veg",
        ingredients: ["Catfish", "Eggplant", "Bori"],
        instructions: ["Light spicy fish stew."]
    },
    {
        id: 469, name: "Keema Paratha", type: "non-veg",
        ingredients: ["Wheat Dough", "Minced Meat Filling"],
        instructions: ["Stuffed meat bread."]
    },
    {
        id: 470, name: "Chicken Sausages Mash", type: "non-veg",
        ingredients: ["Sausages", "Mashed Potato", "Butter"],
        instructions: ["Sausage and potato mash."]
    },
    {
        id: 471, name: "Chicken Clear Soup", type: "non-veg",
        ingredients: ["Chicken Broth", "Veggies", "Pepper"],
        instructions: ["Healthy clear soup."]
    },
    {
        id: 472, name: "Fish Tikka", type: "non-veg",
        ingredients: ["Fish Cubes", "Yogurt Marinade"],
        instructions: ["Pan seared fish tikka."]
    },
    {
        id: 473, name: "Homestyle Chicken Curry", type: "non-veg",
        ingredients: ["Chicken", "Potato", "Ginger-Garlic"],
        instructions: ["Everyday chicken curry."]
    },
    {
        id: 474, name: "Egg Korma", type: "non-veg",
        ingredients: ["Eggs", "Cashew-Yogurt Gravy", "White Pepper"],
        instructions: ["White creamy egg curry."]
    },
    {
        id: 475, name: "Pepper Chicken", type: "non-veg",
        ingredients: ["Chicken", "Black Pepper", "Curry Leaves"],
        instructions: ["Dry pepper fry."]
    },
    {
        id: 476, name: "Macher Matha Dal", type: "non-veg",
        ingredients: ["Moong Dal", "Fish Head", "Potato"],
        instructions: ["Dal with fried fish head."]
    },
    {
        id: 477, name: "Soya Chicken Curry", type: "non-veg",
        ingredients: ["Chicken", "Soya Chunks", "Potato"],
        instructions: ["Chicken curry with soya."]
    },
    {
        id: 478, name: "Chicken Liver Fry", type: "non-veg",
        ingredients: ["Chicken Liver", "Pepper", "Onion"],
        instructions: ["Spicy dry liver."]
    },
    {
        id: 479, name: "Shorshe Parshe", type: "non-veg",
        ingredients: ["Parshe Fish", "Mustard Paste"],
        instructions: ["Fish in mustard gravy."]
    },
    {
        id: 480, name: "Dahi Chicken", type: "non-veg",
        ingredients: ["Chicken", "Yogurt", "Whole Spices"],
        instructions: ["Yogurt base chicken."]
    },
    {
        id: 481, name: "Egg Lababdar", type: "non-veg",
        ingredients: ["Eggs", "Rich Tomato Cream Gravy"],
        instructions: ["Creamy restaurant style eggs."]
    },
    {
        id: 482, name: "Garlic Butter Prawns", type: "non-veg",
        ingredients: ["Prawns", "Butter", "Garlic", "Chili Flakes"],
        instructions: ["5 minute butter prawns."]
    },
    {
        id: 483, name: "Chicken Soup Veggies", type: "non-veg",
        ingredients: ["Minced Chicken", "Corn", "Carrot"],
        instructions: ["Thick homestyle soup."]
    },
    {
        id: 484, name: "Fish Bharta", type: "non-veg",
        ingredients: ["Fried Fish Mash", "Chili", "Mustard Oil"],
        instructions: ["Spicy fish mash."]
    },
    {
        id: 485, name: "Chicken Chaap", type: "non-veg",
        ingredients: ["Chicken Leg", "Poppy-Cashew Paste", "Ghee"],
        instructions: ["Rich slow cooked chicken."]
    },
    // --- BATCH 8 (Mixed Collection: 486-500) ---
    {
        id: 486, name: "Lemon Herb Grilled Chicken", type: "non-veg",
        ingredients: ["Chicken Breast", "Lemon", "Oregano", "Olive Oil"],
        instructions: ["Marinate with lemon and herbs.", "Grill until cooked."]
    },
    {
        id: 487, name: "Mediterranean Quinoa Salad", type: "veg",
        ingredients: ["Quinoa", "Cucumber", "Cherry Tomatoes", "Olives"],
        instructions: ["Toss cooked quinoa with veggies and dressing."]
    },
    {
        id: 488, name: "Baked Tilapia with Herbs", type: "non-veg",
        ingredients: ["Tilapia Fillets", "Garlic", "Parsley", "Lemon"],
        instructions: ["Bake seasoned fish at 400°F."]
    },
    {
        id: 489, name: "Banana Oat Pancakes", type: "non-veg",
        ingredients: ["Banana", "Eggs", "Oats", "Cinnamon"],
        instructions: ["Blend batter and cook pancakes."]
    },
    {
        id: 490, name: "Chicken Stir-Fry Broccoli", type: "non-veg",
        ingredients: ["Chicken Breast", "Broccoli", "Bell Pepper", "Soy Sauce"],
        instructions: ["Stir fry chicken and veggies."]
    },
    {
        id: 491, name: "Spinach Mushroom Omelet", type: "non-veg",
        ingredients: ["Eggs", "Spinach", "Mushrooms"],
        instructions: ["Cook veggies, pour eggs over and fold."]
    },
    {
        id: 492, name: "Spicy Tuna Salad Bowl", type: "non-veg",
        ingredients: ["Canned Tuna", "Mayonnaise", "Sriracha", "Rice"],
        instructions: ["Mix tuna and serve over rice."]
    },
    {
        id: 493, name: "Sweet Potato Black Bean Chili", type: "veg",
        ingredients: ["Sweet Potato", "Black Beans", "Tomatoes", "Cumin"],
        instructions: ["Simmer veggies and beans in broth."]
    },
    {
        id: 494, name: "Hard-Boiled Egg Snack Box", type: "non-veg",
        ingredients: ["Hard Boiled Eggs", "Carrots", "Hummus", "Almonds"],
        instructions: ["Pack protein rich snack box."]
    },
    {
        id: 495, name: "Coconut Curry Chicken", type: "non-veg",
        ingredients: ["Chicken Breast", "Coconut Milk", "Red Curry Paste"],
        instructions: ["Simmer chicken in coconut curry."]
    },
    {
        id: 496, name: "Zucchini Noodles Pesto", type: "veg",
        ingredients: ["Zucchini", "Pesto Sauce", "Cherry Tomatoes"],
        instructions: ["Sauté zoodles and toss with pesto."]
    },
    {
        id: 497, name: "Peanut Butter Banana Toast", type: "veg",
        ingredients: ["Whole Wheat Toast", "Peanut Butter", "Banana", "Chia Seeds"],
        instructions: ["Spread PB and top with banana."]
    },
    {
        id: 498, name: "Roasted Chickpeas", type: "veg",
        ingredients: ["Chickpeas", "Olive Oil", "Paprika", "Cumin"],
        instructions: ["Roast seasoned chickpeas until crispy."]
    },
    {
        id: 499, name: "Teriyaki Salmon Bowl", type: "non-veg",
        ingredients: ["Salmon Fillet", "Teriyaki Sauce", "Brown Rice", "Edamame"],
        instructions: ["Bake salmon and serve with rice."]
    },
    {
        id: 500, name: "Berry Protein Smoothie", type: "veg",
        ingredients: ["Protein Powder", "Mixed Berries", "Almond Milk"],
        instructions: ["Blend all ingredients until smooth."]
    },
    // --- BATCH 9 (User Snacks 1: 501-525) ---
    {
        id: 501, name: "Apple & Almond Butter", type: "veg",
        ingredients: ["1 Apple", "1 tbsp Almond Butter", "Chia Seeds"],
        instructions: ["Slice apple", "Spread butter", "Top with seeds"]
    },
    {
        id: 502, name: "Frozen Grapes", type: "veg",
        ingredients: ["1 cup Grapes"],
        instructions: ["Freeze fresh grapes for 2 hours", "Eat like sorbet"]
    },
    {
        id: 503, name: "Banana Sushi", type: "veg",
        ingredients: ["1 Banana", "Nut Butter", "Granola/Nuts"],
        instructions: ["Coat banana in nut butter", "Roll in granola", "Slice"]
    },
    {
        id: 504, name: "Berry Nut Mix", type: "veg",
        ingredients: ["Blueberries", "Raspberries", "Walnuts", "Almonds"],
        instructions: ["Mix all nuts and berries in a bowl"]
    },
    {
        id: 505, name: "Stuffed Dates", type: "veg",
        ingredients: ["Dates", "Almond Butter"],
        instructions: ["Remove pits", "Stuff center with almond butter"]
    },
    {
        id: 506, name: "Pear & Cheese", type: "veg",
        ingredients: ["1 Pear", "Cheddar/Brie Cheese"],
        instructions: ["Slice pear thinly", "Pair with cheese slice"]
    },
    {
        id: 507, name: "Citrus Mint Salad", type: "veg",
        ingredients: ["Orange", "Grapefruit", "Mint Leaves", "Honey"],
        instructions: ["Segment fruits", "Toss with honey and mint"]
    },
    {
        id: 508, name: "Watermelon Feta Bites", type: "veg",
        ingredients: ["Watermelon Cubes", "Feta Cheese", "Mint"],
        instructions: ["Top watermelon w/ feta & mint"]
    },
    {
        id: 509, name: "Chocolate Strawberries", type: "veg",
        ingredients: ["Strawberries", "Dark Chocolate"],
        instructions: ["Melt chocolate", "Dip berries", "Chill"]
    },
    {
        id: 510, name: "Spiced Orange", type: "veg",
        ingredients: ["Orange Slices", "Cinnamon", "Vanilla"],
        instructions: ["Sprinkle cinnamon on orange rounds"]
    },
    {
        id: 511, name: "Paprika Boiled Eggs", type: "non-veg",
        ingredients: ["2 Boiled Eggs", "Salt", "Paprika"],
        instructions: ["Halve eggs", "Sprinkle spices"]
    },
    {
        id: 512, name: "Cucumber Hummus Boats", type: "veg",
        ingredients: ["Cucumber", "Hummus", "Paprika"],
        instructions: ["Hollow cucumber", "Fill with hummus", "Spice"]
    },
    {
        id: 513, name: "Caprese Skewers", type: "veg",
        ingredients: ["Cherry Tomatoes", "Mozzarella Balls", "Basil", "Balsamic"],
        instructions: ["Thread on toothpick", "Drizzle glaze"]
    },
    {
        id: 514, name: "Turkey Roll-Ups", type: "non-veg",
        ingredients: ["Turkey Slices", "Cream Cheese", "Cucumber"],
        instructions: ["Spread cheese on turkey", "Add cucumber", "Roll"]
    },
    {
        id: 515, name: "Salted Edamame", type: "veg",
        ingredients: ["Edamame Pods", "Sea Salt"],
        instructions: ["Steam edamame", "Toss with salt"]
    },
    {
        id: 516, name: "Celery Cream Cheese", type: "veg",
        ingredients: ["Celery Stalks", "Cream Cheese", "Bagel Seasoning"],
        instructions: ["Fill celery with cheese", "Sprinkle seasoning"]
    },
    {
        id: 517, name: "Tuna Cucumber Bites", type: "non-veg",
        ingredients: ["Canned Tuna", "Cucumber Rounds", "Black Pepper"],
        instructions: ["Mix tuna", "Top cucumber slices"]
    },
    {
        id: 518, name: "Roasted Chickpeas", type: "veg",
        ingredients: ["Chickpeas", "Olive Oil", "Cumin"],
        instructions: ["Roast seasoned chickpeas at 400F until crunchy"]
    },
    {
        id: 519, name: "Beef Jerky", type: "non-veg",
        ingredients: ["Beef Jerky"],
        instructions: ["Ready to eat snack"]
    },
    {
        id: 520, name: "Cottage Cheese Bowl", type: "veg",
        ingredients: ["Cottage Cheese", "Cherry Tomatoes", "Black Pepper"],
        instructions: ["Combine all ingredients"]
    },
    {
        id: 521, name: "Avocado Chilli Toast", type: "veg",
        ingredients: ["Bread", "Avocado", "Chilli Flakes"],
        instructions: ["Toast bread", "Mash avo", "Season"]
    },
    {
        id: 522, name: "PB Banana Rice Cake", type: "veg",
        ingredients: ["2 Rice Cakes", "Peanut Butter", "Banana"],
        instructions: ["Spread PB on cakes", "Top with banana"]
    },
    {
        id: 523, name: "Ricotta Honey Toast", type: "veg",
        ingredients: ["Sourdough", "Ricotta", "Honey", "Lemon Zest"],
        instructions: ["Toast bread", "Spread cheese", "Drizzle honey"]
    },
    {
        id: 524, name: "Guacamole Peppers", type: "veg",
        ingredients: ["Guacamole", "Bell Pepper Strips"],
        instructions: ["Dip peppers in guac"]
    },
    {
        id: 525, name: "Cheese & Crackers", type: "veg",
        ingredients: ["Whole Grain Crackers", "Cheese Slices"],
        instructions: ["Top crackers with cheese"]
    }
];

// Helper to calculate approximate macros (since user input didn't include them)
const getMacros = (ingredients, type) => {
    // Basic estimation logic
    let calories = 350;
    let protein = 12;
    let carbs = 45;
    let fats = 12;

    const text = ingredients.join(' ').toLowerCase();

    if (text.includes('paneer') || text.includes('soya') || text.includes('chicken') || text.includes('egg') || text.includes('protein')) {
        protein += 10;
        calories += 50;
    }
    if (text.includes('cheese') || text.includes('butter') || text.includes('ghee')) {
        fats += 8;
        calories += 60;
    }
    if (text.includes('bread') || text.includes('rice') || text.includes('potato') || text.includes('flour')) {
        carbs += 15;
    }
    if (text.includes('salad') || text.includes('soup') || text.includes('sprouts')) {
        calories -= 100;
        carbs -= 10;
    }

    return { calories, protein, carbs, fats };
};

// Categorize recipes based on ingredients logic
const categorize = (recipe) => {
    const name = recipe.name.toLowerCase();

    // Explicitly categorize the User Provided Snacks (Batch 9 & 10)
    if (recipe.id > 500) {
        return ['snack'];
    }

    const ings = recipe.ingredients.join(' ').toLowerCase();

    if (name.includes('rice') || name.includes('roti') || name.includes('curry') || name.includes('khichdi') || name.includes('pulao') || name.includes('dal')) {
        return ['lunch', 'dinner'];
    }
    if (name.includes('toast') || name.includes('sandwich') || name.includes('pancake') || name.includes('porridge') || name.includes('paratha') || name.includes('smoothie')) {
        return ['breakfast', 'snack'];
    }
    if (name.includes('chaat') || name.includes('salad') || name.includes('fry') || name.includes('soup')) {
        return ['snack', 'dinner'];
    }
    return ['breakfast', 'lunch', 'dinner']; // Default fallback
};


// Generator Function to Expand 150 -> ~750+
const expandRecipes = () => {
    const expanded = {
        breakfast: [],
        lunch: [],
        dinner: [],
        snack: []
    };

    let idCounter = 600; // Start expanding from 600

    coreRecipes.forEach(base => {
        const categories = categorize(base);
        const macros = getMacros(base.ingredients, base.type);

        // Add Original
        categories.forEach(cat => {
            expanded[cat].push({ ...base, ...macros, category: cat });
        });

        // Generate 3 Variations
        const styles = ['Spicy', 'Herbed', 'Masala', 'Grilled/Roasted'];

        styles.slice(0, 3).forEach((style, idx) => {
            const newId = idCounter++;
            const variationName = `${style} ${base.name}`;
            const variation = {
                ...base,
                id: newId,
                name: variationName,
                ...macros, // Keep base macros mostly same
                calories: macros.calories + (idx * 10), // Slight var
            };

            categories.forEach(cat => {
                expanded[cat].push(variation);
            });
        });
    });

    return expanded;
};

export const meals = expandRecipes();
