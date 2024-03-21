// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const value = denominationDetails

  const onClickUpdate = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-item">
      <button type="button" onClick={onClickUpdate} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
