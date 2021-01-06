// src/access.ts
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
  // 根据当前用户信息，获取权限清单
  return {
    canAdmin: currentUser && currentUser.access === 'admin',
    demo: {
      read: true,
      add: false,
      update: true,
      delete: false,
    },
  };
}
