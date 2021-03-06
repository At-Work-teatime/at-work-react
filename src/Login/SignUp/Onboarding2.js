import React from "react";
import "../../css/screen.css";
// import imgA from '../../css/source/img1.png';
// import { getTargetUrl }from './util'
import imgB from "../../css/source/img2.png";
import {Link} from 'react-router-dom'
import {Title, SubTitle,FloatingBtn, TextBtn} from "../../style/style";
import { getTargetUrl }from './util'


function SignUp({ history,match }) {
  return (
    <div className="none">
      <div className="img">
        <img src={imgB} width="327px" alt="illustration" />
      </div>
      <Title>
        어떤 대화를 해야할지 막막한가요?
      </Title>
      <SubTitle>
        atwork는 회사사람들이 친해지는 그날까지 함께합니다.
      </SubTitle>
      <FloatingBtn
        onClick={() => history.push(getTargetUrl(match.path))} />
      <TextBtn>
        <Link to = "../SignUp/InputEmail">건너뛰기</Link>
      </TextBtn>
    </div>
  );
}

export default SignUp;
