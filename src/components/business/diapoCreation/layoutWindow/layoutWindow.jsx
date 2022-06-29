import './layoutWindow.scss'

export const LayoutWindow = ({ children, setCategory }) => {
  return (
    <div className="container">
      <button className="close" onClick={() => setCategory('')}>
        <img src="/assets/close_big.png" alt="close" />
      </button>
      {children}
    </div>
  )
}
