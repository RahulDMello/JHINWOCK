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
    var Portal = /** @class */ (function (_super) {
        __extends(Portal, _super);
        //member variables
        /**
         *Creates an instance of Portal.
         * @memberof Portal
         */
        function Portal() {
            var _this = _super.call(this, "portal") || this;
            _this.Start();
            return _this;
        }
        //private methods
        Portal.prototype._checkBounds = function () {
            if (this.x < 0) {
                this.Reset();
            }
        };
        // public methods
        Portal.prototype.Start = function () {
            // init
            this.regX = 0;
            this.regY = this.getBounds().height;
            this.x = 12500;
            this.y = config.Screen.HEIGHT - config.Floor.HEIGHT - Math.floor(Math.random() * this.width);
        };
        Portal.prototype.Update = function (keyCodes) {
            var _this = this;
            var flag = true;
            keyCodes.forEach(function (keyCode) {
                switch (keyCode) {
                    case 68: // D key
                    case 39: // right arrow key
                        if (flag) {
                            _this.x -= config.ObjectSpeed.SPEED;
                            flag = !flag;
                        }
                        break;
                }
                _this._checkBounds();
            });
        };
        Portal.prototype.Reset = function () {
            this.y = config.Screen.HEIGHT - config.Floor.HEIGHT - Math.floor(Math.random() * this.width);
            this.x = 7500;
        };
        return Portal;
    }(objects.GameObject));
    objects.Portal = Portal;
})(objects || (objects = {}));
//# sourceMappingURL=portal.js.map