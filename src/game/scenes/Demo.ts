import { Scene } from 'phaser';

export class Demo extends Scene
{
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
    

    
    constructor ()
    {
        super('GameOver');
        new Glow(gameObject, #FFFFFF, 1, 1, false);
    }

    create ()
    {

        this.coolingTower = this.add.image(0,0,'coolingTower')
        this.coolingTower.setInteractive()
        //when hover, give option to view...prompt enter to view?
        this.coolingTower.addListener('pointerover', ()=> {
          this.coolingTower.preFX.addGlow();})


    }
}
