import React from 'react'

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './Home.css'
import ld from '../../assets/logos/ld.jpg';
import git from '../../assets/logos/git.jpg';
import twitter from '../../assets/logos/twitter.jpg';
import { SideNavList } from './SideNavList';
import { Link,Switch,Route } from "react-router-dom";
import Introduction from '../Pages/Intro/Introduction'
import HomePage from '../Pages/HomePage'

const Home = () => {

    const { Header, Footer, Sider, Content } = Layout;
    return (
        <Layout>
          <Header>React Tutorial</Header>
          <Layout>
            <Sider>{SideNavList.map((item,key)=><Link to={item.path}><li className="side-nav-items" key={key}>{item.name}</li></Link>)}</Sider>
            <Content>
                <Switch>
                    <Route path='/' exact component={HomePage}/>
                    <Route path='/introduction' component={Introduction}/>
                </Switch>
            </Content>
          </Layout>
          <Footer>
              <span className="footer-content"><a href="https://www.linkedin.com/in/srikanth-marrapu-0baa66111/"><img src={ld} alt='linkedin'/></a></span>
              <span className="footer-content"><a href="https://github.com/sri2307"><img src={git} alt='github'/></a></span>
              <span className="footer-content"><a href="https://twitter.com/srikanthsri2307"><img src={twitter} alt='twitter'/></a></span>
              <span className="footer-content">Designed by Srikanth</span>
          </Footer>
        </Layout>
    )
}

export default Home
