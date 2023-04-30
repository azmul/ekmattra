
import {
    Row,
    Col,
    Card,
    Table,
    Progress,
    Avatar,
    Typography,
  } from "antd";
  
  import { Link } from "react-router-dom";
  
  // Images
  import ava1 from "../assets/images/logo-shopify.svg";
  import ava2 from "../assets/images/logo-atlassian.svg";
  import ava3 from "../assets/images/logo-slack.svg";
  import ava5 from "../assets/images/logo-jira.svg";
  import ava6 from "../assets/images/logo-invision.svg";
  import pencil from "../assets/images/pencil.svg";
  
  const { Title } = Typography;
  
  // project table start
  const project = [
    {
      title: "NAME",
      dataIndex: "name",
      width: "32%",
    },
    {
      title: "ADDRESS",
      dataIndex: "age",
    },
    {
      title: "CHILDRENS",
      dataIndex: "address",
    },
    {
      title: "COMPLETION",
      dataIndex: "completion",
    },
  ];
  const dataproject = [
    {
      key: "1",
  
      name: (
        <>
          <Avatar.Group>
            <Avatar className="shape-avatar" src={ava1} size={25} alt="" />
            <div className="avatar-info">
              <Title level={5}>Spotify</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      age: (
        <>
          <div className="semibold">Dhaka</div>
        </>
      ),
      address: (
        <>
          <div className="text-sm">400</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={13} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  
    {
      key: "2",
      name: (
        <>
          <Avatar.Group>
            <Avatar className="shape-avatar" src={ava2} size={25} alt="" />
            <div className="avatar-info">
              <Title level={5}>Progress Track</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      age: (
        <>
          <div className="semibold">Khulna</div>
        </>
      ),
      address: (
        <>
          <div className="text-sm">500</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={15} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  
    {
      key: "3",
      name: (
        <>
          <Avatar.Group>
            <Avatar className="shape-avatar" src={ava3} size={25} alt="" />
            <div className="avatar-info">
              <Title level={5}> Jira Platform</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      age: (
        <>
          <div className="semibold">Manikgong</div>
        </>
      ),
      address: (
        <>
          <div className="text-sm">100</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={3} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  
    {
      key: "4",
      name: (
        <>
          <Avatar.Group>
            <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
            <div className="avatar-info">
              <Title level={5}> Launch New</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      age: (
        <>
          <div className="semibold">Dhaka</div>
        </>
      ),
      address: (
        <>
          <div className="text-sm">1600</div>
        </>
      ),
      completion: (
            <>
          <div className="ant-progress-project">
            <Progress percent={40} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
        
      ),
    },
  
    {
      key: "5",
      name: (
        <>
          <Avatar.Group>
            <Avatar className="shape-avatar" src={ava5} size={25} alt="" />
            <div className="avatar-info">
              <Title level={5}>Web Dev</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      age: (
        <>
          <div className="semibold">Dhaka</div>
        </>
      ),
      address: (
        <>
          <div className="text-sm">800</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={17} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
          </div>
        </>
      ),
    },
  
    {
      key: "6",
      name: (
        <>
          <Avatar.Group>
            <Avatar className="shape-avatar" src={ava6} size={25} alt="" />
            <div className="avatar-info">
              <Title level={5}>Redesign</Title>
            </div>
          </Avatar.Group>
        </>
      ),
      age: (
        <>
          <div className="semibold">Jessore</div>
        </>
      ),
      address: (
        <>
          <div className="text-sm">900</div>
        </>
      ),
      completion: (
        <>
          <div className="ant-progress-project">
            <Progress percent={19} size="small" />
            <span>
              <Link to="/">
                <img src={pencil} alt="" />
              </Link>
            </span>
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
                title="Organization Table"
              >
                <div className="table-responsive">
                  <Table
                    columns={project}
                    dataSource={dataproject}
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
  