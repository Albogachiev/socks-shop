const React = require('react');
const Layout = require('./Layout');

module.exports = function Favorites({ user, favoritesList }) {
  const favorites = favoritesList;
  return (
    <Layout user={user}>
      <script defer src="js/deleteFav.js" />
      <div className="mainCardDiv">
        {favorites.map((el) => (
          <div className="favoriteSock" key={el.id}>
            <h6 className="h6 favD">COLOR:</h6>
            <div>{el.color}</div>
            <hr />
            <h6 className="h6">PRINT:</h6>
            <div>{el.print}</div>
            <hr />
            <h6 className="h6">PATTERN:</h6>
            <div>{el.pattern}</div>
            <hr />
            <div className="lastDiv">
              <button type="button" id={el.id} className="deleteFav">DELETE</button>
              <div className="forA">
              <a href={el.link} className="list-group-item list-group-item-action list-group-item-primary">LINK</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};
