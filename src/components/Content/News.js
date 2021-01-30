function News(props){
    return (
        <>
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-8">
                        <h4 className="lead">{props.news["section_name"].toUpperCase()}</h4>
                        <h2 className="display-5">{props.news["headline"]["print_headline"]}</h2>
                        <p className="small">Published: {props.news["pub_date"]}</p>
                        <p>{props.news["abstract"]}</p>
                        <p className="lead">
                        <a className="btn btn-dark btn-lg" href={props.news["web_url"]} target="_blank" role="button">Read more</a>
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src={`https://nytimes.com/${props.news["multimedia"][0]["url"]}`} height="auto" width="300"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default News