import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./BerandaUser.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const BerandaUser = ({ globalState }) => {
  const { login, setLogin } = globalState;
  const navigate = useNavigate();

  const onMENUTextClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onPAKETFCTextClick = useCallback(() => {
    navigate("/paket-fc");
  }, [navigate]);

  const onKONTAKTextClick = useCallback(() => {
    navigate("/kontak-1")
  }, [navigate]);

  const onLogOutClick = useCallback(() => {
    setLogin(false);
    setOpen(false)
    navigate("/")
  }, [navigate]);

  const onLoginClick = useCallback(() => {
    navigate("/login-admin-1")
  }, [navigate]);

  //Modal Basic
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fbe18a',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '26px',
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="beranda-user">
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography style={{ textAlign:"center",fontFamily:"Luckiest Guy",color:"#4f200d" }} id="modal-modal-title" variant="h6" component="h2">
              Apakah kamu yakin ingin keluar?
            </Typography>
            <div style={{ textAlign:"center", justifyContent:"space-between" }}>
            <Button style={{ marginRight:"30px", marginTop:"20px", paddingLeft:"40px",paddingRight:"40px", color:"white", border: "1px solid black", backgroundColor:"black" }} onClick={ onLogOutClick }>Ya</Button>
            <Button style={{ marginRight:"30px", marginTop:"20px", paddingLeft:"40px",paddingRight:"40px", color:"white", border: "1px solid black", backgroundColor:"black" }} onClick={ handleClose }>Tidak</Button>
            </div>

          </Box>
        </Modal>
      </div>
      <div className="testimoni">testimoni</div>
      <div className="menu-favorit">MENU favorit</div>
      <div className="frame-parent">
        <div className="group-wrapper">
          <div className="rectangle-parent">
            <div className="group-child" />
            <img className="group-item" alt="" src="/group-22@2x.png" />
            <div className="saya-bangga-bisa">
              “ Saya bangga bisa jadi salah satu Mitra Marhaban FC“
            </div>
          </div>
        </div>
        <div className="group-container">
          <div className="rectangle-parent">
            <div className="group-child" />
            <div className="alhamdulillah-gak-nyangka-container">
              <p className="alhamdulillah-gak-nyangka">
                “ Alhamdulillah gak nyangka
              </p>
              <p className="alhamdulillah-gak-nyangka">
                {" "}
                bakal selaris ini. Satu hari bisa dapet jutaan“
              </p>
            </div>
            <img className="group-icon" alt="" src="/group-221@2x.png" />
          </div>
        </div>
        <div className="group-frame">
          <div className="rectangle-parent">
            <div className="group-child" />
            <div className="udah-percaya-banget-container">
              <p className="alhamdulillah-gak-nyangka">{`“ Udah percaya banget sama `}</p>
              <p className="alhamdulillah-gak-nyangka">{`Marhaban FC, soal rasa cocok `}</p>
              <p className="alhamdulillah-gak-nyangka">{`banget di lidah. Jadi gak ragu `}</p>
              <p className="alhamdulillah-gak-nyangka">pesen banyak“</p>
            </div>
            <img className="group-child1" alt="" src="/group-263@2x.png" />
          </div>
        </div>
      </div>
      <div className="logo-marhaban-fc-removebg-prev-parent">
        <img
          className="logo-marhaban-fc-removebg-prev-icon"
          alt=""
          src="/logo-marhaban-fcremovebgpreview-2@2x.png"
        />
        <b className="marhaban-fc-adalah">
          Marhaban FC adalah usaha mikro menengah yang berdiri sejak tahun 2017.
          Menu-menu kami dibuat dengan daging ayam segar dan bumbu lezat resep
          istimewa. Terjamin higienis, bergizi, dan bebas pengawet serta pewarna
          buatan. Dan juga sudah bersertifikat Halal MUI.
        </b>
        <img
          className="download-logo-resmi-halal-terb-icon"
          alt=""
          src="/downloadlogoresmihalalterbaru2022formatpng-1@2x.png"
        />
      </div>
      <div className="fried-chicken-marhaban-true-2-parent">
        <img
          className="fried-chicken-marhaban-true-2"
          alt=""
          src="/fried-chicken-marhaban-true-2@2x.png"
        />
        <img
          className="logo-marhaban-fc-removebg-prev-icon1"
          alt=""
          src="/logo-marhaban-fcremovebgpreview-2@2x.png"
        />
      </div>
      <div className="group-parent">
        <div className="group-div">
          <div className="group-child2" />
          <div className="rp-11000-18000">Rp 11.000-18.000</div>
          <div className="ayam-crispy-yang">
            Ayam crispy yang juicy di geprek dengan sambal Ijo
          </div>
          <div className="ayam-geprek-sambal">Ayam Geprek Sambal Ijo</div>
          <img className="rectangle-icon" alt="" src="/rectangle-726@2x.png" />
        </div>
        <div className="rectangle-parent1">
          <div className="group-child2" />
          <div className="rp-12000-19000">Rp 12.000-19.000</div>
          <div className="ayam-crispy-yang1">{`Ayam crispy yang  di baluri saus pedas khas Marhaban FC `}</div>
          <div className="ayam-pedas-sauce">Ayam Pedas Sauce Insyaf</div>
          <img className="rectangle-icon" alt="" src="/rectangle-725@2x.png" />
        </div>
        <div className="rectangle-parent2">
          <div className="group-child2" />
          <div className="rp-8000-15000">Rp 8.000-15.000</div>
          <div className="ayam-crrispy-yang">
            Ayam crrispy yang juicy dibuat dengan daging pilihan
          </div>
          <div className="ayam-original">Ayam Original</div>
          <img
            className="rectangle-icon"
            alt=""
            src="/resepi-ayam-goreng-tepung-3@2x.png"
          />
        </div>
      </div>
      <div className="navbar">
        <div className="navbar-child" />
        <img className="group-icon1" alt="" src="/group.svg" />
        <div className="proction-removebg-preview-1" />
        <img
          className="logo-marhaban-fc-removebg-prev-icon2"
          alt=""
          src="/logo-marhaban-fcremovebgpreview-1@2x.png"
        />
        <div className="beranda-parent">
          <div className="beranda">{`BERANDA `}</div>
          <div className="menu" onClick={onMENUTextClick}>
            MENU
          </div>
          <div className="paket-fc" onClick={onPAKETFCTextClick}>
            PAKET FC
          </div>
          <div className="paket-fc" onClick={onKONTAKTextClick}>
            KONTAK
          </div>
          {login ? <div onClick={handleOpen} className="paket-fc">
            LOG OUT
          </div> : <div onClick={onLoginClick} className="paket-fc">
            LOG IN
          </div>}


        </div>
      </div>
      <div className="footer-77">
        <img className="arrows-icon" alt="" src="/arrows.svg" />
        <div className="line-parent">
          <div className="line-div" />
          <img className="icon" alt="" src="/icon.svg" />
          <div className="phone-number">
            <div className="div">085325786143</div>
          </div>
          <div className="email">
            <div className="email1">marhabanfc@gmail.com</div>
          </div>
          <img className="icon1" alt="" src="/icon1.svg" />
          <img className="icon2" alt="" src="/icon2.svg" />
          <div className="address">
            <div className="wisconsin-ave-suite">
              Perumahan Taman Raya Citayam Blok F3 No. 21 Rawapanjang Kec.
              Bojonggede Kab. Bogor
            </div>
          </div>
          <b className="hubungi-kami">Hubungi Kami</b>
        </div>
        <div className="frame-group">
          <div className="social-parent">
            <img className="social-icon" alt="" src="/social.svg" />
            <img className="social-icon" alt="" src="/social1.svg" />
            <img className="social-icon" alt="" src="/social2.svg" />
            <img className="social-icon" alt="" src="/social3.svg" />
          </div>
          <img className="group-icon2" alt="" src="/group1.svg" />
          <div className="address1">
            <div className="wisconsin-ave-suite-container">
              <span className="wisconsin-ave-suite-container1">
                <p className="alhamdulillah-gak-nyangka">{`Marhaban Fc merupakan `}</p>
                <p className="alhamdulillah-gak-nyangka">{`persahaan ayam goreng `}</p>
                <p className="alhamdulillah-gak-nyangka">
                  yang sudah berdiri sejak
                </p>
              </span>
            </div>
          </div>
          <img
            className="logo-marhaban-fc-removebg-prev-icon3"
            alt=""
            src="/logo-marhaban-fcremovebgpreview-21@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default BerandaUser;
