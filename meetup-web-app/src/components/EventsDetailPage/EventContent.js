import { Card, Divider, Typography, Image, Col, Row, Avatar } from "antd";
import { StarOutlined, UserOutlined } from "@ant-design/icons";
import "./event.css";

const { Title, Text } = Typography;

const EventContent = () => {
  return (
    <>
      <Card>
        <Title level={3}>Evnent Title</Title>
        <Row>
          <Col span={3}>
            <Text>category</Text>
          </Col>
          <Col span={2} offset={19}>
            <span>
              <StarOutlined /> 4.5
            </span>
          </Col>
        </Row>

        <Image
          className="eventImage"
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <Row>
          <Text>description</Text>
        </Row>
        <Divider />
        <Row align="middle">
          <Avatar
            size={{
              xs: 24,
              sm: 32,
              md: 40,
              lg: 54,
              xl: 60,
              xxl: 60,
            }}
            icon={<UserOutlined />}
          />
          <Text style={{ marginLeft: 10 }}> Host Name: XXXX</Text>
        </Row>
        <Card style={{ borderRadius: 10, marginTop: 25 }}>
          <Text>Who's coming?</Text>
          <Row style={{ marginTop: 15 }}>
            <Avatar.Group
              maxCount={5}
              maxPopoverTrigger="click"
              size="large"
              maxStyle={{
                color: "#f56a00",
                backgroundColor: "#fde3cf",
                cursor: "pointer",
              }}
            >
              <Avatar
                style={{ marginRight: 15 }}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                  marginRight: 15,
                }}
              >
                K
              </Avatar>
              <Avatar
                style={{
                  backgroundColor: "grey",
                  marginRight: 15,
                }}
              >
                Q
              </Avatar>
              <Avatar
                style={{
                  backgroundColor: "BLUE",
                  marginRight: 15,
                }}
              >
                M
              </Avatar>
              <Avatar
                style={{
                  backgroundColor: "BLACK",
                  marginRight: 15,
                }}
              >
                L
              </Avatar>
            </Avatar.Group>
          </Row>
        </Card>
      </Card>
    </>
  );
};

export default EventContent;
