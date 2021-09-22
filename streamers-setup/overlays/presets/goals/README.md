# Goals Components

> Overlay URL:  [https://overlays.tiltify.com/jn3sPUC60ZOpUnmmCnFJdci6zYdmNMdt](https://overlays.tiltify.com/jn3sPUC60ZOpUnmmCnFJdci6zYdmNMdt)

## Components Preview

**Progress Bar**:

![A progress bar showing the donation goal and current amount, without text](./goals_overlay_preview.png)

**Dynamic Text**:

![Text reading "Amount raised: $300"](./goals_text_overlay_preview.png)

## Included Components


| Name | Description | Crop Left | Crop Right | Crop Top | Crop Bottom |
| --- | --- | --- | --- | --- | --- |
| Progress Bar | Text on left is amount donated. Amount on right is goal. Suggested to manually add OBS text above each to distinguish | 0 | 1120 | 0 | 950 |
| Dynamic Text | Displays amount raised. Updated live | 1475 | 0 | 975 | 0 |

> [Learn how to use this chart with our docs page](/streamers-setup/overlays/separate-merged-components/)

## Configuration

The progress bar component is one of the few that uses colors other than greyscale. As such, if your brand doesn't use the default blue color, [you can change it by following our docs page](/streamers-setup/overlays/colors/)

## Implementation Notes

We would love to have default text for amount of money fundraised and goal for the progress component. Unfortunately, we cannot due to limitations with Tiltify.

The reason for the extra space in the "Dynamic text" component is to support large donation amounts raised. Make sure to leave that space when you add to your overlay!
