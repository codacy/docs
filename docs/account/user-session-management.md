# User session management

To reduce the risk of unauthorized access to your account, Codacy sets automatic expiration timeouts for every session. When a session expires, Codacy invalidates the session both on client and server side.

## Idle session timeout

The **idle session timeout** on the Codacy app is **5 minutes**. On the absence of user's activity during this period, such as typing or using the mouse, Codacy logs the user out and invalidates the session.

## Absolute session timeout

The **absolute session timeout** on the Codacy app is **8 hours**. When an active session reaches this maximum period, Codacy logs the user out and invalidates the session.