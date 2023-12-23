import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginAdmin1.css";

const LoginAdmin1 = ({ globalState }) => {
  const { login, setLogin } = globalState;
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    // Please sync "login admin 2" to the project
  }, []);

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

  const onLoginClick = useCallback(() => {
    setLogin(true);
    navigate("/")
  }, [navigate]);

  return (
    <div className="login-admin-1">
      <div className="saus-2-2" />
      <div className="resepi-ayam-goreng-tepung-31" />
      <div className="selamat-datang-di-marhaban-fc-parent">
        <div className="selamat-datang-di-container">
          <p className="selamat-datang-di">SELAMAT DATANG DI</p>
          <p className="selamat-datang-di">MARHABAN FC</p>
        </div>
        <div className="login-admin-parent">
          <b className="login-admin">Login Admin</b>
          <div className="rectangle-parent3" onClick={onGroupContainerClick}>
            <div className="group-child6" />
            <div className="group-child7" />
            <b onClick={onLoginClick}  className="login">Login</b>
            <input className="group-child8" type="password" />
            <b className="kata-sandi">Kata Sandi</b>
            <input className="group-child9" type="text" />
            <b className="email3">Email</b>
          </div>
        </div>
        <img className="ellipse-icon" alt="" src="/ellipse-22@2x.png" />
      </div>
      <div className="footer-771">
        <img className="arrows-icon1" alt="" src="/arrows.svg" />
        <div className="line-group">
          <div className="group-child10" />
          <img className="icon3" alt="" src="/icon.svg" />
          <div className="phone-number1">
            <div className="div2">085325786143</div>
          </div>
          <div className="email4">
            <div className="email5">marhabanfc@gmail.com</div>
          </div>
          <img className="icon4" alt="" src="/icon1.svg" />
          <img className="icon5" alt="" src="/icon2.svg" />
          <div className="address2">
            <div className="wisconsin-ave-suite1">
              Perumahan Taman Raya Citayam Blok F3 No. 21 Rawapanjang Kec.
              Bojonggede Kab. Bogor
            </div>
          </div>
          <b className="hubungi-kami1">Hubungi Kami</b>
        </div>
        <div className="frame-container">
          <div className="social-group">
            <img className="social-icon4" alt="" src="/social.svg" />
            <img className="social-icon4" alt="" src="/social1.svg" />
            <img className="social-icon4" alt="" src="/social2.svg" />
            <img className="social-icon4" alt="" src="/social3.svg" />
          </div>
          <img className="group-icon3" alt="" src="/group3.svg" />
          <div className="address3">
            <div className="wisconsin-ave-suite-container2">
              <span className="wisconsin-ave-suite-container3">
                <p className="selamat-datang-di">{`Marhaban Fc merupakan `}</p>
                <p className="selamat-datang-di">{`persahaan ayam goreng `}</p>
                <p className="selamat-datang-di">yang sudah berdiri sejak</p>
              </span>
            </div>
          </div>
          <img
            className="logo-marhaban-fc-removebg-prev-icon4"
            alt=""
            src="/logo-marhaban-fcremovebgpreview-21@2x.png"
          />
        </div>
      </div>
      <div className="navbar1">
        <div className="navbar-item" />
        <div className="proction-removebg-preview-11" />
        <img
          className="logo-marhaban-fc-removebg-prev-icon5"
          alt=""
          src="/logo-marhaban-fcremovebgpreview-1@2x.png"
        />
        <div className="beranda-group">
          <div className="beranda1" onClick={onBERANDATextClick}>
            <span>BERANDA</span>
            <span className="span">{` `}</span>
          </div>
          <div className="menu1" onClick={onMENUTextClick}>
            MENU
          </div>
          <div className="paket-fc1">PAKET FC</div>
          <div className="menu1" onClick={onKONTAKTextClick}>
            KONTAK
          </div>
          <div className="log-in1" onClick={onLOGINTextClick}>
            LOG IN
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginAdmin1;
