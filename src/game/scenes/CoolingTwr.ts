import { Scene } from 'phaser';

export class CoolingTwr extends Scene {

    background: Phaser.GameObjects.Image;
    CTanimation: Phaser.GameObjects.Sprite;
    playButton: Phaser.GameObjects.Image;

    constructor() {
        super('CoolingTwr');
    
    }

    preloader() {
        this.load.image("coolingTwrBackground", "assets/cooling_tower_background.svg");
        this.load.spritesheet("CT", "assets/thermally-agitated.png", {
            frameWidth: 280,
            frameHeight: 280,
        });
        this.load.image("playButton", "assets/play_button.svg");
    }

    create() {
        console.log("Enter CoolingTwr");
        this.CTanimation = this.add.sprite(640, 360, 'CT');
        this.CTanimation.setScale(15);
        this.CTanimation.setInteractive();

        this.anims.create({
            key: 'coolingTwrAnim',
            frames: this.anims.generateFrameNumbers('CT', { start: 0, end : 28}),
            frameRate: 20,
        })

        this.CTanimation.addListener('pointerover', () => {
            this.playButton = this.add.image(640, 360, 'playButton');
            this.playButton.setInteractive();
            this.playButton.addListener('pointerdown', () => {
                this.CTanimation.play('coolingTwrAnim');
            });
        });
            
        this.CTanimation.addListener('pointerout', () => {
            if (this.playButton) {
                this.playButton.destroy();
            }
        });

    
    }

    
}
