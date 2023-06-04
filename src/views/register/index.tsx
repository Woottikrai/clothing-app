// import React, { useState } from "react";
// import { Form, Input, Button } from "antd";
// import { authenApi } from "../../service/api/authen/authen";
// import { useNavigate } from "react-router-dom";

// import { ISignin } from "../../interface/IUser";
// import { openNotification } from "../../notifications";

// const Login: React.FC = () => {
//     const navigate = useNavigate();
//     const [password, setPassword] = React.useState<string>();
//     const [email, setEmail] = React.useState<string>();

//     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     };

//     const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setPassword(e.target.value);
//     };

//     const onFinish = (value: ISignin) => {
//         authenApi
//             .signin({
//                 email: value.email,
//                 password: value.password,
//             })
//             .then((res) => {
//                 localStorage.setItem("token", res.accessToken);
//                 openNotification({ type: "success", title: "success" });
//             })
//             .catch((err) => {
//                 openNotification({ type: "error", title: "wrong email or password!" });
//             })
//             .finally(() => {
//                 navigate("/addproduct");
//             });
//     };

//     return (
//         <div className="w-64 mx-auto mt-8">
//             <Form onFinish={onFinish}>
//                 <Form.Item label="อีเมล">
//                     <Input type="email" value={email} onChange={handleEmailChange} />
//                 </Form.Item>
//                 <Form.Item label="รหัสผ่าน">
//                     <Input.Password value={password} onChange={handlePasswordChange} />
//                 </Form.Item>
//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">
//                         เข้าสู่ระบบ
//                     </Button>
//                 </Form.Item>
//             </Form>
//         </div>
//     );
// };

// export default Login;
