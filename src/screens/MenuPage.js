import React from 'react'
import StandardMenu from '../components/StandardMenu'
import MenuData from '../data/menuData'

class MenuPage extends React.Component {
    render() {
        return (
            <div className="MenuPage">
                <StandardMenu content={MenuData.content} />

            </div>
        )
    }


}
export default MenuPage