const createElement = (spec, config) => {
    let newLine = document.createElement("p");

    let newText = document.createTextNode(
        genPendLine(spec.line, spec.res ? spec.res : '')
    );
    newLine.appendChild(newText);
    if (!spec.res) {
        for (let s in config['null']) {
            newLine.style[s] = config['null'][s];
        }
    }

    return newLine;
}
