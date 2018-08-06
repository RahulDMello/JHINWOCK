namespace objects {
    export class Background3 extends createjs.Bitmap {
      // member variables
      private _rotationSpeed: number;
  
      /**
       * Creates an instance of Background3.
       * @memberof Background3
       */
      constructor() {
        super(managers.Game.AssetManager.getResult("background3"));
  
        this.Start();
      }
  
      // private methods
      private _checkBounds(): void {
        // check top boundary

      }
  
      // public methods
      public Start(): void {
        this._rotationSpeed = 0.5; // 10 pixels per frame
        this.regX = this.getBounds().width * 0.5;
        this.regY = this.getBounds().height * 0.5;
        this.x = config.Screen.HALF_WIDTH;
        this.y = config.Screen.HALF_HEIGHT;
      }
  
      public Update(): void {
          this._rotationSpeed *= Math.random() <= 0.01 ? -1 : 1;
        this.rotation += this._rotationSpeed;
        // this._checkBounds();
      }
  
      public Reset(): void {
        
      }
    }
  }
  