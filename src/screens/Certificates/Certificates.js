import CertificatesTable from "./CertificatesTable"
import Header from "../../components/Header/Header";

const Certificates = () => {
  return (
    <>
      <Header title="Certificates" searchBar buttonTitle="Add certificate"/>
      <CertificatesTable />
    </>
  )
}

export default Certificates