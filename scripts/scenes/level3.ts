module scenes {
    export class Level3 extends objects.Scene {
        // member variables
        private _background: objects.Background3;
        private _hero: objects.Hero3;
        private _heroLaser: objects.Laser;
        private _enemyBullets: objects.Bullet3[];
        private _enemyBulletsNum: number;
        private _enemy: createjs.Bitmap;
        private _bgmusic: createjs.AbstractSoundInstance;
        private _score: objects.ScoreText;
        private _lives: objects.LivesText;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _makeEnemyBullets(): void {
            for(let i = 0; i < this._enemyBulletsNum; i++) {
                this._enemyBullets[i] = new objects.Bullet3(i);
            }
        }

        // public methods
        public Start():void {

            this._background = new objects.Background3();
            this._lives = new objects.LivesText();
            this._score = new objects.ScoreText();

            this._enemyBullets = new Array<objects.Bullet3>();
            this._enemyBulletsNum = 5;
            this._makeEnemyBullets();

            this._enemy = new createjs.Bitmap(managers.Game.AssetManager.getResult("enemy"));
            this._enemy.regX = this._enemy.getBounds().width * 0.5;
            this._enemy.regY = this._enemy.getBounds().height * 0.5;
            this._enemy.x = config.Screen.HALF_WIDTH;
            this._enemy.y = config.Screen.HALF_HEIGHT;

            this._hero = new objects.Hero3();

            this.Main();
        }

        public Update(keyCodes: Array<number>):void {
            //update objects
            this._background.Update();
            this._lives.Update();
            this._score.Update();
            this._hero.Update(keyCodes);
            this._enemyBullets.forEach(bullet => {
                bullet.Update();
            });

            //collision check
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`starting - PLAY SCENE`);
            // add children
            this.addChild(this._background);

            this._enemyBullets.forEach(bullet => {
                this.addChild(bullet);
            });

            this.addChild(this._enemy);
            this.addChild(this._hero);


            this.addChild(this._lives);
            this.addChild(this._score);
        }
    }
} 