import { Scene } from 'phaser';

export class Demo extends Scene {
    background: Phaser.GameObjects.Image;

    //UI design
    selected: Phaser.GameObjects.Image; //changes depending on what component selected

    cursor: Phaser.GameObjects.Image;
    // bigger buildings 
    coolingTower: Phaser.GameObjects.Image;
    reactor: Phaser.GameObjects.Image; //maybe?? how can i make it selectable and then when press enter go to another scene?
    xRay: Phaser.GameObjects.Image; //xray of entire system... enabled with 1/2? 
    //smaller bits
    generator: Phaser.GameObjects.Image;

    core: Phaser.GameObjects.Image;
    controlRods: Phaser.GameObjects.Image; //do i want to make these seperate? ie reactor/core/ctrl rods

    investigate: Phaser.GameObjects.Image; //prompt to look into game object



    constructor() {
        super('Demo');
    }

    preload() {
        this.load.image("coolingTower", "assets/600x400.svg")
    }

    create() {
        console.log("Enter Demo");
        //cooling tower
        this.coolingTower = this.add.image(100, 100, 'coolingTower')
        this.coolingTower.setInteractive()
        let coolingTowerGlow: Phaser.FX.Glow | undefined = undefined;
        //when hover, give option to view...prompt enter to view?
        this.coolingTower.addListener('pointerover', () => {
            coolingTowerGlow = this.coolingTower.preFX?.addGlow();
        })

        this.coolingTower.addListener('pointerout', () => {
            if (coolingTowerGlow) {
                this.coolingTower.preFX?.remove(coolingTowerGlow);
            }
        })


        this.coolingTower.addListener('pointerdown', () => {
            this.scene.start('CoolingTwr');
        })

        //containment
        //hover --> x ray, select different parts of x-ray... e.g. generator, reactor core, etc.

    }
}
