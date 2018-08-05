module objects {
    export class Portal extends GameObject {
        //member variables

        /**
         *Creates an instance of Portal.
         * @memberof Portal
         */
        constructor() {
            super("portal");
            this.Start();
        }

        //private methods
        private _checkBounds(): void {
            if(this.x < 0) {
                this.Reset();
            }
        }

        // public methods
        public Start():void {
            // init
            this.regX = 0;
            this.regY = this.getBounds().height;
            this.x = 12500;
            this.y = config.Screen.HEIGHT - config.Floor.HEIGHT - Math.floor(Math.random() * this.width);
        }

        public Update(keyCodes: Array<number>):void {
            let flag: boolean = true;
            keyCodes.forEach(keyCode => {
                switch(keyCode) {
                    case 68:  // D key
                    case 39:  // right arrow key
                        if(flag) {
                            this.x -= config.ObjectSpeed.SPEED;
                            flag = !flag;
                        }
                        break;
                }
                this._checkBounds();    
            });
        }

        public Reset():void {
            this.y = config.Screen.HEIGHT - config.Floor.HEIGHT - Math.floor(Math.random() * this.width);
            this.x = 7500;
        }

    }
}