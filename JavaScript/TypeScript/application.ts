/// <reference path="Noise.ts" />

/**
 * Web application
 */
class Application
{
    
    /**
     * Main view
     */
    private _noise: Noise;

    /**
     * Constructor
     */
    constructor()
    {
        this._noise = new Noise();
    }
}

/**
 * Démarrage de l'application Web une fois la page chargée.
 */
var application: Application = null;
$(window).ready(() => { application = new Application(); });