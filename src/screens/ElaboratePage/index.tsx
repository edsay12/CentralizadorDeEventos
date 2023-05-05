import React from "react";
import { Banner } from "../../components/Banner";
import { Card } from "../../components/Card";
import { CardList } from "../../components/CardList";
import { Container } from "../../components/Container";
import { BottomRoute } from "../../router";

export const ElaboratePage = () => {
  return (
    <Container align="center" justify="center">
      <Banner />
      <CardList />
    </Container>
  );
};
