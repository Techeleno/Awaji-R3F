import { ModelInfo } from "./ModelInfo";

export const MODEL_NAME_LIST = ["01_Nojima_Scuola", "02_Miele", "03_Miele_the_Garden", "04_Miele_the_DINER", "05_Ocean_Terrace",
                                "06_Hello_Kitty_Smile", "07_Ladybird_Road", "08_Chef's_Garden", "09_Seikaiha", "10_Craft_Circus",
                                "11_Hello_Kitty_Show_Box", "12_Hello_Kitty_Apple_House", "13_Auberge", "14_Aman_(Pasona_Square)", "15_Haru_San_San",
                                "16_Zenbo_Seinei", "17_Nijigen_no_Mori", "18_Grand_Chariot"
];


export const MODEL_INFO_LIST = [
    new ModelInfo(
        "01_Nojima_Scuola", 
        { x: -0.594, y: 0.129, z: 1.355 },  // cameraVec
        { x: -0.55, y: 0.002, z: 1.06 },    // targetVec
        "Nojima Scuola",                    // title
        "The popular Marché (market) offers vegetables harvested that morning, freshly baked pastries and Awaji Island's best souvenirs.",       // summaryText
        "Café Scuola on the 1st floor offers casual dining. \n\n" + // detailsText
        "Ristorante Scuola on the 2nd floor is an Italian restaurant created by Mr. Masayuki Okuda, selected as one of the World's Top 1000 Chefs. Enjoy a wonderful ocean view and live piano music while savoring authentic Italian cuisine made with local Awaji beef and seafood. \n\n" +
        "Drop by the zoo to meet alpacas, goats and other friendly animals. ",
        {                                    // operatingHours
            Monday: "9:00 AM - 5:00 PM",
            Tuesday: "9:00 AM - 5:00 PM",
            Wednesday: "9:00 AM - 5:00 PM",
            Thursday: "9:00 AM - 5:00 PM",
            Friday: "9:00 AM - 5:00 PM",
            Weekend: "11:00 AM - 1:00 PM"
        },
        {                                    // contactInfo
            Address: "843 Nojimahikinoura, Awaji, Hyogo, 656-1721",
            Tel: "0799-82-1820"
        },
        true,                                // hasReservation
        "https://www.tablecheck.com/en/shops/nojima-scuola/reserve",      // reservationLink
        "https://en.awajishima-resort.com/shop/nojima-scuola/",   // website
        true, // hasLogo
        "nojima_scuola_logo.png" // logoFile
    ),

    new ModelInfo(
        "02_Miele", 
        {x: -0.820, y: 0.053, z: 1.224 }, 
        {x: -1.068, y: 0.072, z: 1.013 }, 
        "miele",                 // title
        "13 Kinds of Honey and One of \“Japan’s Top 100 Sunset Views\”",       // summaryText
        "Miele, meaning \“honey\” in Italian, is known for its cuisine and sweets made with fresh, local ingredients and honey produced on Awaji Island. Try the pizza topped with the popular local delicacy of dried fish known as \"shirasu\" while gazing at one of \“Japan’s Top 100 Sunset Views\".",
        {                                    // operatingHours
            Monday: "11:00 AM - 7:00 PM",
            Tuesday: "Closed (Except Aug and Sept)",
            Wednesday: "11:00 AM - 7:00 PM",
            Thursday: "11:00 AM - 7:00 PM",
            Friday: "11:00 AM - 7:00 PM",
            Weekend: "9:30 AM - 7:30 PM"
        },
        {                                    // contactInfo
            Address: "785-9 Nojimahikinoura, Awaji, Hyogo, 656-1721",
            Tel: "0799-80-2600"
        },
        false,                                // hasReservation
        "",      // reservationLink
        "https://www.miele-da-scuola.com/",   // website
        true, // hasLogo
        "nojima_scuola_logo.png" 
    ),

    new ModelInfo(
        "04_Miele_the_DINER", 
        {x: -0.241, y: 0.055, z: 0.960 }, 
        { x: -0.316, y: 0.043, z: 0.730 }, 
        "miele the DINER", 
        "A Lively, Relaxing Seafood Diner & Café on Awaji Island",       // summaryText
        "On the west coast of Awaji Island, miele the DINER joins the popular Café miele, and miele the Garden, offering another option to enjoy the resort island atmosphere on a garden terrace filled with greenery. " + 
        "This restaurant is located amid the mild climate and beautiful ocean views of Awaji Island's west coast, a place reminiscent of the California's Pacific shores. The 1st floor is a casual seafood diner with a lively atmosphere, serving classic American seafood dishes such as lobster, steak, and clam chowder. \n" +
        "The calm, open space of the 2nd floor café offers a variety of drinks, bagels and tarts made with Awaji Island fruits in a relaxing environment with an outdoor terrace.",
        {                                    // operatingHours
            Monday: "11:00 AM - 8:00 PM",
            Tuesday: "11:00 AM - 8:00 PM",
            Wednesday: "11:00 AM - 8:00 PM",
            Thursday: "11:00 AM - 8:00 PM",
            Friday: "11:00 AM - 8:00 PM",
            Weekend: "11:00 AM - 8:00 PM"
        },
        {                                    // contactInfo
            Address: "985-1 Nojimahikinoura, Awaji, Hyogo 656-1721",
            Tel: "0799-70-9123"
        },
        true,                                // hasReservation
        "https://www.tablecheck.com/en/shops/miele-the-diner/reserve",      // reservationLink
        "https://miele-the-diner.com/",   // website
        true, // hasLogo
        "nojima_scuola_logo.png" // logoFile
    ),

    // new ModelInfo("03_Miele_the_Garden", {x: -0.926, y: 0.178, z: 1.133 }, { x: -0.883, y: 0.144, z: 0.801 }, "Nojima Scuola", NojimaScuolaText),
    new ModelInfo(
        "05_Ocean_Terrace", 
        {x: -0.926, y: 0.178, z: 1.133 }, 
        { x: -0.883, y: 0.144, z: 0.801 }, 
        "Miele the Garden & \n Ocean Terrace", 
        "An Awaji Beef Steakhouse with a Spectacular Ocean View",
        "Prepare your steak and local vegetables to perfection on a large lava-stone grill overlooking the beautiful ocean sunset at the first “self-grill” style steakhouse in Japan. The view from this spot was selected as one of “Japan’s Top 100 Sunsets”. Enjoy this rare chance to taste Awaji beef which comes from only 200 heads of cattle per year. The top floor features a gorgeous space ideal for a party.",
        {                                    // operatingHours
            Monday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
            Tuesday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
            Wednesday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
            Thursday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
            Friday: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM",
            Weekend: "11:30 AM - 3:00 PM, 5:00 PM - 9:00 PM"
        },
        {                                    // contactInfo
            Address: "816 Nojimahikinoura, Awaji, Hyogo, 656-1721",
            Tel: "0799-82-1907"
        },
        true,                                // hasReservation
        "https://www.tablecheck.com/en/shops/craftcircus-oceanterrace/reserve",      // reservationLink
        "https://ocean-terrace-awaji.jp/",   // website
        true, // hasLogo
        "nojima_scuola_logo.png" // logoFile
    ),
    
    new ModelInfo(
        "06_Hello_Kitty_Smile", 
        {x: -0.451, y: 0.146, z: 0.913 }, 
        { x: -0.55, y: 0.036, z: 0.631 }, 
        "Hello Kitty Smile", 
        "Shopping, Dining and Greetings from Hello Kitty at this Multi-media Gallery & Theater",
        "In this one and only Hello Kitty-themed facility, marvel at the latest multi-media art shows and Hello Kitty-related exhibitions in 8 areas including an omni-direction theater. In both the gallery and restaurants, Hello Kitty also comes out to say \"Hi\"! Don’t miss this chance to meet the beloved character in \“person\”! " +
        "As if that wasn't enough, a wide variety of delicious dishes and afternoon tea is served in 2 restaurants / cafés. " + 
        "Afterwards, shop till you drop with all kinds of original Hello Kitty luxury products in 2 shops.",
        {                                    // operatingHours
            Monday: "11:00 AM - 7:00 PM",
            Tuesday: "11:00 AM - 7:00 PM",
            Wednesday: "11:00 AM - 7:00 PM",
            Thursday: "11:00 AM - 7:00 PM",
            Friday: "11:00 AM - 7:00 PM",
            Weekend: "10:00 AM - 7:00 PM"
        },
        {                                    // contactInfo
            Address: "985-1 Nojimahikinoura, Awaji, Hyogo 656-1721",
            Tel: "0799-70-9037"
        },
        true,                                // hasReservation
        "https://www.tablecheck.com/en/shops/hellokitty-smile2restaurant/reserve",      // reservationLink
        "https://awaji-resort.com/hellokittysmile/",   // website
        true, // hasLogo
        "nojima_scuola_logo.png" // logoFile
    ),

    new ModelInfo(
        "07_Ladybird_Road", 
        {x: -0.611, y: 0.122, z: 0.428 }, 
        { x: -0.457, y: 0.05, z: 0.119 }, 
        "Ladybird Road",
        "Stroll the Laneway of Cafes, Restaurants, Patisseries, Marché, and more on Awaji Island",
        "Stroll through a colorful townscape reminiscent of Europe. Restaurants serving sushi, shish-kebabs, obanzai (Kyoto-style home-cooking), hot pot and more, all made with the island's local ingredients are here for your pleasure, along with a marché selling freshly picked vegetables and processed goods. " +
        "The seaside mall also houses specialty stores such as VIE CHOCOLAT, a chocolate store and café directly operated by the Vegan Sweets Institute, which develops health-friendly vegan sweets that take into consideration food preferences and safety.",
        null,
        {                                    // contactInfo
            Address: "95-2, Nojima Todoroki, Awaji, Hyogo, 656-1722",
            Tel: "0799-64-7530"
        },
        false,
        "",
        "https://en.awajishima-resort.com/shop/ladybird-road/",
        true,
        "zenbo-logo.png"

    ),
    new ModelInfo(
        "08_Chef's_Garden", 
        {x: -0.058, y: 0.125, z: 0.157 }, 
        { x: -0.252, y: 0.036, z: -0.129 }, 
        "Chef's Garden", 
        "Dine on the Best Food from across the Country at this Outdoor Resort",
        "Chef's Garden brings local food together with a staggering variety of the most popular specialty restaurants from all over Japan. Slurp up some buckwheat noodles at \"Eki-soba,\" a famous restaurant in Himeji loved for more than 70 years, or dig into a steak rice bowl made with Awaji wagyu beef. " +
        "More than 600 people can dine on the seaside terrace surrounded by beautiful scenery.",
        {                                    // operatingHours
            Monday: "11:00 AM - 8:00 PM",
            Tuesday: "11:00 AM - 8:00 PM",
            Wednesday: "11:00 AM - 8:00 PM",
            Thursday: "11:00 AM - 8:00 PM",
            Friday: "11:00 AM - 8:00 PM",
            Weekend: "11:00 AM - 8:00 PM"
        },
        {                                    // contactInfo
            Address: "57-3 Nojimaokawa, Awaji, Hyogo 656-1722",
            Tel: "080-8177-4501"
        },
        false,                                // hasReservation
        "",      // reservationLink
        "https://www.awaji-chefgarden.com/",   // website
        true, // hasLogo
        "nijigen_no_mori_logo.png" // logoFile
    ),

    new ModelInfo(
        "09_Seikaiha",
        {x: 0.079, y: 0.091, z: -0.244 }, 
        { x: -0.08, y: 0.05, z: -0.576 }, 
        "Seikaiha", 
        "Enjoy Sushi and Tempura from Theater-like Seating facing a Spectacular Ocean View",
        "Savor sushi, tempura and other Japanese cuisine made with seafood freshly caught at Yura Port nearby, and fresh produce harvested on the island including our own farm! Seated on tiered counters, the amazing ocean view stretches from floor to ceiling before your eyes.  After sunset, projection-mapping art offers a fireworks show against the background of the ocean at night.",
        {                                    // operatingHours
            Monday: "11:00 AM - 8:00 PM",
            Tuesday: "11:00 AM - 8:00 PM",
            Wednesday: "11:00 AM - 8:00 PM",
            Thursday: "11:00 AM - 8:00 PM",
            Friday: "11:00 AM - 8:00 PM",
            Weekend: "11:00 AM - 8:00 PM"
        },
        {                                    // contactInfo
            Address: "70 Nojima-okawa, Awaji, Hyogo, 656-1723",
            Tel: "0799-70-9020"
        },
        true,                                // hasReservation
        "https://www.tablecheck.com/en/shops/awaji-seikaiha/reserve",      // reservationLink
        "https://awaji-seikaiha.com/",   // website
        true, // hasLogo
        "nijigen_no_mori_logo.png" // logoFile
    ),

    new ModelInfo(
        "10_Craft_Circus", 
        {x: 0.145, y: 0.095, z: -0.589 }, 
        { x: 0.454, y: 0.064, z: -0.981 }, 
        "CRAFT CIRCUS", 
        "Seaside Restaurants with Fresh Seafood, a Farmer's Market and a Dazzling Ocean View",
        "Kaioh Ichiba Restaurant houses two fish tanks: a 2-meter high dome-shaped tank for wild-caught squid and a 4-meter long tank for fish caught in the Seto Inland Sea. Depending on the dish, our chefs pick fish out of the tank and voila! Fresh sashimi or sushi is served! " +
        "At the seaside terrace, enjoy a seafood BBQ under the golden rays of the setting sun cooled by the ocean breeze. " +
        "Awajishima Craft Kitchen Restaurant offers dishes prepared with Awaji's renowned ingredients in a casual setting, including jumbo-size (20 cm-diameter!) Awaji beef Craft Burgers and 40-cm diameter pizzas topped with Shirasu (young sardine) and Awaji onion, just to name a few. The perfect place for a family, a feast for both the eyes and palate!",
        {                                    // operatingHours
            Monday: "10:30 AM - 8:30 PM",
            Tuesday: "10:30 AM - 8:30 PM",
            Wednesday: "10:30 AM - 8:30 PM",
            Thursday: "10:30 AM - 8:30 PM",
            Friday: "9:30 AM - 8:30 PM",
            Weekend: "9:30 AM - 8:30 PM"
        },
        {                                    // contactInfo
            Address: "2-2 Nojimahirabayashi, Awaji, Hyogo 656-1724",
            Tel: "0799-82-1855"
        },
        false,                                // hasReservation
        "",      // reservationLink
        "https://awajicraftcircus.com/",   // website
        true, // hasLogo
        "nijigen_no_mori_logo.png" // logoFile
    ),

    // new ModelInfo("11_Hello_Kitty_Show_Box", {x: -6, y: 5, z: 5 }, { x: -10, y: 0, z: 0 }, "Hello Kitty Show Box", HelloKittyShowBoxText),
    new ModelInfo(
        "12_Hello_Kitty_Apple_House", 
        {x: 0.397, y: 0.198, z: -0.100 }, 
        { x: 0.304, y: 0.115, z: -0.25 }, 
        "HELLO KITTY SHOW BOX & HELLO KITTY APPLE HOUSE", 
        "The World's Largest \"Hello Kitty Apple House\" Appears on Awaji Island's West Coast!",
        "Enjoy polished performances by HELLO KITTY and her troupe in shows featuring various jazz genres, while tasting a beautiful, healthy vegan course meal. But that's not all! After the show, step up on stage in the Greeting Time to say hello and take a photo with HELLO KITTY herself. The entertainment extravaganza also features multi-media creations of 3D holographic and projection mapping art starring the one and only HELLO KITTY. " +
        "True fans will be in paradise at the shop, surrounded by a treasure trove of HELLO KITTY goods and other Sanrio character souvenirs.",
        {                                    // operatingHours
            Monday: "11:00 AM - 5:00 PM",
            Tuesday: "11:00 AM - 5:00 PM",
            Wednesday: "Closed",
            Thursday: "11:00 AM - 5:00 PM",
            Friday: "11:00 AM - 5:00 PM",
            Weekend: "11:00 AM - 5:00 PM"
        },
        {                                    // contactInfo
            Address: "2-2 Nojimahirabayashi, Awaji, Hyogo 656-1724",
            Tel: "0799-70-9022"
        },
        true,                                // hasReservation
        "https://www.tablecheck.com/en/shops/hellokittyshowbox/reserve",      // reservationLink
        "https://awajiresort.com/hellokittyshowbox/",   // website
        true, // hasLogo
        "nijigen_no_mori_logo.png" // logoFile
    ),
    
    new ModelInfo(
        "13_Auberge", 
        {x: 0.204, y: 0.135, z: 0.256 }, 
        { x: 0.380, y: 0.084, z: 0.012 }, 
        "Auberge", 
        "Un, deux, trois! A tasty trio of French Cuisines at \"la petit France\" at Auberge",
        "Follow your feelings and choose from three variations of French cuisine, any of which is sure to delight your senses with a parade of innovative dishes both beautiful and delicious. Each one of the three chalets is under the mastery of its own Head Chef utilizing the full force of their imagination, experience and technique to bring out the best in the local produce, seafood and meat from Awaji Island. A wide selection of wine complements your dining experience amid the tranquil natural setting along the mountain ridge.",
        {                                    // operatingHours
            Monday: "11:30 AM - 3:30 PM, 5:30 PM - 9:30 PM",
            Tuesday: "11:30 AM - 3:30 PM, 5:30 PM - 9:30 PM",
            Wednesday: "11:30 AM - 3:30 PM, 5:30 PM - 9:30 PM",
            Thursday: "11:30 AM - 3:30 PM, 5:30 PM - 9:30 PM",
            Friday: "11:30 AM - 3:30 PM, 5:30 PM - 9:30 PM",
            Weekend: "11:30 AM - 3:30 PM, 5:30 PM - 9:30 PM"
        },
        {                                    // contactInfo
            Address: "2593-8 Kusumoto Aza Banaka, Awaji, Hyogo, 656-2301",
            Tel: "La Rose 0799-70-9062 \n Prince Etoile 0799-70-9061 \n Grand Baobab 0799-70-9063"
        },
        true,                                // hasReservation
        "https://frenchnomori.jp/reservation/",      // reservationLink
        "https://frenchnomori.jp/",   // website
        true, // hasLogo
        "nijigen_no_mori_logo.png" // logoFile
    ),
    
    new ModelInfo(
        "14_Aman_(Pasona_Square)", 
        {x: 0.291, y: 0.088, z: 0.579 }, 
        { x: 0.108, y: 0.054, z: 0.391 }, 
        "Aman no Shokutaku", 
        "Choose from Japanese-Style Open Hearth or Teppanyaki Cuisine",
        "Utage, on the 1st floor, offers Awaji beef, Awaji chicken and other ingredients from the island's mountains and surrounding seas, grilled on an open hearth just as fishermen once did in ancient times. Experience a style of cooking handed down for millennia known as “Awaji Island Pirate Cuisine”. " +
        "On the 2nd floor, watch in wonder as the chef prepares your meal before your eyes at the teppanyaki restaurant Sajiki. Don’t miss this great opportunity to taste Awaji Beef and other local treasures served up in dynamic style.",
        {                                    // operatingHours
            Monday: "11:00 AM - 9:00 PM",
            Tuesday: "11:00 AM - 9:00 PM",
            Wednesday: "11:00 AM - 9:00 PM",
            Thursday: "11:00 AM - 9:00 PM",
            Friday: "11:00 AM - 9:00 PM",
            Weekend: "11:00 AM - 9:00 PM"
        },
        {                                    // contactInfo
            Address: "1042 Nojima-Tokiwa, Awaji, Hyogo, 656-1726",
            Tel: "Utage 0799-70-9089 \n Sajiki 0799-70-9090"
        },
        true,                                // hasReservation
        "https://www.tablecheck.com/en/shops/aman-utage/reserve",      // reservationLink
        "https://amannoshokutaku.jp/",   // website
        true, // hasLogo
        "nijigen_no_mori_logo.png" // logoFile
    ),
    
    new ModelInfo(
        "15_Haru_San_San", 
        {x: 0.522, y: 0.137, z: 0.991 }, 
        { x: 0.334, y: 0.077, z: 0.863 }, 
        "Farmer’s Restaurant – Haru San San", 
        "Dine on food grown steps away amid sustainable architecture",
        "Designed by world renowned architect Shigeru Ban, this restaurant is an ode to sustainability with a thatched roof supported by pillars made of paper tubes. " + 
        "Nobuaki Fushiki, a chef specializing in fermented cuisine, collaborates with one of the \"World’s Top 1000 Chefs\", Masayuki Okuda, to create dishes that bring out the best in fresh vegetables harvested from the surrounding farm, combined with the natural riches of Awaji Island's sea and mountains. Enjoy delicious foods for a healthy body and a healthy planet.",
        {                                    // operatingHours
            Monday: "11:00 AM - 6:00 PM",
            Tuesday: "11:00 AM - 6:00 PM",
            Wednesday: "Closed",
            Thursday: "11:00 AM - 6:00 PM",
            Friday: "11:00 AM - 6:00 PM",
            Weekend: "11:00 AM - 6:00 PM"
        },
        {                                    // contactInfo
            Address: "1510-4 Nojima-tokiwa Aza Genpachi, Awaji City, Hyogo Pref. 656-1726",
            Tel: "0799-70-9082"
        },
        true,                                // hasReservation
        "https://www.tablecheck.com/en/shops/noukarestaurant-haru-sansan/reserve",      // reservationLink
        "https://www.awaji-nlr.com/harusansan",   // website
        true, // hasLogo
        "nijigen_no_mori_logo.png" // logoFile

    ),

    new ModelInfo(
        "16_Zenbo_Seinei",
        {x: 0.741, y: 0.182, z: 0.674 }, 
        { x: 0.631, y: 0.099, z: 0.404 },
        "Zenbo Seinei",
        "Located amidst the pristine nature of Awaji Island, Zenbo Seinei is a wellness facility to rejuvenate the body and mind by adopting the philosophy of Zen.",
        "Designed by architect Shigeru Ban, winner of the Pritzker Architecture Prize, Zenbo Seinei features a 100-meter long wooden deck where you can feel the warmth and aroma of Japanese cedar." + 
        "The retreat was developed as a place to allow visitors to experience Zen through experiences such as Zazen meditation, yoga and healthy eating. If you would like to escape from the commotion of everyday life and experience a moment of peace and tranquility in a rich natural environment, this is the place to be. ",
        null,
        {                                    // contactInfo
            Address: "字場中 2594-5, Kusumoto, Awaji, Hyogo 〒656-2301",
            Tel: "0799-70-9087"
        },
        true,
        "https://rsv.temanasi.jp/29/room/search",
        "https://zenbo-seinei.com/en/",
        true,
        "zenbo-logo.png"
    ),

    new ModelInfo(
        "17_Nijigen_no_Mori", 
        {x: 1.14, y: 0.171, z: 0.125 },
        { x: 1.22, y: 0.112, z: -0.287 },
        "Nijigen no Mori",    
        "An outdoor anime adventure with Naruto, Shin-chan, and Godzilla!",   
        "Japanese anime, manga, and games have become world-famous genres." +
        "This is a purely Japanese anime park where you can experience the world of these 'two-dimensional contents'" +
        "using your five senses and moving your body. Think of it as 'a place where screens and paper spread across the entire forest.' Using technology," +
        "we will deliver a 'two-dimensional experience' that can only be found here, adding 'new value' to Cool Japan contents such as anime," +
        "with attractions that make you feel as if you are inside the work, and activities that follow the worldview of two-dimensional contents.",
        {                                    // operatingHours
            Monday: "10:00 AM - 10:00 PM",
            Tuesday: "10:00 AM - 10:00 PM",
            Wednesday: "10:00 AM - 10:00 PM",
            Thursday: "10:00 AM - 10:00 PM",
            Friday: "10:00 AM - 10:00 PM",
            Weekend: "10:00 AM - 10:00 PM"
        },
        {                                    // contactInfo
            Address: "2425 番2, Kusumoto, Awaji, Hyogo 〒656-2401",
            Tel: "0799-64-7061"
        },
        false,                                // hasReservation
        "",      // reservationLink
        "https://nijigennomori.com/en/",   // website
        true, // hasLogo
        "nijigen_no_mori_logo.png" // logoFile
    ),
    
    new ModelInfo(
        "18_Grand_Chariot", 
        {x: 1.122, y: 0.246, z: 0.414 }, 
        { x: 1.125, y: 0.075, z: 0.311 }, 
        "GRAND CHARIOT", 
        "The Ultimate in Glamping on a \"Starry Hill\"",
        "Located on the highest hill within the Hyogo Prefectural Awaji Island Park, sprawling over 134 hectares/331 acres, GRAND CHARIOT Hokutoshichisei 135° overlooks the world's 2nd longest suspension bridge, the Akashi Kaikyo Ohashi. At night, the sparkle of stars mirrors the city lights of the Kobe skyline across the bay. All rooms are equipped with a Japanese cypress bath, infusing the air with the wood's refreshing fragrance.",
        null,
        {                                    // contactInfo
            Address: "2425-2 Kusumoto, Awaji, Hyogo, 656-2301",
            Tel: "0799-64-7090"
        },
        true,                                // hasReservation
        "https://go-grandchariot.reservation.jp/en",      // reservationLink
        "https://awaji-grandchariot.com/",   // website
        true, // hasLogo
        "nijigen_no_mori_logo.png" // logoFile
    ),
]; 

//\n