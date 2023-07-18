import { MutableRefObject, createRef, useMemo, useRef, useState } from "react";
import styles from "../styles/index.module.css";
import HeadComponent from "../components/HeadComponent";
import MainCard from "../components/cards/MainCard";
import CardTemplate from "../components/CardTemplate";
import AboutMe from "../components/cards/AboutMe";
import SkillsTitle from "../components/cards/SkillsTitle";
import Skills from "../components/cards/Skills";
import ExperienceTitle from "../components/cards/ExperienceTitle";
import Experiences from "../components/cards/Experiences";
import SocialMedias from "../components/SocialMedias";
import BackButton from "../components/BackButton";
import FormContactMe from "../components/FormContactMe";
import Tutorial from "../components/Tutorial";
import { Inter, Nunito } from "next/font/google";
import { API } from "react-tinder-card";

type TchildRef = MutableRefObject<API>;

const nunito = Nunito({ variable: "--nunito", subsets: ["latin"] });
const inter = Inter({ variable: "--inter", subsets: ["latin"] });

const { arraySkills, SkillsComponent } = Skills();
const { experiences, ExperiencesComponent } = Experiences();

const cardStackers = [
  { component: MainCard },
  { component: AboutMe, link: "github.com/xakxa01/xakxacard-portfolio" },
  { component: SkillsTitle },
  ...arraySkills.reverse().map((item) => ({
    component: () => SkillsComponent({ array: item }),
  })),
  { component: ExperienceTitle },
  ...experiences.reverse().map((item) => ({
    component: () => ExperiencesComponent({ exp: item }),
    link: item.link,
  })),
].reverse();

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(cardStackers.length - 1);

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(() => cardStackers.map(() => createRef()), []);

  const restoreCard = (index: number) =>
    (childRefs[index] as TchildRef)?.current.restoreCard();

  // const swipe = () =>
  // (childRefs[currentIndex] as TchildRef)?.current.swipe("right");

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < cardStackers.length - 1;

  const outOfFrame = (idx: number) =>
    currentIndexRef.current >= idx && restoreCard(idx);

  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await restoreCard(newIndex);
  };

  const swiped = (index: number) => updateCurrentIndex(index - 1);

  const configCard = (index: number) => ({
    ref: childRefs[index] as TchildRef,
    onCardLeftScreen: () => outOfFrame(index),
  });

  return (
    <div className={`${nunito.variable} ${inter.variable}`}>
      <HeadComponent />

      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <FormContactMe />
          </div>

          <div className={styles.mainContainer}>
            <SocialMedias />

            <BackButton goBack={goBack} />

            <div className={styles.cardContainer}>
              <Tutorial />

              {cardStackers.map((card, index) => (
                <CardTemplate
                  key={index}
                  link={card.link}
                  props={configCard(index)}
                  swiped={() => swiped(index)}
                >
                  {card.component()}
                </CardTemplate>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;