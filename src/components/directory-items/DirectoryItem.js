import './DirectoryItem.style.scss';


const DirectoryItem = ({category}) => {
    const {imageUrl,id, title} = category;
    return(
        <div key={id} className="directory-item-container">
             <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`,
                    }}></div>
            <div className="directory-item-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
        </div>
    </div>
    )
}
export default DirectoryItem;