import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

export const metadata = {
  title: "Builder | Contact Information",
};

const ContactInfoPage = () => {
  return (
    <BuilderForm
      inputGroupKey="contactInfoInputs"
      nextPageRoute="/builder/certification"
      submitButtonText="Next"
    />
  );
};

export default ContactInfoPage;
