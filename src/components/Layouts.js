import Receipt from "./Receipt";

import receipts from "./Samplereceipts";

function Layouts() {
    return(
       <div className="container">
    <Receipt person ={receipts[0].person} order={receipts[0].order}/>
      <Receipt person={receipts[1].person}order={receipts[1].order}/>
      <Receipt person={receipts[2].person} order={receipts[2].order}/>
      {receipts.map((Data,index)=>{
          return <Receipt person={Data.person} order={Data.order}/>
    })
 }
  </div>
    )}

export default Layouts;
