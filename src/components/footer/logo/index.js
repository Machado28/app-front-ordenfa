import LogoStyle,{ImgStyle} from "./styled";
import logoUrl from "./assets/img/logo.png";

const Logo = () => {
  return (
    <LogoStyle>
      <ImgStyle src={logoUrl} />
    </LogoStyle>
  );
}
export default Logo;
