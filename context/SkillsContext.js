import React from 'react'
const skillsContext = React.createContext()

function SkillsProvider({ children }) {
	const iconArray = [
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/html-5.png",
			name: "html",
			link: "https://developer.mozilla.org/es/docs/Web/HTML"
		},
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/css3.png",
			name: "css",
			link: "https://developer.mozilla.org/es/docs/Web/CSS"
		},
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/javascript.png",
			name: "javascript",
			link: "https://developer.mozilla.org/es/docs/Web/JavaScript"
		},
		{
			img: "https://img.icons8.com/ios-filled/88/0099ff/sass.png",
			name: "sass",
			link: "https://sass-lang.com/"
		},
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/react.png",
			name: "react",
			link: "https://es.reactjs.org/"
		},
		{
			img: "https://img.icons8.com/material-rounded/88/0099ff/redux.png",
			name: "redux",
			link: "https://es.redux.js.org/"
		},
		{
			img: "/assets/svg/tailwind_icon_131947.svg",
			name: "tailwind",
			link: "https://tailwindcss.com/"
		},
		{
			img: "/assets/svg/nextjs_icon_132160.svg",
			name: "nextjs",
			link: "https://nextjs.org/"
		},
		{
			img: "https://img.icons8.com/small/88/0099ff/nodejs.png",
			name: "nodejs",
			link: "https://nodejs.org/es/"
		},
		{
			img: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/88/0099ff/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png",
			name: "mongodb",
			link: "https://www.mongodb.com/es"
		},
		{
			img: "https://img.icons8.com/ios-filled/88/0099ff/git.png",
			name: "git",
			link: "https://git-scm.com/"
		},
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/figma.png",
			name: "figma",
			link: "https://www.figma.com/"
		},
		{
			img: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/88/0099ff/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-bold-tal-revivo.png",
			name: "firebase",
			link: "https://firebase.com/"
		}
	]

	return <skillsContext.Provider value={{ iconArray }}> {children} </skillsContext.Provider>
}

export { SkillsProvider }
export default skillsContext;
