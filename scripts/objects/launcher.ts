module objects {
    export class Launcher extends createjs.Bitmap {
        //member variables
        private _movespd: number;
        private width: number;
        private height: number;
        private isHeadingIn: boolean;

        /**
         *Creates an instance of Ocean.
         * @memberof launcher
         */
        constructor() {
            super(managers.Game.AssetManager.getResult("launcher"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this._movespd = 5;
            this.isHeadingIn = true;
            this.Start();
        }

        //private methods
        private _checkbounds(): void {
            if(this.x < config.Screen.WIDTH) {
                this.isHeadingIn = false;
            }
            if(this.x > config.Screen.WIDTH + this.width) {
                this.Reset();
            } 
        }

        // public methods
        public Start():void {
            // init
            this.regX = this.width;
            this.regY = this.height;
            this.x = config.Screen.WIDTH + this.width + 5;
            this.Reset();
        }

        public Update():void {
            console.log(this.isHeadingIn);
            if(this.isHeadingIn) {
                this.x -= this._movespd;
            } else {
                this.x += this._movespd;
            }
            this._checkbounds();
        }

        public Reset():void {
            this.y = Math.floor(Math.random() * (config.Screen.HEIGHT - this.height - config.Floor.HEIGHT)) + config.Floor.HEIGHT + this.height;
            this.isHeadingIn = true;
            // this.y = Math.floor((Math.random() * config.Screen.HEIGHT / 3) + (config.Screen.HEIGHT / 3)) * this._index - config.Floor.HEIGHT;
        }

    }
}