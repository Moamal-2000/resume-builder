"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { getInputValueOrFallback } from "@/functions/helper";
import useFormsStore from "@/stores/forms.store/forms.store";
import s from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
  const personalInfoInputs = useFormsStore((s) => s.personalInfoInputs);

  const [fullName, profession, email] = [
    getInputValueOrFallback(personalInfoInputs[0]),
    getInputValueOrFallback(personalInfoInputs[1]),
    getInputValueOrFallback(personalInfoInputs[2]),
  ];

  return (
    <section className={s.profileHeader}>
      <h2>{fullName}</h2>
      <h2>{profession}</h2>

      <div className={s.socialMedia}>
        <a
          href={email}
          className={s.media}
          target="_blank"
          rel="noreferrer noopenner"
        >
          <SvgIcon name="email" />
          <span>{email}</span>
        </a>
      </div>

      <p>
        I’m a Front-End Developer specializing in React/Next.js. I enjoy
        building clean, responsive web interfaces and continuously improving my
        skills.
      </p>
    </section>
  );
};

export default ProfileHeader;
