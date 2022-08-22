import { useEffect } from 'react';

import classname from '../utils/classname';

function Toast({ type, message, onTimeout }) {
  useEffect(() => {
    const timeoutId = setTimeout(
      function () {
        onTimeout();
      },
      [3000]
    );
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={classname(
        'toast',
        type === 'error' && 'toast--error',
        type === 'success' && 'toast--success'
      )}
    >
      {message}
    </div>
  );
}

export default Toast;
