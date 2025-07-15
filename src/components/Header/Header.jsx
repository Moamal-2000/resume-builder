import Image from "next/image";
import Link from "next/link";
import Button from "../Shared/Buttons/Button/Button";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <Link href="/" className={s.logo} aria-label="Go to Homepage">
        <Image
          src="/assets/images/logo.png"
          alt="CB ceVBuilder logo"
          width={150}
          height={50}
          priority
        />
      </Link>

      <Button href="/builder">Get Started</Button>
    </header>
  );
};

export default Header;
