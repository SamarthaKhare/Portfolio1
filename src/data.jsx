import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
    { id: nanoid(), href: '#home', text: 'about' },
    { id: nanoid(), href: '#skills', text: 'skills' },
    { id: nanoid(), href: '#experiences', text: 'experiences' },
    { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
    {
        id: nanoid(),
        title: 'HTML&CSS',
        icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
        text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
    },
    {
        id: nanoid(),
        title: 'Javascript',
        icon: <FaJs className='h-16 w-16 text-emerald-500' />,
        text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
    },
    {
        id: nanoid(),
        title: 'React',
        icon: <FaReact className='h-16 w-16 text-emerald-500' />,
        text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
    },
];

export const projects = [
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://jobtrack-6xoj.onrender.com',
        github: 'https://github.com/SamarthaKhare/JobTrack',
        title: 'Job Track',
        text: 'JobTrace is a fullstack MERN web application which is a one stop solution of keeping track of your vast job application process.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://zippy-dodol-464132.netlify.app',
        github: 'https://github.com/SamarthaKhare/GitBook',
        title: 'Git Book',
        text: 'This is React based web application to browse your favourite github user,check out the most forked projects,followers and visualize information like languages used their most popular Repo etc through charts.',
    },
    {
        id: nanoid(),
        img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
        url: 'https://github.com/SamarthaKhare/To-Do',
        github: 'https://github.com/SamarthaKhare/To-Do',
        title: 'To-Do Chrom Extension',
        text: 'A Chrome Extension that helps user to keep track of their To-Dos for the day.',
    },
];