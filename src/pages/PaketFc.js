import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PaketFc.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';

const PaketFc = ({ globalState }) => {
  const { login, setLogin } = globalState;
  const navigate = useNavigate();

  const onBERANDATextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMENUTextClick = useCallback(() => {
    navigate("/menu");
  }, [navigate]);

  const onKONTAKTextClick = useCallback(() => {
    navigate("/kontak-1");
  }, [navigate]);

  const onLOGINTextClick = useCallback(() => {
    navigate("/login-admin-1");
  }, [navigate]);

  const onPesanSekarangTextClick = useCallback(() => {
    // Please sync "Menu 1" to the project
  }, []);

  const onDawnloadProposalKemitraanClick = useCallback(() => {
   
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
    <div className="paket-fc3">
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
      <div className="copyrigth">Copyrigth</div>
      <div className="navbar3">
        <div className="navbar-child1" />
        <div className="proction-removebg-preview-13" />
        <img
          className="logo-marhaban-fc-removebg-prev-icon8"
          alt=""
          src="/logo-marhaban-fcremovebgpreview-1@2x.png"
        />
        <div className="frame-div">
          <div className="beranda3" onClick={onBERANDATextClick}>
            <span>BERANDA</span>
            <span className="span2">{` `}</span>
          </div>
          <div className="menu3" onClick={onMENUTextClick}>
            MENU
          </div>
          <div className="paket-fc4">PAKET FC</div>
          <div className="menu3" onClick={onKONTAKTextClick}>
            KONTAK
          </div>
          {login ? <div onClick={handleOpen} className="paket-fc">
            LOG OUT
          </div> : <div onClick={onLoginClick}  className="paket-fc">
            LOG IN
          </div>}
        </div>
      </div>
      <div className="footer-773">
        <img className="arrows-icon3" alt="" src="/arrows.svg" />
        <div className="line-parent1">
          <div className="group-child14" />
          <img className="icon9" alt="" src="/icon.svg" />
          <div className="phone-number3">
            <div className="div4">085325786143</div>
          </div>
          <div className="email8">
            <div className="email9">marhabanfc@gmail.com</div>
          </div>
          <img className="icon10" alt="" src="/icon1.svg" />
          <img className="icon11" alt="" src="/icon2.svg" />
          <div className="address6">
            <div className="wisconsin-ave-suite3">
              Perumahan Taman Raya Citayam Blok F3 No. 21 Rawapanjang Kec.
              Bojonggede Kab. Bogor
            </div>
          </div>
          <b className="hubungi-kami4">Hubungi Kami</b>
        </div>
        <div className="frame-parent2">
          <div className="social-parent1">
            <img className="social-icon12" alt="" src="/social.svg" />
            <img className="social-icon12" alt="" src="/social1.svg" />
            <img className="social-icon12" alt="" src="/social2.svg" />
            <img className="social-icon12" alt="" src="/social3.svg" />
          </div>
          <img className="group-icon5" alt="" src="/group3.svg" />
          <div className="address7">
            <div className="wisconsin-ave-suite-container6">
              <span className="wisconsin-ave-suite-container7">
                <p className="peralatan">{`Marhaban Fc merupakan `}</p>
                <p className="peralatan">{`persahaan ayam goreng `}</p>
                <p className="peralatan">yang sudah berdiri sejak</p>
              </span>
            </div>
          </div>
          <img
            className="logo-marhaban-fc-removebg-prev-icon9"
            alt=""
            src="/logo-marhaban-fcremovebgpreview-21@2x.png"
          />
        </div>
      </div>
      <b className="peralatan-produksi">
        <p className="peralatan">PERALATAN</p>
        <p className="peralatan"> PRODUKSI</p>
      </b>
      <div className="whatsapp-image-2023-11-12-at-0-wrapper">
        <img
          className="whatsapp-image-2023-11-12-at-0"
          alt=""
          src="/whatsapp-image-20231112-at-0103-1@2x.png"
        />
      </div>
      <div className="paket-promo">PAKET PROMO</div>
      <img
        className="spatula-removebg-prev-icon"
        alt=""
        src="/spatula---removebgpreview-1@2x.png"
      />
      <img
        className="carcaa-de-frango-cru-na-tbua-icon"
        alt=""
        src="/carcaa-de-frango-cru-na-tbua-isolada-no-fundo-branco---foto-premiumremovebgpreview-1@2x.png"
      />
      <b className="bahan-baku-perdana-container">
        <p className="peralatan">{`BAHAN BAKU `}</p>
        <p className="peralatan">PERDANA</p>
      </b>
      <img
        className="gadis-muslim-dengan-jilbab-men-icon"
        alt=""
        src="/gadis-muslim-dengan-jilbab-menunjukkan-isyarat-ide-bagus--gadis--muslim--jilbab-png-transparan-clipart-dan-file-psd-untuk-unduh-gratisremovebgpreview-1@2x.png"
      />
      <b className="pelatihan-dan-sertifikat-container">
        <p className="peralatan">PELATIHAN DAN</p>
        <p className="peralatan">SERTIFIKAT</p>
      </b>
      <b className="rp-6000000">Rp 6.000.000</b>
      <div className="rectangle-parent6">
        <div className="group-child15" />
        <div className="pesan-sekarang" onClick={onPesanSekarangTextClick}>
          Pesan Sekarang
        </div>
      </div>
      <div className="bergabunglah-dengan-franchise-parent">
        <b className="bergabunglah-dengan-franchise">
          Bergabunglah dengan franchise kami dan nikmati keuntungan yang tak
          terbatas.
        </b>
        <div className="paket-franchise">PAKET FRANCHISE</div>
        <img
          className="orange-and-white-modern-electr"
          alt=""
          src="/orange-and-white-modern-electronic-product-listing-amazon-product-image-2480-x-3508-px-1@2x.png"
        />
        <div className="rectangle-parent7">
          <div className="group-child16" />
          <div
            className="dawnload-proposal-kemitraan"
            onClick={onDawnloadProposalKemitraanClick}
          >
            Dawnload Proposal Kemitraan
          </div>
          <img className="export-pdf-icon" alt="" src="/export-pdf@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default PaketFc;
