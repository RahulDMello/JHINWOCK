var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.check = function (hero, otherObj) {
            switch (otherObj.name) {
                case "box":
                    Collision.handleCollisionWithBox(hero, otherObj);
                    break;
                case "bullet":
                    Collision.handleCollisionWithBullet(hero, otherObj);
                    break;
                case "portal":
                    Collision.handleCollisionWithPortal(hero, otherObj);
                    break;
            }
        };
        Collision.handleCollisionWithPortal = function (hero, object) {
            if (hero.x > object.x - hero.getBounds().width && hero.x < object.x + object.getBounds().width) {
                if (hero.y <= object.y + hero.height && hero.y >= object.y - object.height) {
                    managers.Score.LIVES += 2;
                    managers.Game.CurrentState = config.Scene.LEVEL2;
                    // sound
                }
                else {
                }
            }
        };
        Collision.handleCollisionWithBullet = function (hero, object) {
            var P1 = new math.Vec2(hero.x + (hero.width * 0.5), hero.y - (hero.height * 0.5));
            var P2 = new math.Vec2(object.x, object.y);
            if (math.Vec2.Distance(P1, P2) < hero.halfHeight + object.halfHeight) {
                object.x = -10;
                managers.Score.LIVES -= 1;
                if (managers.Score.LIVES <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
            }
        };
        Collision.handleCollisionWithBox = function (hero, object) {
            if (hero.x > object.x - hero.getBounds().width + 50 && hero.x < object.x + object.getBounds().width - 50) {
                if (hero.y <= object.y - object.getBounds().height) {
                    hero.y = object.y - object.getBounds().height + 5;
                    //config.ObjectSpeed.SPEED = 5;
                }
                else {
                    //config.ObjectSpeed.SPEED = 0;
                }
            }
        };
        Collision.checkCanonPortal2 = function (hero, object) {
            if (object.y >= hero.y) {
                managers.Game.CurrentState = config.Scene.LEVEL3;
                // sound ?
            }
        };
        Collision.checkMeteorBullet = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
                object1.x = -5;
                object1.y = -5;
                object2.Reset();
                var bubble = createjs.Sound.play("bubble");
                bubble.volume = 0.2;
                managers.Score.SCORE += 100;
            }
        };
        Collision.checkMeteorCanon = function (object1, object2) {
            var P1 = new math.Vec2(object1.x, object1.y);
            var P2 = new math.Vec2(object2.x, object2.y);
            if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
                object2.Reset();
                var blast = createjs.Sound.play("blast");
                blast.volume = 0.2;
                managers.Score.LIVES -= 1;
                if (managers.Score.LIVES <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map