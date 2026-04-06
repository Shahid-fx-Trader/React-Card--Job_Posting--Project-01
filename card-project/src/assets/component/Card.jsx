const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img src={props.logo} alt="" />
        <button>Save</button>
      </div>

      <div className="center">
        <h3>
          {props.companyName} <span>5 days ago</span>
        </h3>
        <h2>{props.title}</h2>
        <div className="tags">
          <h4 className="h4tag">{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>

      <div className="bottom">
        <div>
          <div>
            <h3>{props.salary}</h3>
            <p>{props.location}</p>
          </div>
          <button>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
