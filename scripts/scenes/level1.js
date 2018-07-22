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
var scenes;
(function (scenes) {
    var Level1 = /** @class */ (function (_super) {
        __extends(Level1, _super);
        // constructors
        function Level1() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        Level1.prototype.doBoxCollide = function (box1, box2) {
            return ((box1.x + box1.getBounds().width) < box2.x) && (box1.x > box2.x);
        };
        Level1.prototype.fixBoxes = function () {
            var flag = false;
            for (var i = 0; i < this._boxes.length; i++) {
                var box1 = this._boxes[i];
                var j = i + 1 == this._boxes.length ? 0 : i + 1;
                var box2 = this._boxes[j];
                if (this.doBoxCollide(box1, box2)) {
                    flag = true;
                    break;
                }
            }
            if (flag) {
                this.fixBoxes();
            }
        };
        // public methods
        Level1.prototype.Start = function () {
            this._numOfBoxes = 3;
            this._background = new objects.Background();
            this._floor = new objects.Floor();
            this._boxes = new Array();
            this._hero = new objects.Hero();
            for (var i = 0; i < this._numOfBoxes; i++) {
                this._boxes.push(new objects.Box(i + 1));
            }
            this.Main();
        };
        Level1.prototype.Update = function (keyCodes) {
            var _this = this;
            //update objects
            this._background.Update();
            this._floor.Update(keyCodes);
            this._boxes.forEach(function (box) {
                box.Update(keyCodes);
            });
            this.fixBoxes();
            this._hero.Update(keyCodes);
            //collision check
            this._boxes.forEach(function (box) { return managers.Collision.check(_this._hero, box); });
        };
        Level1.prototype.Reset = function () {
        };
        Level1.prototype.Destroy = function () {
            this.removeAllChildren();
        };
        Level1.prototype.Main = function () {
            var _this = this;
            console.log("starting - PLAY SCENE");
            // add children
            this.addChild(this._background);
            this.addChild(this._floor);
            this._boxes.forEach(function (box) {
                _this.addChild(box);
            });
            this.addChild(this._hero);
        };
        return Level1;
    }(objects.Scene));
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map