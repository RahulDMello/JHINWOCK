module objects {
    export class Portal2 extends GameObject {
        //member variables

        /**
         *Creates an instance of Portal2.
         * @memberof Portal2
         */
        constructor() {
            super("portal2");
            this.Start();
        }

        //private methods

        // public methods
        public Start():void {
            // init
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.x = config.Screen.HALF_WIDTH;
            this.y = -17700 + config.Screen.HEIGHT;
        }

        public Update():void {
            this.y += config.ObjectSpeed.SPEED;
        }

        public Reset():void {

        }

    }
}