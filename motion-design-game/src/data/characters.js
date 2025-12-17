// Example placeholders (add your own images in src/assets and import them)
import miffy from "src/assets/miffy.png";
import snoopy from "src/assets/snoopy.png";
import moomin from "src/assets/moomin.png";
import smiski from "src/assets/smiski.png";

export const characters = [
    {
        id: "miffy",
        name: "Miffy",
        img: miffy,
        // positions for the collage page:
        pos: { top: "60%", left: "78%", w: "140px", rot: "6deg" },
        about: "A tiny bunny with a big heart. Simple, sweet, iconic.",
        facts: ["Created by Dick Bruna", "Minimal style", "Cozy vibes"],
        vibe: "Soft + calm",
        likes: ["stars", "pastels", "quiet moments"],
    },
    {
        id: "snoopy",
        name: "Snoopy",
        img: snoopy,
        pos: { top: "72%", left: "18%", w: "170px", rot: "-8deg" },
        about: "A daydreamer, a writer, and sometimes a flying ace.",
        facts: ["Peanuts character", "Big imagination", "Best napper"],
        vibe: "Dreamy + funny",
        likes: ["sleep", "music", "adventures"],
    },
    {
        id: "moomin",
        name: "Moomin",
        img: moomin,
        pos: { top: "45%", left: "35%", w: "170px", rot: "2deg" },
        about: "Gentle, curious, and always ready for a cozy journey.",
        facts: ["From Tove Jansson", "Moominvalley", "Wholesome"],
        vibe: "Warm + curious",
        likes: ["forests", "friends", "snacks"],
    },
    {
        id: "smiski",
        name: "Smiski",
        img: smiski,
        pos: { top: "25%", left: "82%", w: "140px", rot: "-4deg" },
        about: "Tiny glow dude who hides in corners and brings weird joy.",
        facts: ["Collectible figure", "Glows in dark", "Shy"],
        vibe: "Silly + mysterious",
        likes: ["corners", "nighttime", "posing"],
    },
]
