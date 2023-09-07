
export default function Singer({ singerName, singerAge }){
    console.log(singerAge)
    return(
        <div style={{ border:'1px solid lightblue', margin:'10px', padding:'20px' }}>
            <h2>Singer : {singerName}</h2>
            <p>Age : {singerAge}</p>
        </div>
    )
}


