import Tdetail from "./Tdetail";
import Theader from "./Theader";
import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import "./Taccident.css" ;
import { useState, useEffect } from "react";

const Taccidentm = ({c1, c2, data}) => {
    // console.log("c1", c1);
    // console.log("c2", c2);
    //console.log("data", data) ;

    //선택된 대분류
    let [selC1, setSelC1] = useState() ;

    //선택된 대분류에 해당하는 중분류 저장
    let [selC2A, setSelC2A] = useState([]);

    //선택된 중분류
    let [selC2, setSelC2] = useState() ;

    //선택된 항목
    let [selData, setSelData] = useState({}) ;


    //맨처음 한번만 실행
    useEffect(() => {
        console.log('처음 한번만 실행....')
    }, [])

    //해당하는 state변수가 변경될 때마다
    useEffect(() => {
        console.log("selC1" , selC1) ;
        setSelC2A(c2.filter((i) => i[0] === selC1));
    }, [selC1]) ;

    useEffect(() => {
        console.log("selC2A", selC2A) ;
    }, [selC2A]);

    useEffect(() => {
        console.log("selC2" , selC2) ; 
        if (selC1 && selC2) {
            setSelData(data.filter((i)=> 
                    i.사고유형_대분류 === selC1 && 
                    i.사고유형_중분류 === selC2
                    )[0])
        }
    }, [selC2]) ;

    useEffect(() => {
        console.log("selData", selData) ;
    }, [selData]);

    //컴포넌트 랜더링이 일어날때마다 실행
    useEffect(() => {
        console.log('랜더링....')
    })

    return(
        <>
            <div className="tcontent">
                <div className="theader">
                    <Theader />
                </div>
                <div className="tmain">
                    <Tc1 c1 = {c1} selC1 ={selC1} setSelC1={setSelC1} />
                    {selC2A && <Tc2 selC2A= {selC2A} selC2={selC2}  setSelC2={setSelC2} />}
                    {selData && <Tdetail selData={selData}/>}
                </div>
            </div>
        </>
    );
}

export default Taccidentm ;