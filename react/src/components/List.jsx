const List = (props) => {
  const { tech, name, food } = props;
  return <li style={{ listStyle: 'none' }}>{tech}</li>;
};

export default List;
