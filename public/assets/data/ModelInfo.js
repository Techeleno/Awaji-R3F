import * as THREE from 'three';

const name = "";
const cameraVec = new THREE.Vector3(0, 0, 0);
const targetVec = new THREE.Vector3(0, 0, 0);
const title = "";
const text = "";

export class ModelInfo {
    constructor(name, cameraVec, targetVec, title, summaryText, detailsText, operatingHours, contactInfo, hasReservation, reservationLink, website, hasLogo = false, logoFile = "") {
        this.name = name;
        this.cameraVec = cameraVec;
        this.targetVec = targetVec;
        this.title = title;
        this.summaryText = summaryText;
        this.detailsText = detailsText;
        this.operatingHours = operatingHours;
        this.contactInfo = contactInfo;
        this.hasReservation = hasReservation;
        this.reservationLink = reservationLink;
        this.website = website;
        this.hasLogo = hasLogo;
        this.logoFile = logoFile;
    }
}
