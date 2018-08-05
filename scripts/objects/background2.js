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
    var Background2 = /** @class */ (function (_super) {
        __extends(Background2, _super);
        /**
         * Creates an instance of Background2.
         * @memberof Background2
         */
        function Background2() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("background")) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Background2.prototype._checkBounds = function () {
            // check top boundary
            if (this.y >= 0) {
                this.Reset();
            }
        };
        // public methods
        Background2.prototype.Start = function () {
            this._verticalSpeed = 7; // 7 pixels per frame
            this.Reset();
        };
        Background2.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Background2.prototype.Reset = function () {
            this.y = -960;
        };
        return Background2;
    }(createjs.Bitmap));
    objects.Background2 = Background2;
})(objects || (objects = {}));
//# sourceMappingURL=background2.js.map