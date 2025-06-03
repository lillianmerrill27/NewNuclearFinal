import { Scene, GameObjects } from 'phaser';

export class MainMenu extends Scene {
    background: GameObjects.Image;
    logo: GameObjects.Image;
    title: GameObjects.Text;
    startbtn: Phaser.GameObjects.Image;
    resources: Phaser.GameObjects.Image;
    credits: Phaser.GameObjects.Image;

    constructor() {
        super('MainMenu');
    }

    preload() {
        this.load.image("startbtn", "assets/200x75.svg");
        this.load.image("resources", "assets/200x75.svg");
        this.load.image("credits", "assets/200x75.svg");
    }

    create() {
        console.log("Enter MainMenu");

        this.startbtn = this.add.image(256, 100, 'start');
        this.startbtn.setInteractive()
        this.startbtn.addListener('pointerdown', () => {
            this.scene.start('Demo');
        })

        this.resources = this.add.image(256, 200, 'resources');
        this.resources.setInteractive()
        this.resources.addListener('pointerdown', () => {
            this.scene.start('Resources');
        })

        this.credits = this.add.image(256, 300, 'credits');
        this.credits.setInteractive()
        this.credits.addListener('pointerdown', () => {
            this.scene.start('Credits');
        })
    }
}
