import styles from "../styles/sociaMedias.module.css";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const SocialMedias = () => {
  const socialMedias = [
    {
      link: "https://www.instagram.com/xakxa01/",
      Icon: IconBrandInstagram,
    },
    {
      link: "https://github.com/xakxa01",
      Icon: IconBrandGithub,
    },
    {
      link: "https://www.linkedin.com/in/carlosxavierg%C3%B3mezbarriento/",
      Icon: IconBrandLinkedin,
    },
  ];

  return (
    <div className={styles.container}>
      {socialMedias.map(({ Icon, link }, index) => (
        <a
          key={index}
          href={link}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default SocialMedias;
