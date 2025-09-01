"use client";

import { getContactInfo, getInputValuesByName } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import SectionTitle from "../SectionTitle/SectionTitle";
import s from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
  const { personalInfoInputs, contactInfoInputs } = useFormsStore((s) => s);

  const { fullName, profession, email, summery, address } =
    getInputValuesByName(personalInfoInputs);

  const [emailData, phoneData, linkedinData, githubData, personalWebsiteData] =
    getContactInfo(contactInfoInputs, email);

  return (
    <section className={s.profileHeader}>
      <header>
        <h2 className={s.name}>{fullName}</h2>
        <h2 className={s.profession}>{profession}</h2>

        <p className={s.info}>
          {address}
          <span className={s.verticalBar} />
          {emailData.title}
          <span className={s.verticalBar} />
          {personalWebsiteData.title}
        </p>
        <p className={s.info}>
          {phoneData.title}
          <span className={s.verticalBar} />
          {linkedinData.title}
          <span className={s.verticalBar} />
          {githubData.title}
        </p>
      </header>

      <footer>
        <SectionTitle>Summery</SectionTitle>
        <p>{summery}</p>
      </footer>
    </section>
  );
};

export default ProfileHeader;
