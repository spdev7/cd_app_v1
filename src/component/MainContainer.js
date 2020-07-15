import React,{Component} from 'react'
import CardContainer from './CardContainer'
import {data} from './json'
class MainContainer extends Component {
    
    state = {
        displayedContent:[],
        totalPages:50,
        page:0,
        per:10,
        scrolling:false,
    }

    componentWillMount(){
        this.loadColleges();
        this.scrollListner = window.addEventListener('scroll',(e) => {
            this.handleScroll(e)
        })
    }

    handleScroll = (e) => {
        const {scrolling,totalPages,per} = this.state
        if(scrolling) return
        if(totalPages <= per) return
        const lastLi = document.querySelector('.main > div:last-child')
        const lastLiOffset = lastLi.offsetTop +  lastLi.clientHeight
        const pageOffset = window.pageYOffset + window.innerHeight
        var bottomOffset = 20
        if(pageOffset > lastLiOffset - bottomOffset)  this.loadMore()
    }
    loadColleges = () => {
        const { per,page,displayedContent} = this.state 
        this.setState({
            displayedContent:[...displayedContent,...data.colleges.slice(page,per)],
            scrolling: false,
        })
    }

    loadMore = () => {
        this.setState(
            prevState => ({
                scrolling: true,
                page:prevState.page+10,
                per:prevState.per+10
            }),this.loadColleges)
    }


    render(){
        const {displayedContent} = this.state
        return (
            <div className="main">
                {displayedContent.map(x => <CardContainer x={x} />)}
            </div>
        )
    }
}

export default MainContainer
