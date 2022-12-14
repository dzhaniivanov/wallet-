import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { colors } from "./colors";

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${colors.white};
`;

export default Container;

export const ScreenWidth = Dimensions.get("screen").width;
 export const ScreenHeight = Dimensions.get("screen").height;
