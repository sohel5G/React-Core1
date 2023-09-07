
export default function Todo({ task, isDone }) {

    // return <li>{task} : {isDone ? `Done` : `Let's do it`}</li>

    return <li>{task} : {!isDone || `Done`}</li>

    // return <li>{task} : {isDone && `Done`}</li>

    // if(isDone === true){
    //     return <li>{task} : Done</li>
    // }else{
    //     return <li>{task} : Let's do it</li>
    // }

}


 

