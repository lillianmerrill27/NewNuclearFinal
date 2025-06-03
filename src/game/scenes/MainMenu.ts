import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene
{
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    startbtn: Phaser.GameObjects.Image;
    resources: Phaser.GameObjects.Image;
    credits: Phaser.GameObjects.Image;

    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.startbtn = this.add.image(0,0,'start');
        this.startbtn.setInteractive()
        this.startbtn.addListener('pointerdown', () => {
            this.scene.start('Demo');
        })

        this.resources = this.add.image(0,0,'resources');
        this.resources.setInteractive()
        this.resources.addListener('pointerdown', () => {
            this.scene.start('Resources');
        })

         this.credits = this.add.image(0,0,'credits');
        this.credits.setInteractive()
        this.credits.addListener('pointerdown', () => {
            this.scene.start('Credits');
        })
    }
}
