import './index.css'

const ImageItems = props => {
  const {imgDetails, selectedImg} = props
  const {thumbnailUrl, id} = imgDetails

  const onClickImg = () => {
    selectedImg(id)
  }

  return (
    <li className="list_item">
      <button type="button" onClick={onClickImg} className="img_btn">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}
export default ImageItems
