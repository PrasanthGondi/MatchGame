import {Component} from 'react'

import '../App.css'

class Displayer extends Component {
  state = {selectedTab: 'FRUIT'}

  changeSelectedTab = e => {
    this.setState({selectedTab: e.target.id})
  }

  render() {
    const {selectedTab} = this.state

    const {tabsList, imagesList, lowerImageSelect} = this.props

    return (
      <>
        <ul>
          {tabsList.map(tab => (
            <li key={tab.tabId}>
              <button
                id={tab.tabId}
                style={{marginRight: '10px'}}
                onClick={this.changeSelectedTab}
                value={tab.tabId}
                type="button"
              >
                {tab.displayText}
              </button>
            </li>
          ))}
        </ul>

        <ul>
          {imagesList

            .filter(image => image.category === selectedTab)

            .map(every => (
              <li id={every.category} key={every.imageUrl}>
                <img
                  src={every.imageUrl}
                  alt={every.category}
                  className="listImages"
                  onClick={lowerImageSelect}
                  id={every.id}
                />
              </li>
            ))}
        </ul>
      </>
    )
  }
}

export default Displayer
