"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
class Noise {
    constructor() {
        this.canvas = document.getElementById('webgl');
        this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
        this.scene = new THREE.Scene();
        this.scene.fog = new THREE.Fog(0x000000, 1, 60);
        this.camera = new THREE.PerspectiveCamera(60, this.canvas.width / this.canvas.height, 1, 10000);
        this.camera.position.set(0, 0, 40);
        this.addCube();
        this.makeRender();
    }
    makeRender() {
        this.renderer.render(this.scene, this.camera);
    }
    addCube() {
        let geom = new THREE.BoxGeometry(15, 10, 10);
        let param = new THREE.Material();
        param.colorWrite = true;
        param.depthWrite = true;
        let matos = new THREE.MeshBasicMaterial({ color: 0xff00ff, fog: true });
        let obj = new THREE.Mesh(geom, matos);
        obj.position.x = 25;
        obj.position.y = 15;
        obj.position.z = 0;
        this.scene.add(obj);
    }
}
//# sourceMappingURL=Noise.js.map