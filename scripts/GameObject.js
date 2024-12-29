import { HALF_TILE_SIZE, TILE_SIZE } from "../main.js";

export class GameObject {
    constructor({
        game,
        sprite,
        position,
        scale
    }) {
        this.game = game;
        this.position = position ?? {x:0, y:0};
        this.scale = scale ?? 1;
        this.sprite = sprite ?? {x:0, y:0, width: TILE_SIZE, height: TILE_SIZE, image: ''};

        this.destinationPosition = {x: this.position.x, y: this.position.y};
        this.destinationToTravel = {x: 0, y: 0};

        this.width = this.sprite.width * this.scale;
        this.halfCharWidth = this.width / 2;
        this.height = this.sprite.height * this.scale;
    }

    moveTowards(destinationPosition, speed) {
        this.destinationToTravel.x = destinationPosition.x - this.position.x;
        this.destinationToTravel.y = destinationPosition.y - this.position.y;

        let distance = Math.hypot(this.destinationToTravel.x, this.destinationToTravel.y);

        if(distance <= speed) {
            // close to dest
            this.position.x = destinationPosition.x;
            this.position.y = destinationPosition.y;
        } else {
            // else take step towards dest
            const stepX = this.destinationToTravel.x / distance;
            const stepY = this.destinationToTravel.y / distance;
            this.position.x += stepX * speed;
            this.position.y += stepY * speed;

            this.destinationToTravel.x = destinationPosition.x - this.position.x;
            this.destinationToTravel.y = destinationPosition.y - this.position.y;
    
            distance = Math.hypot(this.destinationToTravel.x, this.destinationToTravel.y);
        }

        return distance;
    }

    draw(ctx, debug) {
        if(debug) {
            ctx.fillRect(
                this.position.x,
                this.position.y,
                TILE_SIZE,
                TILE_SIZE
            );    
        }
        ctx.drawImage(
            this.sprite.image,
            this.sprite.x * this.sprite.width,
            this.sprite.y * this.sprite.height,
            this.sprite.width,
            this.sprite.height,
            this.position.x + HALF_TILE_SIZE - this.halfCharWidth,
            this.position.y + TILE_SIZE - this.height,
            this.width,
            this.height
        );
    }
}