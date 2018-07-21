module scenes {
    export class Level1 extends objects.Scene {
        // member variables
        private _background: objects.Background;
        private _floor: objects.Floor;

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {

            this._background = new objects.Background();
            this._floor = new objects.Floor();

            this.Main();
        }

        public Update():void {
            //update objects
            this._background.Update();
            this._floor.Update();

            //collision check
            
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
        }
    }
} 