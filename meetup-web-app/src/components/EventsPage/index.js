import React from "react";
import EventItem from "../EventItem";
import CalendarItem from "../Calendar";
import { Col, Row } from "antd";

const Events = () => {
  return (
    <>
      <Row>
        <Col span={15}>
          <EventItem />
        </Col>
        <Col span={8} offset={1}>
          <CalendarItem />
        </Col>
      </Row>
    </>
  );
};

export default Events;
