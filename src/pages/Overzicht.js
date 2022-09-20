import ArrayPost from '../data/posts.json'
import {Link} from "react-router-dom";

function Overzicht () {
       return (
        <div>
            Blog Overzicht
            <h1>Het Aantal BlogPosts : {ArrayPost.length} </h1>
            <ul>
                {ArrayPost.map((posten) => {
                return <li>
                   <Link to={`/blogpost/$ {posten.id}`}
                       > {posten.title} </Link>
                </li>
            })}
            </ul>
            </div>
    );
};

export default Overzicht;