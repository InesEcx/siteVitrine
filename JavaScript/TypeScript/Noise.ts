/// <reference path="three.d.ts" />

/** Configuration des paramètres de la forme */
const config = {
    scene: { speed: 0.24, position: 3 },
  
    object: { speed: 0.25 },
  
    shader: {
      time: 0.31,
      u_noise: 0.37,
      decay: 0.33,
      turb: 0.23,
      scale: 5.0,
      waves: 5.66,
      size: 1.0,
      displ: 0.0,
      broken: true,
      invert: true,
      color: 5.0,
      complex: 0.1 
    } 
};

/** Paramètre pour le Shader Mat */
const uniforms = {
    turb: { type: "f", value: 0.0 },
    time: { type: "f", value: 0.0 },
    u_noise: { type: "f", value: 0.0 },
    decay: { type: "f", value: 0.0 },
    complex: { type: "f", value: 0.0 },
    waves: { type: "f", value: 0.0 },
    eqcolor: { type: "f", value: 0.0 },
    pointscale: { type: "f", value: 0.0 },
    scale: { type: "f", value: 0.0 },
    displ: { type: "f", value: 0.0 },
    fragment: { type: "i", value: true },
    redhell: { type: "i", value: true } 
};

/**
 * Vue principale de l'application
 */
class Noise 
{    
    private canvas : HTMLCanvasElement;
    private renderer : THREE.WebGLRenderer;
    private scene : THREE.Scene;
    private camera : THREE.PerspectiveCamera;
    private clock : THREE.Clock;

    /**
     * Constructor
     */
    constructor()
    {
        this.canvas = document.getElementById('webgl') as HTMLCanvasElement;
        this.renderer = new THREE.WebGLRenderer( {canvas : this.canvas, antialias : true, alpha : true} );
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x000005);
        this.clock = new THREE.Clock();
        this.camera = new THREE.PerspectiveCamera(45);
        this.camera.position.set(0,0.5,3);

        this.addForm();
        this.makeRender();
    }

    private makeRender() {
        this.renderer.render(this.scene, this.camera);
    }

    private addForm() {

        let p_grp = new THREE.Object3D();
        let p_mat = new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: document.getElementById("vertexShader").textContent,
            fragmentShader: document.getElementById("fragmentShader").textContent 
        });

        let p_geo = new THREE.IcosahedronGeometry(0.5, 80);
        let p_mes = new THREE.Points(p_geo, p_mat)
        this.scene.add(p_mes)
    }
}