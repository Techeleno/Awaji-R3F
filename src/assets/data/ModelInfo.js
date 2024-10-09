import * as THREE from 'three';

const name = "";
const cameraVec = new THREE.Vector3(0, 0, 0);
const targetVec = new THREE.Vector3(0, 0, 0);
const title = "";
const text = "";

export class ModelInfo {
    constructor(name, cameraVec, targetVec, title, text) {
        this.name = name;
        this.cameraVec = cameraVec;
        this.targetVec = targetVec;
        this.title = title;
        this.text = text;
    }
}