import passport from 'passport';

export const googleAuth = passport.authenticate("google", {
    scope: ["profile", "email"],
  });

  export const googleCallback = passport.authenticate("google", {
    session: false,
  });
  