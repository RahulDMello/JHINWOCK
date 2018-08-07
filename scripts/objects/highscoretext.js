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
    var HighscoreText = /** @class */ (function (_super) {
        __extends(HighscoreText, _super);
        //member variables
        /**
         *Creates an instance of HighscoreText.
         * @memberof HighscoreText
         */
        function HighscoreText() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        //private methods
        // public methods
        HighscoreText.prototype.Start = function () {
            // init
            this.x = config.Screen.WIDTH - 400;
            this.y = 20;
            this.text = "HighScore: " + managers.Score.HIGHSCORE;
            this.color = "#fff";
            this.font = "bold 48px Consolus";
        };
        HighscoreText.prototype.Update = function () {
        };
        HighscoreText.prototype.Reset = function () {
        };
        return HighscoreText;
    }(createjs.Text));
    objects.HighscoreText = HighscoreText;
})(objects || (objects = {}));
//# sourceMappingURL=highscoretext.js.map