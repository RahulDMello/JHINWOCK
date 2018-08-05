module objects {
    export class Timer extends createjs.Text {
        //member variables
        private _timer: number;
        private frame: number;

        get Timer(): number {
            return this._timer;
        }

        set Timer(value) {
            this._timer = value;
            this.text = "Time to portal: " + (this._timer < 10 ? "0" + this._timer : this._timer);
        }

        /**
         *Creates an instance of ScoreText.
         * @memberof ScoreText
         */
        constructor() {
            super();
            this.frame = 0;
            this.Start();
        }

        //private methods

        // public methods
        public Start():void {
            // init
            this.x = 40;
            this.y = 50;
            this.Timer = 59;
            this.color = "#fff";
            this.font = "bold 48px Consolus"
        }

        public Update():void {
            this.frame++;
            if(this.frame >= 60) {
                this.Timer--;
                if(this.Timer < 0) {
                    this.Timer = 0;
                }
                this.frame = 0;
            }
        }

        public Reset():void {
            
        }
    }
}