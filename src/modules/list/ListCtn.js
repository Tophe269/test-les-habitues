import React, { Component }  from 'react'
import Loader from '../loader/Loader'
import List from './List'
import { parseData } from './listHelpers'

class ListCtn extends Component {
    constructor (props) {
        super(props)
        this.state={}
    }

    componentDidMount () {
        if (!this.state.list) {
            this.fetchList()
        }
    }

    fetchList = async () => {
        const response = await fetch('https://www.leshabitues.fr/testapi/shops')
        const result = await response.json()
        const list = parseData( result )
        this.setState({ list })
    }


    render () {
        const { list } = this.state

        if (!list) return <Loader/>

        return (
            <List
                list={list}
                fetchList={this.fetchList}
            />
        )
    }
}

export default ListCtn