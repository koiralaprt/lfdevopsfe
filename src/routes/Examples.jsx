import { useState } from "react";

/* eslint-disable react/prop-types */

// Below is a list of card items as an example of what an api response might look like and how you can create components according to it
const cardItems = [{
    id: 1,
    name: 'Ace of Diamonds',
    description: 'Itta ko ekka, lorem ipsum dolor sit amet',
    image: '/diamondace.png'
},
{
    id: 2,
    name: 'Ace of Spades',
    description: 'Surat ko ekka, votey pani vancha etc etc',
    image: '/spadeace.png'
},
{
    id: 3,
    name: 'Paan ko Ghulam',
    description: 'Joker paana ko joker, batman villain',
    image: '/gulam.jpg'
}]

const favoritedicon = '/favorited.webp';
const nonfavoritedicon = '/unfavorited.png'

export default function Examples() {

    // Event handlers take in arguments passed from the child components
    const handleCardClick = (id) => {
        alert(`You pressed card no ${id}`)
    }

    // Generic event handlers to 
    const handleInputChange = (name, value) => {
        console.log(`${name} has value of ${value}`)
    }
    return <div style={{ display: 'flex', minWidth: '960px', flexDirection: 'column', justifyContent: 'center' }}>
        <Header tabs={['home', 'contact', 'about', 'profile']} />
        <br />
        <br />
        <Welcome name={'Nepali babu'} />
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {cardItems.map(cardItemData => <Card key={cardItemData.id} {...cardItemData} onCardClick={handleCardClick} />)}
        </div>
        <Counter />
        <Parent />
        <div>

            <InputComponent name="name" placeholder="Enter name of intern" handleInputChange={handleInputChange} />
            <InputComponent name="address" placeholder="Enter address of intern" handleInputChange={handleInputChange} />
            <InputComponent name="fav_pastime" placeholder="Enter favorite pastime of intern" handleInputChange={handleInputChange} />
        </div>
    </div>
}

function Header(props) {
    // tabs eg: [home,contact,...]
    const { tabs } = props;
    return (<div className="appheader">
        <div style={{ width: '50%' }} >
            <h2>LOGO</h2>
        </div>
        {tabs.map((tab, index) => <button key={index}>{tab}</button>)}
    </div>)
}


function Card(props) {
    const { id, name, description, image } = props;
    const [favorited, setFavorite] = useState(false);

    const toggleFavorite = () => setFavorite((prev) => !prev)
    return (
        <div style={{ display: 'flex', position: 'relative', flexDirection: 'column', background: 'white', color: 'black', width: '200px', borderRadius: '30px', margin: '20px' }}>
            <img src={image} height={250} style={{ borderRadius: '30px 30px 0 0' }} onClick={() => props.onCardClick(id)} />
            <div style={{ height: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <b>
                    {name}
                </b>
                <i>{description}</i>
            </div>
            <div style={{ position: 'absolute', top: '10px', right: '10px', height: '30px', width: '30px' }} onClick={toggleFavorite}>
                <img src={favorited ? favoritedicon : nonfavoritedicon} height={'100%'} />
            </div>
        </div>
    )
}


function Counter() {
    const [count, setCount] = useState(0)
    return (<div style={{ display: "flex", borderRadius: '20px', background: 'white', border: '1px solid grey', height: '150px', width: '300px' }}>
        <div style={{ flex: 2, color: 'black' }}>
            <h2>You pressed {count} times</h2>
        </div>
        <div style={{ flex: 1, background: 'green', color: 'white', borderRadius: '20px', cursor: "pointer" }} onClick={() => setCount(count + 1)}><h2>Press me!</h2></div>
    </div>)
}


function InputComponent(props) {
    const { name, placeholder, handleInputChange } = props;
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        console.log(e);
        setValue(e.target.value);
        handleInputChange(name, e.target.value)
    }
    return <input type="text" value={value} name={props.name} onChange={handleChange} placeholder={placeholder} />
}

function Welcome(props) {
    return <h1>Welcome {props.name}</h1>
}


function Parent() {
    return <div>
        <h2>My name is Bob Downey and my children are</h2>
        <Child name="Robert Downey Jr" num={1} />
    </div>
}

function Child(props) {
    return <div>
        <h2>Child number {props.num}</h2>
        <h2>{props.name}</h2>
    </div>
}