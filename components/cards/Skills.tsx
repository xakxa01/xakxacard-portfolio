import styles from "../../styles/skills.module.css";
import {
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandJavascript,
  IconBrandSass,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandMongodb,
  IconBrandGit,
  IconBrandFigma,
  TablerIconsProps,
} from "@tabler/icons-react";

type iconType = (props: TablerIconsProps) => JSX.Element;

const Skills = () => {
  const skills: iconType[] = [
    IconBrandHtml5,
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandSass,
    IconBrandReact,
    IconBrandTailwind,
    IconBrandNextjs,
    IconBrandTypescript,
    IconBrandMongodb,
    IconBrandGit,
    IconBrandFigma,
  ];

  const dividirArray = (array: iconType[]) => {
    const mitad = Math.ceil(array.length / 2);
    const mitad1 = array.slice(0, mitad);
    const mitad2 = array.slice(mitad, array.length);

    return [mitad1, mitad2].reverse();
  };

  const groupArray = dividirArray(skills);

  const SkillsComponent = ({ array }: {array: iconType[]}) => (
    <div className={styles.container}>
      <div className={styles.containerIcons}>
        {array.map((Item: iconType) => (
          <Item
            key={Item.name}
            className={styles.icon}
          />
        ))}
      </div>
    </div>
  );

  return {
    arraySkills: groupArray,
    SkillsComponent,
  };
};

export default Skills;
