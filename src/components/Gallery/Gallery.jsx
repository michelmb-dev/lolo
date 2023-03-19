import './Gallery.css'

function Gallery({ data, active }) {
    return (
        <div className={active ? 'gallery active' : 'gallery'}>
            <div className="galleryInfo">
                <h2>{data.title}</h2>
                <div className="galleryTxt">
                    <p>{data.description}</p>
                </div>

                <div className="galleryTags">
                    {data.code.map((c, k) => (
                        <span key={k} className="tag">
              <img draggable={false} src={c} alt="logo" />
            </span>
                    ))}
                    <a className="galleryLink" target="__blank" href={data.link}>
                        Voir Démo
                    </a>
                </div>
            </div>
            <div className="galleryCover">
                <img draggable={false} src={data.cover} alt="cover" />
            </div>
        </div>
    )
}

export default Gallery
