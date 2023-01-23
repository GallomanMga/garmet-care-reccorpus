import Lottie from 'react-lottie'

import ClickAnimationJson from "../../assets/lottiejson/click.json"

export const  ClickAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ClickAnimationJson,
        renderSettings: {
            SVGAnimatedPreserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        
           <Lottie 
                options={defaultOptions} 
                //width={300} 
                height={200} 
            />
   
     )
}