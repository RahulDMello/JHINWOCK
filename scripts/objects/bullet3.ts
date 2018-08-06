module objects {
    export class Bullet3 extends objects.GameObject {
        //member variables
        private _movespd: number;
        private randX: number;
        private randY: number;
        private _index: number;
        private _frame: number;

        /**
         *Creates an instance of Bullet3.
         * @memberof Bullet3
         */
        constructor(index:number) {
            super("bullet");
            this._index = index;
            this.Start();
        }

        //private methods
        private _checkbounds(): void {
            if(this.x > config.Screen.WIDTH || this.x < 0 || this.y > config.Screen.HEIGHT || this.y < 0) {
                this.Reset();
            }
        }

        // public methods
        public Start():void {
            // init
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        }

        public Update():void {
            console.log(`Update ${this._index}`)
            this._frame++;
            if(this._frame > 15 * this._index) {
                this.x += this.randX;
                this.y += this.randY;
                this._checkbounds();
                console.log(`Update inside if ${this._index}`)
            }
        }

        public Reset():void {
            this.x = config.Screen.HALF_WIDTH;
            this.y = config.Screen.HALF_HEIGHT;
            this.randX = (Math.floor(Math.random() * 4) + 2) * (Math.random() <= 0.5 ? 1 : -1);
            this.randY = (Math.floor(Math.random() * 4) + 2) * (Math.random() <= 0.5 ? 1 : -1);
            this._frame = 0;
        }

    }
}