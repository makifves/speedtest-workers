    npm install -g wrangler

    wrangler login

    git clone https://github.com/makifves/speedtest-workers.git && cd speedtest-workers

    npm i && wrangler publish

------------

## Auth
    import { getAssetFromKV } from "@cloudflare/kv-asset-handler"; 
    const u='admin'
    const p='password'
