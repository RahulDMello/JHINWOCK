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
    var Hero3 = /** @class */ (function (_super) {
        __extends(Hero3, _super);
        /**
         *Creates an instance of Hero3.
         * @memberof Hero3
         */
        function Hero3() {
            var _this = _super.call(this, "hero3") || this;
            _this.Start();
            return _this;
        }
        //private methods
        Hero3.prototype._checkBounds = function () {
        };
        // public methods
        Hero3.prototype.Start = function () {
            // init
            this._rotationSpeed = 2.5;
            this.regX = config.Screen.HALF_WIDTH - 320;
            this.regY = config.Screen.HALF_HEIGHT - 320;
            this.x = config.Screen.HALF_WIDTH;
            this.y = config.Screen.HALF_HEIGHT;
        };
        Hero3.prototype.Update = function (keyCodes) {
            var _this = this;
            var leftFlag = false;
            var rightFlag = false;
            keyCodes.forEach(function (keyCode) {
                switch (keyCode) {
                    case 68: // D key
                    case 39: // right arrow key
                        if (!rightFlag) {
                            _this.rotation += _this._rotationSpeed;
                            rightFlag = true;
                        }
                        break;
                    case 83: // change to a
                    case 37: // left arrow key
                        _this.rotation -= _this._rotationSpeed;
                        leftFlag = truel;
                        break;
                    case 32:
                    case 87:
                    case 38:
                        // play laser sound
                        break;
                }
            });
        };
        Hero3.prototype.Reset = function () {
        };
        return Hero3;
    }(objects.GameObject));
    objects.Hero3 = Hero3;
})(objects || (objects = {}));
//# sourceMappingURL=hero3.js.map