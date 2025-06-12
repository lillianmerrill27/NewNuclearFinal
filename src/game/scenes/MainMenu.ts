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
        this.load.image("startbtn", "assets/buttonbase.png");
        this.load.image("resources", "assets/buttonbase.png");
        this.load.image("credits", "assets/buttonbase.png");
    }

    create() {
        console.log("Enter MainMenu");

        let buttonGlow: Phaser.FX.Glow | undefined = undefined;

        this.startbtn = this.add.image(640, 360, 'startbtn');
        this.startbtn.setInteractive()
        this.startbtn.addListener('pointerdown', () => {
            this.scene.start('Demo');
        })
        this.startbtn.addListener('pointerover', () => {
            buttonGlow = this.startbtn.preFX?.addGlow();
        })

        this.startbtn.addListener('pointerout', () => {
            if (buttonGlow) {
                this.startbtn.preFX?.remove(buttonGlow);
            }
        })
    //-----    

        this.resources = this.add.image(640, 460, 'resources');
        this.resources.setInteractive()
        this.resources.addListener('pointerdown', () => {
            this.scene.start('Resources');
        })
        
        this.resources.addListener('pointerover', () => {
            buttonGlow = this.resources.preFX?.addGlow();
        })

        this.resources.addListener('pointerout', () => {
            if (buttonGlow) {
                this.resources.preFX?.remove(buttonGlow);
            }
        })

    //-----

        this.credits = this.add.image(640, 560, 'credits');
        this.credits.setInteractive()
        this.credits.addListener('pointerdown', () => {
            this.scene.start('Credits');
        })
        this.credits.addListener('pointerover', () => {
            buttonGlow = this.credits.preFX?.addGlow();
        })

        this.credits.addListener('pointerout', () => {
            if (buttonGlow) {
                this.credits.preFX?.remove(buttonGlow);
            }
        })
    }
}
