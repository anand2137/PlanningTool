const Groups = (props) => {
    return (
      <div className="group">
        <h3 className="groupname">{props.group}</h3>
        <div className="grouplist">{props.children}</div>
      </div>
    );
  };
  
  export default Groups;
