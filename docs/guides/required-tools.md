# Required Tools

Of course, modding is going to require some extra tools.

## TexTools

[Download Link](https://github.com/TexTools/FFXIV_TexTools_UI/releases)

TexTools is going to be your bread and butter for authoring FFXIV mods. You can also mod the game with it (sans Penumbra), but it is highly advised **not** do this, as this method actually modifies the game files.

### Enabling Lumina Mode

By default, TexTools is set to modify game files even if you don't intend to mod the game with it. Lumina mode disables this functionality and instead has TexTools output in a Penumbra-friendly format. More on why we do this is in [Penumbra Mod Authoring](/guides/penumbra-modding).

Launch TexTools, and go into the **Options** -> **Customize** menu. From here, we're going to find the **Penumbra Output** section. The file directory you set here is where all modifications you do in TexTools will be output to. It doesn't need to be anywhere related to FFXIV, but just be aware, you're going to be moving files from here frequently. Make sure to also check **Redirect imports to Lumina**.

<p align="center">
	<img src="../intro/penumbra_out.png" style="max-width:75%" />
</p>

::: warning NOTE
If your intent is to modify the model of another mod (e.g. resizing a custom outfit) then you will have to use TexTools to do this. If you have the space, it's recommended to clone the game and redirect changes there. As of now, Penumbra is incapable of exporting `.mdl` files to the Blender supported `.fbx` format.

There is a potential tool being developed with this capability, but it isn't stable or fully functional enough to recommend yet.
:::

### Exporting Complete Skeletons

The second, **optional** change here is to enable **Export Complete Skeletons**. This is primarily useful if you intend on adding additional parts to gear that lack those bones. E.g. you want to add a skirt to a chest piece that doesn't have any skirt bones.

<p align="center">
	<img src="../intro/compskel.png" style="max-width:75%" />
</p>

And that is it for TexTools!

## Blender

[Download Link](https://www.blender.org/)

Blender is the choice of 3D modeling software recommended by this guide and any portions that deal with modeling will be done with it. The best part is — it's free!

## Image Editor

There are plenty of options that you can use for texture creation and editing. The only requirement is being able to edit RGB channels independently. The most obvious tool is Photoshop, albeit it is expensive. There are many free alternatives, and also [Photopea](https://www.photopea.com/) which is a free, web-based Photoshop clone. I personally use it and find that it works just as well as Photoshop (aside from marginal lag due to large images).