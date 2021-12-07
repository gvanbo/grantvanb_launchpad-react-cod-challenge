const HomePostItem = ({ homePost }) => (
    <div className="item-container">
        <h3>Title here</h3>
        <body>Body here</body>
        <div className="button-container">
            <button>Delete</button>
            <button>Edit</button>
        </div>
    </div>
)

export default HomePostItem;