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
    var Bullet3 = /** @class */ (function (_super) {
        __extends(Bullet3, _super);
        /**
         *Creates an instance of Bullet3.
         * @memberof Bullet3
         */
        function Bullet3(index) {
            var _this = _super.call(this, "bullet") || this;
            _this._index = index;
            _this.Start();
            return _this;
        }
        //private methods
        Bullet3.prototype._checkbounds = function () {
            if (this.x > config.Screen.WIDTH || this.x < 0 || this.y > config.Screen.HEIGHT || this.y < 0) {
                this.Reset();
            }
        };
        // public methods
        Bullet3.prototype.Start = function () {
            // init
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        Bullet3.prototype.Update = function () {
            console.log("Update " + this._index);
            this._frame++;
            if (this._frame > 15 * this._index) {
                this.x += this.randX;
                this.y += this.randY;
                this._checkbounds();
                console.log("Update inside if " + this._index);
            }
        };
        Bullet3.prototype.Reset = function () {
            this.x = config.Screen.HALF_WIDTH;
            this.y = config.Screen.HALF_HEIGHT;
            this.randX = (Math.floor(Math.random() * 4) + 2) * (Math.random() <= 0.5 ? 1 : -1);
            this.randY = (Math.floor(Math.random() * 4) + 2) * (Math.random() <= 0.5 ? 1 : -1);
            this._frame = 0;
        };
        return Bullet3;
    }(objects.GameObject));
    objects.Bullet3 = Bullet3;
})(objects || (objects = {}));
//# sourceMappingURL=bullet3.js.map