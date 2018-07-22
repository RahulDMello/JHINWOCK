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
    var Launcher = /** @class */ (function (_super) {
        __extends(Launcher, _super);
        /**
         *Creates an instance of Ocean.
         * @memberof launcher
         */
        function Launcher() {
            var _this = _super.call(this, managers.Game.AssetManager.getResult("launcher")) || this;
            _this.width = _this.getBounds().width;
            _this.height = _this.getBounds().height;
            _this._movespd = 5;
            _this.isHeadingIn = true;
            _this.Start();
            return _this;
        }
        //private methods
        Launcher.prototype._checkbounds = function () {
            if (this.x < config.Screen.WIDTH) {
                this.isHeadingIn = false;
            }
            if (this.x > config.Screen.WIDTH + this.width) {
                this.Reset();
            }
        };
        // public methods
        Launcher.prototype.Start = function () {
            // init
            this.regX = this.width;
            this.regY = this.height;
            this.x = config.Screen.WIDTH + this.width + 5;
            this.Reset();
        };
        Launcher.prototype.Update = function () {
            console.log(this.isHeadingIn);
            if (this.isHeadingIn) {
                this.x -= this._movespd;
            }
            else {
                this.x += this._movespd;
            }
            this._checkbounds();
        };
        Launcher.prototype.Reset = function () {
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height - config.Floor.HEIGHT)) + config.Floor.HEIGHT + this.height;
            this.isHeadingIn = true;
            // this.y = Math.floor((Math.random() * config.Screen.HEIGHT / 3) + (config.Screen.HEIGHT / 3)) * this._index - config.Floor.HEIGHT;
        };
        return Launcher;
    }(createjs.Bitmap));
    objects.Launcher = Launcher;
})(objects || (objects = {}));
//# sourceMappingURL=launcher.js.map