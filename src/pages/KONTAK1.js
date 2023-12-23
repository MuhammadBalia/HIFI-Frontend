import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./KONTAK1.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const KONTAK1 = ({ globalState }) => {
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

  const onProsesClick = useCallback(() => {
    navigate("/kontak-proses");
  }, [navigate]);

  const onGroupContainer8Click = useCallback(() => {
    // Please sync "KONTAK 2" to the project
  }, []);

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
    <div className="kontak-1">
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
      <div className="navbar5">
        <div className="navbar-child3" />
        <div className="proction-removebg-preview-15" />
        <img
          className="logo-marhaban-fc-removebg-prev-icon12"
          alt=""
          src="/logo-marhaban-fcremovebgpreview-1@2x.png"
        />
        <div className="beranda-parent2">
          <div className="beranda5" onClick={onBERANDATextClick}>
            <span>BERANDA</span>
            <span className="span4">{` `}</span>
          </div>
          <div className="menu6" onClick={onMENUTextClick}>
            MENU
          </div>
          <div className="menu6" onClick={onPAKETFCTextClick}>
            PAKET FC
          </div>
          <div className="kontak5">KONTAK</div>
          {login ? <div onClick={handleOpen} className="paket-fc">
            LOG OUT
          </div> : <div onClick={onLoginClick}  className="paket-fc">
            LOG IN
          </div>}
        </div>
      </div>
      <b className="kami-sangat-senang-container1">
        <p className="kami-sangat-senang1">{`Kami sangat senang berbicara dengan anda. Jangan ragu untuk menelepon, `}</p>
        <p className="kami-sangat-senang1">{`mengirim email kepada kami. `}</p>
      </b>
      <div className="hubungi-kami6">Hubungi Kami</div>
      <div className="footer-775">
        <img className="arrows-icon5" alt="" src="/arrows.svg" />
        <div className="line-parent3">
          <div className="group-child28" />
          <img className="icon15" alt="" src="/icon.svg" />
          <div className="phone-number5">
            <div className="div6">085325786143</div>
          </div>
          <div className="email12">
            <div className="email13">marhabanfc@gmail.com</div>
          </div>
          <img className="icon16" alt="" src="/icon1.svg" />
          <img className="icon17" alt="" src="/icon2.svg" />
          <div className="address10">
            <div className="wisconsin-ave-suite5">
              Perumahan Taman Raya Citayam Blok F3 No. 21 Rawapanjang Kec.
              Bojonggede Kab. Bogor
            </div>
          </div>
          <b className="hubungi-kami7">Hubungi Kami</b>
        </div>
        <div className="frame-parent4">
          <div className="social-parent3">
            <img className="social-icon20" alt="" src="/social.svg" />
            <img className="social-icon20" alt="" src="/social1.svg" />
            <img className="social-icon20" alt="" src="/social2.svg" />
            <img className="social-icon20" alt="" src="/social3.svg" />
          </div>
          <img className="group-icon8" alt="" src="/group3.svg" />
          <div className="address11">
            <div className="wisconsin-ave-suite-container10">
              <span className="wisconsin-ave-suite-container11">
                <p className="kami-sangat-senang1">{`Marhaban Fc merupakan `}</p>
                <p className="kami-sangat-senang1">{`persahaan ayam goreng `}</p>
                <p className="kami-sangat-senang1">yang sudah berdiri sejak</p>
              </span>
            </div>
          </div>
          <img
            className="logo-marhaban-fc-removebg-prev-icon13"
            alt=""
            src="/logo-marhaban-fcremovebgpreview-21@2x.png"
          />
        </div>
      </div>
      <div className="rectangle-parent15">
        <div className="group-child29" />
        <div className="rectangle-wrapper">
          <div className="group-child30" />
        </div>
        <b className="foto-ktp">Foto KTP*</b>
        <div className="ellipse-parent">
          <input type="radio" id="jabore" name="jabore" className="ellipse-div" value="Luar"></input>
          <b className="luar-jabodetabek">
            <span>Luar Jabodetabek</span>
          </b>
        </div>
        <div className="ellipse-group">
          <input checked type="radio" id="jabore" name="jabore" className="group-child31" value="Luar"></input>
          <b className="jabodetabek">Jabodetabek</b>
        </div>
        <b className="lokasi-pengajuan">Lokasi Pengajuan*</b>
        <textarea className="group-child32" />
        <b className="alamat-lengkap">Alamat Lengkap*</b>
        <div className="ellipse-container">
          <input className="group-child33" type="radio" name="kelamin"/>
          <b className="perempuan">Perempuan</b>
        </div>
        <div className="ellipse-parent1">
          <input checked className="group-child34" type="radio" name="kelamin"/>
          <b className="laki-laki">Laki-laki</b>
        </div>
        <b className="jenis-kelamin">Jenis Kelamin*</b>
        <input type="date" className="group-child35" />
        <b className="tanggal-lahir">Tanggal Lahir*</b>
        <input className="group-child36" type="email" />
        <b className="e-mail">E-mail*</b>
        <input className="group-child37" type="number" />
        <b className="no-whatsapp">No Whatsapp*</b>
        <input className="group-child38"  type="text" />
        <b className="nama">Nama*</b>
        <b className="registrasi-online-mitra">Registrasi Online Mitra Baru</b>
        <img
          className="whatsapp-image-2023-11-13-at-1-icon1"
          alt=""
          src="/whatsapp-image-20231113-at-1652-1@2x.png"
        />
        <div onClick={onProsesClick} className="rectangle-parent16">
          <div className="group-child39" />
          <b className="kirim">KIRIM</b>
        </div>
      </div>
    </div>
  );
};

export default KONTAK1;
