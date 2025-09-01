"use client";

import { getInputValuesByName } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import SectionTitle from "../SectionTitle/SectionTitle";
import ContactInfo from "./ContactInfo/ContactInfo";
import s from "./ProfileHeader.module.scss";

const ProfileHeader = () => {
  const personalInfoInputs = useFormsStore((s) => s.personalInfoInputs);

  const { fullName, profession, email, summery, address } =
    getInputValuesByName(personalInfoInputs);

  return (
    <section className={s.profileHeader}>
      <header>
        <h2 className={s.name}>{fullName}</h2>
        <h2 className={s.profession}>{profession}</h2>

        <ContactInfo email={email} address={address} />
      </header>

      <footer>
        <SectionTitle>Summery</SectionTitle>
        <p>{summery}</p>
      </footer>
    </section>
  );
};

export default ProfileHeader;
