module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;

        // Constructor
        constructor() {
            super();

            this.Start();
        }

        // Method
        public Start():void {
            // Initialize our variables
            this.gameOverLabel = new objects.Label(
                "Game Over!", "80px", "Consolas", "#000000", 720, 240, true);

                this.backButton = new objects.Button("NextButton", 1100, 500);
            this.Main();
        }

        public Update():void {}

        public Main():void {
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);

            this.backButton.on("click", this.backButtonClick);
        }

        private backButtonClick():void {
            managers.Game.currentScene = config.Scene.GAME;
        }
    }
}