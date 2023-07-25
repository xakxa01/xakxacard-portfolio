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
import FormContactMe from "../components/FormContactMe";
import Tutorial from "../components/Tutorial";
import { Inter, Nunito } from "next/font/google";
import { NextPage } from "next";
import Controller from "../components/Controller";
import { direction } from "../types";

type TchildRef = MutableRefObject<any>;

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

const Home: NextPage = () => {
  const [currentIndex, setCurrentIndex] = useState(cardStackers.length - 1);

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(() => cardStackers.map(() => createRef()), []);

  const restoreCard = (index: number) =>
    (childRefs[index] as TchildRef)?.current.restoreCard();

  const swipe = (dir: direction) =>
    (childRefs[currentIndex] as TchildRef)?.current.swipe(dir);

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

  const swiped = (index: number) => {
    updateCurrentIndex(index - 1);
  };

  const configCard = (index: number) => ({
    ref: childRefs[index] as TchildRef,
    onCardLeftScreen: () => outOfFrame(index),
  });

  const findCardByName = (name: string) =>
    cardStackers.findIndex(({ component }) => component.name === name);

  const arrayMessage = [
    {
      message: "swipe down to watch this code",
      indexCondition: currentIndex === findCardByName("I"),
    },
    {
      message: "swipe down to watch the web site",
      indexCondition: currentIndex < findCardByName("K"),
    },
  ];

  console.log(
    cardStackers.map(({ component }, index) => {
      return { name: component.name, index };
    })
  );

  console.log("first", findCardByName("K"));

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

            {arrayMessage.map(
              ({ message, indexCondition }) =>
                indexCondition && (
                  <p
                    key={message}
                    className={styles.message}
                  >
                    {message}
                  </p>
                )
            )}

            <Controller
              swipe={swipe}
              goBack={goBack}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
