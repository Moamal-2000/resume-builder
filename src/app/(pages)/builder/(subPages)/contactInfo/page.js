import BuilderForm from "@/components/Shared/Forms/BuilderForm/BuilderForm";

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
