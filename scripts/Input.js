export const UP = 'UP';
export const DOWN = 'DOWN';
export const RIGHT = 'RIGHT';
export const LEFT = 'LEFT';

export class Input {
    constructor(game) {
        this.keys = [];
        this.game = game;
        window.addEventListener('keydown', e => {
            this.onKeyDownEvent(e);
        })

        window.addEventListener('keyup', e => {
            this.onKeyUpEvent(e);
        })
    }

    onKeyDownEvent(e) {
        if(e.key === "ArrowUp" || e.key.toLowerCase() === 'w') {
            this.keyPressed(UP);
        } else if(e.key === "ArrowDown" || e.key.toLowerCase() === 's') {
            this.keyPressed(DOWN);
        } else if(e.key === "ArrowRight" || e.key.toLowerCase() === 'd') {
            this.keyPressed(RIGHT);
        } else if(e.key === "ArrowLeft" || e.key.toLowerCase() === 'a') {
            this.keyPressed(LEFT);
        }

        if(e.key === 'Enter' || e.key === ' ') {
            this.game.toggleDebug();
        }
    }

    onKeyUpEvent(e) {
        if(e.key === "ArrowUp" || e.key.toLowerCase() === 'w') {
            this.keyReleased(UP);
        } else if(e.key === "ArrowDown" || e.key.toLowerCase() === 's') {
            this.keyReleased(DOWN);
        } else if(e.key === "ArrowRight" || e.key.toLowerCase() === 'd') {
            this.keyReleased(RIGHT);
        } else if(e.key === "ArrowLeft" || e.key.toLowerCase() === 'a') {
            this.keyReleased(LEFT);
        }
    }

    keyPressed(action) {
        if(!this.keys.includes(action)) {
            this.keys.unshift(action);
        }
    }

    keyReleased(action) {
        const index = this.keys.indexOf(action);
        if(index === -1) return;
        this.keys.splice(index, 1);
    }

    get lastKey() {
        return this.keys[0];
    }
}