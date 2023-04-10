import Booking from "@/components/Booking/Booking";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

const BookingPage = (props) => {
  const {
    query: { lang },
  } = useRouter();

  console.log("Lang code " + lang);

  return (
    <>
      <Booking lang={lang} {...props} />
    </>
  );
};

export default BookingPage;
