import './Gal.css' ;
import GalCard from './GalCard';

const GalMain = ({c1, item}) => {
    console.log("GalMain item", item) ;
    console.log("GalMain c1", c1) ;

    return (
        <div className="content">
            <div className="conleft">
                <ul>
                    <li>항목</li>
                    <li>항목</li>
                </ul>
            </div>
            <div className="conright">
                <GalCard />
            </div>
        </div>
    ) ;
}

export default GalMain ;