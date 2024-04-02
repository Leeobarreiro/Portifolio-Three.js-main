import { useState, useEffect } from 'react';

export function useKeyboard() {
    const [moveForward, setMoveForward] = useState(false);
    const [moveBackward, setMoveBackward] = useState(false);
    const [moveLeft, setMoveLeft] = useState(false);
    const [moveRight, setMoveRight] = useState(false);

    useEffect(() => {
        function handleKeyDown(event) {
            console.log(`Key down: ${event.key}`); // Adiciona esta linha
            switch (event.key) {
                case 'w':
                    setMoveForward(true);
                    break;
                case 's':
                    setMoveBackward(true);
                    break;
                case 'a':
                    setMoveLeft(true);
                    break;
                case 'd':
                    setMoveRight(true);
                    break;
                default:
                    break;
            }
        }

        function handleKeyUp(event) {
            console.log(`Key up: ${event.key}`); // Adiciona esta linha
            switch (event.key) {
                case 'w':
                    setMoveForward(false);
                    break;
                case 's':
                    setMoveBackward(false);
                    break;
                case 'a':
                    setMoveLeft(false);
                    break;
                case 'd':
                    setMoveRight(false);
                    break;
                default:
                    break;
            }
        }

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return { moveForward, moveBackward, moveLeft, moveRight };
}
