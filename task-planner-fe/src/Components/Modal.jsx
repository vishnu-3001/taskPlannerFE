export default function Modal({onClose}){
    return (
        <div onClick={onClose}>
          <div onClick={e => e.stopPropagation()}>
            <button onClick={onClose}>×</button>
          </div>
        </div>
      )
}