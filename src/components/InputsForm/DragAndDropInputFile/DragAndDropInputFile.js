import './DragAndDropInputFile.css';
function DragAndDropInputFile(props) {
  return (
    <div className="container-input-file">
      <h3 className="input-file-head">Add your Image</h3>
      <div className="img-holder">
        <img src={props.imagePhoto.imagePhoto} alt="" id="img" className="img" />
      </div>
      <input
        onChange={props.onChange}
        accept={props.accept}
        name={props.name}
        id="input-file"
        type="file"
        checked={props.isChecked}
        value={props.value}
      />

      <div className="input-field-label">
        <label className="image-upload" htmlFor="input-file">
          Choose your image
        </label>
      </div>
    </div>
  );
}

export default DragAndDropInputFile;
