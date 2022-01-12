
    
         function Receipt (props){
            
            return(
                <div>
                    <h1>{props.person}</h1>
                    <h2>{props.order.main}</h2>
                   <h2>{props.order.protein}</h2>
                   <h2>{props.order.rice}</h2>
                   <h2>{props.order.sauce}</h2>
                   <h2>{props.order.drink}</h2>
                   <h2>{props.order.cost}</h2>
                </div>
            )

}
export default Receipt;