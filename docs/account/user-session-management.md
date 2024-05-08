# User session management

To reduce the risk of unauthorized access to your account, Codacy sets automatic expiration timeouts for every session. When a session expires, Codacy invalidates the session both on the client and server side, and creates a new session.

If your Git provider session is still valid by the time Codacy creates a new session, you will be automatically logged in again. In some specific scenarios, you might need to select your Git provider before logging in again.

## Idle session timeout

The **idle session timeout** on the Codacy app is **30 minutes**. In the absence of user activity during this period, such as typing or using the mouse, Codacy logs out the user and invalidates the session.

## Absolute session timeout

The **absolute session timeout** on the Codacy app is **8 hours**. When an active session reaches this maximum period, Codacy logs out the user and invalidates the session.
