import { FunctionComponent } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Container from "../components/shared";
import { colors } from "../components/colors";
import background from "./../assets/bgs/background_v1.png";
import BigText from "../components/Texts/BigText";
import SmallText from "../components/Texts/SmallText";
import RegularButton from "../components/Buttons/RegularButton";

//custom components

const WelcomeContainer = styled(Container)`
  background-color: ${colors.secondary};
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: stretch;
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
`;

const Welcome: FunctionComponent = () => {
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={background} />
        </TopSection>
        <BottomSection>
          <BigText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best way to track your money
          </BigText>
          <SmallText textStyles={{ width: "70%", marginBottom: 25 }}>
            Best payment method,connects your money to friends,family.
          </SmallText>
          <RegularButton onPress={()=>{}}>Get Started</RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
