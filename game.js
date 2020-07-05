const GameState = {
    gameOver: false,
    separator: 170,
    title: 'Divine Platformer',
    Names: ['Paradiso', 'Purgatorio', 'Inferno']
}
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: [ProvePerGioco, ScenaParadiso, ScenaInferno, ScenaPurgatorio], 
    physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		}
	},
    audio: {
        disableWebAudio: true,
        noAudio: false
    },
    
};

const game = new Phaser.Game(config);