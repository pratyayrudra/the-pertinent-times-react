import News from "./News";

function Content(props){
    let content = props.news.map(n=>{
        return <News news={n}/>
    })
    return (
        <div className="py-3">
            {content}
        </div>
    )
}

export default Content