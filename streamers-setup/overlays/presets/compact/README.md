# Compact Overlay

> Overlay URL: [https://overlays.tiltify.com/BX77aXnYmTvYr-bDDXyKTWojwxSqjRcS](https://overlays.tiltify.com/BX77aXnYmTvYr-bDDXyKTWojwxSqjRcS)

The compact overlay is a useful middle-ground between using the individual components to roll your own overlay and
having [the Total Package Overlay](/streamers-setup/overlays/presets/total/) consuming your entire allotted overlay space.

## Overlay Preview

![A single bar at the top of the screen showing donation progress bar, name of charity, and most recent donor and amount](./compact_overlay_preview.png)

## Included Components

| Name | Description | Crop Left | Crop Right | Crop Top | Crop Bottom |
| --- | --- | --- | --- | --- | --- |
| Compact | Includes the charity logo and name, amount raised, goal, and donation events. Donation events shows dollar amount and donor name | 0 | 720 | 0 | 996 |

> [Learn how to use this chart with our docs page](/streamers-setup/overlays/separate-merged-components/)

## Configuration

This component is one of the few that uses colors other than greyscale. As such, if your brand doesn't use the default blue color, [you can change it by following our docs page](/streamers-setup/overlays/colors/)

To remove the logo (so you can replace it with your own, non hue-shifted version using an OBS Image Source), simply add `?` to your crop-left transform.

## Implementation Notes

While we wish we could change the font size of this overlay, we unfortunately cannot - as it's not an option in
Tiltify currently. Likewise, we are unable to resize the height of this component.

However, we _can_ change the width of the component. If the community can agree on a standard width they'd like this
component to be, we can update it. However, as this component is shared with everyone in the community - we cannot
have multiple sizes.
