import Lottie from "lottie-react";

import ClickAnimationJson from "../../assets/lottiejson/click.json"

export const  ClickAnimation = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ClickAnimationJson,
        renderSettings: {
            SVGAnimatedPreserveAspectRatio: "xMidYMid slice",
            hideOnTransparent: true
        }
    }
    return (
        
           <Lottie style={{ height:190}}
                animationData={ClickAnimationJson}
            />
     )
}