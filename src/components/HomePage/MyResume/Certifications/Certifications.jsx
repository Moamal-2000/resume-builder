import Image from "next/image";
import s from "./Certifications.module.scss";

const Certifications = () => {
  return (
    <section className={s.certifications}>
      <h2>Certification</h2>

      <ul className={s.certificates}>
        <li>
          <Image
            width={26}
            height={26}
            src="/assets/images/certificateMark.png"
            alt="Certificate logo"
          />
          Certificate Title
        </li>

        <li>
          <Image
            width={26}
            height={26}
            src="/assets/images/certificateMark.png"
            alt="Certificate logo"
          />
          Certificate Title
        </li>
      </ul>
    </section>
  );
};

export default Certifications;
