import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

const pass = true;

let cacheControl = {
    browserTTL:  null, // do not set cache control ttl on responses
    edgeTTL: 2 * 60 * 60 * 24, // 2 days
    bypassCache: true, // do not bypass Cloudflare's cache
};

async function authhandle(request) {
    return getAssetFromKV(request, {
        cacheControl,
        defaultMimeType:'application/octet-stream'
    });
}

export { authhandle };