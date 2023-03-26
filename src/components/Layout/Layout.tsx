import { useContext } from "react";
import { Outlet } from "react-router-dom";
import UiContext from "../../store/contexts/ui/UiContext";
import Loading from "../Loading/Loading";
import MainNavigation from "../MainNavigation/MainNavigation";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { isLoading } = useContext(UiContext);

  return (
    <LayoutStyled>
      <header className="main-header">
        <img
          src="./images/logo.svg"
          alt="Wiztagram logo"
          width="300"
          height="100"
        />
        <MainNavigation />
      </header>
      <main>
        {isLoading && <Loading />}
        <Outlet />
      </main>
    </LayoutStyled>
  );
};

export default Layout;
