import { rest } from "msw";
import { PhotoDataList } from "../data/types";

export const handlerSuccess = rest.get(
  `${process.env.REACT_APP_API_URL!}`,
  (_, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: "",
            alt_description: "",
            urls: {
              small: "",
            },
            tags: [{ title: "" }, { title: "" }, { title: "" }],
            user: {
              username: "",
              name: "",
            },
          },
        ],
      } satisfies PhotoDataList)
    )
);

export const handlerError = rest.get(
  `${process.env.REACT_APP_API_URL!}`,
  (_, res, ctx) => res(ctx.status(500), ctx.json(null))
);
