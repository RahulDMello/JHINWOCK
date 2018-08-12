module objects {
    export class BossHPText extends createjs.Text {
        //member variables
        private _hp: number;

        get HP(): number {
            return this._hp;
        }

        set HP(value) {
            this._hp = value;
            this.text = "Boss HP: " + this._hp;
        }

        /**
         *Creates an instance of ScoreText.
         * @memberof ScoreText
         */
        constructor() {
            super();
            this.Start();
        }

        //private methods

        // public methods
        public Start():void {
            // init
            this.x = 40;
            this.y = 50;
            this.HP = 999;
            this.color = "#fff";
            this.font = "bold 48px Consolus"
        }

        public Update():void {
            
        }

        public Reset():void {
            
        }
    }
}