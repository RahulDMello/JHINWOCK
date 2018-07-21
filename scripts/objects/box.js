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
    var Box = /** @class */ (function (_super) {
        __extends(Box, _super);
        /**
         *Creates an instance of Ocean.
         * @memberof Background
         */
        function Box(index) {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("box")) || this;
            _this._index = index;
            _this.Start();
            return _this;
        }
        //private methods
        Box.prototype._checkBounds = function () {
            if (this.x < -this.getBounds().width) {
                this.Reset();
            }
        };
        // public methods
        Box.prototype.Start = function () {
            // init
            this.regX = 0;
            this.regY = this.getBounds().height;
            this.y = config.Screen.HEIGHT - config.Floor.HEIGHT;
            this.Reset();
        };
        Box.prototype.Update = function (keyCode) {
            switch (keyCode) {
                case 68: // D key
                case 39: // right arrow key
                    this.x -= config.ObjectSpeed.SPEED;
                    break;
            }
            this._checkBounds();
        };
        Box.prototype.Reset = function () {
            this.x = Math.floor(Math.random() * config.Screen.WIDTH) + (config.Screen.WIDTH * this._index);
        };
        return Box;
    }(createjs.Bitmap));
    objects.Box = Box;
})(objects || (objects = {}));
//# sourceMappingURL=box.js.map