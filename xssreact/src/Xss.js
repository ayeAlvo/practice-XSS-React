import React, { useState } from 'react';
import './App.css';
import DOMPurify from 'dompurify';

const Xss = () => {
    const [text, setText] = useState('');
    const [script, setScript] = useState('');
    const [image, setImage] = useState('');
    const [userInput, setInput] = useState('');
    const [pure, setPure] = useState('');
    return (
        <>
            <h1 className='title'>Practice XSS in React</h1>
            <div className='xss'>
                <div>
                    <h1
                        className=''
                        dangerouslySetInnerHTML={{ __html: text }}
                    />
                    Type your Script <br></br>
                    <input
                        value={text}
                        onChange={(e) =>
                            setText(e.target.value.replace('', ''))
                        }
                    />
                    <h1 dangerouslySetInnerHTML={{ __html: image }} />
                    Type your Script img has been blacklisted <br></br>
                    <input
                        value={image}
                        onChange={(e) =>
                            setImage(e.target.value.replace('img', ''))
                        }
                    />
                    <h1 dangerouslySetInnerHTML={{ __html: script }} />
                    Use a button to cauase XSS <br></br>
                    <input
                        value={script}
                        onChange={(e) =>
                            setScript(e.target.value.replace('script', ''))
                        }
                    />
                    <h1 dangerouslySetInnerHTML={{ __html: pure }} />
                    Banned Charactors<br></br>
                    <input
                        value={pure}
                        onChange={(e) =>
                            setPure(e.target.value.replace(/[#_/]/g, ''))
                        }
                    />
                    <h1
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(userInput),
                        }}
                    />
                    Sanatized with DOMPurify default settings<br></br>
                    <input
                        value={userInput}
                        onChange={(e) => setInput(e.target.value.replace())}
                    />
                </div>
            </div>
        </>
    );
};

export default Xss;
