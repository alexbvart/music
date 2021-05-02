
import heroallpages from './heroallpages.module.css';

const CoverFigureHeader = ({images}) => {
    return ( 
        <>
            <figure className={`image ${heroallpages.img}`} />

            <style global jsx>{`
                .image:before{
                    background-image: 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 0.2) 90%), 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 0.3) 95%), 
                    linear-gradient(180deg, rgba(255, 255, 255, 0) 55%, rgba(0, 0, 0, 1) 100%), 
                        /* * oscurece la parte inferior de la caratula, para al aplicarle el filtro lighten, lo tome como negativo  */
                        url(${images});
            }
            `}</style>
        </>
    );
}
export default CoverFigureHeader;