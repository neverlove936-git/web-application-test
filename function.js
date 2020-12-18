/**
 * @param {string} accessToken
 * @param {string} refreshToken
 */
function sendData(accessToken, refreshToken) {
  alert("Bazinga!!!  you called letMeCallYou");
  // In order to call window.flutter_inappwebview.callHandler(handlerName <String>, ...args)
  // properly, you need to wait and listen the JavaScript event flutterInAppWebViewPlatformReady.
  // This event will be dispatched as soon as the platform (Android or iOS) is ready to handle the callHandler method.
  window.addEventListener('flutterInAppWebViewPlatformReady', function (_) {
    // Send token and refresh token to Native App
    window.flutter_inappwebview.callHandler('sendMessageToApp', {
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  });
}
