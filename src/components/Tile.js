const Tile = ({ info }) => {
    let classname=`tile ${info.classnames}`
    return (
        <article className={classname}>
            <h4 className="">{info.title}</h4>
            <p>{info.description}</p>
        </article>
    )
}

export default Tile
