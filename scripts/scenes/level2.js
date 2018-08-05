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
    var Level2 = /** @class */ (function (_super) {
        __extends(Level2, _super);
        // constructors
        function Level2() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Level2.prototype._buildClouds = function () {
            for (var count = 0; count < this._meteorNum; count++) {
                this._meteors.push(new objects.Meteor());
                //this._clouds[count] = new objects.Cloud();
            }
        };
        // public methods
        Level2.prototype.Start = function () {
            this.engineSound = createjs.Sound.play("bgmusic");
            this.engineSound.loop = -1;
            this.engineSound.volume = 0.1;
            this._bullets = new Array();
            this._canon = new objects.Canon();
            this._ocean = new objects.Background2();
            // creates an empty array of type Cloud
            this._meteors = new Array();
            this._meteorNum = 4;
            this._scoreText = new objects.ScoreText();
            this._livesText = new objects.LivesText();
            this._timer = new objects.Timer();
            this._portal = new objects.Portal2();
            this._frame = 60;
            this._buildClouds();
            this.Main();
        };
        Level2.prototype.Update = function () {
            var _this = this;
            this._frame++;
            this._canon.Update();
            this._ocean.Update();
            this._scoreText.Update();
            this._livesText.Update();
            this._timer.Update();
            this._portal.Update();
            managers.Collision.checkCanonPortal2(this._canon, this._portal);
            this._meteors.forEach(function (meteor) {
                meteor.Update();
                managers.Collision.checkMeteorCanon(_this._canon, meteor);
            });
            if (this._frame >= 45) {
                var bullet = new objects.PlayerBullet();
                this._bullets.push(bullet);
                this.addChildAt(bullet, 1);
                this._frame = 0;
            }
            this._bullets.forEach(function (bullet) {
                bullet.Update();
                if (bullet.CheckBounds()) {
                    _this.removeChild(bullet);
                    _this._bullets.splice(_this._bullets.indexOf(bullet), 1);
                }
                _this._meteors.forEach(function (meteor) {
                    managers.Collision.checkMeteorBullet(bullet, meteor);
                });
            });
        };
        Level2.prototype.Reset = function () {
        };
        Level2.prototype.Destroy = function () {
            this.engineSound.stop();
            this.removeAllChildren();
        };
        Level2.prototype.RemoveBullet = function (bullet) {
            var index = this._bullets.indexOf(bullet, 0);
            if (index > -1) {
                this._bullets.splice(index, 1);
            }
        };
        Level2.prototype.Main = function () {
            console.log("Starting - PLAY SCENE");
            // adding the ocean to the scene
            this.addChild(this._ocean);
            // adding the island to the scene
            // adding the plane to the scene
            this.addChild(this._canon);
            // adding the cloud to the scene
            for (var _i = 0, _a = this._meteors; _i < _a.length; _i++) {
                var cloud = _a[_i];
                this.addChild(cloud);
            }
            this.addChild(this._scoreText);
            this.addChild(this._livesText);
            this.addChild(this._timer);
            this.addChild(this._portal);
        };
        return Level2;
    }(objects.Scene));
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map