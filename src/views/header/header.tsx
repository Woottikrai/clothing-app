import { Avatar, Dropdown, Menu, MenuProps, Row, Typography } from 'antd';
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const signout = () => {
        localStorage.clear();
        navigate("/login");
        window.location.reload();
    };
    const showModal = () => {
        // if (!getData) return;
        // modalProfile.setFieldsValue({
        //   firstname: getData.firstName,
        //   lastname: getData.lastName,
        //   position: getAllPosition
        //     ?.filter((e) => e.id === getData.positionId)
        //     .map((e) => e.position)
        //     .join(),
        //   ...getData,
        // });
        setIsModalOpen(true);
    };

    const items: MenuProps["items"] = [
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

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-end justify-between p-6 lg:px-8" aria-label="Global">
                <div className="ml-auto">
                    <Dropdown menu={{ items }}
                        placement="bottomRight"
                        trigger={["hover"]}>
                        <Avatar size={40} icon={<UserOutlined />} />
                    </Dropdown>
                </div>
            </nav>
        </header>
    );
}
