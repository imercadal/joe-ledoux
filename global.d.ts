export {};

declare global {
  interface Window {
    imageMapResize: (selector: string | HTMLMapElement) => void;
  }
}
