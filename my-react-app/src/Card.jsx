import './Card.css'

function Card ({element})
{
    console.log(element.CompanyLogo);
    return (<div className="card">
                <img id="companyLogo" src={element.CompanyLogo} />
                <div id="info">
                    <h1 id = "companyName">{element.CompanyName}</h1>
                    <h2 id="positionName">{element.OppType}</h2>
                    <p id="deadLine">{element.Deadline}</p>
                    <ul id = "fields">
                        {element.Fields.map((x) => (<li>{x}</li>))}
                    </ul>
                </div>
                <p>message</p>
            </div>);
}

export default Card;
//<!--  -->