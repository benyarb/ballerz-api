# Ballerz REST API

Simple REST API in 2 files.

## worker
a cloudflare worker in TS that accesses a KV store

[src/index.ts](https://github.com/benyarb/ballerz-api/blob/main/src/index.ts)

## data
- metadata for all ~10k Ballerz
- normalized from onchain/gaia/rayvin/community sheets
- formatted into KV pairs to upsert to cloudflare KV store

[data/ballerKV.json](https://github.com/benyarb/ballerz-api/blob/main/data/ballerKV.json)

example:
```
[
  {
    "key": "baller-2185",
    "value": "{\"id\":2185,\"team\":\"Team Flow (M)\",\"accessories\":[\"Armband\",\"Headband\"],\"number\":\"58\",\"dunks\":82,\"shooting\":80,\"playmaking\":60,\"defense\":90,\"overall\":78,\"nftContract\":\"A.8b148183c28ff88f.Gaia.NFT\",\"nftID\":\"1574\",\"nftSlug\":\"A.8b148183c28ff88f.Gaia.NFT:1574\",\"hair\":\"Blonde Short\",\"role\":\"Player\",\"jersey\":\"Home\",\"body\":\"Human IV\",\"face\":\"Big Smile\",\"gender\":\"M\",\"hairColor\":\"Blonde\",\"hairStyle\":\"Short (M)\",\"skillRank\":6108,\"traitRank\":3513,\"comboRank\":4909,\"mvp\":false}"
  },
  {
    "key": "baller-3252",
    "value": "{\"id\":3252,\"team\":\"Portland Creatures\",\"accessories\":[\"Headband\"],\"number\":\"83\",\"dunks\":78,\"shooting\":67,\"playmaking\":98,\"defense\":78,\"overall\":80.25,\"nftContract\":\"A.8b148183c28ff88f.Gaia.NFT\",\"nftID\":\"7151\",\"nftSlug\":\"A.8b148183c28ff88f.Gaia.NFT:7151\",\"hair\":\"Flat Top\",\"role\":\"Player\",\"jersey\":\"Away\",\"body\":\"Alien\",\"gender\":\"M\",\"hairColor\":\"Black\",\"hairStyle\":\"Flat Top\",\"skillRank\":3579,\"traitRank\":529,\"comboRank\":832,\"mvp\":false}"
  },

  // etc...
]
```

## run 
`npm run put` to upsert the KV data
https://github.com/benyarb/ballerz-api/blob/5208e09c4ab2308be00d02c8e69aa986da6f9e8c/package.json#L6
