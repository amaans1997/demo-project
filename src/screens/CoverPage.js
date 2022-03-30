import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import image1 from '../assets/01.png';
import image2 from '../assets/02.png';
import image3 from '../assets/03.png';
import screeenImage1 from '../assets/screen-1.png';
import screeenImage2 from '../assets/screen-2.png';
import screeenImage3 from '../assets/screen-3.png';

function CoverPage() {
    const [step, setStep] = useState(1);

    const handleStep = () => {
        setStep(step + 1);
    }
    return (
        <div class="mx-4">
            {
                step === 1 ?
                    <div>
                        <div class="flex flex-row my-8">
                            <div class="w-1/3 h-1 bg-primary rounded-md mr-2"></div>
                            <div class="w-1/3 h-1 bg-grey rounded-md mr-2"></div>
                            <div class="w-1/3 h-1 bg-grey rounded-md"></div>
                        </div>
                        <div class="font-title text-default my-4 text-center">Welcome!</div>
                        <img src={image1} class="w-16 h-16 mb-4" />
                        <img src={screeenImage1} />
                        <div class="text-primary text-2xl font-heading font-bold mt-4">Connect with your favorite people and brands 🔥
                        </div>
                        <div class="float-right w-16 my-8">
                            <div class="text-sm text-default">Tap to continue</div>
                            <div class="text-primary text-4xl  cursor-pointer mb-4" onClick={handleStep}>
                                <ArrowRightOutlined />
                            </div>
                        </div>
                    </div> :
                    step === 2 ?
                        <div>
                            <div class="flex flex-row my-8">
                                <div class="w-1/3 h-1 bg-primary rounded-md mr-2"></div>
                                <div class="w-1/3 h-1 bg-primary rounded-md mr-2"></div>
                                <div class="w-1/3 h-1 bg-grey rounded-md"></div>
                            </div>
                            <div class="font-title text-default my-4 text-center">Welcome!</div>
                            <img src={image2} class="w-16 h-16 mb-4" />
                            <img src={screeenImage2} />
                            <div class="text-primary text-2xl font-heading font-bold mt-4">Explore new types of content and interests ✅
                            </div>
                            <div class="float-right w-16 my-8">
                                <div class="text-sm text-default">Tap to continue</div>
                                <div class="text-primary text-4xl  cursor-pointer mb-4" onClick={handleStep}>
                                    <ArrowRightOutlined />
                                </div>
                            </div>
                        </div>
                        :
                        <div>
                            <div class="flex flex-row my-8">
                                <div class="w-1/3 h-1 bg-primary rounded-md mr-2"></div>
                                <div class="w-1/3 h-1 bg-primary rounded-md mr-2"></div>
                                <div class="w-1/3 h-1 bg-primary rounded-md"></div>
                            </div>
                            <div class="font-title text-default my-4 text-center">Welcome!</div>
                            <img src={image3} class="w-16 h-16 mb-4" />
                            <img src={screeenImage3} />
                            <div class="text-primary text-2xl font-heading font-bold mt-4">Find new creators and watch funny videos 😂
                            </div>
                            <div class="float-right my-8 ">
                                <button class="bg-primary rounded-full font-heading font-semibold text-white py-3 px-6 text-xl mb-8">Let's get started!</button>
                            </div>
                        </div>
            }
        </div>
    )
}
export default CoverPage;