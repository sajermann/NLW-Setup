import { View, TouchableOpacity, Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import Logo from "../assets/logo.svg";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;
export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  Dimensions.get("screen").width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5);

export function HabitDay() {
  return (
    <TouchableOpacity
      className="bg-zinc-900 rounded-lg border-2 border-zinc-800 m-1"
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      activeOpacity={0.7}
    />
  );
}
