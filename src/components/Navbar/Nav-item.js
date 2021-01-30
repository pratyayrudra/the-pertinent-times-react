let API_URL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=";

async function getNews(props){
  let url = `${API_URL}${props.name}&api-key=k5JwrZQin8rNSK1UF7ymZqZpJiqimPdP`;
  let res = await fetch(url);
  let json = await res.json();

  props.callback(json["response"]["docs"])
}

function NavItem(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" id="Blogs" onClick={()=>{getNews(props)}}>
        {props.name}
      </a>
    </li>
  );
}

export default NavItem;
