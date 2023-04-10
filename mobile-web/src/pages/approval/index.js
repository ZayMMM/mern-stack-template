import ApprovalList from "@/components/Approval/ApprovalList";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

const ApprovalPage = () => {
  return (
    <>
      <ApprovalList />
    </>
  );
};

export default ApprovalPage;
