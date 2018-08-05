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
    var Portal2 = /** @class */ (function (_super) {
        __extends(Portal2, _super);
        //member variables
        /**
         *Creates an instance of Portal2.
         * @memberof Portal2
         */
        function Portal2() {
            var _this = _super.call(this, "portal2") || this;
            _this.Start();
            return _this;
        }
        //private methods
        // public methods
        Portal2.prototype.Start = function () {
            // init
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = config.Screen.HALF_WIDTH;
            this.y = -17700 + config.Screen.HEIGHT;
        };
        Portal2.prototype.Update = function () {
            this.y += config.ObjectSpeed.SPEED;
        };
        Portal2.prototype.Reset = function () {
        };
        return Portal2;
    }(objects.GameObject));
    objects.Portal2 = Portal2;
})(objects || (objects = {}));
//# sourceMappingURL=portal2.js.map