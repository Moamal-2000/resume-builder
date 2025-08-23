"use client";

import { getContactInfo, getInputValuesByName } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
  const { personalInfoInputs, contactInfoInputs } = useFormsStore((s) => s);

  const { fullName, email, summery, address } =
    getInputValuesByName(personalInfoInputs);

  const [emailData, phoneData, , , personalWebsiteData] = getContactInfo(
    contactInfoInputs,
    email
  );

  return (
    <section className={s.profileHeader}>
      <header>
        <h2 className={s.name}>{fullName}</h2>

        <p className={s.info}>
          {address} <span className={s.dot}>.</span> {phoneData.title}
          <span className={s.dot}>.</span> {emailData.title}
        </p>
        <p className={s.personalWebsite}>{personalWebsiteData.title}</p>
      </header>

      <footer>
        <h2>Summery</h2>
        <p>{summery}</p>
      </footer>
    </section>
  );
};

export default ProfileHeader;
