import React from 'react'
import Masonry from 'react-masonry-css'
import "./Menu.css"

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

var items = [
  { id: 1, name: 'My First Item' },
  { id: 2, name: 'Another item' },
  { id: 3, name: 'Third Item' },
  { id: 4, name: 'Here is the Fourth' },
  { id: 5, name: 'High Five' }
];

// Convert array to JSX items
items = items.map(function (item) {
  return <div key={item.id}>{item.name}</div>
});
class Menu extends React.Component {

  render() {

    return (
      <div className="Menu">
        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {/* array of JSX items */}
        </Masonry>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <div><p>My Element 1</p>  <img src="https://picsum.photos/1200/500" alt="background" />
            <div>hfeuq hfiequfh iueqhfiuep qhfiuqe hfiuqehfiue qhfiu eqfhiqeu fhieq ufhiqe hfqeif</div>
          </div>
          <div><p>My Element 2</p>  <img src="https://picsum.photos/1200/500" alt="background" />
            <div>hfeuq hfiequfh iueqhfiuep qhfiuqe hfiuqehfiue qhfiu eqfhiqeu fhieq ufhiqe hfqeif</div>
          </div>
          <div><p>My Element 3</p>  <img src="https://picsum.photos/1200/500" alt="background" />
            <div>hfeuq hfiequfh iueqhfiuep qhfiuqe hfiuqehfiue qhfiu eqfhiqeu fhieq ufhiqe hfqeif</div>
          </div>
          <div><p>My Element 4</p>  <img src="https://picsum.photos/1200/500" alt="background" />
            <div>hfeuq hfiequfh iueqhfiuep qhfiuqe hfiuqehfiue qhfiu eqfhiqeu fhieq ufhiqe hfqeif</div>
          </div>
        </Masonry>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items}
        </Masonry>

      </div>
    )
  }
}


export default Menu