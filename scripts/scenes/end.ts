module scenes {
    export class End extends objects.Scene {
        // member variables

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods

        // public methods
        public Start():void {
            // init member variables

            this.Main();
        }

        public Update():void {

        }

        public Reset():void {

        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`starting - END SCENE`);

            // add children
        }
    }
}