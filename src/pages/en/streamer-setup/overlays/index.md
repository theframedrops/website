---
title: Overlays
description: Tiltify helps us provide a set of overlays that participating streamers can use to easily track donations.
layout: '@/layouts/MainLayout.astro'
---

Tiltify helps us provide a set of overlays that participating streamers can use to easily track donations on.

This is done by using OBS's Browser Source and a URL associated with each overlay. As such, they can be configured
differently on a per-scene basis and combined with things like filters.

> Not sure how to add an OBS Browser Source? Check [our docs page on how to add a browser source to your scene](/en/streamer-setup/overlays/add-to-scene/)

We provide two different sets of overlays.

There are "Pre-fab" overlays, which act as all-in-one overlays: useful for streamers with minimal/no custom overlay, or simply
want to do as little tweaking as possible.

Pre-fab Overlays:

- [Total Package Overlay](/en/streamer-setup/overlays/presets/total/)
- [Compact Overlay Bar](/en/streamer-setup/overlays/presets/compact/)

However, for streamers with extremely custom overlays that really want to fine-tune their overlays, we provide individual
components to use in existing overlays.

Component Overlays:

- [Goal Indicators](/en/streamer-setup/overlays/presets/goals/)
- [Event Displays](/en/streamer-setup/overlays/presets/events/)
- [QR Code](/en/streamer-setup/overlays/presets/qr-code/)

## Config

We are limited to only have five (5) overlays (altogether), and as such combine multiple components into a single overlay URL.
If you want to only use one component that's in an overlay with another, [see how to separate merged components in our docs page](/en/streamer-setup/overlays/separate-merged-components/).

Likewise, while most of our components are greyscale to avoid branding problems, some components may have blue as part of
their UI colors. To learn why and how to change these colors to match your branding, [read through our docs page on changing overlay colors](/en/streamer-setup/overlays/colors/)

## Quick Reference

| Overlay Name    | Docs Page         | Overlay URL                                                                                                                    |
| --------------- | ----------------- |--------------------------------------------------------------------------------------------------------------------------------|
| Goal Bar        | [Here](/en/streamer-setup/overlays/presets/goals/)   | [https://overlays.tiltify.com/nNCvD3F8Y4zZuU4L6tOYXWNcKAWneaSc](https://overlays.tiltify.com/nNCvD3F8Y4zZuU4L6tOYXWNcKAWneaSc) |
| Events          | [Here](/en/streamer-setup/overlays/presets/events/)  | [https://overlays.tiltify.com/PRr9IgEWF5LxRLGEz-nKmbpGg8fETOC0](https://overlays.tiltify.com/PRr9IgEWF5LxRLGEz-nKmbpGg8fETOC0) |
| QR Code         | [Here](/en/streamer-setup/overlays/presets/qr-code/) | [https://overlays.tiltify.com/8m7Xsk_lC7PXtuc9O-ST00Jf8Si_a7nr](https://overlays.tiltify.com/8m7Xsk_lC7PXtuc9O-ST00Jf8Si_a7nr) |
| Compact Overlay | [Here](/en/streamer-setup/overlays/presets/compact/) | [https://overlays.tiltify.com/BX77aXnYmTvYr-bDDXyKTWojwxSqjRcS](https://overlays.tiltify.com/BX77aXnYmTvYr-bDDXyKTWojwxSqjRcS) |
| Total Overlay   | [Here](/en/streamer-setup/overlays/presets/total/)   | [https://overlays.tiltify.com/BOBbt48cTpyO360wb54NgYK2Zq57b0J3](https://overlays.tiltify.com/BOBbt48cTpyO360wb54NgYK2Zq57b0J3) |
