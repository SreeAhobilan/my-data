//REACT TASK-01
//Pricing Tags
//Initially importing the App.css into the App.js file
import './App.css';
//Declaring an array of onjects of information called cards.
    const cards=[
    {
        head:"Free",
        price:"$0",
        month:"/month",
        one:{one:"Single User",status:"enabled"},
        two:{two:"5GB Storage",status:"enabled"},
        three:{three:"Unlimited Public Projects",status:"enabled"},
        four:{four:"Community Access",status:"enabled"},
        five:{five:"Unlimited Private Projects",status:"disabled"},
        six:{six:"Dedicated Phone Support",status:"disabled"},
        seven:{seven:"Free Subdomain",status:"disabled"},
        eigth:{eigth:"Monthly Status Reports",status:"disabled"},
    },
    {
        head:"Plus",
        price:"$9",
        month:"/month",
        one:{one:"5 User",status:"enabled"},
        two:{two:"50GB Storage",status:"enabled"},
        three:{three:"Unlimited Public Projects",status:"enabled"},
        four:{four:"Community Access",status:"enabled"},
        five:{five:"Unlimited Private Projects",status:"enabled"},
        six:{six:"Dedicated Phone Support",status:"enabled"},
        seven:{seven:"Free Subdomain",status:"enabled"},
        eigth:{eigth:"Monthly Status Reports",status:"disabled"},
    },
    {
        head:"Pro",
        price:"$49",
        month:"/month",
        one:{one:"Unlimited Users",status:"enabled"},
        two:{two:"150GB Storage",status:"enabled"},
        three:{three:"Unlimited Public Projects",status:"enabled"},
        four:{four:"Community Access",status:"enabled"},
        five:{five:"Unlimited Private Projects",status:"enabled"},
        six:{six:"Dedicated Phone Support",status:"enabled"},
        seven:{seven:"Unlimited Free Subdomain",status:"enabled"},
        eigth:{eigth:"Monthly Status Reports",status:"enabled"},
    }
];
//Using a function called App and with map we are collecting data from cards.
export default function App() {
return(
    <div className="overall">
    <div className='App'>
        {cards.map((card,index)=><List key={index} 
        head={card.head} 
        price={card.price} 
        month={card.month} 
        one={card.one} 
        two={card.two} 
        three={card.three} 
        four={card.four} 
        five={card.five} 
        six={card.six} 
        seven={card.seven} 
        eigth={card.eigth}/>)}
    </div>
    </div>
)
//Finally declaring a function called List to diplay all the contents to be displayed in the react app.
function List({head,price,month,one,two,three,four,five,six,seven,eigth}){
return(
    <div className="list-container">
        <div className="list-heading">
            <h1>{head}</h1>
            <p><strong>{price}</strong><sub>{month}</sub></p>
    </div>
        <div className="line">
        <ul className="fa-ul">
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{one.one}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{two.two}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{three.three}</li>
        <li><span className="fa-li"><i className="fas fa-check"></i></span>{four.four}</li>
        {(five.status==="enabled")?<li><span className="fa-li"><i className="fas fa-check"></i></span>{five.five}</li> : <li style={{color:"grey"}}><span className="fa-li"><i className="fas fa-times"></i></span>{five.five}</li> }
        {(six.status==="enabled")?<li><span className="fa-li"><i className="fas fa-check"></i></span>{six.six}</li> : <li style={{color:"grey"}}><span className="fa-li"><i className="fas fa-times"></i></span>{six.six}</li>}
        {(seven.status==="enabled")?<li><span className="fa-li"><i className="fas fa-check"></i></span>{seven.seven}</li> : <li style={{color:"grey"}}><span className="fa-li"><i className="fas fa-times"></i></span>{seven.seven}</li>}
        {(eigth.status==="enabled")? <li><span className="fa-li"><i className="fas fa-check"></i></span>{eigth.eigth}</li> : <li style={{color:"grey"}}><span className="fa-li"><i className="fas fa-times"></i></span>{eigth.eigth}</li>}
            </ul>
            <button className="btn">Button</button>
        </div>
    </div>
)}
}
//Then after the js part we need to set the css to make the pricing tags look nice.

