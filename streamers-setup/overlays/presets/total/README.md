# Total Overlay

> Overlay URL: [https://overlays.tiltify.com/BOBbt48cTpyO360wb54NgYK2Zq57b0J3](https://overlays.tiltify.com/BOBbt48cTpyO360wb54NgYK2Zq57b0J3)

The total package overlay is a great way to have a feature-rich overlay for the charity event setup nearly instantly.

This overlay includes [a QR code to quickly donate](/streamers-setup/overlays/presets/qr-code/), [donation UI notifications](/streamers-setup/overlays/presets/events/),
and a [donation goal indicator](/streamers-setup/overlays/presets/goals/)

## Overlay Preview

![An overlay including donation messages, goal UI, QR code, name of stream, and charity](./total_overlay_preview.png)

## Included Components

N/A. This overlay is meant to be an all-in-one. If you need individual components for your overlay, please refer to our
[component overlays](/streamers-setup/overlays/).

## Configuration

This component is one of the few that uses colors other than greyscale. As such, if your brand doesn't use the default blue color, [you can change it by following our docs page](/streamers-setup/overlays/colors/)

By doing this, however, the charity logo will be discolored. To fix this, simply add an OBS image source to overlap
the overlay's Browser Source.

## Implementation Notes

We have the ability to add notification noises when someone donates. We currently have this disabled, but if
the community wants we can enable it easily (with a range of noises to choose from). If we decide to enable this,
those that wish to disable the functionality can do so easily within OBS.

While we wish we could change the font size of this overlay, we unfortunately cannot - as it's not an option in
Tiltify currently.
