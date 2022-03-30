import React from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function Home() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/cover')
    }
    return (
        <React.Fragment>
            <div class="h-full flex flex-col justify-center mx-4">
                <div class="flex font-extrabold	text-5xl text-primary font-heading pb-2">Welcome to Instagram!</div>
                <div class="font-title text-2xl">Here’s a quick run-through on how to use our app.</div>
            </div>
            <div class="float-right w-16 absolute bottom-0 right-0 mb-8 mx-4 ">
                <div class="text-sm text-default">Tap to continue</div>
                <div class="text-primary text-4xl cursor-pointer" onClick={handleClick}>
                    <ArrowRightOutlined />
                </div>
            </div>
        </React.Fragment>
    )
}
export default Home;