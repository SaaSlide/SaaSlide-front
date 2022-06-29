import './layoutWindow.scss'

export const LayoutWindow = ({ children, setCategory, title }) => {
  return (
    <div className="containerModify">
      <button className="close" onClick={() => setCategory('')}>
        <img src="/assets/images/close_big.png" alt="close" />
      </button>
      <h5>{title}</h5>
      {children}
    </div>
  )
}
