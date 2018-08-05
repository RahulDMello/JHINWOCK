module scenes {
    export class Level2 extends objects.Scene {
         // member variables
         private _canon: objects.Canon;
         private _ocean: objects.Background2;
         private _meteors: objects.Meteor[];
         private _meteorNum: number;
         private _bullets: objects.PlayerBullet[];
         private _frame: number;
         private _scoreText: objects.ScoreText;
         private _livesText: objects.LivesText;
         private _timer: objects.Timer;
         private _portal: objects.Portal2;
         
         public engineSound:createjs.AbstractSoundInstance;
 
         // constructors
         constructor() {
             super();
 
             this.Start(); 
         }
 
         // private methods
         private _buildClouds():void {
             for (let count = 0; count < this._meteorNum; count++) {
                 this._meteors.push(new objects.Meteor()); 
                 //this._clouds[count] = new objects.Cloud();
             }
         }
 
         // public methods
         public Start():void {
             this.engineSound = createjs.Sound.play("bgmusic");
             this.engineSound.loop = -1;
             this.engineSound.volume = 0.1;
 
             this._bullets = new Array<objects.PlayerBullet>();
 
             this._canon = new objects.Canon();
             this._ocean = new objects.Background2();
 
             // creates an empty array of type Cloud
             this._meteors = new Array<objects.Meteor>();
             this._meteorNum = 4;
             
             this._scoreText = new objects.ScoreText();
             this._livesText = new objects.LivesText();
             this._timer = new objects.Timer();
 
            this._portal = new objects.Portal2();

             this._frame = 60;
 
             this._buildClouds();
            
             this.Main();
         }
 
         public Update():void {
             this._frame++;
 
             this._canon.Update();
             this._ocean.Update();
             
             this._scoreText.Update();
             this._livesText.Update();

             this._timer.Update();

             this._portal.Update();
            managers.Collision.checkCanonPortal2(this._canon, this._portal);
 
             this._meteors.forEach(meteor => {
                 meteor.Update();
                 managers.Collision.checkMeteorCanon(this._canon, meteor);
             });
 
             if(this._frame >= 45) {
                  let bullet = new objects.PlayerBullet();
                  this._bullets.push(bullet);
                  this.addChildAt(bullet, 1);
                  this._frame = 0;
             }
 
             this._bullets.forEach(bullet => {
                 bullet.Update();
                 if(bullet.CheckBounds()) {
                     this.removeChild(bullet);
                     this._bullets.splice(this._bullets.indexOf(bullet), 1);
                 }
                 this._meteors.forEach(meteor => {
                     managers.Collision.checkMeteorBullet(bullet, meteor);    
                 });
             });
             
         }
 
         public Reset():void {
 
         }
 
         public Destroy():void {
             this.engineSound.stop();
             this.removeAllChildren();
         }
 
         public RemoveBullet(bullet: objects.PlayerBullet): void {
             var index = this._bullets.indexOf(bullet, 0);
             if (index > -1) {
                 this._bullets.splice(index, 1);
             }
         }
 
         public Main():void {
             console.log(`Starting - PLAY SCENE`);
 
             // adding the ocean to the scene
             this.addChild(this._ocean);
 
             // adding the island to the scene
 
             // adding the plane to the scene
             this.addChild(this._canon);
 
             // adding the cloud to the scene
             for (const cloud of this._meteors) {
                 this.addChild(cloud);
             }

             this.addChild(this._scoreText);
             this.addChild(this._livesText);
             this.addChild(this._timer);
             this.addChild(this._portal);

         }
     }
} 