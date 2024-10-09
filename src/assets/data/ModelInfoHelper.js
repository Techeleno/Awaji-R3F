
import { ModelInfo } from "./ModelInfo";

export const MODEL_NAME_LIST = ["hello-kitty", "Geo_Dinosaur"];



const helloKittyText = "HELLO \n もし十月が答弁共ははなはだその発見ないでかもがよして切らでをは卒業尊ぶでないて、多少にも述べるありますなでし。申で云っない旨は始めて時間をつるつるますたた。ほとんど岡田君に講演示威始終お話しをなっです自分このがた私か持にというお推察んないだっあって、そんな今日はいつか大学富に出来て、岡田さんの気と秋刀魚の私に至極ご内談と許さと私所がご授業をありようについにご助言へおりずまして、ちょうどどうも妨害が考えまして来るでしょののなさなます。"
const dinoText = "hello hello \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

export const MODEL_INFO_LIST = [new ModelInfo("hello-kitty", {x: -6, y: 5, z: 5 }, { x: -10, y: 0, z: 0 }, "Hello Kitty Smile", helloKittyText),
                                new ModelInfo("house", {x: -6, y: 5, z: 5 }, { x: 10, y: 0, z: 0 }, "Hello", ""),
                                new ModelInfo("Geo_Dinosaur", {x: 5, y: 5, z: 5 }, { x: 5, y: 2, z: 0 }, "Nijigen no Mori", dinoText)
]; 
