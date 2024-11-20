 function Square(props) {
    return <>
    <div className="cell" onClick={props.onclick}>
       {props.value}      
       </div>
    </>
 }

export default Square;
