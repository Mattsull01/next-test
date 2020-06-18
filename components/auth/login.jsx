import React from "react";
import { useSession, signin, signout } from "next-auth/client";

export default () => {
  const [session, loading] = useSession();

  return (
    <p>
      {!session && (
        <>
          <h2>Sign In!</h2>
          <button onClick={signin}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={signout}>Sign out</button>
        </>
      )}
    </p>
  );
};
