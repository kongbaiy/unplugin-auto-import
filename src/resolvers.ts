function toCamelCase(str: string) {
    return str.replace(/[-_]([a-z])/g, (match, p1) => p1.toUpperCase())
}

function kebabCase(key: string) {
    const result = key.replace(/([A-Z])/g, ' $1').trim()
    return result.split(' ').join('-').toLowerCase()
}

export function webComponentsVue3Resolvers() {
    const optionsResolved = (componentName: string) => {
        const fileName = kebabCase(componentName)
        const hasName = fileName.startsWith('zs-')

        if (hasName) {
            return {
                type: 'component',
                name: toCamelCase(fileName),
                from: `@lightsoft/web-components-vue3`,
                sideEffects: ['@lightsoft/web-components-vue3/dist/style.css'],
            }
        }
    }

    return optionsResolved
}
