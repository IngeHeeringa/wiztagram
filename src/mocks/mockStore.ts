import { PhotosStructure } from "../data/types";
import { PhotoActionType, PhotosAction } from "../store/actions/photos/types";

export const dispatch: React.Dispatch<PhotosAction> = jest.fn();
export const photos: PhotosStructure = [
  {
    id: "",
    description: "",
    alt: "alternative text",
    url: "",
    tags: [],
    photographer: "",
    username: "",
  },
  {
    id: "",
    description: "",
    alt: "",
    url: "",
    tags: [],
    photographer: "",
    username: "",
  },
  {
    id: "",
    description: "",
    alt: "",
    url: "",
    tags: [],
    photographer: "",
    username: "",
  },
];

export const mockStore = { dispatch, photos };
export const mockDispatch = jest.spyOn(mockStore, "dispatch");

export interface MockAction {
  type: PhotoActionType;
  payload: PhotosStructure;
}

export const mockAction: MockAction = {
  type: PhotoActionType.loadPhotos,
  payload: [
    {
      id: "",
      description: "",
      alt: "",
      photographer: "",
      username: "",
      tags: [{ title: "" }, { title: "" }, { title: "" }].map(
        (tag) => `#${tag.title}`
      ),
      url: "",
    },
  ],
};
