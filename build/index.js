"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const v4_1 = require("zod/v4");
// const Player = z.object({
//   username: z.string(),
//   xp: z.number(),
// });
// Player.parse({ username: "billie", xp: 100 });
// // Player.parse({ username: "billie", xp: "100" }); // This will throw an error
// // Player.parse({ username: "billie" }); // This will throw an error
// console.log(
//   Player.safeParse({ username: "billie", xp: 100 }),);
// Define the User schema
const UserSchema = v4_1.z.object({
    name: v4_1.z.string(),
    age: v4_1.z.number().int().positive(),
    email: v4_1.z.string().email(),
    isActive: v4_1.z.boolean().optional(),
    createdAt: v4_1.z.string().datetime().optional(),
});
// Define an array schema for users
const UsersSchema = v4_1.z.array(UserSchema);
const users = [
    {
        name: "Alice",
        age: 30,
        email: "alice@example.com",
        isActive: true,
        createdAt: "2023-01-01T00:00:00Z",
    },
    {
        name: "Bob",
        age: 25,
        email: "bob@example.com",
        isActive: false,
        createdAt: "2023-01-02T00:00:00Z",
    },
];
// Validate the users array
const result = UsersSchema.safeParse(users);
console.log(result); // Will print { success: true, data: [...] }
