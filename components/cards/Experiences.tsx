import styles from "../../styles/experiences.module.css";
import ArrowDown from "../ArrowDown";
import {
  IconBrandGraphql,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandWordpress,
} from "@tabler/icons-react";

interface expProps {
  enterprise: string;
  position: string;
  period: string;
  skills: any[];
  image: string;
  link: string;
  description: string;
}
    
const Experiences = () => {
  const experiences = [
    {
      enterprise: "Helpmyteam",
      position: "Frontend Developer",
      period: "2022 - Present",
      skills: [
        IconBrandReact,
        IconBrandNextjs,
        IconBrandTailwind,
        IconBrandGraphql,
        IconBrandWordpress,
      ],
      image: "bg-helpmyteam",
      link: "helpmyteam.com",
      description:
        "HelpMyTeam is a virtual answering service company. They provide cost-effective solutions for customers to ensure that calls are never missed and that customers receive professional and efficient service from well-trained virtual receptionists.",
    },
  ];

  const ExperiencesComponent = ({exp}: {exp: expProps}) => (
    <div className={styles.container}>
      <div
        className={`${exp.image} h-4/6 w-full rounded-br-xl bg-cover bg-center`}
      />

      <div className={styles.content}>
        <div className={styles.enterpriseContainer}>
          <h2 className={styles.titleEnterprise}>{exp.enterprise}</h2>
        </div>

        <div className="item-center flex justify-between font-semibold text-negro3">
          <h3 className={styles.position}>{exp.position}</h3>
          <p className={styles.period}>{exp.period}</p>
        </div>

        <p className={styles.description}>{exp.description}</p>

        <div className="flex items-center justify-between pb-2">
          <ul className={styles.listSkills}>
            {exp.skills?.map((Skill) => (
              <li key={Skill.name}>
                <Skill
                  size={30}
                  className={styles.skill}
                />
              </li>
            ))}
          </ul>

          <ArrowDown text="swipe down to watch the web site" />
        </div>
      </div>
    </div>
  );

  return {
    experiences,
    ExperiencesComponent,
  };
};

export default Experiences;
