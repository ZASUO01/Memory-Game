const Card = ({img, name, width, bg, cc, onPlay}) => {
    return(
        <div className="card" style={{backgroundColor: cc}} onClick={() => onPlay(name)}>
            <div className="card-image" style={{backgroundColor: bg}}>
                <img src={img} width={width} alt="card" />
            </div>
            <p>{name}</p>
        </div>
    )
}

export default Card;