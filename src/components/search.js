import React from "react"
import regeneratorRuntime from "regenerator-runtime"

class SearchTool extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: '' , images: ''}
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    handleSubmit = async (event) => {
        event.preventDefault()

        let url = '/api/imagesearch?keyword=cat'

        const results = await fetch(url)
        const parsed = await results.json()
        this.setState({images: parsed})
    }

    render() {
        return (
            <container>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search
          <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Search" />
                </form>
            </container>
        )
    }
}

export default SearchTool