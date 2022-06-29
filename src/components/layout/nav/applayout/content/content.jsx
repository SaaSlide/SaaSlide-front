import './content.scss'

export const Content = ({ components, category }) => {
  return (
    <div className="content">
      <div>{category}</div>
      <div>{components}</div>
    </div>
  )
}
