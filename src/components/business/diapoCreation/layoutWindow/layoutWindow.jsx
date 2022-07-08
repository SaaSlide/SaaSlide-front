import './layoutWindow.scss'
import { useManageDiapo } from '../../../../utils/hooks'

export const LayoutWindow = ({
  children,
  title,
  onSave,
  onDelete,
  btnDelete = true,
  parameters = false,
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
          {parameters ? 'Enregistrer' : 'Ajouter à la slide'}
        </button>
        {btnDelete && (
          <button className="btnDelete" onClick={onDelete}>
            Supprimer de la slide
          </button>
        )}
      </div>
    </div>
  )
}
