import React from "react"

class Image extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClick = (event) => {
        let txt
        let r = confirm("Use this picture?")
        if (r == true) {
            console.log(`Picture ${this.props.image.id} downloaded`)
        } else {
            console.log("Picture not downloaded")
        }
    }
    
    render() {
        return <img src={this.props.image.url} onClick={this.handleClick} />
    }
}

export default Image 