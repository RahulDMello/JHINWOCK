module managers {
    export class Collision {

        public static check(hero: objects.Hero, otherObj: objects.GameObject): void {
            console.log(`Collision with ${otherObj.name}`);
            switch(otherObj.name) {
                case "box":
                    Collision.handleCollisionWithBox(hero, otherObj);
                break;
            }
        }

        private static handleCollisionWithBox(hero: objects.Hero, object: objects.GameObject): void {
            if(hero.x > object.x - hero.getBounds().width + 50 && hero.x < object.x + object.getBounds().width - 50) {
                if(hero.y <= object.y - object.getBounds().height) {
                    hero.y = object.y - object.getBounds().height + 5;
                    // config.ObjectSpeed.SPEED = 5;
                } else {
                    // config.ObjectSpeed.SPEED = 0;
                }
            }
        }

    }

}