import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Title } from "../components/Title";
import { MemberCard } from "../components/MemberCard";

export const DetailPage: React.FC = () => {
  return (
    <>
      <Grid2
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
        <Title>User Detail</Title>

        <MemberCard />
      </Grid2>
    </>
  );
};
