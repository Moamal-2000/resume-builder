"use client";

import Certification from "@/components/Shared/Certification/Certification";
import { getCertifications } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./Certifications.module.scss";

const Certifications = () => {
  const certificationInputs = useFormsStore((s) => s.certificationInputs);
  const certificationsData = getCertifications(certificationInputs);

  return (
    <section className={s.certifications}>
      <SectionTitle>Certification</SectionTitle>

      <ul className={s.certificates}>
        {certificationsData.map((data, index) => (
          <Certification key={`${data.name}-${index}`} data={data} />
        ))}
      </ul>
    </section>
  );
};

export default Certifications;
