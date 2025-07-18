"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { MY_SOCIAL_MEDIA } from "@/data/staticData";
import { getInputValueOrFallback } from "@/functions/helper";
import useFormsStore from "@/stores/forms.store/forms.store";
import s from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
  const personalInfoInputs = useFormsStore((s) => s.personalInfoInputs);

  const fullName = getInputValueOrFallback(personalInfoInputs[0]);

  return (
    <section className={s.profileHeader}>
      <h2>{fullName}</h2>

      <div className={s.socialMedia}>
        {MY_SOCIAL_MEDIA.map(({ socialName, title, link, iconName, id }) => (
          <a
            href={link}
            className={s.media}
            key={id}
            target="_blank"
            rel="noreferrer noopenner"
          >
            <SvgIcon name={iconName} />
            <span>{title}</span>
          </a>
        ))}
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
