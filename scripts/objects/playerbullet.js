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
var objects;
(function (objects) {
    var PlayerBullet = /** @class */ (function (_super) {
        __extends(PlayerBullet, _super);
        /**
         * Creates an instance of PlayerBullet.
         * @memberof PlayerBullet
         */
        function PlayerBullet() {
            var _this = _super.call(this, "playerbullet") || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        PlayerBullet.prototype.CheckBounds = function () {
            // check bottom boundary
            return this.y < 0 || this.x < 0 || this.x > config.Screen.WIDTH;
        };
        PlayerBullet.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            var x1 = managers.Game.Stage.mouseX - config.Screen.HALF_WIDTH;
            var y1 = managers.Game.Stage.mouseY;
            var x2 = 0;
            var y2 = config.Screen.HEIGHT;
            this.x = config.Screen.HALF_WIDTH;
            this.y = config.Screen.HEIGHT;
            this._horizontalSpeed = Math.round(((-x1 * ((y2 - y1 - 5) / (y2 - y1))) + x1) * 100) / 100;
            this._verticalSpeed = -5;
        };
        PlayerBullet.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this.x += this._horizontalSpeed;
        };
        PlayerBullet.prototype.Reset = function () {
        };
        return PlayerBullet;
    }(objects.GameObject));
    objects.PlayerBullet = PlayerBullet;
})(objects || (objects = {}));
//# sourceMappingURL=playerbullet.js.map