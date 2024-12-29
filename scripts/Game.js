import { TILE_SIZE } from "../main.js";
import { Hero } from "./Hero.js";
import { Input } from "./Input.js";
import { World } from "./World.js";

export class Game {
    constructor() {
        this.input = new Input(this);
        this.world = new World();
        this.hero = new Hero({
            game: this,
            sprite: {
                image: document.getElementById('heroMagicStaff'),
                x: 5,
                y: 11,
                width: 64,
                height: 64
            },
            scale: 1,
            position: { x: 1 * TILE_SIZE, y: 2 * TILE_SIZE }
        }); 
        this.eventUpdated = false;
        this.eventTimer = 0;
        this.eventInterval = 60;
        this.debug = false;
    }

    toggleDebug() {
        this.debug = !this.debug;
    }


    render(ctx, deltaTime) {
        this.hero.update(deltaTime);

        this.world.drawBackgroundLayer(ctx);
        this.world.draw(ctx);
        if(this.debug) {
            this.world.drawCollisionLayer(ctx)
        }
        this.hero.draw(ctx, this.debug);
        this.world.drawForegroundLayer(ctx);

        if(this.eventTimer < this.eventInterval) {
            this.eventTimer += deltaTime;
            this.eventUpdated = false;
        } else {
            this.eventTimer = this.eventInterval % this.eventTimer;
            this.eventUpdated = true;
        }
    }
}