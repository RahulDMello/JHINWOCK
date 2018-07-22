var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (hero, otherObj) {
            console.log("Collision with " + otherObj.name);
            switch (otherObj.name) {
                case "box":
                    Collision.handleCollisionWithBox(hero, otherObj);
                    break;
            }
        };
        Collision.handleCollisionWithBox = function (hero, object) {
            if (hero.x > object.x - hero.getBounds().width + 50 && hero.x < object.x + object.getBounds().width - 50) {
                if (hero.y <= object.y - object.getBounds().height) {
                    hero.y = object.y - object.getBounds().height + 5;
                    // config.ObjectSpeed.SPEED = 5;
                }
                else {
                    // config.ObjectSpeed.SPEED = 0;
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map