import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const Menu = ({ globalState }) => {
  const { login, setLogin } = globalState;
  const navigate = useNavigate();

  const onBERANDATextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPAKETFCTextClick = useCallback(() => {
    navigate("/paket-fc");
  }, [navigate]);

  const onKONTAKTextClick = useCallback(() => {
    navigate("/paket-fc");
  }, [navigate]);

  const onLOGINTextClick = useCallback(() => {
    navigate("/login-admin-1");
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
    <div className="menu4">
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
      <div className="text" />
      <div className="menu-marhaban-fc">MENU MARHABAN FC</div>
      <div className="pesan-sekarang-wrapper">
        <b className="pesan-sekarang1">Pesan Sekarang</b>
      </div>
      <div className="group-parent1">
        <div className="vector-parent">
          <img className="group-child17" alt="" src="/rectangle-729.svg" />
          <div className="rp-10000">Rp 10.000</div>
          <div className="bumbu-marinasi-yang">
            Bumbu marinasi yang dibuat dengan rempah-rempah pilihan
          </div>
          <div className="bumbu-marinasi">Bumbu Marinasi</div>
          <img
            className="whatsapp-image-2023-11-16-at-2"
            alt=""
            src="/whatsapp-image-20231116-at-2135-2@2x.png"
          />
        </div>
        <div className="rectangle-parent8">
          <div className="group-child18" />
          <div className="rp-25000">Rp 25.000</div>
          <div className="tepung-bumbu-crispy">
            Tepung Bumbu Crispy khas Marhaban FC
          </div>
          <div className="tepung-bumbu-crispy1">Tepung Bumbu Crispy</div>
          <img
            className="most-popular-thai-drinks-that"
            alt=""
            src="/whatsapp-image-20231116-at-2135-1@2x.png"
          />
        </div>
        <div className="rectangle-parent9">
          <div className="group-child18" />
          <div className="rp-100001">Rp 10.000</div>
          <div className="dibuat-dengan-100">
            Dibuat dengan 100% gula asli dan tersedia berbagai rasa
          </div>
          <div className="zyban-drink">Zyban Drink</div>
          <img
            className="most-popular-thai-drinks-that"
            alt=""
            src="/12-most-popular-thai-drinks-that-you-cant-resist-2023-1@2x.png"
          />
        </div>
        <div className="rectangle-parent10">
          <div className="group-child18" />
          <div className="rp-2000">Rp 2.000</div>
          <div className="dibuat-dengan-1001">
            Dibuat dengan 100% gula asli dan teh pilihan.
          </div>
          <div className="es-teh">Es Teh</div>
          <img
            className="most-popular-thai-drinks-that"
            alt=""
            src="/teh-dan-es-lemon-teh-png-keren-png-transparan-dan-clipart-untuk-unduhan-gratis-1@2x.png"
          />
        </div>
        <div className="rectangle-parent11">
          <div className="group-child18" />
          <div className="rp-12000-190001">Rp 12.000-19.000</div>
          <div className="ayam-crispy-yang2">{`Ayam crispy yang di baluri saus pedas khas Marhaban FC `}</div>
          <div className="ayam-pedas-sauce1">Ayam Pedas Sauce Insyaf</div>
          <img
            className="most-popular-thai-drinks-that"
            alt=""
            src="/rectangle-725@2x.png"
          />
        </div>
        <div className="rectangle-parent12">
          <div className="group-child18" />
          <div className="rp-8000-150001">Rp 8.000-15.000</div>
          <div className="ayam-crispy-yang3">
            Ayam crispy yang juicy dibuat dengan daging pilihan
          </div>
          <div className="ayam-original1">Ayam Original</div>
          <img
            className="resepi-ayam-goreng-tepung-32"
            alt=""
            src="/resepi-ayam-goreng-tepung-3@2x.png"
          />
        </div>
        <div className="rectangle-parent13">
          <div className="group-child18" />
          <div className="rp-11000-180001">Rp 11.000-18.000</div>
          <div className="ayam-crispy-yang4">
            Ayam crispy yang juicy di geprek dengan sambal Ijo
          </div>
          <div className="ayam-geprek-sambal1">Ayam Geprek Sambal Ijo</div>
          <img
            className="most-popular-thai-drinks-that"
            alt=""
            src="/rectangle-726@2x.png"
          />
        </div>
        <div className="rectangle-parent14">
          <div className="group-child18" />
          <div className="rp-11000-180002">Rp 11.000-18.000</div>
          <div className="ayam-crispy-yang5">
            Ayam crispy yang juicy di geprek dengan sambal bawang
          </div>
          <div className="ayam-geprek-sambal2">Ayam Geprek Sambal Bawang</div>
          <img
            className="most-popular-thai-drinks-that"
            alt=""
            src="/resep-ayam-penyet-sambal-bawang--oleh-susan-mellyani-1@2x.png"
          />
        </div>
      </div>
      <div className="navbar4">
        <div className="navbar-child2" />
        <img className="group-icon6" alt="" src="/group2.svg" />
        <div className="proction-removebg-preview-14" />
        <img
          className="logo-marhaban-fc-removebg-prev-icon10"
          alt=""
          src="/logo-marhaban-fcremovebgpreview-1@2x.png"
        />
        <div className="beranda-parent1">
          <div className="beranda4" onClick={onBERANDATextClick}>
            <span>BERANDA</span>
            <span className="span3">{` `}</span>
          </div>
          <div className="menu5">MENU</div>
          <div className="paket-fc5" onClick={onPAKETFCTextClick}>
            PAKET FC
          </div>
          <div className="paket-fc5" onClick={onKONTAKTextClick}>
            KONTAK
          </div>
          {login ? <div onClick={handleOpen} className="paket-fc">
            LOG OUT
          </div> : <div onClick={onLoginClick}  className="paket-fc">
            LOG IN
          </div>}
        </div>
      </div>
      <div className="footer-774">
        <img className="arrows-icon4" alt="" src="/arrows.svg" />
        <div className="line-parent2">
          <div className="group-child27" />
          <img className="icon12" alt="" src="/icon.svg" />
          <div className="phone-number4">
            <div className="div5">085325786143</div>
          </div>
          <div className="email10">
            <div className="email11">marhabanfc@gmail.com</div>
          </div>
          <img className="icon13" alt="" src="/icon1.svg" />
          <img className="icon14" alt="" src="/icon2.svg" />
          <div className="address8">
            <div className="wisconsin-ave-suite4">
              Perumahan Taman Raya Citayam Blok F3 No. 21 Rawapanjang Kec.
              Bojonggede Kab. Bogor
            </div>
          </div>
          <b className="hubungi-kami5">Hubungi Kami</b>
        </div>
        <div className="frame-parent3">
          <div className="social-parent2">
            <img className="social-icon16" alt="" src="/social.svg" />
            <img className="social-icon16" alt="" src="/social1.svg" />
            <img className="social-icon16" alt="" src="/social2.svg" />
            <img className="social-icon16" alt="" src="/social3.svg" />
          </div>
          <img className="group-icon7" alt="" src="/group3.svg" />
          <div className="address9">
            <div className="wisconsin-ave-suite-container8">
              <span className="wisconsin-ave-suite-container9">
                <p className="marhaban-fc-merupakan4">{`Marhaban Fc merupakan `}</p>
                <p className="marhaban-fc-merupakan4">{`persahaan ayam goreng `}</p>
                <p className="marhaban-fc-merupakan4">
                  yang sudah berdiri sejak
                </p>
              </span>
            </div>
          </div>
          <img
            className="logo-marhaban-fc-removebg-prev-icon11"
            alt=""
            src="/logo-marhaban-fcremovebgpreview-21@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
