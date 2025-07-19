"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { getInputValueOrFallback } from "@/functions/helper";
import useFormsStore from "@/stores/forms.store/forms.store";
import s from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
  const personalInfoInputs = useFormsStore((s) => s.personalInfoInputs);

  const [fullName, profession, email, address] = [
    getInputValueOrFallback(personalInfoInputs[0]),
    getInputValueOrFallback(personalInfoInputs[1]),
    getInputValueOrFallback(personalInfoInputs[2]),
    getInputValueOrFallback(personalInfoInputs[3]),
  ];

  return (
    <section className={s.profileHeader}>
      <h2>{fullName}</h2>
      <h2>{profession}</h2>

      <div className={s.socialMedia}>
        <a
          href={`mailto:${email}`}
          className={s.media}
          target="_blank"
          rel="noreferrer noopenner"
        >
          <SvgIcon name="email" />
          <span>{email}</span>
        </a>
      </div>

      <div className={s.textBox}>
        <h2>Address</h2>
        <p>{address}</p>
      </div>

      <div className={s.textBox}>
        <h2>Summery</h2>
        <p>
          Explain briefly who you are and your background here in not more than
          3 lines. Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
          aliquam,
        </p>
      </div>
    </section>
  );
};

export default ProfileHeader;
