"use client";

import { getContactInfo } from "@/functions/helper";
import { useFormsStore } from "@/stores/forms.store/forms.store";
import s from "./ContactInfo.module.scss";

const ContactInfo = ({ email, address }) => {
  const contactInfoInputs = useFormsStore((s) => s.contactInfoInputs);

  const [emailData, phoneData, linkedinData, githubData, personalWebsiteData] =
    getContactInfo(contactInfoInputs, email);

  return (
    <>
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
    </>
  );
};

export default ContactInfo;
