import Image from "next/image";
import logo from "./Logo.png";

const Logo = () => {
  const logoSrc = logo;

  return (
    <Image src={logoSrc} alt="Logo" className="w-[83px] h-[69px] relative" />
  );
};

export default Logo;
