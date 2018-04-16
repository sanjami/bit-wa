const Header = (props) => {
    return (
        <h1 className="deep-orange-text text-darken-2 center-align">{props.title}</h1>
    )
}


const Footer = () => {
    return (
        <p>Copyright reserved &copy; BIT Student 2018.</p>
    )
}

const Title = (props) => {
    return (
        <h3 className="card-panel #bdbdbd grey lighten-1">{props.title}</h3>
    )
}

const Body = (props) => {
    return (
        <p className="card-panel #e0e0e0 grey lighten-2">{props.body}</p>
    )
}

const PostListItem = (props) => {
    return (
        <li>
            <Title title={props.title}></Title>
            <Body body={props.body}/>
        </li>
    )
}

const PostList = (props) => {
    return (
        <ul className="center-align">
            {props.posts.map((post) => <PostListItem title={post.title} body={post.body} key={post.id}/> )}
        </ul>
    )
}


const App = (props) => {
    return (
        <div>
            <Header title={"My blog"}></Header>
            <PostList posts={postsData}/>
            <Footer/>
        </div>
    )
}


const rootElement = document.getElementById('root');

ReactDOM.render(<App posts= {postsData}/>, rootElement)