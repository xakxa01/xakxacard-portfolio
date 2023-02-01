import React from 'react'
const InfoContext = React.createContext()

function InfoProvider({ children }) {
	const iconArray = [
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/html-5.png",
			name: "html",
		},
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/css3.png",
			name: "css",
		},
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/javascript.png",
			name: "javascript",
		},
		{
			img: "https://img.icons8.com/ios-filled/88/0099ff/sass.png",
			name: "sass",
		},
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/react.png",
			name: "react",
		},
		{
			img: "/assets/svg/tailwind_icon_131947.svg",
			name: "tailwind",
		},
		{
			img: "/assets/svg/nextjs_icon_132160.svg",
			name: "nextjs",
		},
		{
			img: "https://img.icons8.com/small/88/0099ff/nodejs.png",
			name: "nodejs",
		},
		{
			img: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/88/0099ff/external-mongodb-a-cross-platform-document-oriented-database-program-logo-bold-tal-revivo.png",
			name: "mongodb",
		},
		{
			img: "https://img.icons8.com/ios-filled/88/0099ff/git.png",
			name: "git",
		},
		{
			img: "https://img.icons8.com/ios-glyphs/88/0099ff/figma.png",
			name: "figma",
		},
		{
			img: "https://img.icons8.com/ios-filled/88/0099ff/typescript.png",
			name: "typescript",
		},
	]

	return <InfoContext.Provider value={{ iconArray }}> {children} </InfoContext.Provider>
}

export { InfoProvider }
export default InfoContext;
