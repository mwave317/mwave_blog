import React, { Component } from 'react';
import '../css/Post.css';
import '../css/Media.css';

export default class Post extends Component {
    constructor(props) {
        super(props);
            this.state = {
            }
        }

        render() {
            return (
            <div className="post-content">
                    <p className="post-title">CREATING A PYRAMID</p>
                    <p>If the parameter being passed is 3, the third row will have five hashtags. To get the correct number of columns you will need to find the midpoint. This is done by first finding out how many columns will be needed using (2*n-1). Next, divide the result by 2.  The midpoint is now 2.5, using Math.floor the midpoint will be 2.</p>
                    <p>function pyramid(n) {'{'}  </p>
                    <p>const midpoint = Math.floor((2*n -1) /2);</p>
                    <p>let level = '';</p>
                    <p>(midpoint – row =column) ? level += ‘#’: level += ‘ ‘;</p>
                    <p>}</p>
                    <p>console.log(level);</p>
                    <p>}</p>
                    <p>}</p>
                    <p>pyramid(3);</p>
                    <div className="post-break"></div>
                </div>
            )
        }
}