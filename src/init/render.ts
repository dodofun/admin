// 复写 render 渲染之前，可以做权限校验
export function render(oldRender: any) {
  // 渲染
  oldRender();
}
