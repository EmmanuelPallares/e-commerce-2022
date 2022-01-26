import React from "react";
import "./preview-collection.scss";
import Collentionitem from "../../components/collection-item/collection-item";

const PreviewCollection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((id, ...otherItemsProps) => (
          <Collentionitem key={id} {...otherItemsProps} />
        ))}
    </div>
  </div>
);

export default PreviewCollection;
