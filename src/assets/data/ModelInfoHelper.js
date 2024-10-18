import { ModelInfo } from "./ModelInfo";

export const MODEL_NAME_LIST = ["01_Nojima_Scuola", "02_Miele", "03_Miele_the_Garden", "04_Miele_the_DINER", "05_Ocean_Terrace",
                                "06_Hello_Kitty_Smile", "07_Ladybird_Road", "08_Chef's_Garden", "09_Seikaiha", "10_Craft_Circus",
                                "11_Hello_Kitty_Show_Box", "12_Hello_Kitty_Apple_House", "13_Auberge", "14_Aman_(Pasona_Square)", "15_Haru_San_San",
                                "16_Zenbo_Seinei", "17_Nijigen_no_Mori", "18_Grand_Chariot"
];

const NojimaScuolaText = "hello";
const MieleText = "HELLO \n もし十月が答弁共ははなはだその発見ないでかもがよして切らでをは卒業尊ぶでないて、多少にも述べるありますなでし。申で云っない旨は始めて時間をつるつるますたた。ほとんど岡田君に講演示威始終お話しをなっです自分このがた私か持にというお推察んないだっあって、そんな今日はいつか大学富に出来て、岡田さんの気と秋刀魚の私に至極ご内談と許さと私所がご授業をありようについにご助言へおりずまして、ちょうどどうも妨害が考えまして来るでしょののなさなます。"
// const MieleTheGardenText = "hello hello \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const MieleTheDinerText = "HELLO \n ";
const OceanTerraceText = "HELLO \n ";
const HelloKittySmileText = "";
const LadybirdRoadText = "";
const ChefSGardenText = "";
const SeikaihaText = "";
const CraftCircusText = "";
const HelloKittyShowBoxText = "";
const HelloKittyAppleHouseText = "";
const AubergeText = "";
const AmanText = "";
const HaruSanSanText = "";
const ZenboSeineiText = "";
const NijigenNoMoriText = "";
const GrandChariotText = "";


export const MODEL_INFO_LIST = [
    new ModelInfo("01_Nojima_Scuola", {x: -0.594, y: 0.129, z: 1.355}, { x: -0.55, y: 0.002, z: 1.06 }, "Nojima Scuola", NojimaScuolaText),
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
    new ModelInfo("14_Aman_(Pasona_Square)", {x: -6, y: 5, z: 5 }, { x: -10, y: 0, z: 0 }, "Aman", AmanText),
    new ModelInfo("15_Haru_San_San", {x: -6, y: 5, z: 5 }, { x: -10, y: 0, z: 0 }, "Haru San San", HaruSanSanText),
    new ModelInfo("16_Zenbo_Seinei", {x: -6, y: 5, z: 5 }, { x: -10, y: 0, z: 0 }, "Zenbo Seinei", ZenboSeineiText),
    new ModelInfo("17_Nijigen_no_Mori", {x: -6, y: 5, z: 5 }, { x: -10, y: 0, z: 0 }, "Nijigen no Mori", NijigenNoMoriText),
    new ModelInfo("18_Grand_Chariot", {x: -6, y: 5, z: 5 }, { x: -10, y: 0, z: 0 }, "Grand Chariot", GrandChariotText),
]; 
