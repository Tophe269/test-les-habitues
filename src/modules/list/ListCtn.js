import React, { Component }  from 'react'
import Loader from '../loader/Loader';
import List from './List';

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

    fetchList = () => {
        fetch('https://www.leshabitues.fr/testapi/shops')
        .then((response) => {

            console.log(response.json())
          })
    }


    render () {
        const { list } = this.state

        if (!list) return <Loader/>

        return (
            <List list={list}/>
        )
    }
}

export default ListCtn