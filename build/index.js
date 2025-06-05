"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = require("zod/v4");
const Player = v4_1.z.object({
    username: v4_1.z.string(),
    xp: v4_1.z.number(),
});
Player.parse({ username: "billie", xp: 100 });
// Player.parse({ username: "billie", xp: "100" }); // This will throw an error
// Player.parse({ username: "billie" }); // This will throw an error
console.log(Player.safeParse({ username: "billie", xp: 100 }));
