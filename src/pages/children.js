
import {
    Row,
    Col,
    Card,
    Table,
    Button,
    Avatar,
    Typography,
  } from "antd";

  // Images
  import face from "../assets/images/face-1.jpg";
  import face2 from "../assets/images/face-2.jpg";
  import face3 from "../assets/images/face-3.jpg";
  import face4 from "../assets/images/face-4.jpg";
  import face5 from "../assets/images/face-5.jpeg";
  import face6 from "../assets/images/face-6.jpeg";
  
  const { Title } = Typography;
  

  // table code start
  const columns = [
    {
      title: "NAME/AGE",
      dataIndex: "name",
      key: "name",
      width: "32%",
    },
    {
      title: "ADDRESS",
      dataIndex: "function",
      key: "function",
    },
    {
        title: "GENDER",
        dataIndex: "sex",
        key: "sex",
      },
    {
      title: "HANDOVER STATUS",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "REGISTERED",
      key: "employed",
      dataIndex: "employed",
    },
  ];
  
  const data = [
    {
      key: "1",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face2}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Manav</Title>
              <p>6 Years</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      sex: (
        <div className="ant-employed">
        <span>Male</span>
      </div>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Dhaka</Title>
            <p>Malibagh</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button type="primary" className="tag-primary">
            YES
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/04/23</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  
    {
      key: "2",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face3}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Hafsah</Title>
              <p>7 Years</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      sex: (
        <div className="ant-employed">
        <span>Female</span>
      </div>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Khulna</Title>
            <p>Tutpara</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button className="tag-badge">NO</Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/12/20</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  
    {
      key: "3",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Aarohi</Title>
              <p>9 Years</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      sex: (
        <div className="ant-employed">
        <span>Female</span>
      </div>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Dhaka</Title>
            <p>Mirpur 12</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button type="primary" className="tag-primary">
            YES
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>03/04/21</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
    {
      key: "4",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face4}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Richard</Title>
              <p>10 Years</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      sex: (
        <div className="ant-employed">
        <span>Male</span>
      </div>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>MunsiGong</Title>
            <p>Manikpur</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button type="primary" className="tag-primary">
            YES
          </Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>03/04/21</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
    {
      key: "5",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face5}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Miriam</Title>
              <p>8 Years</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      sex: (
        <div className="ant-employed">
        <span>Female</span>
      </div>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Dhaka</Title>
            <p>Uttara</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button className="tag-badge">NO</Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>23/03/20</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  
    {
      key: "6",
      name: (
        <>
          <Avatar.Group>
            <Avatar
              className="shape-avatar"
              shape="square"
              size={40}
              src={face6}
            ></Avatar>
            <div className="avatar-info">
              <Title level={5}>Tariq</Title>
              <p>11 Years</p>
            </div>
          </Avatar.Group>{" "}
        </>
      ),
      sex: (
        <div className="ant-employed">
        <span>Male</span>
      </div>
      ),
      function: (
        <>
          <div className="author-info">
            <Title level={5}>Pabna</Title>
            <p>Nurpur</p>
          </div>
        </>
      ),
  
      status: (
        <>
          <Button className="tag-badge">NO</Button>
        </>
      ),
      employed: (
        <>
          <div className="ant-employed">
            <span>14/04/23</span>
            <a href="#pablo">Edit</a>
          </div>
        </>
      ),
    },
  ];

  function Tables() {  
    return (
      <>
        <div className="tabled">
          <Row gutter={[24, 0]}>
            <Col xs="24" xl={24}>
              <Card
                bordered={false}
                className="criclebox tablespace mb-24"
                title="Childrens Table"
              >
                <div className="table-responsive">
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    className="ant-border-space"
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
  
  export default Tables;
  