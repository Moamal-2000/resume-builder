"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { getContactInfo, getInputValuesByName } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
  const { personalInfoInputs, contactInfoInputs } = useFormsStore((s) => s);

  const { fullName, profession, email, summery } =
    getInputValuesByName(personalInfoInputs);

  const contactInfoData = getContactInfo(contactInfoInputs, email);

  return (
    <section className={s.profileHeader}>
      <h2 className={s.name}>{fullName}</h2>
      <h2 className={s.profession}>{profession}</h2>

      <ul className={s.socialMedia}>
        {contactInfoData.map(({ title, href, iconName, id }) => (
          <li key={id}>
            <a
              href={href}
              className={s.media}
              target="_blank"
              rel="noreferrer noopenner"
            >
              <SvgIcon name={iconName} />
              <span>{title}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className={s.summery}>
        <h2>Basic Information</h2>
        <p>{summery}</p>
      </div>
    </section>
  );
};

export default ProfileHeader;
