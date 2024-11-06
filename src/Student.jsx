function Student(props) {
  return (
    <div>
      <h2>{props.student.name}</h2>
      <h2>{props.student.age}</h2>
      <h2>{props.student.marks}</h2>
    </div>
  );
}

export default Student;
