import { BackgroundColor } from "./BackgroundColor";
import { TextColor } from "./TextColor";
import { ColorIntensity } from "./ColorIntensity";

export class MaterializeColor {
    private color: (BackgroundColor | TextColor)
    private intensity?: ColorIntensity

    constructor(
        color?: (BackgroundColor | TextColor),
        intensity?: ColorIntensity
    ) {
        this.color = color || BackgroundColor.Default;
        this.intensity = intensity || ColorIntensity.Default;
    }

    public toString() {
        return `${this.color} ${this.intensity}`
    }
}