// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1483386705905188894",
        serverId: "1361349206937305098",
        token: "MTM5MDcyMjcxNjczNDE5Mzg1NQ.G4zOU2.hv_RxXbjbwsEfFBuIZviLTk45c3Fx6RG1FVlH4".env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
