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
    var Background3 = /** @class */ (function (_super) {
        __extends(Background3, _super);
        /**
         * Creates an instance of Background3.
         * @memberof Background3
         */
        function Background3() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background3")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background3.prototype._checkBounds = function () {
            // check top boundary
        };
        // public methods
        Background3.prototype.Start = function () {
            this._rotationSpeed = 0.5; // 10 pixels per frame
            this.regX = this.getBounds().width * 0.5;
            this.regY = this.getBounds().height * 0.5;
            this.x = config.Screen.HALF_WIDTH;
            this.y = config.Screen.HALF_HEIGHT;
        };
        Background3.prototype.Update = function () {
            this._rotationSpeed *= Math.random() <= 0.01 ? -1 : 1;
            this.rotation += this._rotationSpeed;
            // this._checkBounds();
        };
        Background3.prototype.Reset = function () {
        };
        return Background3;
    }(createjs.Bitmap));
    objects.Background3 = Background3;
})(objects || (objects = {}));
//# sourceMappingURL=background3.js.map