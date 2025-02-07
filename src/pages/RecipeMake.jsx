import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as R from "../styles/StyledRM";
// import axios from "axios";

const RecipeMaker = () => {
  const navigate = useNavigate();
  return (
    <R.Container>
      <R.Title>
        <div id="name">레시피 메이커</div>
      </R.Title>
      <R.Content>
        <R.Box>
          <R.Type>
            <input
              id="puttype"
              type="text"
              placeholder="요리 종류를 입력하세요."
            />
          </R.Type>
          <R.Time></R.Time>
          <R.Level></R.Level>
          <R.Taste></R.Taste>
          <R.Spicy></R.Spicy>
        </R.Box>
        <R.Go>
          <div id="go">커스텀 레시피 보기</div>
        </R.Go>
      </R.Content>
      <R.Nav></R.Nav>
    </R.Container>
  );
};

export default RecipeMaker;
