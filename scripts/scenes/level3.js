var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Level3 = /** @class */ (function (_super) {
        __extends(Level3, _super);
        // constructors
        function Level3() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Level3.prototype._makeEnemyBullets = function () {
            for (var i = 0; i < this._enemyBulletsNum; i++) {
                this._enemyBullets[i] = new objects.Bullet3(i);
            }
        };
        // public methods
        Level3.prototype.Start = function () {
            this._bgMusic = createjs.Sound.play("level3bgm");
            this._bgMusic.loop = -1;
            this._bgMusic.volume = 0.1;
            this._background = new objects.Background3();
            this._lives = new objects.LivesText();
            this._score = new objects.ScoreText();
            this._enemyBullets = new Array();
            this._enemyBulletsNum = 10;
            this._makeEnemyBullets();
            this._enemy = new createjs.Bitmap(managers.Game.AssetManager.getResult("enemy"));
            this._enemy.regX = this._enemy.getBounds().width * 0.5;
            this._enemy.regY = this._enemy.getBounds().height * 0.5;
            this._enemy.x = config.Screen.HALF_WIDTH;
            this._enemy.y = config.Screen.HALF_HEIGHT;
            this._hero = new objects.Hero3();
            this._line = new createjs.Shape();
            this._bosshp = new objects.BossHPText();
            this.Main();
        };
        Level3.prototype.Update = function (keyCodes) {
            var _this = this;
            //update objects
            var flag = keyCodes.indexOf(32) == -1;
            // this.removeChild(this._line);
            console.log("Value of flag: " + flag);
            this._line.graphics.clear();
            console.log(this._hero.rotation);
            if (!flag) {
                this._line.graphics.setStrokeStyle(10);
                this._line.graphics.beginStroke("#e50000");
                var x = config.Screen.HALF_WIDTH + (275 * (Math.cos((this._hero.rotation + 170) * (22 / (180 * 7)))));
                var y = config.Screen.HALF_HEIGHT + (275 * (Math.sin((this._hero.rotation + 170) * (22 / (180 * 7)))));
                this._line.graphics.moveTo(x, y);
                this._line.graphics.lineTo(config.Screen.HALF_WIDTH, config.Screen.HALF_HEIGHT);
                this._line.graphics.endStroke();
                var laser = createjs.Sound.play("laser");
                laser.volume = 0.1;
                this._bosshp.HP--;
                managers.Score.SCORE += 2;
                if (this._bosshp.HP <= 0) {
                    managers.Score.SCORE += 1000 * managers.Score.LIVES;
                    managers.Game.CurrentState = config.Scene.END;
                }
            }
            this._background.Update();
            this._lives.Update();
            this._score.Update();
            this._hero.Update(keyCodes);
            this._enemyBullets.forEach(function (bullet) {
                bullet.Update();
            });
            //collision check
            this._enemyBullets.forEach(function (bullet) {
                managers.Collision.checkHero3Bullet3(_this._hero, bullet);
            });
        };
        Level3.prototype.Reset = function () {
        };
        Level3.prototype.Destroy = function () {
            this._bgMusic.stop();
            this.removeAllChildren();
        };
        Level3.prototype.Main = function () {
            var _this = this;
            console.log("starting - PLAY SCENE");
            // add children
            this.addChild(this._background);
            this.addChild(this._line);
            this._enemyBullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.addChild(this._enemy);
            this.addChild(this._hero);
            this.addChild(this._lives);
            this.addChild(this._score);
            this.addChild(this._bosshp);
        };
        return Level3;
    }(objects.Scene));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map