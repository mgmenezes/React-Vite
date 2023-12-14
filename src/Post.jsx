import PropTypes from "prop-types";

Post.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string,
};

Post.defaultProps = {
  author: "Moises menezes",
  content:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, ipsa quis? Illum laudantium ipsam neque veniam distinctio sequi sint obcaecati sunt, numquam, magnam vitae odio suscipit velit laboriosam explicabo unde?",
};

export function Post(props) {
  return (
    <div>
      <h1>{props.author}</h1>

      <p>{props.content}</p>
    </div>
  );
}
