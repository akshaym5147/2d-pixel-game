import { Game } from "./scripts/Game.js";
import { Hero } from "./scripts/Hero.js";
// import { Input } from "./scripts/Input.js";
import { World } from "./scripts/World.js";

export const TILE_SIZE = 32;
export const HALF_TILE_SIZE = TILE_SIZE / 2
export const COL = 15;
export const ROW = 20;
export const GAME_WIDTH = TILE_SIZE * COL;
export const GAME_HEIGHT = TILE_SIZE * ROW;


window.addEventListener('load', (e) => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = GAME_WIDTH;
    canvas.height = GAME_HEIGHT;

    const game = new Game();

    let lastTime = 0;
    const animate = (timeStamp) => {
        requestAnimationFrame(animate);
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
        game.render(ctx, deltaTime);
    }

    requestAnimationFrame(animate);

})