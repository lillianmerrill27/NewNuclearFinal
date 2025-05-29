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
    

    
    constructor ()
    {
        super('GameOver');
    }

    create ()
    {
        

    }
}
