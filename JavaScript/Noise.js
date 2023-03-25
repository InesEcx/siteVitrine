"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const THREE = require("three");
const OrbitControls_1 = require("three/examples/jsm/controls/OrbitControls");
const config = {
    scene: {
        speed: 0.24,
        position: 3
    },
    object: {
        speed: 0.25
    },
    shader: {
        time: 0.67,
        u_noise: 1.00,
        decay: 0.53,
        turb: 0.18,
        scale: 2.50,
        waves: 5.77,
        size: 1.5,
        displ: 0.0,
        broken: true,
        invert: true,
        color: 5.0,
        complex: 0.1
    }
};
const uniforms = {
    turb: {
        type: "f",
        value: 0.0
    },
    time: {
        type: "f",
        value: 0.0
    },
    u_noise: {
        type: "f",
        value: 0.0
    },
    decay: {
        type: "f",
        value: 0.0
    },
    complex: {
        type: "f",
        value: 0.0
    },
    waves: {
        type: "f",
        value: 0.0
    },
    eqcolor: {
        type: "f",
        value: 0.0
    },
    pointscale: {
        type: "f",
        value: 0.0
    },
    scale: {
        type: "f",
        value: 0.0
    },
    displ: {
        type: "f",
        value: 0.0
    },
    fragment: {
        type: "i",
        value: true
    },
    redhell: {
        type: "i",
        value: true
    }
};
class Control {
    constructor(props) {
        this.controls = new OrbitControls_1.OrbitControls(props.camera, props.canvas);
        this.init();
    }
    init() {
        this.controls.target.set(0, 0, 0);
        this.controls.rotateSpeed = 0.5;
        this.controls.enableZoom = false;
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.01;
        this.update();
    }
    update() {
        this.controls.update();
    }
}
class Particles {
    constructor(props) {
        this.scene = props.scene ? props.scene : null;
        this.clock = new THREE.Clock();
        this.init();
    }
    init() {
        this.p_grp = new THREE.Object3D();
        this.p_mat = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: document.getElementById("vertexShader").textContent,
            fragmentShader: document.getElementById("fragmentShader").textContent
        });
        this.p_geo = new THREE.IcosahedronBufferGeometry(0.5, 80);
        this.p_mes = new THREE.Points(this.p_geo, this.p_mat);
        this.scene.add(this.p_mes);
    }
    render() {
        this.p_mat.uniforms["time"].value =
            this.clock.getElapsedTime() * config.shader.time;
        this.p_mat.uniforms["turb"].value = config.shader.turb;
        this.p_mat.uniforms["u_noise"].value = config.shader.u_noise * 0.1;
        this.p_mat.uniforms["decay"].value = config.shader.decay * 0.01;
        this.p_mat.uniforms["complex"].value = config.shader.complex;
        this.p_mat.uniforms["waves"].value = config.shader.waves * 3;
        this.p_mat.uniforms["pointscale"].value = config.shader.size;
        this.p_mat.uniforms["eqcolor"].value = config.shader.color;
        this.p_mat.uniforms["fragment"].value = config.shader.broken;
        this.p_mat.uniforms["scale"].value = config.shader.scale;
        this.p_mat.uniforms["displ"].value = config.shader.displ * 0.01;
        this.p_mat.uniforms["redhell"].value = config.shader.invert;
    }
}
class Space {
    constructor(props) {
        this.name = props.name ? props.name : "Null";
        this.canvas = props.canvas ? props.canvas : null;
        this.main();
    }
    main() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.clock = new THREE.Clock();
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45);
        this.camera.position.set(0, 0.5, 3);
        this.scene.background = new THREE.Color(0x000005);
        this.control = new Control({ camera: this.camera, canvas: this.canvas });
        this.axesHelper = new THREE.AxesHelper(2);
        this.axesHelper.position.y = -1.5;
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFShoftSHadowMap;
        this.init();
    }
    init() {
        const scene = this.scene;
        this.particle = new Particles({ scene });
        this.render();
        this.loop();
        this.resize();
    }
    resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
    render() {
        this.scene.rotation.y = this.clock.getElapsedTime() * config.scene.speed;
        this.camera.lookAt(this.scene.position);
        this.camera.updateMatrixWorld();
        this.renderer.render(this.scene, this.camera);
        this.control.update();
        this.particle.render();
    }
    loop() {
        this.render();
        requestAnimationFrame(this.loop.bind(this));
    }
}
const canvas = document.querySelector("canvas");
const world = new Space({ canvas });
window.addEventListener("resize", () => world.resize());
window.addEventListener("load", () => world.resize());
//# sourceMappingURL=Noise.js.map