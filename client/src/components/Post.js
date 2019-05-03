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
                    <h4 className="post-title">Creating a Pyramid</h4>
                    <p className="post-line">If the parameter being passed is 3, the third row will have five hashtags. To get the correct number of columns you will need to find the midpoint. This is done by first finding out how many columns will be needed using (2*n-1). Next, divide the result by 2.  The midpoint is now 2.5, using Math.floor the midpoint will be 2.</p>
                    <p className="post-line">function pyramid(n) {'{'}  </p>
                    <p className="post-line">const midpoint = Math.floor((2*n -1) /2);</p>
                    <p className="post-line">let level = '';</p>
                    <p className="post-line">(midpoint – row =column) ? level += ‘#’: level += ‘ ‘;</p>
                    <p className="post-line">}</p>
                    <p className="post-line">console.log(level);</p>
                    <p className="post-line">}</p>
                    <p className="post-line">}</p>
                    <p className="post-line">pyramid(3);</p>
                </div>
            )
        }
}