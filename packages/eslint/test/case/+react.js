import { useCallback, useState } from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';

export function Counter() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => setCount(count + 1), []); // eslint-plugin-react-hooks が機能している

  return _jsx('button', { onClick, children: count }); // eslint-plugin-react が機能している
}
