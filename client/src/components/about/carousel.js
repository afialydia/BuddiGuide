import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import buddi from "../../assets/buddi.svg";
import about_1 from "../../assets/about/about_1.svg";


import "./about.styles.css";

const images = [
	about_1

];

function Carosel() {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const timer = setInterval(() => {
			if (index === 3) {
				setIndex(0);
			} else {
				setIndex((prev) => prev + 1);
			}
		}, 15000);
		return () => clearInterval(timer);
	}, [index]);

	return (
		<Gallery
			className="galleryContainer"
			index={index}
			onRequestChange={(i) => {
				setIndex(i);
			}}
		>
			{images.map((image) => (
				<GalleryImage className="gallery" key={image} src={image} />
			))}
		</Gallery>
	);
}

export default Carosel;
