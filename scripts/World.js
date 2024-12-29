import { COL, ROW, TILE_SIZE } from "../main.js";

export class World {
    constructor() {
        this.levels = {
            waterLayer: [],
            groundLayer: [],
            collisionLayer: [
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
            ],
            backgroundLayer: document.getElementById('backgroundLayer1'), 
            foregroundLayer: document.getElementById('foregroundLayer1') 
        }   
    }


    getTile(array, row, col) {
        return array[COL * row + col];
    }

    drawBackgroundLayer(ctx) {
        ctx.drawImage(this.levels.backgroundLayer, 0, 0)
    }

    drawForegroundLayer(ctx) {
        ctx.drawImage(this.levels.foregroundLayer, 0, 0)
    }

    drawCollisionLayer(ctx) {
        ctx.fillStyle="rgba(0, 0, 255, 0.5)"
        for (let row = 0; row < ROW; row++) {
            for (let col = 0; col < COL; col++) {
                if(this.getTile(this.levels.collisionLayer, row, col) === 1) {
                    ctx.fillRect(col* TILE_SIZE, row* TILE_SIZE, TILE_SIZE, TILE_SIZE);        
                }
            }
            
        }
    }

    draw(ctx) {
        ctx.strokeStyle="black"
        for (let row = 0; row < ROW; row++) {
            for (let col = 0; col < COL; col++) {
                ctx.strokeRect(col* TILE_SIZE, row* TILE_SIZE, TILE_SIZE, TILE_SIZE);        
            }
            
        }
    }
}