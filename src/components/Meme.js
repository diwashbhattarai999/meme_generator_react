import React from 'react'
import '../css/meme.css'

function Meme() {

    // const [memeImage, setMemeImage] = React.useState('https://i.imgflip.com/30b1gx.jpg');
    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImage: 'https://i.imgflip.com/30b1gx.jpg'
    })
    const [allMeme, setAllMeme] = React.useState([]);

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data))
    })

    const handleChange = (event)=>{
        const {name, value}  =event.target
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }))
    }

    const getRandomMemes = () =>{
        const memesArray = allMeme.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme((prevMeme) =>{
            return{
                ...prevMeme,
                randomImage: url
            }
        });
    }

    return (
        <div className='meme-container'>
            <div className="meme-container-info">
                <div className="meme-form">

                    <input 
                        type="text" 
                        className="meme-gen-text"
                        value={meme.topText}
                        name="topText"
                        onChange={handleChange}
                    />

                    <input 
                        type="text" 
                        className="meme-gen-text"
                        value={meme.bottomText}
                        name="bottomText"
                        onChange={handleChange}
                    />

                </div>
                <div className="btn">
                    <button onClick={getRandomMemes} className='getMemeBtn'>
                        <p>Get a new meme image</p> 
                        <i class="fa-solid fa-images img-image"></i>
                    </button>
                </div>
                <div className="meme-image">
                    <img src={meme.randomImage} alt="meme-img" className='meme-img'/>
                    <h2 className="top meme-img-text">{meme.topText}</h2>
                    <h2 className="bottom meme-img-text">{meme.bottomText}</h2>
                </div>
            </div>
            
        </div>
  )
}

export default Meme