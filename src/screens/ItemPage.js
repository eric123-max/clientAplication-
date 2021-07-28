import React from 'react'
import Item from '../components/itemComponents/Item'
import Ingredients from '../components/itemComponents/Ingredients'
import IngredientsData from '../data/ingredients'

class ItemPage extends React.Component {
    render() {
        return (
            <div className="ItemPage">
                <Item />
                <Ingredients paragraphs={IngredientsData.paragraphs} />                

            </div>
        )
    }


}
export default ItemPage