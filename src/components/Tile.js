import { NavLink } from "react-router-dom"

const Tile = ({ info }) => {
    let classname=`tile ${info.classnames}`
    return (
        <article className={classname}>
            <div className="card-content">
                <h4 className="card-title">{info.title}</h4>
                <p className="card-body">{info.description}</p>
                <NavLink to="/" className="btn">Flip card</NavLink>
            </div>
        </article>
    )
}

export default Tile
