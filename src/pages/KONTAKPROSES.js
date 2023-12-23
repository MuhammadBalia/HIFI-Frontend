import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./KONTAKPROSES.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const KONTAKPROSES = ({ globalState }) => {
  const { login, setLogin } = globalState;
  const navigate = useNavigate();

  const onBERANDATextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMENUTextClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onPAKETFCTextClick = useCallback(() => {
    navigate("/paket-fc");
  }, [navigate]);

  const onLOGINTextClick = useCallback(() => {
    navigate("/login-admin-1");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/");
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
    <div className="kontak-proses">
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
      <div className="hubungi-kami2">Hubungi Kami</div>
      <b className="kami-sangat-senang-container">
        <p className="kami-sangat-senang">{`Kami sangat senang berbicara dengan anda. Jangan ragu untuk menelepon, `}</p>
        <p className="kami-sangat-senang">{`mengirim email kepada kami. `}</p>
      </b>
      <div className="navbar2">
        <div className="navbar-inner" />
        <div className="proction-removebg-preview-12" />
        <img
          className="logo-marhaban-fc-removebg-prev-icon6"
          alt=""
          src="/logo-marhaban-fcremovebgpreview-1@2x.png"
        />
        <div className="beranda-container">
          <div className="beranda2" onClick={onBERANDATextClick}>
            <span>BERANDA</span>
            <span className="span1">{` `}</span>
          </div>
          <div className="menu2" onClick={onMENUTextClick}>
            MENU
          </div>
          <div className="menu2" onClick={onPAKETFCTextClick}>
            PAKET FC
          </div>
          <div className="kontak2">KONTAK</div>
          {login ? <div onClick={handleOpen} className="paket-fc">
            LOG OUT
          </div> : <div onClick={onLoginClick}  className="paket-fc">
            LOG IN
          </div>}
        </div>
      </div>
      <div className="whatsapp-image-2023-11-13-at-1-parent">
        <img
          className="whatsapp-image-2023-11-13-at-1-icon"
          alt=""
          src="/whatsapp-image-20231113-at-1652-1@2x.png"
        />
        <div className="rectangle-parent4">
          <div className="group-child11" />
          <div className="terimakasih-permintaan-anda-container">
            <p className="kami-sangat-senang">
              Terimakasih, permintaan anda sedang
            </p>
            <p className="kami-sangat-senang">diproses oleh tim kami</p>
          </div>
        </div>
        <div className="rectangle-parent5" onClick={onGroupContainer1Click}>
          <div className="group-child12" />
          <b className="kembali">Kembali</b>
        </div>
      </div>
      <div className="footer-772">
        <img className="arrows-icon2" alt="" src="/arrows.svg" />
        <div className="line-container">
          <div className="group-child13" />
          <img className="icon6" alt="" src="/icon.svg" />
          <div className="phone-number2">
            <div className="div3">085325786143</div>
          </div>
          <div className="email6">
            <div className="email7">marhabanfc@gmail.com</div>
          </div>
          <img className="icon7" alt="" src="/icon1.svg" />
          <img className="icon8" alt="" src="/icon2.svg" />
          <div className="address4">
            <div className="wisconsin-ave-suite2">
              Perumahan Taman Raya Citayam Blok F3 No. 21 Rawapanjang Kec.
              Bojonggede Kab. Bogor
            </div>
          </div>
          <b className="hubungi-kami3">Hubungi Kami</b>
        </div>
        <div className="frame-parent1">
          <div className="social-container">
            <img className="social-icon8" alt="" src="/social.svg" />
            <img className="social-icon8" alt="" src="/social1.svg" />
            <img className="social-icon8" alt="" src="/social2.svg" />
            <img className="social-icon8" alt="" src="/social3.svg" />
          </div>
          <img className="group-icon4" alt="" src="/group3.svg" />
          <div className="address5">
            <div className="wisconsin-ave-suite-container4">
              <span className="wisconsin-ave-suite-container5">
                <p className="kami-sangat-senang">{`Marhaban Fc merupakan `}</p>
                <p className="kami-sangat-senang">{`persahaan ayam goreng `}</p>
                <p className="kami-sangat-senang">yang sudah berdiri sejak</p>
              </span>
            </div>
          </div>
          <img
            className="logo-marhaban-fc-removebg-prev-icon7"
            alt=""
            src="/logo-marhaban-fcremovebgpreview-21@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default KONTAKPROSES;
