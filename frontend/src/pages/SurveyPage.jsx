import React from "react";
import SurveyForm from "../components/survey/SurveyForm";
import { Container } from "@mui/material";

function SurveyPage({ backendUrl }) {
  
  return (
    <Container maxWidth="xl" sx={{textAlign: "center" }}>
      <h1 style={{color:"white"}}>Classic Plus Survey</h1>
      <SurveyForm backendUrl={backendUrl} />
    </Container>
  );
}

export default SurveyPage;
