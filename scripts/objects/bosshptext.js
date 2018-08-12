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
    var BossHPText = /** @class */ (function (_super) {
        __extends(BossHPText, _super);
        /**
         *Creates an instance of ScoreText.
         * @memberof ScoreText
         */
        function BossHPText() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        Object.defineProperty(BossHPText.prototype, "HP", {
            get: function () {
                return this._hp;
            },
            set: function (value) {
                this._hp = value;
                this.text = "Boss HP: " + this._hp;
            },
            enumerable: true,
            configurable: true
        });
        //private methods
        // public methods
        BossHPText.prototype.Start = function () {
            // init
            this.x = 40;
            this.y = 70;
            this.HP = 999;
            this.color = "#fff";
            this.font = "bold 48px Consolus";
        };
        BossHPText.prototype.Update = function () {
        };
        BossHPText.prototype.Reset = function () {
        };
        return BossHPText;
    }(createjs.Text));
    objects.BossHPText = BossHPText;
})(objects || (objects = {}));
//# sourceMappingURL=bosshptext.js.map