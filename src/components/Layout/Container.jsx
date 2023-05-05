import PropTypes from 'prop-types';

function Container({ id, children }) {
  return (
    <div id={ id } className="container">
      { children }
    </div>
  );
}

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Container;
