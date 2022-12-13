# Penumbra Mod Authoring

Guides written here have a primary goal in mind: educate others on using Penumbra to create mods. With the introduction of `.pmp` files, Penumbra is now capable of creating distributable mod packs. Additionally, almost anything that TexTools can do, Penumbra can also do. That doesn't mean TexTools is worthless though — it is still an essential tool for mod authoring.

## Why?

There are a few reasons that we want to approach authoring this way. Firstly, and primarily, we want to avoid modifying any game files directly. There are inherent risks and game instability issues that we can avoid by doing this. Even if those issues are unlikely to happen, they still can.

Additionally, modding is also an iterative process. You can never be sure what something will look like in game until you *actually* see it in game. Since Penumbra is capable of reloading modded files practically instantly, it provides a much faster development process. In contrast, testing `.ttmp` mods will require a full game restart or a complete reimport through Penumbra every change.

## Downsides

There are, of course, still downsides to this method of mod creation. Instead of having TexTools' interface to do most of the work for you, you'll be entering data paths yourself. A daunting task at first, but it will give you a more comprehensive understanding of how FFXIV's game files are structured.