/**
 * @param {string} accessToken
 * @param {string} refreshToken
 */
function sendData(accessToken, refreshToken) {
  console.log(accessToken);
  console.log(refreshToken);
  window.addEventListener('flutterInAppWebViewPlatformReady', function (_) {
    // Send token and refresh token to Native App
    window.flutter_inappwebview.callHandler('sendMessage', {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  });
}
