//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function(){
    // Game Variables
    let canvas:HTMLCanvasElement;
    let stage:createjs.Stage;
    let AssetManager: createjs.LoadQueue;
    let CurrentScene: objects.Scene;
    let CurrentState: config.Scene;
    let keyCode: Number;

    let Manifest = [
        {id: "bg", src:"/Assets/images/bg.png"},
        {id: "floor", src:"/Assets/images/floor.png"},
        {id: "box", src:"/Assets/images/dummy.png"},
        {id: "launcher", src:"/Assets/images/tower.png"},
        {id: "hero", src:"/Assets/images/hero.png"}
    ]


    function Init():void {

        document.onkeydown = function(event) {
            keyCode = event.keyCode;
        }

        document.onkeyup = function(event) {
            keyCode = 0;
        }

        console.log(`%c Assets Loading...`,"font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }

    function Start():void {
        console.log(`%c Game Initializing...`,"font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);

        CurrentState = config.Scene.LEVEL1;
        managers.Game.CurrentState = CurrentState;

        // This is where all the magic happens
        Main();
    }

    function Update():void {
        if(CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }

        CurrentScene.Update(keyCode);

        stage.update();
    }

    function Main():void {
        console.log(`%c Main Game Started...`,"font-style:italic; font-size:16px; color:blue;");

        if(CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
        }
    
        switch(CurrentState) {
            case config.Scene.START:
            CurrentScene = new scenes.Start();
            break;

            case config.Scene.LEVEL1:
            CurrentScene = new scenes.Level1();
            break;

            case config.Scene.LEVEL2:
            CurrentScene = new scenes.Level2();
            break;

            case config.Scene.LEVEL3:
            CurrentScene = new scenes.Level3();
            break;

            case config.Scene.END:
            CurrentScene = new scenes.End();
            break;
        }

        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }

    window.addEventListener("load", Init);

})();