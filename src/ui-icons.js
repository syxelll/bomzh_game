// Bold, single-colour silhouettes: the same visual weight at every HUD size.
const shapes={
 punch:'<path d="M16 29V18a5 5 0 0 1 10 0v9-14a5 5 0 0 1 10 0v14-11a5 5 0 0 1 10 0v14-8a5 5 0 0 1 10 0v16c0 8-5 12-9 16v6H23v-9L10 38c-5-6 2-12 6-9Z"/>',
 grab:'<circle cx="33" cy="13" r="7"/><path d="m22 22 11 4 11-4 5 9-10 5v8h9L33 60 18 44h9v-8l-10-5 5-9ZM4 18l7-2 3 15 8 6-5 8L7 36 4 18Zm56 0-7-2-3 15-8 6 5 8 10-9 3-18Z"/>',
 throw:'<path d="m7 49 13-16 10 3 8 14-8 5-6-10-9 11-8-7Zm9-20-8-5 10-14 19 2 9 10-7 5-8-7-9 1-6 8Z"/><path d="m43 9 7-5 4 6-2 2 7 10-10 7-7-10 2-2-4-6 3-2ZM37 32h20v5H37zm9 10h15v5H46z"/>',
 dodge:'<circle cx="36" cy="10" r="7"/><path d="m28 20 13 2 7 12h12v8H43l-7-10-6 12 12 9-5 8-19-15 8-15-9 2-7 10-7-5 10-15 15-3ZM1 9h20v5H1zm0 10h13v5H1z"/>',
 burp:'<path d="M23 8a17 17 0 0 1 17 17v7H29v8H19v15H8V40a17 17 0 0 1-2-29c5-4 11-4 17-3Z"/><path d="M46 27a7 7 0 0 1 10-7 7 7 0 1 1 4 13 7 7 0 0 1-7 12H42v-8h9c2 0 2-3 0-3H35v-7h11Z"/>',
 spray:'<path d="M6 24h8v8H6zm11-6c22-13 37 4 36 24h-7C44 22 33 20 20 26l-3-8Zm0 13c16-6 23 4 22 18h-7c1-12-4-15-13-11l-2-7Z"/><path d="M49 44c-12 13-7 17 0 17s12-4 0-17ZM23 43c-8 9-5 14 0 14s8-5 0-14Z"/>',
 super:'<path d="m32 2 8 17 19-4-8 17 11 16-20-1-10 16-9-17L3 48l11-17L6 14l19 5L32 2Z"/><path fill="var(--icon-cutout,#26383d)" d="M22 34V23h5v9-13h6v13-11h6v13-9h5v15l-8 8H25l-9-13 4-4 2 3Z"/>',
 heart:'<path d="M32 57 8 34C-9 15 17-1 32 16 47-1 73 15 56 34L32 57Z"/>',
 stamina:'<path d="M34 2 10 37h18l-3 25L55 23H35l7-21Z"/>',
 trophy:'<path d="M19 5h26v8h14v10c0 13-9 19-18 18l-5 5v6h13v8H15v-8h13v-6l-5-5C14 42 5 36 5 23V13h14V5Zm0 15h-7v3c0 7 3 10 8 11l-1-14Zm26 0-1 14c5-1 8-4 8-11v-3h-7Z"/>',
 wallet:'<path d="m22 3 10 4 10-4 5 6-10 11H27L17 9l5-6ZM25 23h14c11 9 20 19 16 28-4 12-42 12-46 0-4-9 5-19 16-28Z"/><path fill="var(--icon-cutout,#26383d)" d="M29 29h6v4h7v6H29v3h13v13h-7v4h-6v-4h-7v-6h13v-3H22V33h7z"/>',
 pause:'<path d="M13 8h13v48H13zM38 8h13v48H38z"/>',
 volume:'<path d="M7 23h12L34 10v44L19 41H7V23Zm34-8 5-5c14 11 14 33 0 44l-5-5c10-8 10-26 0-34Zm-3 10 5-5c8 7 8 17 0 24l-5-5c5-5 5-9 0-14Z"/>',
 muted:'<path d="M6 24h12L32 11v42L18 40H6V24Zm33-2 5-5 7 8 7-8 5 5-8 10 8 10-5 5-7-8-7 8-5-5 8-10-8-10Z"/>',
 gear:'<path d="m26 3 12 0 2 9 7 3 8-5 8 10-7 7v9l7 7-8 10-8-5-7 3-2 10H26l-2-10-7-3-8 5-8-10 7-7v-9l-7-7L9 10l8 5 7-3 2-9Zm6 18a11 11 0 1 0 0 22 11 11 0 0 0 0-22Z"/>',
 pickup:'<path d="M6 42h22l8 6h18v10H31L6 50v-8Zm22-29h8V3h8v10h8L40 27 28 13ZM15 17l8-4 5 9-2 2 10 18-13 7-10-18 2-2-5-9 5-3Z"/>',
};
export function iconSVG(name){return `<svg viewBox="0 0 64 64" class="ui-icon" aria-hidden="true" focusable="false" fill="currentColor">${shapes[name]??shapes.punch}</svg>`;}
export function mountIcons(root=document){for(const el of root.querySelectorAll('[data-icon]'))el.innerHTML=iconSVG(el.dataset.icon);}
