module scenes {
    export class Level1 extends objects.Scene {
        // member variables
        private _background: objects.Background;
        private _floor: objects.Floor;
        private _boxes: objects.Box[];
        private _numOfBoxes: Number;
        private _hero: objects.Hero;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private doBoxCollide(box1: objects.Box, box2: objects.Box): boolean {
            return ((box1.x + box1.getBounds().width) < box2.x) && (box1.x > box2.x);
        }

        private fixBoxes(): void {
            let flag: boolean = false;
            for (let i = 0; i < this._boxes.length; i++) {
                const box1 = this._boxes[i];
                let j = i + 1 == this._boxes.length ? 0 : i + 1;
                const box2 = this._boxes[j];
                if(this.doBoxCollide(box1, box2)) {
                    flag = true;
                    break;
                }
            }
            if(flag) {
                this.fixBoxes();
            }
        }

        // public methods
        public Start():void {
            this._numOfBoxes = 3;
            this._background = new objects.Background();
            this._floor = new objects.Floor();
            this._boxes = new Array<objects.Box>();
            this._hero = new objects.Hero();
            
            for(let i = 0; i < this._numOfBoxes; i++) {
                this._boxes.push(new objects.Box(i+1));
            }

            this.Main();
        }

        public Update(keyCodes: Array<number>):void {
            //update objects
            this._background.Update();
            this._floor.Update(keyCodes);

            this._boxes.forEach(box => {
                box.Update(keyCodes);
            });

            this.fixBoxes();

            this._hero.Update(keyCodes);

            //collision check
            this._boxes.forEach(box => managers.Collision.check(this._hero, box));
            
        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`starting - PLAY SCENE`);
            // add children
            this.addChild(this._background);
            this.addChild(this._floor);
            this._boxes.forEach(box => {
                this.addChild(box);
            });
            this.addChild(this._hero);
        }
    }
} 