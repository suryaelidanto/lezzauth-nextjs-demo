export interface API {
    auth: typeof import('./auth');
    oauth: typeof import('./oauth');
}
export declare const api: API;
