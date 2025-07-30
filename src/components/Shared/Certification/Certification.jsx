import Image from "next/image";

const Certification = ({ data: [name, url] }) => {
  if (name === "") return null;

  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer noopenner">
        <Image
          width={26}
          height={26}
          src="/assets/images/certificateMark.png"
          alt="Certificate logo"
        />
        {name}
      </a>
    </li>
  );
};

export default Certification;
