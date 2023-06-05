import { Avatar, Dropdown, Form, Menu, MenuProps, Modal, Row, Typography } from 'antd';
import { LogoutOutlined, UserOutlined, ProfileOutlined, CloseCircleOutlined } from "@ant-design/icons";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { userApi } from '../../service/api/user/user.axios';
import authenApi from '../../service/api/authen/authen';
import { IProfile } from '../../interface/IUser';

export default function Header() {
    const navigate = useNavigate();
    const [modalProfile] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const [getData, setData] = React.useState({} as Partial<IProfile>);
    const { data: getProfile } = authenApi.UseGetProfile();
    const [editPass, setEditpass] = React.useState(false);
    const signout = () => {
        localStorage.clear();
        navigate("/login");
        window.location.reload();
    };

    console.log("Profile", getData);

    const showModal = () => {
        if (!getData) return;
        modalProfile.setFieldsValue({
            name: getData.name,
            ...getData,
        });
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEditpass(false);
    };

    const onFinishModal = (values: any) => {
        setEditpass(false);
        setIsModalOpen(false);
    };

    const items: MenuProps["items"] = [
        {
            key: "profile",
            className: "profile",
            label: (
                <Row className="center">
                    <Typography.Text onClick={showModal}><ProfileOutlined /> โปรไฟล์</Typography.Text>
                </Row>
            ),
        },
        {
            key: "signout",
            className: "signout",
            label: (
                <Row className="center">
                    <Typography.Text onClick={signout}><LogoutOutlined /> ออกจากระบบ</Typography.Text>
                </Row>
            ),
        },

    ];

    React.useEffect(() => {
        (async () => {
            const res = await authenApi.getProfile().then((res) => {
                setData({
                    ...res,

                });
            });
        })();
    }, [isModalOpen]);



    return (
        <header className="bg-white">
            <Modal centered
                style={{ top: -30 }}
                width="60%"
                title="Profile"
                okText="Save Changes"
                cancelText="Cancel"
                open={isModalOpen}
                // onOk={() => modalProfile.submit()}
                onCancel={handleCancel}
                closeIcon={<CloseCircleOutlined />}
            >
                <Form layout="vertical" form={modalProfile} onFinish={onFinishModal}>

                </Form>



            </Modal>
            <nav className="mx-auto flex max-w-7xl items-end justify-between p-6 lg:px-8" aria-label="Global">
                <div className="ml-auto">
                    <Dropdown menu={{ items }}
                        placement="bottomRight"
                        trigger={["hover"]}>
                        <Avatar src={getData.img} size={40} icon={<UserOutlined />} />
                    </Dropdown>

                </div>
            </nav>
        </header>

    );
}
