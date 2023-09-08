import { onCleanup } from "solid-js";
export function useIntersectionObserver(callback, options = {}) {
    let currentElement = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                callback(entry.target);
            }
        });
    }, options);

    const setRef = (element) => {
        if (currentElement) {
            observer.unobserve(currentElement);
        }

        if (element) {
            observer.observe(element);
        }

        currentElement = element;
    };

    const disconnect = () => {
        if (currentElement) {
            observer.unobserve(currentElement);
        }
        observer.disconnect();
    };

    onCleanup(disconnect);

    return [setRef, disconnect];
}
