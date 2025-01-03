import React from 'react';
import Split from 'react-split';
import './Hero.css';

const Hero = ({ data }) => {
    return (
        <div className="hero-container">
            <Split className="split" sizes={[45, 55]} minSize={200} expandToMin={false} gutterSize={10} gutterAlign="center" snapOffset={30} dragInterval={1} direction="horizontal" cursor="col-resize">
                <div className="land-left">
                    <h1>Workspace like No other</h1><br></br>
                    {!data && (
                        <button class="button">
                        <a href='/signin' style = {{ color: 'white', textDecoration: 'none' }}>Signin</a>

                        </button>
                    )}

                </div>
                <div className="land-right">
                
                </div>
            </Split>
        </div>
    );
};

export default Hero;
