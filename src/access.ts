// src/access.ts
export default function access(initialState: { currentUser?: API.CurrentUser | undefined }) {
  const { currentUser } = initialState || {};
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
