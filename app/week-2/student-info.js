import Link from 'next/link';
const StudentInformation = () => {
  const name = "Moiz Inayat";
  const Github_link = <Link href="https://github.com/MoizInayat/cprg306-assignments.git">Github</Link>;
  return(
      <div>
          <h1>Student Info</h1>
          <p>Name: {name}</p>
          <p>Github Link: {Github_link}</p>
      </div>
  )
}
export default StudentInformation;