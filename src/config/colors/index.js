import { processColor } from "react-native";

const Colors = {
    WhiteOpacity: (opacity = "0.5") => `rgba(255, 255, 255, ${opacity})`,
    BlackOpacity: (opacity = "0.5") => `rgba(0, 0, 0, ${opacity})`,
    PlaceHolder: (opacity = "0.5") => `rgba(63, 63, 65, ${opacity})`,
    Transparent: "transparent",
    PrimaryGreen: "#58BA27",
    SecondaryGreen: "#3D801C",
    Purple: "#7787FF",
    Red: "#FF494C",
    Blue:"#154D94",
    LightBlue:"#7787FF",
    Orange:"#FFA500",
    Black: "#1E1E22",
    White: "#ffffff",
    Shadow: "#3570AB12",
    WhiteText: "#F5F5F5",
    Text: "#40514E",
    TextColorOpacity: (opacity = 0.15) => `rgba(64, 81, 78, ${opacity})`,
    Danger: "#FF494C",
    ChartColors: [
        processColor("#003F5C"),
        processColor("#2F4B7C"),
        processColor("#665191"),
        processColor("#A05195"),
        processColor("#D45087"),
        processColor("#F95D6A"),
        processColor("#FF7C43"),
        processColor("#FFA600"),
        processColor("#47ACB1"),
        processColor("#F26522"),
        processColor("#542923"),
        processColor("#286C4F"),
        processColor("#96247A"),
        processColor("#FFCD34"),
        processColor("#3D0053"),
        processColor("#4F209C"),
    ]
}

export default Colors;