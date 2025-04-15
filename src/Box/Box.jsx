const Box = (props) => {
    return (
      <div className="box">
        <p> Name: {props.name}</p>
        <p>Title: {props.title}</p>
        <p> Animal: {props.animal}</p>
        <p> Salary: {props.salary}</p>
        <p> ID: {props.id}</p>

      </div>
    );
  };
  export default Box;