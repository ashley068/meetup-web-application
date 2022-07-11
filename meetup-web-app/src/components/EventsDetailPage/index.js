import { useParams } from "react-router-dom";
// import { connect } from "react-redux";
import { Col, Row } from "antd";
import EventContent from "./EventContent";
import EventInfo from "./EventInfo";

// const mapStateToProps = (state) => ({ eventItems: state.eventLists.items });
const EventsDetail = ({ eventItems }) => {
  const { eventId } = useParams();

  return (
    <>
      <Row>
        <Col span={14}>
          <EventContent />
        </Col>
        <Col span={9} offset={1}>
          <EventInfo />
        </Col>
      </Row>
    </>
  );
};

export default EventsDetail;
