"use client";

import { getCertifications } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import Image from "next/image";
import s from "./Certifications.module.scss";

const Certifications = () => {
  const certificationInputs = useFormsStore((s) => s.certificationInputs);
  const certificationsData = getCertifications(certificationInputs);

  return (
    <section className={s.certifications}>
      <h2>Certification</h2>

      <ul className={s.certificates}>
        {certificationsData.map(([name, url], index) => {
          if (name === "") return null;

          return (
            <li key={`${name}-${index}`}>
              <a href={url} target="_blank" rel="noreferrer noopenner">
                <Image
                  width={26}
                  height={26}
                  src="/assets/images/certificateMark.png"
                  alt="Certificate logo"
                />
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Certifications;
