import './index.css'

const TabItems = props => {
  const {tabDetails, selectedTab, isActive} = props

  const {displayText, tabId} = tabDetails

  const activeTab = isActive ? 'active_tab' : ''

  const onClickTab = () => {
    selectedTab(tabId)
  }
  return (
    <li>
      <button type="button" className={`tab ${activeTab}`} onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItems
