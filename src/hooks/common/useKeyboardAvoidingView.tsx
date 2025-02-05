import { useEffect } from 'react';

function useKeyboardAvoidingView() {
  useEffect(() => {
    if (window) {
      let prevVisualViewport = window.visualViewport?.height;
      const handleVisualViewportResize = () => {
        const currentVisualViewport = Number(window.visualViewport?.height);
        if (
          prevVisualViewport &&
          prevVisualViewport - 30 > currentVisualViewport
        ) {
          const scrollHeight = Number(
            window.document.scrollingElement?.scrollHeight
          );
          const scrollTop =
            scrollHeight - Number(window.visualViewport?.height);
          window.scrollTo(0, scrollTop); // 입력창이 키보드에 가려지지 않도록 조절
        }
        prevVisualViewport = Number(window.visualViewport?.height);
      };

      if (window.visualViewport) {
        window.visualViewport.onresize = handleVisualViewportResize;
      }
    }
  }, []);
}

export { useKeyboardAvoidingView };
