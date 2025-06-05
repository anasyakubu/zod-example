import { z } from "zod/v4";

const Player = z.object({
  username: z.string(),
  xp: z.number(),
});

Player.parse({ username: "billie", xp: 100 });
// Player.parse({ username: "billie", xp: "100" }); // This will throw an error
// Player.parse({ username: "billie" }); // This will throw an error

console.log(
  Player.safeParse({ username: "billie", xp: 100 }),);