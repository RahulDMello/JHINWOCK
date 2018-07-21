module objects {
    export class Floor extends createjs.Bitmap {
        //member variables

        /**
         *Creates an instance of Ocean.
         * @memberof Floor
         */
        constructor() {
            super(managers.Game.AssetManager.getResult("floor"));
            this.Start();
        }

        //private methods

        // public methods
        public Start():void {
            // init
            this.x = 0;
            this.y = config.Screen.HEIGHT - this.getBounds().height;
        }

        public Update():void {

        }

        public Reset():void {
            
        }


    }
}