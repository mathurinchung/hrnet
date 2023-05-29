import PropTypes from 'prop-types';

/**
 * The Main component serves as the container for the main content of a webpage.
 * It accepts an id for the HTML element and expects children components or elements to be passed as props.
 *
 * @component
 *
 * @param { String } [id] - The unique identifier of the main element. This is optional.
 * @param { React.Node } children - The children elements to be rendered inside the Main component. This is required.
 * @returns { React.Element } The Main component.
 */
function Main({ id, children }) {
  return (
    <main id={ id } className="Main">
      { children }
    </main>
  );
}

Main.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Main;
