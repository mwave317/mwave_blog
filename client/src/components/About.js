import React, { Component } from 'react';
import '../css/About.css';
import '../css/Media.css';

export default class About extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="about">
                <h4 className="about-title">About</h4>
                <p className="about-body">It was December of twenty fifteen, two days before the loss of my wife. I was a project manager at the time with a great company. The problem was for months I felt like something was missing.</p>

                <p className="about-body">The night of the office Christmas party, I received a call from a friend who was trying to develop his own website. He couldn’t get the color to change on the race’s date and time. It turned out the CSS file name was misspelled.  Hours later at the party, inspiration struck. For Valentines Day, I would build a website for my wife designed around our life together. Of course, I had no clue how to do it.</p>

                <p className="about-body">Once my wife fell asleep, I started drawing the layout. By no means am I an artist, so it was a challenge. I kept tossing the drawing and starting over, feeling it wasn’t quite right. I decided on a layout minutes before meeting my wife for lunch. She already knew about the website. How? She found one of the drawings I tossed out.</p>

                <p className="about-body">That night, my wife was telling me about a new job offer she received in Pinehurst. She paused mid-sentence and dropped into my arms. The love of my life and best friend was taken from me in the blink of an eye. For the following year, I was in a fog.</p>

                <p className="about-body">Three days after the first Christmas without my wife. I let my boss know I wanted to change my career. I would give him plenty of time to find a replacement, but I was going to leave. I knew I wanted to be a developer, but which language to choose.</p>

                <p className="about-body">With the holidays behind me, I joined a couple of groups for web development. By the time I left my first one, I had a number of tutorial suggestions to get started on my choice of language, JavaScript. The tutorial I tried had more lecture than coding practice. So, I moved on to another sites tutorial. A month later one of the members started talking to me about the Iron Yard.</p>

                <p className="about-body">I went in the next day, but the next cohort didn’t start until July. I missed the current one by one week. In the meantime, I worked on JavaScript tutorials every day, until the night before class. Wednesday of my first week, they announced the Iron Yard would close. My class would be the last cohort to graduate. Bummer.</p>

                <p className="about-body">I met some great people in class and graduated with a certificate in Front-End Engineering. It was a long road, but the right choice for me. Upon graduation, I collaborated with a back-end developer to build an application called Fork in the Road. In addition, I’m volunteering my time to develop a new website for a no-kill animal shelter located in Indian Land, SC. While working with Code for Charlotte, which works with city departments and local organizations to create digital platforms.</p>

                <p className="about-body">Still, in the process of increasing my skills, I’ve gone back to online tutorials, both for becoming more advanced with Javascript and learning Angular and TypeScript. My quest for my first role as a front-end engineer continues.</p>
            </div>
        )
    }
}