module managers {
    export class Collision {

        public static check(hero: objects.Hero, otherObj: objects.GameObject): void {
            switch(otherObj.name) {
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
        }

        private static handleCollisionWithPortal(hero: objects.Hero, object: objects.GameObject): void {
            if(hero.x > object.x - hero.getBounds().width && hero.x < object.x + object.getBounds().width) {
                if(hero.y <= object.y + hero.height && hero.y >= object.y - object.height) {
                    managers.Score.LIVES += 2;
                    managers.Game.CurrentState = config.Scene.LEVEL2;
                    // sound
                } else {
                    
                }
            }
        }

        private static handleCollisionWithBullet(hero: objects.Hero, object: objects.GameObject): void {
            let P1 = new math.Vec2(hero.x + (hero.width * 0.5), hero.y - (hero.height * 0.5));
            let P2 = new math.Vec2(object.x, object.y);
            if (math.Vec2.Distance(P1, P2) < hero.halfHeight + object.halfHeight) {
                object.x = -10;
                managers.Score.LIVES -= 1;
                if(managers.Score.LIVES <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
            }
        }

        private static handleCollisionWithBox(hero: objects.Hero, object: objects.GameObject): void {
            if(hero.x > object.x - hero.getBounds().width + 50 && hero.x < object.x + object.getBounds().width - 50) {
                if(hero.y <= object.y - object.getBounds().height) {
                    hero.y = object.y - object.getBounds().height + 5;
                    //config.ObjectSpeed.SPEED = 5;
                } else {
                    //config.ObjectSpeed.SPEED = 0;
                }
            }
        }

        public static checkCanonPortal2(hero: objects.Canon, object: objects.GameObject): void {
            if(object.y >= hero.y) {
                managers.Score.LIVES += 3;
                managers.Game.CurrentState = config.Scene.LEVEL3;
                // sound ?
            }
        }

        public static checkMeteorBullet(
            object1: objects.PlayerBullet,
            object2: objects.Meteor
          ): void {
            let P1 = new math.Vec2(object1.x, object1.y);
            let P2 = new math.Vec2(object2.x, object2.y);
      
            if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
              object1.x = -5;
              object1.y = -5;
              object2.Reset();
              let bubble = createjs.Sound.play("bubble");
              bubble.volume = 0.2;
              managers.Score.SCORE += 100;
            }
          }
          
          public static checkMeteorCanon(
            object1: objects.Canon,
            object2: objects.Meteor
          ): void {
            let P1 = new math.Vec2(object1.x, object1.y);
            let P2 = new math.Vec2(object2.x, object2.y);
      
            if (math.Vec2.Distance(P1, P2) < object1.halfHeight + object2.halfHeight) {
              object2.Reset();
              let blast = createjs.Sound.play("blast");
              blast.volume = 0.2;
              managers.Score.LIVES -= 1;
              if(managers.Score.LIVES <= 0) {
                managers.Game.CurrentState = config.Scene.END;
              }
            }
          }

        public static checkHero3Bullet3(hero: objects.Hero3, object: objects.GameObject) {
            
            let x = config.Screen.HALF_WIDTH + (275 * (Math.cos((hero.rotation + 170) * (22 / (180 * 7)))));
            let y = config.Screen.HALF_HEIGHT + (275 * (Math.sin((hero.rotation + 170) * (22 / (180 * 7)))));

            let P1 = new math.Vec2(x + (hero.width * 0.5), y - (hero.height * 0.5));
            let P2 = new math.Vec2(object.x, object.y);
            if (math.Vec2.Distance(P1, P2) < hero.halfHeight + object.halfHeight) {
                object.x = -10;
                managers.Score.LIVES -= 1;
                if(managers.Score.LIVES <= 0) {
                    managers.Game.CurrentState = config.Scene.END;
                }
            }
        }

    }

}