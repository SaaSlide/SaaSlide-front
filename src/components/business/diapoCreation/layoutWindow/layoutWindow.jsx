import './layoutWindow.scss'
import { useManageDiapo } from '../../../../utils/hooks'

export const LayoutWindow = ({
  children,
  title,
  onSave,
  onDelete,
  btnDelete = true,
}) => {
  const { setCategory } = useManageDiapo()

  return (
    <div className="containerModify">
      <button className="close" onClick={() => setCategory('')}>
        <img src="/assets/images/close_big.png" alt="close" />
      </button>
      <h5>{title}</h5>
      {children}
      <div className="btnContainer">
        <button className="btnSave" onClick={onSave}>
          Enregistrer
        </button>
        {btnDelete && (
          <button className="btnDelete" onClick={onDelete}>
            Supprimer
          </button>
        )}
      </div>
    </div>
  )
}
