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
            this._background = new objects.Background3();
            this._lives = new objects.LivesText();
            this._score = new objects.ScoreText();
            this._enemyBullets = new Array();
            this._enemyBulletsNum = 5;
            this._makeEnemyBullets();
            this._enemy = new createjs.Bitmap(managers.Game.AssetManager.getResult("enemy"));
            this._enemy.regX = this._enemy.getBounds().width * 0.5;
            this._enemy.regY = this._enemy.getBounds().height * 0.5;
            this._enemy.x = config.Screen.HALF_WIDTH;
            this._enemy.y = config.Screen.HALF_HEIGHT;
            this._hero = new objects.Hero3();
            this.Main();
        };
        Level3.prototype.Update = function (keyCodes) {
            //update objects
            this._background.Update();
            this._lives.Update();
            this._score.Update();
            this._hero.Update(keyCodes);
            this._enemyBullets.forEach(function (bullet) {
                bullet.Update();
            });
            //collision check
        };
        Level3.prototype.Reset = function () {
        };
        Level3.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Level3.prototype.Main = function () {
            var _this = this;
            console.log("starting - PLAY SCENE");
            // add children
            this.addChild(this._background);
            this._enemyBullets.forEach(function (bullet) {
                _this.addChild(bullet);
            });
            this.addChild(this._enemy);
            this.addChild(this._hero);
            this.addChild(this._lives);
            this.addChild(this._score);
        };
        return Level3;
    }(objects.Scene));
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map