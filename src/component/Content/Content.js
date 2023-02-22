import './Content.scss'

const content = [
    {
        id: 1,
        content: 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."'
    }
]
function Content() {
    return ( 
        <>
            <div className="content">
                <div className="text">
                    {content[0].content}
                </div>
                <span></span>
                <div className="btn">
                    <button className="btn-left">
                        This is Funny!
                    </button>
                    <button className="btn-right">
                        This is not funny!
                    </button>
                </div>
            </div>
        </>
     );
}

export default Content;