const errorImg = 'https://tse2.mm.bing.net/th?id=OIP.sWCvltMZF_s3mjA5sL-RdgHaE8&pid=Api&P=0&h=180'
const ImgCustom = (props) => {
    const { src, className, width = 300, alt = 'img', ...resPros } = props
    const handleError = (e) => {
        if (e.target.src !== errorImg) {
            e.target.src = errorImg;
        }
    };
    return (
        <img
            className={`img-fluid ${className}`}
            src={src || errorImg}
            width={width}
            onError={handleError}
            loading='lazy'
            alt={alt}
            {...resPros} />
    )
}

export default ImgCustom