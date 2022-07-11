import { useEffect } from "react";
import { connect } from "react-redux";
import { List, Avatar } from "antd";
import { StarOutlined, MessageOutlined, TagOutlined } from "@ant-design/icons";
import { eventsListActions } from "../../store/events/actions";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => ({ eventItems: state.eventLists.items });
const mapDispatchToProps = {
  eventDataFetched: eventsListActions.eventDataFetched,
};

const IconText = ({ type, text }) => (
  <span>
    {
      {
        StarOutlined: <StarOutlined style={{ marginRight: 8 }} />,
        MessageOutlined: <MessageOutlined style={{ marginRight: 8 }} />,
        TagOutlined: <TagOutlined style={{ marginRight: 8 }} />,
      }[type]
    }
    {text}
  </span>
);

const EventList = ({ eventItems, eventDataFetched }) => {
  useEffect(() => {
    eventDataFetched();
  }, []);
  return (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={eventItems}
        renderItem={(item) => (
          <Link to={`/events/${item.id}`}>
            <List.Item
              key={item.id}
              actions={[
                <IconText
                  type="StarOutlined"
                  text="156"
                  key="list-vertical-star-o"
                />,
                <IconText
                  type="MessageOutlined"
                  text="2"
                  key="list-vertical-message"
                />,
                <IconText
                  type="TagOutlined"
                  text={item.category}
                  key="list-vertical-tag"
                />,
              ]}
              extra={<img width={312} alt="logo" src={item.picture_url} />}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.host.profile_picture_url} />}
                title={item.title}
                // {`/events/${item.id}`}
              />
              {item.description}
            </List.Item>
          </Link>
        )}
      />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
