import React from "react";
import { View, Text } from "react-native";
import { FunctionComponent } from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import Container from "../components/shared";
import { colors } from "../components/colors";
import CardSection from "../components/Cards/CardSection";
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";

const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "32323255223",
      balance: 2000.15,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "6546342424",
      balance: 12000.34,
      alias: "Personal Prepaid",
      logo: logo1,
    },
    {
      id: 3,
      accountNo: "765324533",
      balance: 5232.88,
      alias: "School Prepaid",
      logo: logo2,
    },
  ];

  const transactionData = [
    {
      id: 1,
      amount: "-86.00",
      date: "20 Jul 2022",
      title: "Taxi",
      subtitle: "Uber car",
      art: {
        background: colors.primary,
        icon: "car",
      },
    },
    {
      id: 2,
      amount: "-325.00",
      date: "01 Aug 2022",
      title: "Shopping",
      subtitle: "Ali express",
      art: {
        background: colors.tertiary,
        icon: "cart",
      },
    },
    {
      id: 3,
      amount: "-850.00",
      date: "05 Aug 2022",
      title: "Travel",
      subtitle: "Emirates",
      art: {
        background: colors.accent,
        icon: "airplane",
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "2326.22",
      name: "Coby Andoh",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      amount: "4322.00",
      name: "harleen Scot",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      amount: "258.98",
      name: "James Corbyn",
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
