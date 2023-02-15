import {Link} from "react-router-dom" ;
const Wheader = ({title}) => {

    return (
        <>
            <div className="wheader">
                <h1>{title}</h1>
                <div className="whdiv">
                    <Link to="/">⤴️</Link>
                </div>
            </div>
        </>
    );
}

export default Wheader ;
