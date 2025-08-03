"use client";

import SvgIcon from "@/components/Shared/SvgIcon";
import { getContactInfo, getInputValuesByName } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
  const { personalInfoInputs, contactInfoInputs } = useFormsStore((s) => s);

  const { fullName, profession, email, address } =
    getInputValuesByName(personalInfoInputs);

  const contactInfoData = getContactInfo(contactInfoInputs, email);

  return (
    <section className={s.profileHeader}>
      <h2>{fullName}</h2>
      <h2>{profession}</h2>

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
