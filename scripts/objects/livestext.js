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
    var LivesText = /** @class */ (function (_super) {
        __extends(LivesText, _super);
        //member variables
        /**
         *Creates an instance of LivesText.
         * @memberof LivesText
         */
        function LivesText() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //private methods
        // public methods
        LivesText.prototype.Start = function () {
            // init
            this.x = config.Screen.WIDTH - 200;
            this.y = 20;
            this.text = "Lives: " + managers.Score.LIVES;
            this.color = "#fff";
            this.font = "bold 48px Consolus";
        };
        LivesText.prototype.Update = function () {
            this.text = "Lives: " + managers.Score.LIVES;
        };
        LivesText.prototype.Reset = function () {
        };
        return LivesText;
    }(createjs.Text));
    objects.LivesText = LivesText;
})(objects || (objects = {}));
//# sourceMappingURL=livestext.js.map