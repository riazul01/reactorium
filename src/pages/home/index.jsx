import React from 'react';
import Header from './Header';
import ProjectCard from './ProjectCard';

import ClockImage from 'src/assets/images/thumbs/clock.png';
import StopwatchImage from 'src/assets/images/thumbs/stopwatch.png';
import SplitScreenImage from 'src/assets/images/thumbs/split-screen.png';
import TodoImage from 'src/assets/images/thumbs/todo.png';
import CounterImage from '/src/assets/images/thumbs/counter.png';
import RandomColorsImage from '/src/assets/images/thumbs/random-colors.png';
import PxToRemImage from '/src/assets/images/thumbs/px-to-rem.png';

const projectItems = [
    {
        id: 1,
        name: 'Digital Clock',
        image: ClockImage,
        tags: ['react', 'tailwindCSS'],
        link: '/clock'
    },
    {
        id: 2,
        name: 'StopWatch',
        image: StopwatchImage,
        tags: ['react', 'tailwindCSS'],
        link: '/stopwatch'
    },
    {
        id: 3,
        name: 'Todo App',
        image: TodoImage,
        tags: ['react', 'tailwindCSS'],
        link: '/todo'
    },
    {
        id: 4,
        name: 'Counter',
        image: CounterImage,
        tags: ['react', 'tailwindCSS'],
        link: '/counter'
    },
    {
        id: 5,
        name: 'Random Colors',
        image: RandomColorsImage,
        tags: ['react', 'tailwindCSS'],
        link: '/random-colors'
    },
    {
        id: 6,
        name: 'Px to REM Converter',
        image: PxToRemImage,
        tags: ['react', 'tailwindCSS'],
        link: '/px-to-rem'
    },
    {
        id: 10,
        name: 'Split Screen',
        image: SplitScreenImage,
        tags: ['react', 'tailwindCSS'],
        link: '/split-screen'
    }
];

const Home = () => {
    return (
        <div className="mx-auto px-[0.8rem] text-[#fff] h-auto w-full max-w-[1300px] min-h-[100vh] overflow-x-hidden" style={{fontFamily: 'Belanosima, sans-serif'}}>
            <Header projectItems={projectItems}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {projectItems.map((project) => {
                    return <ProjectCard key={project.id} data={project}/>
                })}
            </div>
            <p className="fixed bottom-[2rem] left-[2rem] text-[1.1rem] text-[#666]">Created by <a href="https://github.com/riazul01" className="text-[tomato] underline opacity-60" target="_blank" rel="noreferrer">riazul01</a></p>
        </div>
    );
}

export default Home;