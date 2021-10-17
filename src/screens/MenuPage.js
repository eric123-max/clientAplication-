import React from 'react'
import Footer from '../components/Footer'
import MenuList from '../components/MenuList'
import Footer from '../components/Footer'

class MenuPage extends React.Component {
    render() {
        return (
            <div className="MenuPage">
                <div className = "Orange">


                    <MenuList />
                    {/* <StandardMenu /> */}
                    
                </div>
                <Footer />
            </div>
        )
    }


}
export default MenuPage
