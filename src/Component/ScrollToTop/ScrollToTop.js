import React, {Component} from 'react';
import './ScrollToTop.css';
import { FaArrowCircleUp} from "react-icons/fa";


class ScrollToTop extends Component {
    state ={
        intervalid: 0,
        theposition:false,
};
componentDidMount () {
    document.addEventListener ("scroll", ()=>{
        if (window.scrollY > 350 ) {
            this.setState( {theposition:true});            
        }else {
            this.setState({theposition:false});
        }
    });
    window.scrollTo(0,0);
}
onScrollStep = () => {
    if (window.pageYOffset === 0) {
        clearInterval (this.state.intervalid);
    }
    window.scroll (0, window.pageYOffset - this.props.scrollStepInPx)
}
scrollToTop = () => {
    let intervalid = setInterval(this.onScrollStep,this.props.delayInMs);
    this.setState({intervalid:intervalid});
}
renderScrollToTopIcon = () => {
    if (this.state.theposition) {
        return (
            <>
            <div className='move-up'>
                <span >
                 <FaArrowCircleUp color='coral' size="2.5em"  onClick={this.scrollToTop}/>
                </span>
            </div>
            </>
        );
    }
};
render() {
    return <>{this.renderScrollToTopIcon()}</>;
}

}

export default ScrollToTop;

