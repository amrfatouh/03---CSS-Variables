function updateVariables() {
    let dataSizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${dataSizing}`);
}

export default updateVariables;