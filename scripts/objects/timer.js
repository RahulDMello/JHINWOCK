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
    var Timer = /** @class */ (function (_super) {
        __extends(Timer, _super);
        /**
         *Creates an instance of ScoreText.
         * @memberof ScoreText
         */
        function Timer() {
            var _this = _super.call(this) || this;
            _this.frame = 0;
            _this.Start();
            return _this;
        }
        Object.defineProperty(Timer.prototype, "Timer", {
            get: function () {
                return this._timer;
            },
            set: function (value) {
                this._timer = value;
                this.text = "Time to portal: " + (this._timer < 10 ? "0" + this._timer : this._timer);
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        // public methods
        Timer.prototype.Start = function () {
            // init
            this.x = 40;
            this.y = 50;
            this.Timer = 59;
            this.color = "#fff";
            this.font = "bold 48px Consolus";
        };
        Timer.prototype.Update = function () {
            this.frame++;
            if (this.frame >= 60) {
                this.Timer--;
                if (this.Timer < 0) {
                    this.Timer = 0;
                }
                this.frame = 0;
            }
        };
        Timer.prototype.Reset = function () {
        };
        return Timer;
    }(createjs.Text));
    objects.Timer = Timer;
})(objects || (objects = {}));
//# sourceMappingURL=timer.js.map