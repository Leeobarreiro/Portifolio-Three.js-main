// useKeyboardControls.js
import { useState, useEffect } from 'react';

export function useKeyboardControls() {
    const [movement, setMovement] = useState({
        forward: false,
        backward: false,
        left: false,
        right: false
    });

    useEffect(() => {
        const handleKeyDown = (event) => {
            switch (event.key) {
                case 'w':
                    setMovement(m => ({ ...m, forward: true }));
                    break;
                case 's':
                    setMovement(m => ({ ...m, backward: true }));
                    break;
                case 'a':
                    setMovement(m => ({ ...m, left: true }));
                    break;
                case 'd':
                    setMovement(m => ({ ...m, right: true }));
                    break;
            }
        };

        const handleKeyUp = (event) => {
            switch (event.key) {
                case 'w':
                    setMovement(m => ({ ...m, forward: false }));
                    break;
                case 's':
                    setMovement(m => ({ ...m, backward: false }));
                    break;
                case 'a':
                    setMovement(m => ({ ...m, left: false }));
                    break;
                case 'd':
                    setMovement(m => ({ ...m, right: false }));
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return movement;
}
