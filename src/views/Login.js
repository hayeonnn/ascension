import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Button } from "reactstrap";
import ComponentCard from "../components/ComponentCard";
import { loginUser } from "../actions/user_action";

function Login() {
  const dispatch = useDispatch();

  const [ID, setID] = useState("");
  const [Password, setPassword] = useState("");

  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    //event.preventDefault();

    console.log("id", ID);
    console.log("pw", Password);

    let body = {
      id: ID,
      password: Password,
    };

    dispatch(loginUser(body));
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
            //onSubmit={onSubmitHandler}
          >
            <label>ID</label>

            <input
              type="text"
              //value={ID}
              //onChange={onIDHandler}
            />
            <label>Password</label>
            <input
              type="password"
              //value={Password}
              //onChange={onPasswordHandler}
            />
            <br />
            <button formAction="">로그인</button>
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
export default Login;
