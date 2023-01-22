import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button } from "reactstrap";
import ComponentCard from "../components/ComponentCard";
import { registerUser } from "../actions/user_action";
//import axios from "axios";

function Join(props) {
  const dispatch = useDispatch();

  const [Usercode, setUsercode] = useState("");
  const [Name, setName] = useState("");
  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPw, setConfirmPw] = useState("");
  const [Userlevel, setUserlevel] = useState("");

  const onUsercodeHandler = (event) => {
    setUsercode(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };
  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onConfirmPwHandler = (event) => {
    setConfirmPw(event.currentTarget.value);
  };
  const onUserlevelHandler = (event) => {
    setUserlevel(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (Password !== ConfirmPw) {
      return alert("비밀번호와 비밀번호 확인이 같지 않습니다.");
    }

    let body = {
      usercode: Usercode,
      name: Name,
      id: ID,
      password: Password,
      confirmPassword: ConfirmPw,
      level: Userlevel,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/Login");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <Row>
      <Col>
        <ComponentCard
          title="⚒️공사중입니다😅"
          subtitle={<p>페이지를 완성할때까지 조금만 기다려주세요!💕</p>}
        >
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={onSubmitHandler}
          >
            <label>유저코드</label>
            <input type="text" value={Usercode} onChange={onUsercodeHandler} />
            <label>ID</label>
            <input type="text" value={ID} onChange={onIDHandler} />
            <label>Password</label>
            <input
              type="password"
              value={Password}
              onChange={onPasswordHandler}
            />
            <label>Confirm Password</label>
            <input
              type="password"
              value={ConfirmPw}
              onChange={onConfirmPwHandler}
            />
            <label>닉네임</label>
            <input type="text" value={Name} onChange={onNameHandler} />
            <label>유저레벨</label>
            <input
              type="text"
              value={Userlevel}
              onChange={onUserlevelHandler}
            />
            <br />
            <button formAction="">회원가입</button>
          </form>
          <Row>
            <Col lg="8">
              <div className="mt-3">
                <Button color="primary" href="/" tag="a">
                  home
                </Button>
              </div>
            </Col>
          </Row>
        </ComponentCard>
      </Col>
    </Row>
  );
}
export default Join;
