import React from "react";
import { Row, Col, Button } from "reactstrap";
import ComponentCard from "../components/ComponentCard";

function Tmp() {
  return (
    <Row>
      <Col>
        <ComponentCard
          title="⚒️공사중입니다😅"
          subtitle={<p>페이지를 완성할때까지 조금만 기다려주세요!💕</p>}
        >
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
export default Tmp;
