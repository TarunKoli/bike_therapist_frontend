import NavBar from "./NavBar";
import Footer from "./Footer";
import { BookingProvider } from "./BookingContext";
import { SideProvider } from "./adminComponents/SideContext";
const Layout = (props) => {
  return (
    <>
      <BookingProvider>
        <SideProvider>
          <NavBar />
          {props.children}
          <Footer />
        </SideProvider>
      </BookingProvider>
    </>
  );
};

export default Layout;
