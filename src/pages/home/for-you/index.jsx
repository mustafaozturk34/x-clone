import Post from "~/components/post"
import { posts as postData} from "~/mock/posts"
import { WVList } from "virtua"
import { useState } from "react"

export default function ForYou() {
    const [post, setPosts] = useState([...postData,...postData,...postData,...postData,...postData,...postData])
    return (
        <WVList onRangeChange={async (start, end) =>{
            if(end + 1 === post.length) setPosts(prev => [...prev, ...postData])
        }}>
            {post.map((post, key) => (
                <Post key={post.id + key} post={post}/>
            ))}
        </WVList>
    )
}