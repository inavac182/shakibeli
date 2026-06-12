// reveal.js ships no types; we only use the constructor + initialize/destroy.
declare module "reveal.js" {
  interface RevealOptions {
    [key: string]: unknown;
  }
  export default class Reveal {
    constructor(element: HTMLElement, options?: RevealOptions);
    initialize(options?: RevealOptions): Promise<void>;
    destroy(): void;
  }
}

declare module "reveal.js/dist/reveal.css";
