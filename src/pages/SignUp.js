import React from "react";
import {
  Layout,
  Menu,
  Button,
  Typography,
  Card,
  Form,
  Input,
  Checkbox,
} from "antd";
import logo1 from "../assets/images/logos-facebook.svg";
import logo3 from "../assets/images/Google__G__Logo.svg.png";
import { useHistory } from "react-router-dom";
import { Radio } from "antd";

import { Link } from "react-router-dom";
const { Title } = Typography;
const { Header, Content } = Layout;

const SignUp = () => {
  const history = useHistory();
  const onFinish = (values) => {
    history.push("/sign-in");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="layout-default ant-layout layout-sign-up">
        <Header>
          <div className="header-col header-brand">
            <h5>Ekmattra</h5>
          </div>
        </Header>

        <Content className="p-0">
          <div className="sign-up-header">
            <div className="content">
              <Title>Child Sign Up</Title>
              <h2 className="text-lg">
                <div className="header-col header-nav">
                  <Menu mode="horizontal" defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                      <Link to="/">
                        <span> As Child</span>
                      </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                      <Link to="/sign-up-org">
                        <span>As Organization</span>
                      </Link>
                    </Menu.Item>
                  </Menu>
                </div>
              </h2>
            </div>
          </div>

          <Card
            className="card-signup header-solid h-full ant-card pt-0"
            title={<h5>Register With</h5>}
            bordered="false"
          >
            <div className="sign-up-gateways">
              <Button type="false">
                <img src={logo1} alt="logo 1" />
              </Button>
              <Button type="false">
                <img src={logo3} alt="logo 3" />
              </Button>
            </div>
            <p className="text-center my-25 font-semibold text-muted">Or</p>
            <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="row-col"
            >
              <Form.Item name="name">
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item name="age">
                <Input placeholder="AGE" />
              </Form.Item>
              <Form.Item name="sex">
                <Radio.Group>
                  <Radio value={1}>Male</Radio>
                  <Radio value={2}>Female</Radio>
                  <Radio value={3}>Other</Radio>
                </Radio.Group>{" "}
              </Form.Item>
              <Form.Item name="age">
                <Input.TextArea placeholder="Home Address" />
              </Form.Item>
              <Form.Item name="age">
                <Input.TextArea placeholder="Current Address" />
              </Form.Item>
              <Form.Item name="age">
                <Input.TextArea placeholder="Interestes" />
              </Form.Item>
              <Form.Item name="age">
                <Input.TextArea placeholder="Skills" />
              </Form.Item>
              <Form.Item name="age">
                <Input.TextArea placeholder="Experience Level" />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>
                  I agree the{" "}
                  <a href="#pablo" className="font-bold text-dark">
                    Terms and Conditions
                  </a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  style={{ width: "100%" }}
                  type="primary"
                  htmlType="submit"
                >
                  SIGN UP
                </Button>
              </Form.Item>
            </Form>
            <p className="font-semibold text-muted text-center">
              Already have an account?{" "}
              <Link to="/sign-in" className="font-bold text-dark">
                Sign In
              </Link>
            </p>
          </Card>
        </Content>
      </div>
    </>
  );
};

export default SignUp;
