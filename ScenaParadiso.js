function setButtonFrame(button, frame)
{
    button.frame = button.scene.textures.getFrame('button', frame);
} 


class ScenaParadiso extends Phaser.Scene {
    constructor() {
		super({ key: 'ScenaParadiso' })
    }
    
 
preload() {
        this.load.spritesheet('button', './assets/flixel-button.png', { frameWidth: 80, frameHeight: 20 });
        this.load.image('paradiso', './assets/Paradiso.jpg');
        this.load.audio('musicaParadiso', './assets/MusicaParadiso.mp3');
    }
create() {
        const BottoniNomi = [
        { name: 'Livello 1', },
        { name: 'Livello 2'},
        { name: 'Livello 3'},
        ]
        var back_p = this.add.image(400, 300, 'paradiso');
        back_p.setScale(800/back_p.width, 600/back_p.height);
        var MusicaParadiso = this.sound.add('musicaParadiso');
        MusicaParadiso.setLoop(true);
        MusicaParadiso.play();
        var Bottone1 = this.add.sprite(400, GameState.separator*1, 'button').setInteractive().setScale(3, 3);
        var Bottone2 = this.add.sprite(400, GameState.separator*2, 'button').setInteractive().setScale(3, 3);
        var Bottone3 = this.add.sprite(400, GameState.separator*3, 'button').setInteractive().setScale(3, 3);
        this.add.text(235, 50, `${GameState.title}` , { font: '48px Bold Courier', fill: '#010005', shadow: '#ccc 0 1px 0, #c9c9c9 0 2px 0, #bbb 0 3px 0, #b9b9b9 0 4px 0, #aaa 0 5px 0,rgba(0,0,0,.1) 0 6px 1px, rgba(0,0,0,.1) 0 0 5px, rgba(0,0,0,.3) 0 1px 3px, rgba(0,0,0,.15) 0 3px 5px, rgba(0,0,0,.2) 0 5px 10px, rgba(0,0,0,.2) 0 10px 10px, rgba(0,0,0,.1) 0 20px 20px'});
        for(let i = 1; i<=3; i++) {
            this.add.text(300, (GameState.separator*i)-10, `${BottoniNomi[i-1].name}`, { font: '18px Cooper Black', color: '#8C3ACD', align: 'center'}).setOrigin(0,0);
        }
        this.input.on('gameobjectover', function (pointer, button)
        {
            setButtonFrame(button, 0);
        });
        this.input.on('gameobjectout', function (pointer, button)
        {
            setButtonFrame(button, 1);
            
        });
        //codice per stabilire cosa succede quando clicca il primo bottone
        Bottone1.on('pointerdown', function (pointer) {
            this.cameras.main.fade(500);
            this.cameras.main.on('camerafadeoutcomplete', function(camera, effect) {
                    this.scene.stop('ProvePerGioco');
                    this.scene.start('ScenaParadiso');   
                }, this);
        }, this);
        //codice per stabilire cosa succede quando clicca il secondo bottone
        Bottone2.on('pointerdown', function (pointer) {
            this.cameras.main.fade(500);
            this.cameras.main.on('camerafadeoutcomplete', function(camera, effect) {
                    this.scene.stop('ProvePerGioco');
                    this.scene.start('ScenaPurgatorio');   
                }, this);
        }, this);
        //codice per stabilire cosa succede quando clicca il terzo bottone
        Bottone3.on('pointerdown', function (pointer) {
            this.cameras.main.fade(500);
            this.cameras.main.on('camerafadeoutcomplete', function(camera, effect) {
                    this.scene.stop('ProvePerGioco');
                    this.scene.start('ScenaInferno');   
                }, this);
        }, this);
        this.input.on('gameobjectdown', function (pointer, button)
        {
            setButtonFrame(button, 2);
            MusicaParadiso.stop();
        }, this);
        this.input.on('gameobjectup', function (pointer, button)
        {
            setButtonFrame(button, 0);
        });
        
    }  
  update() {
        
    }
}