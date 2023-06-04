import React, { useState } from "react";
import { Form, Input, Button, Col, Row, Typography } from "antd";
import { authenApi } from "../../service/api/authen/authen";
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { ISignin } from "../../interface/IUser";
import { openNotification } from "../../notifications";
import calendar from "antd/es/calendar";

const Signin: React.FC = () => {
    const navigate = useNavigate();
    const [password, setPassword] = React.useState<string>();
    const [email, setEmail] = React.useState<string>();
    const [error, setError] = React.useState<boolean>(false);
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onFinish = (value: ISignin) => {
        authenApi
            .signin({
                email: value.email,
                password: value.password,
            })
            .then((res) => {
                localStorage.setItem("token", res.accessToken);
                openNotification({ type: "success", title: "success" });
            })
            .catch((err) => {
                openNotification({ type: "error", title: "wrong email or password!" });
            })
            .finally(() => {
                navigate("/addproduct");
            });
    };
    const onFinishFailed = () => { };
    return (
        <Row justify="center" align="middle" style={{ minHeight: "100vh" }}>
            <Col span={6}>
                <div className="center">
                    <img
                        // src={calendar}
                        alt="image-logo"
                        className="w-16 h-16 object-cover"
                    />
                </div>
                <Typography.Title level={5} style={{ color: "#ffffff" }}>
                    เข้าสู่ระบบบัญชีของคุณเพื่อดำเนินการต่อ
                </Typography.Title>
                <Form
                    name="login"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    size="large"
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                type: "email",
                                required: true,
                                message: "Please input your Email!",
                            },
                        ]}
                        className="input-signin"
                    >
                        <Input placeholder="Email" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "Please input your password!" }]}
                        className="input-signin"
                    >
                        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full">
                            เข้าสู่ระบบ
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default Signin;
