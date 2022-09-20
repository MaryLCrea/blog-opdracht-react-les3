import {useParams} from "react-router-dom";
import ArrayPost from '../data/posts.json';

function Blogpost() {
    const {Id} = useParams();
      ArrayPost.find((idFromBlog) => {
        return idFromBlog.id === Id
    })
}

export default Blogpost;