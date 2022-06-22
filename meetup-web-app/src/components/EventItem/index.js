import React from "react";
import { List, Avatar } from "antd";
import { StarOutlined, MessageOutlined } from "@ant-design/icons";

const listData = [];
for (let i = 0; i < 6; i++) {
  listData.push({
    href: "http://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const IconText = ({ type, text }) => (
  <span>
    {
      {
        StarOutlined: <StarOutlined style={{ marginRight: 8 }} />,
        MessageOutlined: <MessageOutlined style={{ marginRight: 8 }} />,
      }[type]
    }
    {text}
  </span>
);

const EventItem = () => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
      }}
      dataSource={listData}
      renderItem={(item) => (
        <List.Item
          key={item.title}
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
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  );
};

export default EventItem;
