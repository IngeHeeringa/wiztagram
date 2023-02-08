import { PhotosStructure } from "../../data/types";
import { LoadPhotosAction, PhotoActionType } from "../actions/types";

const photosReducer = (
  currentPhotos: PhotosStructure,
  action: LoadPhotosAction
) => {
  let newPhotos;

  switch (action.type) {
    case PhotoActionType.loadPhotos:
      newPhotos = [...action.payload];
      break;
    default:
      newPhotos = currentPhotos;
  }
  return newPhotos;
};

export default photosReducer;
