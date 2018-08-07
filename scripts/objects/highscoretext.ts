module objects {
    export class HighscoreText extends createjs.Text {
        //member variables

        /**
         *Creates an instance of HighscoreText.
         * @memberof HighscoreText
         */
        constructor() {
            super();
            this.Start();
        }

        //private methods

        // public methods
        public Start():void {
            // init
            this.x = config.Screen.WIDTH - 400;
            this.y = 20;
            this.text = "HighScore: " + managers.Score.HIGHSCORE;
            this.color = "#fff";
            this.font = "bold 48px Consolus"
        }

        public Update():void {
        }

        public Reset():void {
            
        }
    }
}