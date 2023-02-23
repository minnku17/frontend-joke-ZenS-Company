import './Content.scss'
import { useEffect, useState } from 'react';

const contents = [
    {
        id: 1,
        content: 'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."'
    },
    {
        id: 2,
        content: 'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"'
    },
    {
        id: 3,
        content: 'The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, "I am going to eat that pussy once Jimmy leaves for school today!"'
    },
    {
        id: 4,
        content: "A housewife, an accountant and a lawyer were asked 'How much is 2+2?' The housewife replies: 'Four!'. The accountant says: 'I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time.' The lawyer pulls the drapes, dims the lights and asks in a hushed voice, 'How much do you want it to be?'"
    }
]

function Content() {
    const [dataCookie, setDataCookie] = useState([])
    const [contentShow, setContentShow] = useState()
    const [indexContent, setIndexContent] = useState(0)
    useEffect(() =>{
        const cookies = document.cookie.split(';');
        let contentCookie;
         for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith('contents=')) {
                 contentCookie = JSON.parse(cookie.substring(9));
                break;
            }
        }
        if(!contentCookie){
            setContentShow({
                id: contents[indexContent].id,
                content: contents[indexContent].content
            })
        } else {
            const indexCookie = contents.findIndex((item) => item.id === contentCookie[contentCookie.length - 1].id)
            console.log("check id", indexCookie)
            setContentShow({
                id: contents[indexCookie].id >= 4 ? 5 : contents[indexCookie].id,
                content: contents[indexCookie].id >= 4 ? "That's all the jokes for today! Come back another day!" : contents[indexCookie].content
            })
            
            setDataCookie(contentCookie)
            setIndexContent(contents[indexCookie].id >= 4 ? indexCookie + 2 : indexCookie + 1)
        }
    },[])
    const handleReaction = (action) => {
        if (indexContent >= 4){
             setContentShow({
                id: 5,
                content: "That's all the jokes for today! Come back another day!"
            })
            setIndexContent(indexContent + 1)
        } else {
            contents.forEach(content => {
            if (content.id === contentShow.id) {
                dataCookie.push({id: contentShow.id, reaction: action})
            }
            });
            document.cookie = `contents=${JSON.stringify(dataCookie)}`;
            setContentShow({
                id: indexContent === 3 ? contents[indexContent].id : contents[indexContent + 1].id,
                content: indexContent === 3 ? contents[indexContent].content : contents[indexContent + 1].content
            })
            setIndexContent(indexContent + 1)
        }
    }
    console.log("cjeck data cookie", indexContent)
    return ( 
        <>
            <div className="content">
                    {contentShow && indexContent >= 5 ? 
                        <div className="text" style={{ textAlign: 'center', fontWeight: 'bold'}} >
                            {contentShow?.content}
                        </div>
                    :
                        <div className="text" >
                            {contentShow?.content}
                        </div>
                    }
                <span></span>
                <div className="btn">
                    <button onClick={() => handleReaction(1)} className="btn-left">
                        This is Funny!
                    </button>
                    <button onClick={() => handleReaction(0)} className="btn-right">
                        This is not funny!
                    </button>
                </div>
            </div>
        </>
     );
}

export default Content;