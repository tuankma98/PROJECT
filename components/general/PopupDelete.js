import React from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function PopupDelete(props) {
  const { popupDelete } = props;

  return (
    <div id="myModal" className={`modal fade ${popupDelete ? "show" : ""}`}>
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header flex-column">
            <div className="icon-box">
              <i className="material-icons">&#xE5CD;</i>
            </div>
            <h4 className="modal-title w-100">Bạn có chắc chắn muốn xóa ?</h4>
            <CloseIcon className="close" onClick={() => props.closePopup()} />
          </div>
          <div className="modal-body">
            <p>Bạn có chắc chắn muốn xóa bình luận này không ?</p>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => props.closePopup()}
            >
              Không
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.submitDelete()}
            >
              Có
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
