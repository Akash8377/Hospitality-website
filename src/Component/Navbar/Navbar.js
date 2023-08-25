import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {MobileOutlined,WechatOutlined,UsergroupDeleteOutlined} from '@ant-design/icons';
// import { useAppContext } from '@/context/appContext';


import {

  
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
 
  
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

export default function Navbar() {


  return (
    <>
    <div className='navbarCheck'>
      <Sider  className="Navbar">
        <div className="logo">
          <img
            src="./Image/9.png"
            alt="Logo"
            height="116"
            width="106"
             
          />
        </div>
        <Menu mode="inline">
          <Menu.Item key={'FindWork'} icon={<DashboardOutlined />}>
            <Link to={'/'} />
            Find Work
          </Menu.Item>
          <Menu.Item key={'Customer'} icon={<CustomerServiceOutlined />}>
            <Link to={'/customer'} />
            Find Talented
          </Menu.Item>
          <Menu.Item key={'Invoice'} icon={<FileTextOutlined />}>
            <Link to={'/invoice'} />
            Freelancing
          </Menu.Item>
          <Menu.Item key={'Quote'} icon={<FileSyncOutlined />}>
            <Link to={'/quote'} />
            School For<br/>Bartending
          </Menu.Item>
          
          
        </Menu>
      </Sider>
      </div>
    </>
  );
}
