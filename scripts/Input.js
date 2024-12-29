export const UP = 'UP';
export const DOWN = 'DOWN';
export const RIGHT = 'RIGHT';
export const LEFT = 'LEFT';

export const ArrowUp = 'ArrowUp';
export const ArrowDown = 'ArrowDown';
export const ArrowLeft = 'ArrowLeft';
export const ArrowRight = 'ArrowRight';

const buttonNavigation = [ArrowUp, ArrowDown, ArrowLeft, ArrowRight];
export class Input {
    constructor(game) {
        this.keys = [];
        this.game = game;

        const upButton = document.getElementById(ArrowUp);
        const downButton = document.getElementById(ArrowDown);
        const leftButton = document.getElementById(ArrowLeft);
        const rightButton = document.getElementById(ArrowRight);


        window.addEventListener('keydown', e => {
            this.onKeyDownEvent(e);
        })

        window.addEventListener('keyup', e => {
            this.onKeyUpEvent(e);
        })


        window.addEventListener('mousedown', e => {
            console.log('mousedown', e, e?.target?.attributes?.id);
            if (e.target.attributes.id && buttonNavigation.includes(e.target.attributes.id?.value)) {
                console.log('mousedown', e, e.target.attributes.id.value);
                this.onKeyDownEvent({
                    key: e?.target?.attributes?.id?.value || ''
                });
            }
        })

        // Event listener for button release
        window.addEventListener("mouseup", (e) => {
            console.log('mouseup', e);
            if (e.target.attributes.id && buttonNavigation.includes(e.target.attributes.id?.value)) {
                this.onKeyUpEvent({
                    key: e?.target?.attributes?.id?.value || ''
                });
            }
        });

        // Event listener for touch start
        window.addEventListener("touchstart", (e) => {
            console.log('mousedown', e, e?.target?.attributes?.id);
            if (e.target.attributes.id && buttonNavigation.includes(e.target.attributes.id?.value)) {
                console.log('mousedown', e, e.target.attributes.id.value);
                this.onKeyDownEvent({
                    key: e?.target?.attributes?.id?.value || ''
                });
            }
        });

        // Event listener for touch end
        window.addEventListener("touchend", (e) => {
            console.log('touchend', e, e?.target?.attributes?.id);
            if (e.target.attributes.id && buttonNavigation.includes(e.target.attributes.id?.value)) {
                this.onKeyUpEvent({
                    key: e?.target?.attributes?.id?.value || ''
                });
            }
        });

        // Event listener for touch cancel (optional)
        window.addEventListener("touchcancel", (e) => {
            console.log('touchcancel', e, e?.target?.attributes?.id);
            if (e.target.attributes.id && buttonNavigation.includes(e.target.attributes.id?.value)) {
                this.onKeyUpEvent({
                    key: e?.target?.attributes?.id?.value || ''
                });
            }
        });
    }

    onKeyDownEvent(e, navCalled) {
        if (e.key === "ArrowUp" || e.key.toLowerCase() === 'w') {
            this.keyPressed(UP);
        } else if (e.key === "ArrowDown" || e.key.toLowerCase() === 's') {
            this.keyPressed(DOWN);
        } else if (e.key === "ArrowRight" || e.key.toLowerCase() === 'd') {
            this.keyPressed(RIGHT);
        } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === 'a') {
            this.keyPressed(LEFT);
        }

        if (e.key === 'Enter' || e.key === ' ') {
            this.game.toggleDebug();
        }
    }

    onKeyUpEvent(e) {
        if (e.key === "ArrowUp" || e.key.toLowerCase() === 'w') {
            this.keyReleased(UP);
        } else if (e.key === "ArrowDown" || e.key.toLowerCase() === 's') {
            this.keyReleased(DOWN);
        } else if (e.key === "ArrowRight" || e.key.toLowerCase() === 'd') {
            this.keyReleased(RIGHT);
        } else if (e.key === "ArrowLeft" || e.key.toLowerCase() === 'a') {
            this.keyReleased(LEFT);
        }
    }

    keyPressed(action) {
        if (!this.keys.includes(action)) {
            this.keys.unshift(action);
        }
    }

    keyReleased(action) {
        const index = this.keys.indexOf(action);
        if (index === -1) return;
        this.keys.splice(index, 1);
    }

    get lastKey() {
        return this.keys[0];
    }
}