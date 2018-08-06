module objects {
    export class Hero3 extends objects.GameObject {
        //member variables
        public _rotationSpeed: number;
        private _laserMusic: createjs.AbstractSoundInstance;

        /**
         *Creates an instance of Hero3.
         * @memberof Hero3
         */
        constructor() {
            super("hero3");

            this.Start();
        }

        //private methods
        private _checkBounds(): void {
            
        }

        // public methods
        public Start():void {
            // init
            this._rotationSpeed = 2.5;
            this.regX = config.Screen.HALF_WIDTH - 320;
            this.regY = config.Screen.HALF_HEIGHT - 320;
            this.x = config.Screen.HALF_WIDTH;
            this.y = config.Screen.HALF_HEIGHT;
        }

        public Update(keyCodes: Array<number>):void {
            let leftFlag: boolean = false;
            let rightFlag: boolean = false;
            keyCodes.forEach(keyCode => {
                switch(keyCode) {
                    case 68:  // D key
                    case 39:  // right arrow key
                        if(!rightFlag) {
                            this.rotation += this._rotationSpeed;
                            rightFlag = true;
                        }
                        break;
                    case 65:  // change to a
                    case 37:  // left arrow key
                        this.rotation -= this._rotationSpeed;
                        leftFlag = true;
                        break;
                    case 32:
                        // play laser sound
                        break;
                }
            });
        }

        public Reset():void {
            
        }
    }
}