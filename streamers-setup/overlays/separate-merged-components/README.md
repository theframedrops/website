# Separate Combined Components

Many of our component overlays have more than one component included. In the event that you want to only use one component
(or even just move each component individually), you'll need to use OBS to split apart these components.

> Make sure that each browser source is set to `width: 1080` and `height: 1920` in the OBS Browser Plugin before moving forward
> 
> You can learn more about how to do this [in our "How to add to OBS" docs page](/streamers-setup/overlays/add-to-scene/)

## OBS Transform

With one of the overlay Browser Sources selected in your sources tab, right click.

This will bring up a context menu with many options. Expand the options for "Transform", then select "Edit Transform...".

![Selecting the "Edit Transform" option](./edit_transform_menu.png)

Once this is done, it will bring up a dialog called "Scene Item Transform". From the related docs page, copy and paste the values for:

- "Crop Left"
- "Crop Right"
- "Crop Top"
- "Crop Bottom"

![Setting the crop values](./set_transform.png)

Once this is done, you can close the dialog.

## Using Multiple Components in a Scene

If you want to move multiple components present in the same overlay URL individually, you'll need one OBS Brower Source
per component. Simply use the same URL and change the transform values to match the component you want to use
