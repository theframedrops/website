# Overlays

Tiltify helps us provide a set of overlays that participating streamers can use to easily track donations on.

This is done by using OBS's Browser Source and a URL associated with each overlay. As such, they can be configured
differently on a per-scene basis and combined with things like filters.

> Not sure how to add an OBS Browser Source? Check [our docs page on how to add a browser source to your scene](./add-to-scene)

We provide two different sets of overlays.

There are "Pre-fab" overlays, which act as all-in-one overlays: useful for streamers with minimal/no custom overlay, or simply
want to do as little tweaking as possible.

Pre-fab Overlays:

- [Total Package Overlay](./total)
- [Compact Overlay Bar](./total)

However, for streamers with extremely custom overlays that really want to fine-tune their overlays, we provide individual
components to use in existing overlays.

Component Overlays:

- [Goal Indicators](./goals)   
- [Event Displays](./events)  
- [QR Code](./qr-code)

## Config

We are limited to only have five (5) overlays (altogether), and as such combine multiple components into a single overlay URL.
If you want to only use one component that's in an overlay with another, [see how to separate merged components in our docs page](./separate-merged-components).

Likewise, while most of our components are greyscale to avoid branding problems, some components may have blue as part of
their UI colors. To learn why and how to change these colors to match your branding, [read through our docs page on changing overlay colors](./colors)

## Quick Reference

| Overlay Name    | Docs Page         | Overlay URL                                                  |
| --------------- | ----------------- | ------------------------------------------------------------ |
| Goal Bar        | [Here](./goals)   | https://overlays.tiltify.com/jn3sPUC60ZOpUnmmCnFJdci6zYdmNMdt |
| Events          | [Here](./events)  | https://overlays.tiltify.com/ScKcHFK0JoDOb-azVY4WVHJO8ZZXjqWd |
| QR Code         | [Here](./qr-code) | https://overlays.tiltify.com/aLwA1-L2552igyBUNA-WR98xJNLW_mB_ |
| Compact Overlay | [Here](./compact) | https://overlays.tiltify.com/139juPCIOwS6q0Ugwzq53Opi7ITVuBd- |
| Total Overlay   | [Here](./total)   | https://overlays.tiltify.com/RXArz6PhxizEiUT34lEq-CV337_r4xC_ |
