import './index.css'

const SearchItem = props => {
  const {itemDetails, key, deleteUser} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className={`item-container ${key}`}>
      <div className="space-container">
        <p className="timeAccessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="domain-logo" />
        <p className="title">{title}</p>
        <p className="domainUrl">{domainUrl}</p>
      </div>
      <div>
        <button type="button" onClick={onDelete} testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchItem
