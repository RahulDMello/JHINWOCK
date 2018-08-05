module objects {
    export class LivesText extends createjs.Text {
        //member variables

        /**
         *Creates an instance of LivesText.
         * @memberof LivesText
         */
        constructor() {
            super();
            this.Start();
        }

        //private methods

        // public methods
        public Start():void {
            // init
            this.x = config.Screen.WIDTH - 200;
            this.y = 20;
            this.text = "Lives: " + managers.Score.LIVES;
            this.color = "#fff";
            this.font = "bold 48px Consolus"
        }

        public Update():void {
            this.text = "Lives: " + managers.Score.LIVES;
        }

        public Reset():void {
            
        }
    }
}