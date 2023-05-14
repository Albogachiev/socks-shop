const logout = async (req, res) => {
  try {
    if (req.session.user) {
      req.session.destroy(() => {
        res.clearCookie('Session');
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
};

module.exports = { logout };
