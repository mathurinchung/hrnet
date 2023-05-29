import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

/**
 * The Header component represents a common header for a webpage or a section of a webpage.
 * It contains a title and a Link component, which directs to a specific path.
 *
 * @component
 *
 * @param { String } title - The title to be displayed in the header.
 * @param { Array.<string> } link - An array with two strings: the path to link to, and the content to display for the link.
 * @returns { React.Element } The Header component.
 */
function Header({ title, link: [ to, content ]  }) {
  return (
    <header id="Header">
      <h1>{ title }</h1>

      <Link className="headerLink" to={ to }>{ content }</Link>
    </header>
  );
}

Header.propTypes= {
  title: PropTypes.string.isRequired,
  link: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Header;
