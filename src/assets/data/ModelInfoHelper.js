import { ModelInfo } from "./ModelInfo";

export const MODEL_NAME_LIST = ["01_Nojima_Scuola", "02_Miele", "03_Miele_the_Garden", "04_Miele_the_DINER", "05_Ocean_Terrace",
                                "06_Hello_Kitty_Smile", "07_Ladybird_Road", "08_Chef's_Garden", "09_Seikaiha", "10_Craft_Circus",
                                "11_Hello_Kitty_Show_Box", "12_Hello_Kitty_Apple_House", "13_Auberge", "14_Aman_(Pasona_Square)", "15_Haru_San_San",
                                "16_Zenbo_Seinei", "17_Nijigen_no_Mori", "18_Grand_Chariot"
];

const NojimaScuolaText = "The popular Marché (market) offers vegetables harvested that morning, freshly baked pastries and Awaji Island's best souvenirs. \n\n" + 
"Café Scuola on the 1st floor offers casual dining. \n\n" +
"Ristorante Scuola on the 2nd floor is an Italian restaurant created by Mr. Masayuki Okuda, selected as one of the World's Top 1000 Chefs. Enjoy a wonderful ocean view and live piano music while savoring authentic Italian cuisine made with local Awaji beef and seafood. \n\n" +
"Drop by the zoo to meet alpacas, goats and other friendly animals. ";

const MieleText = "HELLO \n もし十月が答弁共ははなはだその発見ないでかもがよして切らでをは卒業尊ぶでないて、多少にも述べるありますなでし。申で云っない旨は始めて時間をつるつるますたた。ほとんど岡田君に講演示威始終お話しをなっです自分このがた私か持にというお推察んないだっあって、そんな今日はいつか大学富に出来て、岡田さんの気と秋刀魚の私に至極ご内談と許さと私所がご授業をありようについにご助言へおりずまして、ちょうどどうも妨害が考えまして来るでしょののなさなます。"
// const MieleTheGardenText = "hello hello \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const MieleTheDinerText = "HELLO \n ";
const OceanTerraceText = "HELLO \n ";
const HelloKittySmileText = "";
const LadybirdRoadText = "";
const ChefSGardenText = "";
const SeikaihaText = "";
const CraftCircusText = "";
// const HelloKittyShowBoxText = "";
const HelloKittyAppleHouseText = "";
const AubergeText = "";
const AmanText = "";
const HaruSanSanText = "";
const ZenboSeineiText = "";
const NijigenNoMoriText = "";
const GrandChariotText = "";


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
            Address: "123 Scuola St.",
            Tel: "123-456-7890"
        },
        true,                                // hasReservation
        "https://www.tablecheck.com/en/shops/nojima-scuola/reserve",      // reservationLink
        "https://en.awajishima-resort.com/shop/nojima-scuola/",   // website
        true, // hasLogo
        "nojima_scuola_logo.png" // logoFile
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


    new ModelInfo("02_Miele", {x: -0.820, y: 0.053, z: 1.224 }, {x: -1.068, y: 0.072, z: 1.013 }, "Miele", MieleText),
    // new ModelInfo("03_Miele_the_Garden", {x: -0.926, y: 0.178, z: 1.133 }, { x: -0.883, y: 0.144, z: 0.801 }, "Nojima Scuola", NojimaScuolaText),
    new ModelInfo("04_Miele_the_DINER", {x: -0.241, y: 0.055, z: 0.960 }, { x: -0.316, y: 0.043, z: 0.730 }, "Miele the DINER", MieleTheDinerText),
    new ModelInfo("05_Ocean_Terrace", {x: -0.926, y: 0.178, z: 1.133 }, { x: -0.883, y: 0.144, z: 0.801 }, "Miele the Garden & \n Ocean Terrace", OceanTerraceText),
    new ModelInfo("06_Hello_Kitty_Smile", {x: -0.451, y: 0.146, z: 0.913 }, { x: -0.55, y: 0.036, z: 0.631 }, "Hello Kitty Smile", HelloKittySmileText),
    new ModelInfo("07_Ladybird_Road", {x: -0.611, y: 0.122, z: 0.428 }, { x: -0.457, y: 0.05, z: 0.119 }, "Ladybird Road", LadybirdRoadText),
    new ModelInfo("08_Chef's_Garden", {x: -0.058, y: 0.125, z: 0.157 }, { x: -0.252, y: 0.036, z: -0.129 }, "Chef's Garden", ChefSGardenText),
    new ModelInfo("09_Seikaiha", {x: 0.079, y: 0.091, z: -0.244 }, { x: -0.08, y: 0.05, z: -0.576 }, "Seikaiha", SeikaihaText),
    new ModelInfo("10_Craft_Circus", {x: 0.145, y: 0.095, z: -0.589 }, { x: 0.454, y: 0.064, z: -0.981 }, "Craft Circus", CraftCircusText),
    // new ModelInfo("11_Hello_Kitty_Show_Box", {x: -6, y: 5, z: 5 }, { x: -10, y: 0, z: 0 }, "Hello Kitty Show Box", HelloKittyShowBoxText),
    new ModelInfo("12_Hello_Kitty_Apple_House", {x: 0.397, y: 0.198, z: -0.100 }, { x: 0.304, y: 0.115, z: -0.25 }, "Hello Kitty Show Box & \n Hello Kitty Apple House", HelloKittyAppleHouseText),
    new ModelInfo("13_Auberge", {x: 0.204, y: 0.135, z: 0.256 }, { x: 0.380, y: 0.084, z: 0.012 }, "Auberge", AubergeText),
    new ModelInfo("14_Aman_(Pasona_Square)", {x: 0.291, y: 0.088, z: 0.579 }, { x: 0.108, y: 0.054, z: 0.391 }, "Aman", AmanText),
    new ModelInfo("15_Haru_San_San", {x: 0.522, y: 0.137, z: 0.991 }, { x: 0.334, y: 0.077, z: 0.863 }, "Haru San San", HaruSanSanText),
    new ModelInfo("18_Grand_Chariot", {x: 1.122, y: 0.246, z: 0.414 }, { x: 1.125, y: 0.075, z: 0.311 }, "Grand Chariot", GrandChariotText),
]; 