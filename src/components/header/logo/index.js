import LogoStyle,{ImgLogo} from "./style";
import logoUrl from "./logo/assetI/img/logo.png";

const Logo = () => {
  return (
    <LogoStyle>
      <ImgLogo src={logoUrl} />
    </LogoStyle>
  );
}
export default Logo;
