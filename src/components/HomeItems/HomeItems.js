import { useEffect } from "react"
import { connect } from "react-redux"
import { load_posts } from "../../app/actions"
import HomePostItem from "../HomePostItem/HomePostItem";

const HomeItems = ({ homePosts = [], startLoadingPosts, isLoading}) => {
    useEffect(() => startLoadingPosts(), [])

    const loadingMessage = <div>Loading...</div>
    const content = (
        <div className="post-wrapper">
            {homePosts.map(homePost => <HomePostItem 
                homePost={homePost}
            />)}
        </div>
    );
    return isLoading ? loadingMessage : content;
};


const mapStateToProps = state => ({
    isLoading: state.isLoading,
    homePosts: state.homePosts
})

const mapDispatchToProps = dispatch => ({
    startLoadingPosts: () => dispatch(load_posts)
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeItems);