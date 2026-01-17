import React from "react";
import { useEffect,useState } from "react";


const Home = () => {
	const [selectedColor,setSelectedColor] = useState("");

	return (
		<div className="mainDiv">
			<div className="secondDiv">
			</div>
			<div className="thirdDiv">
				<div className={"red"+ (selectedColor === "red" ? " brilla" : "")} onClick={() =>setSelectedColor("red")}></div>
				<div className={"yellow" + (selectedColor === "yellow"? " brilla" : "")} onClick={()=>setSelectedColor("yellow")}></div>
				<div className={"green" + (selectedColor ==="green" ? " brilla" : "")} onClick={() =>setSelectedColor("green")}></div>
			</div>
		</div>
	);
};

export default Home;