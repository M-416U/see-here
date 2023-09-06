import { useTheme } from "next-themes";
import logo from "./Logo.png";
import lightLogo from "./lightLogo.png";
import Image from "next/image";

const Logo = () => {
  const { theme } = useTheme();
  const logoSrc = logo;

  return <Image src={logoSrc} alt="Logo" className="w-[83px] h-[69px] relative" />;
};

export default Logo;
