import { useParams } from "react-router-dom";

const RoutePage1 = () => {
    const item = useParams().item ;
    console.log("p1 item", item) ;

    const fruits = ['μ¬κ³Όπ', 'λ°λλπ', 'ν¬λπ'] ;
    // if (fruits.includes(item)) tag = "κ³ΌμΌμλλ€." ;
    // else tag = "κ³ΌμΌμ΄ μλλλ€." ;

    let tag = fruits.includes(item) ?  "κ³ΌμΌμλλ€." : "κ³ΌμΌμ΄ μλλλ€." ;

    return (
        <>
            <h1>Page1</h1>
            <p>{`${item}λ ${tag}`}</p>
        </>
    );
}
export default RoutePage1 ;