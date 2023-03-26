import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../../GlobalStyles";
import UiContextProvider from "../../store/contexts/ui/UiContextProvider";

import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the 'Wiztagram' logo in the header", () => {
      const expectedAltText = /Wiztagram logo/i;

      render(
        <UiContextProvider>
          <GlobalStyles />
          <Layout />
        </UiContextProvider>,
        { wrapper: BrowserRouter }
      );

      const logo = screen.getByRole("img", { name: expectedAltText });

      expect(logo).toBeInTheDocument();
    });
  });
});
