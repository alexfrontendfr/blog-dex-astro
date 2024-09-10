/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly SITE: string;
    readonly BASE_URL: string;
    readonly ASSETS_PREFIX: string | undefined;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}