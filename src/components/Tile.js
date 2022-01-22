const Tile = ({ info }) => {
    let classname=`tile ${info.classnames}`
    return (
        <article className={classname}>
            <h4 className="card-title">{info.title}</h4>
            <p className="card-body">{info.description}</p>
            <a href="/" className="btn">Flip card</a>
        </article>
    )
}

export default Tile
