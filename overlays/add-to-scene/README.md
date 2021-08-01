# Add Overlay/Component to Scene

In order to add any of our provided overlays or components to your OBS setup, you'll need to use the Browser Source.

To do this, start with a by adding a new source by pressing the "+" button in the bottom left corner

![List of scenes and sources](./sources.png)

This will bring up a list of sources you can add. Select "Browser".

![List of source options](./sources_select.png)

Selecting this will open a dialog called "Properties for 'Browser'". 

**Set the URL to the listed overlay URL at the top of the docs page**. Then, **set the width to `1920` and the height to `1080`**.

> Set the height and width to 1920x1080, even if your OBS output is a different resolution. Not doing so will result in mis-shapen overlays and components. You're able to resize the browser plugin after-the-fact

![Properly set browser settings](./browser_properties.png)

> If you're using a component and want to remove the extra blank space, you can [trim the edges by following our docs page](/overlays/separate-merged-components)

# Config

Talk about changing font? Maybe? If it's easy?
