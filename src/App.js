import logo from './logo.svg';
import './App.css';
import 'antd/dist/reset.css';
import { Button } from 'antd';
import { InstagramOutlined, PhoneOutlined, WhatsAppOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="container-main">
        <div className="container zeeshan">
          <div className="image zeeshan-img"></div>
          <div className="name">Zeeshan</div>
          <div className="contact">
            <a href="https://wa.me/7247506649?text=Hi" target="_blank">
              <Button icon={<WhatsAppOutlined />}>Whatsapp</Button>
            </a>
            <a href="https://www.instagram.com/its_zeeshan_khan/" target="_blank">
              <Button icon={<InstagramOutlined />}>Instagram</Button>
            </a>
          </div>
        </div>
        <div className="container siddhant">
          <div className="image siddhant-img"></div>
            <div className="name">Siddhant</div>
            <div className="contact">
              <a href="https://wa.me/9140566549?text=Hi" target="_blank">
                <Button icon={<WhatsAppOutlined />}>Whatsapp</Button>
              </a>
              <a href="https://www.instagram.com/soulwithbody_/" target="_blank">
                <Button icon={<InstagramOutlined />}>Instagram</Button>
              </a>
            </div>
          </div>
        <div className="container himanshu">
          <div className="image himanshu-img"></div>
            <div className="name">Himanshu</div>
            <div className="contact">
              <a href="https://wa.me/7393888769?text=Hi" target="_blank">
                <Button icon={<WhatsAppOutlined />}>Whatsapp</Button>
              </a>
              <a href="https://www.instagram.com/_sidd_____/" target="_blank">
                <Button icon={<InstagramOutlined />}>Instagram</Button>
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
