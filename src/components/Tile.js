import { NavLink } from "react-router-dom"

const Card = ({ info }) => {
    let classname=`tile ${info.classnames}`
    return (
        <article className={classname}>
            <div className="card-content">
                <h4 className="card-title">{info.title}</h4>
                <div className="card-body">
                    <p>{info.description}</p>
                    <small>{info.descriptionDetail}</small>
                </div>
            </div>
        </article>
    )
}

export default Card
