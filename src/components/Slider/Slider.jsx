import Gallery from "../Gallery/Gallery";
import {useEffect, useState} from "react";
import './Slider.css'


function Slider() {

    const [projects, setProjects] = useState([])
    useEffect(() =>{
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(e => console.error(e.message))
    },[])

    const lengthArray = projects.length

    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide(currentSlide === lengthArray - 1 ? 0 : currentSlide + 1)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? lengthArray - 1 : currentSlide - 1)
    }

    return (
        <div className="slider">
            {projects &&
                projects.map((project, index) => (
                    <Gallery key={index} data={project} active={currentSlide === index} />
                ))}
            <span className="sliderBtnLeft" onClick={prevSlide}>
        <svg
            fill="#72d2e1"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" />
        </svg>
      </span>
            <span className="sliderBtnRight" onClick={nextSlide}>
        <svg
            fill="#72d2e1"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458V72.3458Z" />
        </svg>
      </span>
        </div>
    )
}

export default Slider
