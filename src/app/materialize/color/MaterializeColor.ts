import { BackgroundColor } from "./BackgroundColor";
import { TextColor } from "./TextColor";
import { ColorIntensity } from "./ColorIntensity";

export interface MaterializeColor {
    color: (BackgroundColor | TextColor),
    intensity?: ColorIntensity
}