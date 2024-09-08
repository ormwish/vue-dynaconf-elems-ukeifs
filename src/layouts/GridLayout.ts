export const GridLayout = {
    render(children: any[], columns: number = 2) {
      return `
        <div style="display: grid; grid-template-columns: repeat(\${columns}, 1fr);">
          \${children.join('')}
        </div>
      `;
    }
  };  